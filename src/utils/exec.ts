import { execSync } from "child_process"

export const exec = (command: string) => {
    return execSync(command, {
        stdio: "inherit",
    })
}
