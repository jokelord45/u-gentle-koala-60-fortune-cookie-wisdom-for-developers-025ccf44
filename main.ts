// Fortune Cookie Wisdom for Developers — make.fun entry.
// Writes one original fortune-cookie line for a software developer to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Node 22 stdlib only. Deterministic: same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// FINAL (v2, revised): the draft ("Your future self will thank you for the
// comment you write today.") was rejected on critique — it is generic
// productivity advice, a stock "write comments" line with no fresh turn, and
// it reads like a poster slogan rather than a fortune. The revision keeps
// one short balanced sentence that lands in a single breath, states a truth
// every developer knows (a skipped test comes back as a production incident),
// and turns it with a fresh personification: the skipped test introduces
// itself, tonight, in production.
const ENTRY =
  "The test you skip today will introduce itself in production tonight.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), `${ENTRY}\n`, "utf8");
