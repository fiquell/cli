import { exec } from "~/utils/exec";

export const copy = () => {
  exec("xclip -selection clipboard");
};
