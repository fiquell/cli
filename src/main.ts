import prompts from "prompts"
import { projectInitialization } from "~/scripts/project-initialization"
import { scalingFactor } from "~/scripts/scaling-factor"
import { textTransformer } from "~/scripts/text-transformer"

const scripts = {
    projectInitialization,
    scalingFactor,
    textTransformer,
} satisfies Record<
    string,
    {
        title: string
        run: () => Promise<void>
    }
>

export const main = async () => {
    const response = await prompts({
        type: "autocomplete",
        name: "script",
        message: "Which script would you like to run?",
        choices: Object.entries(scripts).map(([value, script]) => ({
            title: script.title,
            value,
        })),
    })

    if (!response.script) {
        process.exit(0)
    }

    await scripts[response.script as keyof typeof scripts].run()
}
