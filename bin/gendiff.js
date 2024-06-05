#!/usr/bin/env node
import { Command } from 'commander';
import { parseData } from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const data = parseData(filepath1);
    const data2 = parseData(filepath2);
    console.log(data, data2);
  });

program.parse();
