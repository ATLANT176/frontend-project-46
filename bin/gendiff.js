#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();

program
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('-V, --version')
    .option('-f, --format [type]', 'output format')
;

program.parse()

