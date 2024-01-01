import prompts from "prompts";
import { copy } from "../commands/copy";

export const textTransformer = {
  title: "Text Transformer",
  run: async () => {
    const { inputText }: { inputText: string } = await prompts({
      type: "text",
      name: "inputText",
      message: "Enter the text you want to transform",
    });

    const { transformationType }: { transformationType: string } =
      await prompts({
        type: "select",
        name: "transformationType",
        message: "Choose a transformation",
        choices: [
          { title: "Transform to Kebab Case", value: "kebabcase" },
          { title: "Transform to Lower Case", value: "lowercase" },
          { title: "Transform to Snake Case", value: "snakecase" },
          { title: "Transform to Title Case", value: "titlecase" },
          { title: "Transform to Upper Case", value: "uppercase" },
        ],
      });

    let transformedText: string;

    switch (transformationType) {
      case "kebabcase":
        transformedText = inputText
          .split(" ")
          .map((word) => word.toLowerCase())
          .join("-");
        break;
      case "lowercase":
        transformedText = inputText.toLowerCase();
        break;
      case "snakecase":
        transformedText = inputText
          .split(" ")
          .map((word) => word.toLowerCase())
          .join("_");
        break;
      case "titlecase":
        transformedText = inputText
          .split(" ")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(" ");
        break;
      case "uppercase":
        transformedText = inputText.toUpperCase();
        break;
      default:
        transformedText = inputText;
        break;
    }

    const { shouldCopy }: { shouldCopy: boolean } = await prompts({
      type: "toggle",
      name: "shouldCopy",
      message: "Would you like to copy the result?",
      initial: true,
      active: "yes",
      inactive: "no",
    });

    if (shouldCopy) {
      copy(transformedText);
      console.log(transformedText);
    } else {
      console.log(transformedText);
    }
  },
};
