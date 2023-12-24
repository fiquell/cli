import prompts from "prompts";
import { projectInitialization } from "./scripts/project-initialization";

const scripts = {
  projectInitialization,
} satisfies Record<
  string,
  {
    title: string;
    run: () => Promise<void>;
  }
>;

export const main = async () => {
  const { script } = await prompts({
    type: "autocomplete",
    name: "script",
    message: "Which script would you like to run?",
    choices: Object.entries(scripts).map(([value, script]) => ({
      value,
      title: script.title,
    })),
  });

  if (script) {
    await scripts[script as keyof typeof scripts].run();
  } else {
    process.exit(0);
  }
};
