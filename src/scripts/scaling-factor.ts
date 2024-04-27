import prompts from "prompts"
import { exec } from "~/utils/exec"

export const scalingFactor = {
    title: "Scaling Factor",
    run: async () => {
        const response = await prompts({
            type: "text",
            name: "scaling",
            message: "Enter a text scaling factor (default: 1.00)"
        })

        exec(
            `gsettings set org.gnome.desktop.interface text-scaling-factor ${response.scaling || "1.00"}`
        )
    }
}
