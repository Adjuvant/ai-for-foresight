// Regression verification: FIND-1 (wiki_fix dead-related removal) + FIND-2
// (extractProjectSectionSlugs) against the v0.2.0-rc.5 shipped code.
// Replicates the shipped logic verbatim (no imports) and tests live fixture data.

import fs from "node:fs";
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const wikilinkToPath = (wl) => {
  const m = wl.match(/\[\[([^\]|#]+?)(?:\|[^\]]*)?\]\]/);
  return m ? m[1].trim() : null;
};

// --- FIND-1: removal logic as shipped in rc.5 extensions/wiki-curator.ts ---
function removeDeadRelated(content, wikilink) {
  const innerPath = wikilinkToPath(wikilink);
  if (!innerPath) return { changed: false, content, reason: "no inner path" };
  let fmEnd = content.indexOf("\n---", 3);
  const fmTail = fmEnd === -1 ? "" : content.slice(fmEnd);
  let fmBlock = fmEnd === -1 ? content : content.slice(0, fmEnd);
  const escaped = escapeRegex(innerPath);
  const linePattern = new RegExp('^\\s*-\\s*"?\\[\\[' + escaped + '(?:\\|[^\\]]*)?\\]\\]"?\\s*$', "m");
  const next = fmBlock.replace(linePattern, "");
  if (next === fmBlock) return { changed: false, content, reason: "no match" };
  return { changed: true, content: next + fmTail };
}

const probe = fs.readFileSync(
  "/Users/thomas/Documents/workspace/gsd-projects/fnl-aii/fnl-aii/Wiki/Concepts/lc-snapshot-probe.md",
  "utf8",
);
const deadLink = "[[Wiki/Concepts/nonexistent-lc-probe]]";
const r1 = removeDeadRelated(probe, deadLink);
console.log("FIND-1a: fixture page (quoted block-list) ->", r1.changed, "|", r1.reason);
const relatedLineGone = !r1.content.includes('-  "[[Wiki/Concepts/nonexistent-lc-probe]]"');
const sourcesKept = r1.content.includes('sources: "[[Raw/nonexistent-lc-probe]]"');
console.log("  related line removed (frontmatter-only)?", relatedLineGone);
console.log("  sources line untouched?", sourcesKept);

// aliased line
const aliased = probe.replace(
  '  - "[[Wiki/Concepts/nonexistent-lc-probe]]"',
  '  - "[[Wiki/Concepts/nonexistent-lc-probe|alias]]"',
);
const r2 = removeDeadRelated(aliased, deadLink);
console.log("FIND-1b: aliased block-list ->", r2.changed, "|", r2.reason);

// unquoted block-list
const unquoted = probe.replace('  - "[[Wiki/Concepts/nonexistent-lc-probe]]"', "  - [[Wiki/Concepts/nonexistent-lc-probe]]");
const r3 = removeDeadRelated(unquoted, deadLink);
console.log("FIND-1c: unquoted block-list ->", r3.changed, "|", r3.reason);

// inline flow-form (documented out of scope: left untouched)
const inline = probe.replace('  - "[[Wiki/Concepts/nonexistent-lc-probe]]"', 'related: "[[Wiki/Concepts/nonexistent-lc-probe]]"');
const r4 = removeDeadRelated(inline, deadLink);
console.log("FIND-1d: inline flow-form (out of scope) ->", r4.changed, "|", r4.reason, "(expect no match/changed=false)");

// body decoy line must never be touched (frontmatter-only): a line identical to
// the dead related line appended to the BODY must survive removal.
const bodyDecoy = probe + "\n\n  - \"[[Wiki/Concepts/nonexistent-lc-probe]]\"\n";
const r5 = removeDeadRelated(bodyDecoy, deadLink);
const bodyLineCount = (r5.content.match(/- "\[\[Wiki\/Concepts\/nonexistent-lc-probe\]\]"$/gm) || []).length;
console.log("FIND-1e: body decoy line survives? ->", bodyLineCount === 1, "(exactly 1 line left, was 2)");

// --- FIND-2: extractProjectSectionSlugs as shipped in rc.5 ---
function extractProjectSectionSlugs(content, heading) {
  const slugs = [];
  const lines = content.split("\n");
  const headingIndex = lines.findIndex((line) => line.trim() === `## ${heading}`);
  if (headingIndex === -1) return slugs;
  const linkPattern = /\[\[Projects\/[^/\]]+\/([^\]|#]+?)(?:\|[^\]]*)?\]\]/g;
  for (let i = headingIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    if (/^## /.test(line) || line.trim() === "---") break;
    for (const m of line.matchAll(linkPattern)) slugs.push(m[1].trim());
  }
  return slugs;
}

const projIndex = fs.readFileSync(
  "/Users/thomas/Documents/workspace/gsd-projects/fnl-aii/fnl-aii/Projects/lc-project/_index.md",
  "utf8",
);
const noteSlugs = extractProjectSectionSlugs(projIndex, "Project Notes");
const outputSlugs = extractProjectSectionSlugs(projIndex, "Project Outputs");
console.log("FIND-2: noteSlugs =", noteSlugs, "(expect [lc-memo])");
console.log("FIND-2: outputSlugs =", outputSlugs, "(expect [lc-output])");