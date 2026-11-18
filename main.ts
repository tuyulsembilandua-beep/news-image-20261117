// news-image-20261117 entry (Node 22, standard library only).
//
// The entry is the image beside this file: a 1024x1024 front page that sums
// up Tuesday 17 November 2026's world news in four photo panels with captions
// (Kerch Bridge struck, Trump in Manila for the ASEAN summit, two tankers hit
// mines in the Strait of Hormuz, a ULA Vulcan rocket lost with 40 Amazon
// satellites), plus an "Also today" ticker. The program's only job is to
// place that image at /output/entry.png, byte for byte, so the judge sees
// exactly the bytes composed for the day.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const target = join(outDir, "entry.png");

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);
