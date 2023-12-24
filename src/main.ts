import prompts from "prompts";
import { projectInitialization } from "./scripts/project-initialization";
import { shellScriptCodeQualityChecker } from "./scripts/shell-script-code-quality-checker";
import { textTransformer } from "./scripts/text-transformer";

const scripts = {
  projectInitialization,
  shellScriptCodeQualityChecker,
  textTransformer,
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
