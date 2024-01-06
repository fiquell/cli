import prompts from "prompts";
import {
  camelCase,
  kebabCase,
  lowerCase,
  snakeCase,
  titleCase,
  upperCase,
} from "string-ts";
import { exec } from "../utils/exec";

export const textTransformer = {
  title: "Text Transformer",
  run: async () => {
    const responseInput = await prompts({
      type: "text",
      name: "input",
      message: "Enter the text you want to transform",
    });

    const responseOptions = await prompts({
      type: "select",
      name: "options",
      message: "Choose a transformation",
      choices: [
        { title: "Transform to Camel Case", value: "camelcase" },
        { title: "Transform to Kebab Case", value: "kebabcase" },
        { title: "Transform to Lower Case", value: "lowercase" },
        { title: "Transform to Snake Case", value: "snakecase" },
        { title: "Transform to Title Case", value: "titlecase" },
        { title: "Transform to Upper Case", value: "uppercase" },
      ],
    });

    let transformedText: string;

    switch (responseOptions.options) {
      case "camelcase":
        transformedText = camelCase(responseInput.input);
        break;
      case "kebabcase":
        transformedText = kebabCase(responseInput.input);
        break;
      case "lowercase":
        transformedText = lowerCase(responseInput.input);
        break;
      case "snakecase":
        transformedText = snakeCase(responseInput.input);
        break;
      case "titlecase":
        transformedText = titleCase(responseInput.input);
        break;
      case "uppercase":
        transformedText = upperCase(responseInput.input);
        break;
      default:
        transformedText = responseInput.input;
        break;
    }

    const responseCopy = await prompts({
      type: "toggle",
      name: "copy",
      message: "Would you like to copy the result?",
      initial: true,
      active: "yes",
      inactive: "no",
    });

    if (responseCopy.copy) {
      exec(`echo ${transformedText} | xclip -selection clipboard`);
    }

    console.log(transformedText);
  },
};
