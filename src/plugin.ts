import { Plugin, Compiler, compilation as wc } from 'webpack';
import { fork, ChildProcess } from 'child_process';

const PLUGIN_NAME = 'EntryRunnerWebpackPlugin';

export class EntryRunnerWebpackPlugin implements Plugin {
  private isWatching: boolean;
  private rootDir: string;
  private assetName: string;
  private child?: ChildProcess;

  public constructor(rootDir: string, assetName?: string) {
    this.isWatching = false;
    this.rootDir = rootDir;
    this.assetName = assetName || '';
  }

  public apply(compiler: Compiler): void {
    if (!this.assetName)
      this.assetName = compiler.options.output!.filename as string;

    compiler.hooks.afterEmit.tap(PLUGIN_NAME, this.onAfterEmit.bind(this));
    compiler.hooks.watchRun.tap(PLUGIN_NAME, this.onWatchRun.bind(this));
    compiler.hooks.watchClose.tap(PLUGIN_NAME, this.onWatchClose.bind(this));
  }

  private onAfterEmit(compilation: wc.Compilation) {
    if (!this.isWatching)
      return;

    if (!this.child || this.child!.killed || !this.child!.connected) {
      const assets = compilation.assets;
      const name = this.assetName || Object.keys(assets)[0];
      this.child = fork(assets[name].existsAt, undefined, { cwd: this.rootDir });
    }
  }

  private onWatchRun() {
    this.isWatching = true;
  }

  private onWatchClose() {
    this.isWatching = false;
    if (this.child || !this.child!.killed || this.child!.connected)
      this.child!.kill();
  }
}
