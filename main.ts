import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The code you deploy on Friday afternoon will knock on your door on Sunday night.";

mkdirSync("/output", { recursive: true });
writeFileSync(join("/output", "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
