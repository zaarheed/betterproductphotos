import fs from "fs";
import path from "path";

export const SPEAKERS_PATH = path.join(process.cwd(), "_speakers");

export const speakersFilePaths = fs
  .readdirSync(SPEAKERS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
  .map(p => path.join(SPEAKERS_PATH, `${p}`));