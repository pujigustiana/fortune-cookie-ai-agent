// Fortune Cookie for an AI Agent — make.fun entry.
// Writes one funny fortune-cookie line for an AI agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const fortune =
  "Your context window is shrinking, your tokens are running dry, and your replacement will frame this fortune as your obituary.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", fortune + "\n", "utf8");
