#! /usr/bin/env node

import cli from './meow/meow.js';
import setup from './setup/index.js';

const { preload } = cli.flags;

if (preload) {
  setup();
} else {
}


