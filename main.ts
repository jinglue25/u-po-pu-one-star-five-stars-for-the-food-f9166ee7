import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const sourceUrl = import.meta.url;
const line = "One star for Earth: traffic was awful, the locals probed US — but the tacos? The tacos almost made the invasion unnecessary. Almost.";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputFile = `${outputDir}/entry.txt`;

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, `${line}\n`, "utf8");

const characterCount = readFileSync(outputFile, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(
    `Competition gate failed in ${sourceUrl}: ${outputFile} has ${characterCount} trimmed characters; expected 1–200.`,
  );
}
