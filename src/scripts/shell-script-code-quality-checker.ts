import fs from "fs";
import prompts from "prompts";
import { exec } from "../utils/exec";

export const shellScriptCodeQualityChecker = {
  title: "Shell Script Code Quality Checker",
  run: async () => {
    const { selected } = await prompts({
      type: "multiselect",
      name: "selected",
      message: "Pick files for code quality check",
      choices: fs
        .readdirSync(process.cwd())
        .filter((file) => fs.statSync(file).isFile())
        .map((file) => ({
          value: file,
          title: file,
        })),
    });

    if (selected) {
      selected.map((file: string) => {
        exec(`shellharden --replace ${file}`);
        exec(`shfmt --write --indent 2 ${file}`);
        exec(`shellcheck ${file}`);
      });
    } else {
      process.exit(0);
    }
  },
};
