import { exec } from "~/utils/exec"

export const shcheck = async (files: string[]) => {
    const commands = files.map((file) => [
        `shellharden --replace ${file}`,
        `shfmt --write --indent 2 ${file}`,
        `shellcheck -x ${file}`,
    ])

    await Promise.all(
        commands.flat().map((command) => {
            exec(command)
        }),
    )
}
