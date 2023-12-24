#!/usr/bin/env node

import { Command } from "commander";
import { main } from "./main";

const program = new Command();

program.action(main);
program.parse(process.argv);
