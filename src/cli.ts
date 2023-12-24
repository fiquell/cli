#!/usr/bin/env node

import { Command } from "commander";
import { copy } from "./commands/copy";
import { uuid } from "./commands/uuid";
import { main } from "./main";

const program = new Command();

program.action(main);

program.command("copy").description("copy content to clipboard").action(copy);
program.command("uuid").description("generate random uuid").action(uuid);

program.parse(process.argv);
