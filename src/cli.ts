#!/usr/bin/env node

import { Command } from "commander";
import { copy } from "~/commands/copy";
import { main } from "~/main";

const program = new Command();

program.action(main);

program.command("copy").description("copy content to clipboard").action(copy);

program.parse(process.argv);
