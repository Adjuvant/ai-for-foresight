// Repro: wiki_fix dead-related removal regex vs block-list quoted frontmatter
// Verbatim from core/frontmatter.ts (v0.2.0-rc.3):
const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const wikilink = "[[Wiki/Concepts/nonexistent-lc-probe]]";
const escaped = escapeRegex(wikilink);
const linePattern = new RegExp(`^\\s*-\\s*"?\\[\\[${escaped}\\]\\]"?\\s*$`, "m");
console.log("pattern:", linePattern);

const fixtureContent = [
  "---",
  "type: concept",
  "title: LC Snapshot Probe",
  "category: concept",
  "related:",
  '  - "[[Wiki/Concepts/nonexistent-lc-probe]]"',
  'sources: "[[Raw/nonexistent-lc-probe]]"',
  "slug: lc-snapshot-probe",
  "---",
].join("\n");

const cases = {
  "fixture file (quoted block-list)": fixtureContent,
  "unquoted block-list": '  - [[Wiki/Concepts/nonexistent-lc-probe]]',
  "quoted single-line": 'related: ["[[Wiki/Concepts/nonexistent-lc-probe]]"]',
  "unquoted single-line": "related: [[Wiki/Concepts/nonexistent-lc-probe]]",
};
for (const [name, content] of Object.entries(cases)) {
  const matched = linePattern.test(content);
  const after = content.replace(linePattern, "");
  console.log(name, "| match:", matched, "| changed:", after !== content);
}