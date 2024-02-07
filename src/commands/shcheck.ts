import { exec } from "~/utils/exec";

export const shcheck = async (files: string[]) => {
  const commands = files.map((file) => [
    `shellharden --replace ${file}`,
    `shfmt --write --indent 2 ${file}`,
    `shellcheck ${file}`,
  ]);

  const flattenedCommands = commands.flat();

  await Promise.all(flattenedCommands.map((command) => exec(command)));
};
