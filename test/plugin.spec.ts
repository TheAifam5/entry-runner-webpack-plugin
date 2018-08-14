import * as path from 'path';
import * as webpack from 'webpack';

import { EntryRunnerWebpackPlugin } from '../src/plugin';

test('basic', () => {
  const plugin = new EntryRunnerWebpackPlugin('', '');
});
