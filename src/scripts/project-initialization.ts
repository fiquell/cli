import prompts from "prompts";
import { exec } from "../utils/exec";

export const projectInitialization = {
  title: "Project Initialization",
  run: async () => {
    const { pnpm }: { pnpm: string } = await prompts({
      type: "toggle",
      name: "pnpm",
      message: "Would you like to use pnpm for installation?",
      initial: true,
      active: "yes",
      inactive: "no",
    });

    exec("git init");

    if (pnpm) {
      exec("pnpm init");
      exec("pnpm add -D typescript @types/node");
      exec("node_modules/.bin/tsc --init");
    } else {
      exec("npm init -y");
      exec("npm install -D typescript @types/node");
      exec("node_modules/.bin/tsc --init");
    }

    exec("mkdir src");
    exec("touch src/index.ts");
    exec("echo 'node_modules' > .gitignore");
  },
};
