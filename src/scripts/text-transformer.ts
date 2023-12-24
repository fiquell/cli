import prompts from "prompts";

export const textTransformer = {
  title: "Text Transformer",
  run: async () => {
    const { originalText }: { originalText: string } = await prompts({
      type: "text",
      name: "originalText",
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
        transformedText = originalText
          .split(" ")
          .map((word) => word.toLowerCase())
          .join("-");
        break;
      case "lowercase":
        transformedText = originalText.toLowerCase();
        break;
      case "snakecase":
        transformedText = originalText
          .split(" ")
          .map((word) => word.toLowerCase())
          .join("_");
        break;
      case "titlecase":
        transformedText = originalText
          .split(" ")
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
          )
          .join(" ");
        break;
      case "uppercase":
        transformedText = originalText.toUpperCase();
        break;
      default:
        transformedText = originalText;
        break;
    }

    console.log(transformedText);
  },
};
