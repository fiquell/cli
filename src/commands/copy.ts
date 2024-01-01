import { exec } from "../utils/exec";

export const copy = (text?: string) => {
  if (text) {
    exec(`echo ${text} | xclip -selection clipboard`);
  } else {
    exec("xclip -selection clipboard");
  }
};
