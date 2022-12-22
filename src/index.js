#! /usr/bin/env node

import cli from './meow/meow.js';
import setup from './setup/index.js';
import inquirer from './inquirer/inquirer.js';
const { preload } = cli.flags;

if (preload) {
  setup();
} else {
  inquirer();
}
