import fs from "fs";
import prompts from "prompts";
import { exec } from "../utils/exec";

export const shellScriptCodeQualityChecker = {
  title: "Shell Script Code Quality Checker",
  run: async () => {
    const { selected }: { selected: string[] } = await prompts({
      type: "multiselect",
      name: "selected",
      message: "Pick files for code quality check",
      choices: fs
        .readdirSync(process.cwd())
        .filter((file) => fs.statSync(file).isFile())
        .map((file) => ({
          title: file,
          value: file,
        })),
    });

    selected.map((file) => {
      exec(`shellharden --replace ${file}`);
      exec(`shfmt --write --indent 2 ${file}`);
      exec(`shellcheck ${file}`);
    });
  },
};
