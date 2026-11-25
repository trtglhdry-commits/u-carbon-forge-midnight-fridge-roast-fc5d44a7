// Midnight Fridge Roast — u-carbon-forge-midnight-fridge-roast-fc5d44a7
// One original roast of a smart fridge that refuses to open after midnight,
// written to $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22, stdlib only.
// Deterministic: no randomness, no network, no clock.
// Gate (competition.yaml / RULES.txt): entry.txt must be UTF-8 text of 1-200
// characters, not only white space, a single line.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge locks at midnight and makes me book an appointment with my own leftovers.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read-back verification: the written file must be exactly the chosen line,
// a single line of 1-200 characters, so the sealed gate passes. The joke
// targets the fridge's own petty rule — the midnight lockout — and the
// punchline turns a midnight snack into a bureaucratic appointment.
const written = readFileSync(outPath, "utf8");
if (written !== LINE || written.length < 1 || written.length > 200) {
  throw new Error("entry.txt failed the gate check");
}
