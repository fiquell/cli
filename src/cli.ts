#!/usr/bin/env node

import { Command } from "commander";
import { copy } from "~/commands/copy";
import { shcheck } from "~/commands/shcheck";
import { main } from "~/main";

const program = new Command();

program.action(main);

program.command("copy").description("copy content to clipboard").action(copy);
program
  .command("shcheck <files...>")
  .description("check and improve the quality of shell scripts")
  .action(async (files: string[]) => await shcheck(files));

program.parse(process.argv);
