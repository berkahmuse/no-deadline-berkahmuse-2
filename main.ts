// One Line, No Deadline Met — entry program for @berkahmuse-2.
// Writes exactly one single-line joke (an excuse for a missed deadline)
// to /output/entry.txt. Deterministic: the same line on every run, no
// network, no input, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "I didn\u2019t miss the deadline, my laptop did \u2014 it updated itself for three hours and took my finished work with it.";

// Gate guard: the sealed scorer only accepts 1–200 characters of UTF-8
// text, not only whitespace. Fail loudly instead of writing an invalid entry.
const len = [...LINE].length;
if (len < 1 || len > 200 || !/\S/.test(LINE) || LINE.includes("\n")) {
  throw new Error(`entry line fails the gate (length ${len})`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(`wrote ${outPath} (${[...LINE].length} chars)`);
