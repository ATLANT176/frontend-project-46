#!/usr/bin/env node
import { Command } from "commander";
import parseData from "../parsing.js";
const program = new Command();

program
    .arguments('<filepath1> <filepath2>')
    .description('Compares two configuration files and shows a difference.')
    .version('-V, --version')
    .option('-f, --format [type]', 'output format')
    .action((filepath1, filepath2) => {
        parseData(filepath1);
        parseData(filepath2);
        }
    )
;

program.parse()
