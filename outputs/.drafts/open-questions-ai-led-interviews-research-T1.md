# Researcher T1 — Validation Thread Findings
## Geiecke & Jaravel, "Conversations at Scale" — publication status, replication, yardstick, samples, boundary, SSRN parity

- **Run:** deep research `open-questions-ai-led-interviews` (Thread 1 — validation)
- **Researcher:** A (T1)
- **Date (run):** 2026-08-22 (current-state web + metadata check)
- **Method:** `web_search` (multi-angle queries, includeContent), `fetch_content` on HTML pages only, Crossref/OpenAlex REST APIs via curl, RePEc/IDEAS checks. **No PDFs fetched**; claims whose only source is an author/institution PDF are tagged **[blocked — PDF only]** or **[single-source]** with a method note (some PDF text surfaced incidentally through search-engine included content; full-text reading was not performed).
- **Status of the six questions:** Q1 done (partially), Q2 done, Q3 done (partially), Q4 done (partially — unresolved), Q5 done, Q6 done.

---

## Q1. Publication status — has the paper appeared in REStud?

**Answer: the paper is accepted / "In press" at the *Review of Economic Studies* (Oxford University Press), but no journal-hosted page or DOI is yet visible anywhere. The acceptance claim has been upgraded from single-source (author homepage) to institutional corroboration.**

- **[verified — LSE Research Online 140596]** The LSE institutional repository record (deposited 13 Aug 2026) lists: "Jaravel, X. (2026). Conversations at scale: robust AI-led interviews. *Review of Economic Studies*, [In Press]", Item Type Article, Dept LSE Economics, Acceptance Date 2026. The machine-readable JSON export confirms: `publication: "Review of Economic Studies"`, `publisher: "Oxford University Press"`, `issn: 0034-6527`, `ispublished: "inpress"`, `date_type: "accepted"`, `refereed: "TRUE"`, `full_text_status: "none"` (no accepted-version full text deposited). https://researchonline.lse.ac.uk/id/eprint/140596/ (record page read; JSON/BibTeX exports at `.../cgi/export/eprint/140596/JSON/lse-eprint-140596.js` and `.../BibTeX/lse-eprint-140596.bib` read directly). This is now the strongest evidence of acceptance: it is institutional, not author-reported.
- **[verified — author pages]** Xavier Jaravel's papers page lists "Conversations at Scale … with Friedrich Geiecke — Accepted Review of Economic Studies, 2026" (https://www.xavierjaravel.com/papers, page content read via direct fetch and search-included snapshot). Friedrich Geiecke's research page lists the paper with status "Accepted, Review of Economic Studies" (https://sites.google.com/view/friedrichgeiecke/research, read directly; the heading "Accepted, Review of Economic Studies" also captured in search index of the same page).
- **[verified — third-party academic blog]** An academic blog post commenting on the paper states it is "forthcoming in the Review of Economic Studies" (adventures-in-ai-and-democracy.ghost.io, ~March 2026; blog appears to be by Madeleine Daepp, MSR — see Sources #17). Independent of author/institution pages.
- **[verified — absence of journal record]** No journal version found: Crossref REST API returns only the SSRN DOI 10.2139/ssrn.4974382 for author="Geiecke" (2024–2027) and for the title; no 10.1093/restud DOI. OpenAlex (W4403417545, updated 2026-08-04) shows only the SSRN location (`is_published: false`, `is_accepted: true` at repository level). RePEc/IDEAS shows only CEPR DP19705 (https://ideas.repec.org/p/cpr/ceprdp/19705.html); no RePEc:oup:restud entry. No IngentaConnect record found. No arXiv version (consistent with archive).
- **[blocked]** The REStud advance-articles page (https://academic.oup.com/restud/advance-articles) is Cloudflare-gated (direct fetch returned the security-verification page). Not checked: whether the journal page exists behind it.

**Verdict vs. the archive (Feb 2026):** Archive said "Accepted at Review of Economic Studies 2026 — [single-source] (Jaravel homepage; CEPR/POID list it only as a working paper)". Now: acceptance is corroborated by the LSE institutional repository (in-press record, 13 Aug 2026) plus Geiecke's page and an independent academic blog. It remains a **forthcoming/in-press** paper: no OUP page, no REStud DOI, no print/issue assignment. Whether the accepted version reproduces the LSE Behavioural Lab numbers: **[unverified / blocked]** — no accessible full text of the accepted version exists (repository has `full_text_status: none`; the journal is paywalled/Cloudflare-gated).

---

## Q2. Replication of the LSE Behavioural Lab result (AI voice 3.93 > human FTF 3.51 > AI text 2.98 > human online text 2.42)

**Answer: no independent replication, reproduction by other teams, or peer-reviewed comment on the human-vs-AI comparison was found. The four-mode ranking remains single-source (author versions), with two pieces of secondary (commercial-blog) reproduction and several adjacent independent studies that do NOT replicate the design.**

- **[single-source]** The four-modality grades (Panel A: AI voice 3.93 > human FTF 3.51 > AI text 2.98 > human online text 2.42; Panel B: human FTF 3.53 ≈ AI voice 3.50 > AI text 2.70 > human text 1.99) appear in the 7 Feb 2026 author PDF and — **correction to the archive** — also in the **16 July 2025 NBER Summer Institute conference version** (https://conference.nber.org/conf_papers/f221279.pdf, which contains the LSE Behavioural Lab section with the June–July 2025 interviews and the eight sociology PhD graders from Cambridge, Harvard, Johns Hopkins, LSE, Oxford). So the claim "appears only in the Feb 2026 PDF" is wrong: the comparison entered the paper between POID WP120 (5 June 2025, without it) and the NBER SI paper (16 July 2025, with it). Both PDFs are **[blocked — PDF only]** for me; text surfaced via search-engine included content, and the NBER PDF content corroborates the presence but not my own full read.
- **[secondary reproduction]** thevoiceofuser.com blog reproduces both panels exactly (3.93/3.51/2.98/2.42; 3.50/3.53/2.70/1.99) and adds a plain-language critique (benchmark = average sociology PhD student in 30-min interviews; senior researchers, product context, multi-session rapport not in the evaluation) (https://www.thevoiceofuser.com/the-strongest-paper-yet-on-ai-led-interviewing/). Low authority (commercial blog), but the numbers match the author PDF text. qualz.ai blog (vendor blog) states "AI voice actually scored higher than human face-to-face. On another, it trailed by 0.03 points" (https://qualz.ai/blog/ai-led-interviews-peer-reviewed-validation/), consistent with the same two panels.
- **[no independent replication found]** Searches for replication/comment/critique of the human-vs-AI comparison (incl. "replication", "critique", "response", site:ideas.repec.org, IngentaConnect) returned no replication study, no replication thread, no published-version reproduction.
- **[adjacent independent evidence — not a replication]** (i) Wuttke et al., "AI Conversational Interviewing" (arXiv:2606.20064, 18 Jun 2026; 571-respondent analytic sample, migration policy, Germany; experimental voice vs chat vs free-choice) finds "one mode is not clearly better than the other" and that completion varied by condition, with substantial attrition (https://arxiv.org/abs/2606.20064; https://aclanthology.org/2025.latechclfl-1.17/ for the earlier LaTeCH-CLfL 2025 version). (ii) Jack, Cooper & Flower, "Automating the qualitative interview? Using Gen AI chatbots in social science research", *Methodological Innovations* 2026 (peer-reviewed): LLM chatbot interviewed 74 social scientists at a Swedish university; reports scale/consistency gains but sacrificed rapport, contextual interpretation and responsive judgment (https://journals.sagepub.com/doi/10.1177/20597991261448157). (iii) Cuevas et al., "Collecting Qualitative Data at Scale with LLMs", PACM HCI 2025 (DOI 10.1145/3710947): richness critique — chatbot responses "rarely capture participants' specific motives or personalized examples" (https://arxiv.org/abs/2309.10187). (iv) "When the Interviewer Is a Bot" (arXiv:2608.10412, Aug 2026): real-time MLLM voice interviewer found "acknowledgment-heavy but probe-light" (4.9% of turns deepening probes); participants reported reduced social pressure coincided with shallower elaboration (https://arxiv.org/html/2608.10412v1). None of these replicate the blind-grading LSE lab design; they are independent observations about AI interviewing quality in other settings.
- **[blocked / no new LSE Behavioural Lab material]** The lab's public pages (lab director profile https://www.lse.ac.uk/people/barbara-fasolo; https://www.lse.ac.uk/pbs/research) show no record of the G&J study. No new LSE Behavioural Lab material found.

---

## Q3. Reliability of the yardstick — inter-grader correlation 0.42 (0.62 excl. outlier)

**Answer: the figures still stand as reported in the author versions; the only external discussion found is one commercial research-blog critique; no academic response, later-version revision, or replication thread was found.**

- **[single-source]** Inter-grader correlation 0.42 (0.62 excluding one outlier) for the 40 evaluations of 20 AI transcripts (two blind graders each) — reported in the author PDFs (Oct 2024 / July 2025 / Feb 2026 versions); PDF only. (Archive consensus retained.)
- **[secondary comment]** thevoiceofuser.com engages the yardstick directly: "The grad students grading the same transcript hit an inter-rater correlation of 0.42 raw, 0.62 after dropping an outlier … The signal is real. The signal is also noisy. Anyone treating these grades as precise should be treating them as precise within roughly half a grade of error", and "When two trained evaluators looking at the same transcript only agree at that level, the precision of any specific grade is suspect. The aggregate patterns are real. The decimal points are not." (https://www.thevoiceofuser.com/the-strongest-paper-yet-on-ai-led-interviewing/) — the only direct discussion of the yardstick found.
- **[verified — paper contains a fixed-effects robustness angle]** Search-included text from the author PDFs shows the grading analysis controls "even after accounting for expert fixed effects" for the same transcript — i.e., the paper partially addresses grader heterogeneity internally, but this could not be fully read ([blocked — PDF only]).
- **[unverified]** Any later-version change to the 0.42/0.62 figures: the Feb 2026 PDF text surfaced does not show a revision of the Table I discussion; the accepted (in-press) version is inaccessible (see Q1).

---

## Q4. Sample discrepancies (French election 422 vs 384; US 466 vs 462)

**Answer: partially resolved, partially unresolved. The trend is now documented: 422 (French) belongs to the Nov 2024 version; 384 (French) and 462 (US meaning-in-life) belong to the Feb 2026 version (confirmed by two independent secondary sources). The June 2025 POID and the intermediary versions remain unread (PDF-blocked), and the origin of "466" is unverified. No canonical/published version is available to reconcile them.**

- **[verified — 422 in Nov 2024 author version]** Search-included text of the BSE-hosted Nov 2024 version: "One week before the election, we ran 422 interviews with French voters" (https://events.bse.eu/live/files/5703-geieckejaravel2024pdf). The Oct 2024 author PDF also exists on the author site (https://www.xavierjaravel.com/_files/ugd/bacd2d_67114208dd90424fab15ea241707c4e1.pdf) — [found; blocked — PDF only].
- **[verified — 384 in the current-version narrative]** Both secondary sources describing the current paper state: "Study 2: French legislative elections. 384 respondents in the week before the June 2024 snap election" (qualz.ai blog; thevoiceofuser.com blog). These blogs describe the Feb 2026 version.
- **[verified — 462 US in the current-version narrative]** Both blogs give "462 US respondents from Prolific" for the meaning-in-life study (randomised to AI interview vs open-text arm; 148% word-count increase per blogs; "142%" per the earlier 2024 CEP article). Note the 142% vs 148% discrepancy across versions/sources — unflagged in the archive.
- **[unresolved]** The June 2025 POID WP120 numbers: POID abstract page (read directly) does not report sample sizes; the PDF is [blocked — PDF only]. The archive's attribution "422 in the 2025 version" is consistent with the Nov 2024 number but could not be re-verified. The "466 (US)" figure remains explained by nothing I could directly read; it is single-source (archive → June 2025 PDF).
- **[verdict]** Recommend citing French=384, US=462 for the current (Feb 2026/in-press) version, and flagging that the 422/466 figures (older working-paper versions) are not reconciled in any accessible canonical text. No published-version reconciliation exists yet (see Q1).

---

## Q5. Boundary of complementarity — "AI-led interviews never match the best human experts"

**Answer: the caveat is alive in the paper and quoted in the press; the authors' scope statements are stable and slightly reinforced; no new post-Feb-2026 author interview/podcast with a fresh scope statement was found, but a new author-generated NotebookLM podcast summary exists.**

- **[verified — in the paper]** "However, the AI-led interviews never match the best human experts" appears in the author PDFs (Oct 2024 version footnote 21 per search-included text; also in the Feb 2026 version's evaluation discussion). [blocked — PDF only for full read].
- **[verified — quoted in journalism]** EdSurge (22 Nov 2024): "A paper on their study points out, however, that 'the AI-led interviews never match the best human experts'" (https://www.edsurge.com/news/2024-11-22-researchers-try-using-ai-chatbots-to-conduct-interviews-for-social-science-studies). This is the direct quote-elsewhere datapoint the question asked for.
- **[verified — author scope statements]** Times Higher Education (Nov 2024): Jaravel — "As we add more features, we will get increasingly closer to qualitative interviewing, and that might be on the horizon, but that's not the primary goal"; tool positioned to "bridge the gap between qualitative and quantitative research" for economists/political scientists (https://www.timeshighereducation.com/news/ai-chatbot-can-conduct-research-interviews-unprecedented-scale). Authors' LSE Impact blog (30 Oct 2024): positions the method for "large-scale, rigorous interviews", notes they "consider the implications of making the conversation, currently conducted via text chat, more fluid by adding a voice option" (https://blogs.lse.ac.uk/impactofsocialsciences/2024/10/30/ai-can-carry-out-qualitative-research-at-unprecedented-scale/).
- **[verified — third-party boundary framing]** thevoiceofuser.com: "The paper acknowledges this directly and positions AI-led interviews as a complement to face-to-face expert work rather than a substitute"; senior researchers with embedded product context, multi-session rapport, non-verbal cues "are not in this evaluation." The Daepp blog: AI-augmented adaptive surveying "is also still nowhere close to what the world's great listeners find when they embed deeply in a real place, time, and problem."
- **[new author artifact]** Geiecke's homepage now links an author-generated NotebookLM podcast summary of the paper (Dropbox mp3; https://sites.google.com/view/friedrichgeiecke/research) — a new, non-text author commentary artifact (AI-generated). Not fetched (audio; out of scope).
- No new post-Feb-2026 print interview with a revised scope statement was found.

---

## Q6. SSRN parity — still Cloudflare-gated? Updated posting?

**Answer: still Cloudflare-gated for direct fetch; indexed snapshot indicates the posting is still the OLD version (title with "with a Simple Open-Source Platform", "Last revised: 21 Nov 2024", old abstract without voice/mental-models language). One conflicting, unverifiable AI-synthesized claim says "last revised February 7, 2026". Overall: no evidence of an update to the Feb 2026 version; treat SSRN parity as "likely not current".**

- **[verified — gate persists]** Direct fetch of https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4974382 returns the Cloudflare "Performing security verification" page; `curl` GET of https://ssrn.com/abstract=4974382 returns HTTP 403 with a Cloudflare challenge ("Just a moment..."). Same gate as the archive.
- **[indexed snapshot — old version]** Search-indexed content of the SSRN abstract page shows: "73 Pages · Posted: 15 Oct 2024 · Last revised: 21 Nov 2024", title "Conversations at Scale: Robust AI-led Interviews with a Simple Open-Source Platform", and the OLD abstract (four applications: decision making, political views, external world, subjective mental states; no voice; no mental-models-of-policy class). This is an index snapshot of the page (not a live fetch), hence medium confidence that SSRN still displays that version.
- **[unverified / conflicting]** An OpenAI-synthesized search answer asserted the SSRN version "was last revised February 7, 2026" citing a `papers.ssrn.com/sol3/Delivery.cfm/4974382.pdf` URL. This directly conflicts with the indexed snapshot; the Delivery URL suggests a PDF download endpoint exists, but PDF content was not read [blocked — PDF only]. Verdict: SSRN last-revised status is conflicting/unverifiable with available tools; the weight of evidence favours "not updated" (old title + old abstract in the index).
- **[verified — SSRN record exists and is the canonical DOI]** Crossref: DOI 10.2139/ssrn.4974382 resolves to the SSRN record (posted 2024) — the only DOI for the paper. OpenAlex W4403417545 mirrors it.

---

## What changed since the archive (Feb 2026 → now)

1. **REStud acceptance is no longer single-source.** LSE Research Online 140596 (deposited 13 Aug 2026) lists the paper as *Review of Economic Studies*, "[In Press]" (publisher OUP, ISSN 0034-6527, accepted 2026, refereed TRUE). Geiecke's page ("Accepted, Review of Economic Studies") and an independent academic blog ("forthcoming in the Review of Economic Studies") corroborate. Still no OUP page/DOI — the paper is in-press, not issued.
2. **Correction: the LSE Behavioural Lab comparison is not unique to the Feb 2026 PDF.** It is present in the 16 July 2025 NBER Summer Institute version (conference.nber.org/conf_papers/f221279.pdf), i.e., the laboratory study entered the paper between POID WP120 (5 June 2025) and the NBER version (16 July 2025). The archive's dating should be updated.
3. **New versions/records located:** Oct 2024 author PDF (bacd2d_67114208…), NBER SI July 2025 PDF, BSE-hosted Nov 2024 PDF, LSE Research Online record, LSE Festival poster (eprints 130055), CEP CentrePiece 695 in-brief (authors, 2025), CEP "My must-read paper" (Aghion endorsement), St Andrews (1 Apr 2025) and Kiel-CEPR seminar listings, and an author-generated NotebookLM podcast summary.
4. **Sample numbers:** 384 (French) and 462 (US meaning-in-life) are now the figures in circulation for the current version (two secondary sources); 422 is confirmed to belong to the Nov 2024 version. The origin of 466 remains unknown (archive-sourced only).
5. **No replication, no replication thread, no published-version reproduction of the headline result.** OpenAlex shows 10 citing works (none a replication); the closest independent evidence is Wuttke et al. (2026), Jack et al. (2026, peer-reviewed), Cuevas et al. (2025), and the InterviewBot study (2026), all in different designs.
6. **SSRN:** still gate-protected; no evidence of an updated posting (indexed snapshot shows old title/abstract, last revised 21 Nov 2024).
7. **Adjacent literature (new since archive, T1-visible):** Ashwin, Chhabra & Rao, "Using LLMs for Qualitative Analysis can Introduce Serious Bias", *Sociological Methods & Research* 2026 (DOI 10.1177/00491241251338246); "AI Interviews the Interviewers" (CUI 2026, DOI 10.1145/3816046.3816218); Means-End-Chain human-vs-LLM chapter (Springer 2026) — the last is synthetic-respondent strand (note for T2 standing tension).

---

## New sources found (URLs)

- https://researchonline.lse.ac.uk/id/eprint/140596/ (+ JSON/BibTeX exports) — LSE Research Online in-press record
- https://conference.nber.org/conf_papers/f221279.pdf — NBER Summer Institute 2025 version (16 Jul 2025, has Behavioural Lab) [PDF]
- https://www.xavierjaravel.com/_files/ugd/bacd2d_67114208dd90424fab15ea241707c4e1.pdf — Oct 2024 author version [PDF]
- https://events.bse.eu/live/files/5703-geieckejaravel2024pdf — BSE-hosted Nov 2024 version (422 sample) [PDF]
- https://adventures-in-ai-and-democracy.ghost.io/ai-interviewers-qualitative-literacy-and-big-dick-data/ — academic blog (Daepp), "forthcoming in REStud" + boundary comment
- https://www.thevoiceofuser.com/the-strongest-paper-yet-on-ai-led-interviewing/ — commercial blog; Table II reproduction; 0.42/0.62 discussion; 384/462
- https://qualz.ai/blog/ai-led-interviews-peer-reviewed-validation/ — vendor blog; 384/462, model list, "2,100+ respondents"
- https://www.edsurge.com/news/2024-11-22-researchers-try-using-ai-chatbots-to-conduct-interviews-for-social-science-studies — press quote of the "never match" caveat
- https://www.timeshighereducation.com/news/ai-chatbot-can-conduct-research-interviews-unprecedented-scale — THE, Jaravel scope quotes (also pre-archive but re-verified)
- https://cep.lse.ac.uk/_new/publications/abstract.asp?index=12051 — CEP "My must-read paper" (Aghion)
- https://ideas.repec.org/p/cep/cepcnp/695.html — CEP CentrePiece 695 in-brief (authors)
- https://events.st-andrews.ac.uk/events/department-of-economics-seminar-with-professor-xavier-jaravel-london-school-of-economics/ — seminar listing (1 Apr 2025)
- https://www.ifw-kiel.de/institute/events/seminars-workshops/kiel-cepr-research-seminar/conversations-at-scale-robust-ai-led-interviews-with-a-simple-open-source-platform/ — Kiel-CEPR seminar listing
- http://eprints.lse.ac.uk/130055/ — LSE Festival poster (Jun–Jul 2025)
- https://arxiv.org/abs/2606.20064 — Wuttke et al. 2026 (independent, adjacent)
- https://arxiv.org/html/2608.10412v1 — InterviewBot study (Aug 2026, independent, adjacent)
- https://doi.org/10.1177/20597991261448157 — Jack, Cooper & Flower 2026, Methodological Innovations (peer-reviewed, independent)
- https://doi.org/10.1177/00491241251338246 — Ashwin, Chhabra & Rao 2026, SMR (analysis-pipeline bias; T3-relevant)
- https://doi.org/10.1145/3816046.3816218 — "AI Interviews the Interviewers" (CUI 2026)
- https://link.springer.com/rwe/10.1007/978-3-658-46709-8_41-1 — Means-End-Chain human-vs-LLM chapter (T2 standing-tension context)

---

## Queries run (all recorded)

1. "Geiecke Jaravel 'Conversations at Scale' interviews" / "Geiecke Jaravel 'Review of Economic Studies'" / "'Conversations at Scale' AI-led interviews replication" / "Jaravel Geiecke LSE Behavioural Lab AI interview human comparison"
2. "convissero site:restud.com OR site:academic.oup.com Geiecke" (noise; rejected) / "geiecke interviews economist LSE" / "SSRN 4974382 conversations at scale" / '"AI-led interviews" "never match" human experts'
3. "Geiecke Jaravel interviews 'correlation' '0.42' OR '0.62' grading" / "Geiecke Jaravel 'French elections' interviews sample 384 OR 422" / 'site:academic.oup.com restud "AI-led interviews" OR "Conversations at Scale"' / "Geiecke Jaravel AI interviews critique OR replication OR response"
4. "Geiecke Jaravel interviews '462' OR '466' respondents US Prolific" / '"Means-End Chain" AI-generated interviews human-led comparative' / "Xavier Jaravel AI interviews podcast OR interview 2026" / "Geiecke Jaravel 'Review of Economic Studies' advance OR forthcoming OR press"
5. '"Conversations at scale" Geiecke ingentaconnect' / "Wuttke GESIS 'AI conversational interviewing' migration 571" / '"Automating the qualitative interview" Gen AI chatbots social science'
6. '"LSE Behavioural Lab" AI interviews Geiecke Jaravel' / "site:ideas.repec.org OR site:econpapers.repec.org Geiecke Jaravel 2026" / "Geiecke Jaravel interviews dataset replication data"
- API/metadata calls (curl): Crossref `works?query.author=Geiecke` (2024–2027), Crossref title search, Crossref `works/10.1145/3710947`, Crossref `works/10.1145/3816046.3816218`; OpenAlex `works/W4403417545` and `filter=cites:W4403417545`; Semantic Scholar DOI lookup (returned not-found); LSE ROL JSON+BibTeX exports; direct fetch of researchonline.lse.ac.uk, cepr.org, poid.lse.ac.uk, xavierjaravel.com/papers, sites.google.com (Geiecke), academic.oup.com/restud/advance-articles (blocked), ssrn.com (blocked), arxiv.org/abs/2606.20064, openalex.org (blocked).
- `feynman alpha search` (alphaXiv, semantic+keyword+agentic) — **blocked: not logged in** (`alpha login` required; not available in this run).

## Sources accepted / rejected

**Accepted (37):** see Evidence table #1–#30 below plus items in "New sources found". All read via HTML/metadata/API/index-snapshot except PDFs explicitly marked blocked.

**Rejected (out of scope, noise, or dead/unusable):** convis/convensis/conviso/convis-etc. (query-2 noise); German History OUP issue page and other OUP book pages (noise); HackerEarth, User Interviews state-of-research, Guardian job-interview article, Economist/YouGov poll (recruitment/employment AI-interview topic, not research interviews); Frontiers meta-analysis, generalizability-theory papers, "Agreement is overrated" ACL paper, Calgary-Cambridge ICC paper, PMC teacher-rating paper (numeric noise from 0.42/0.62 queries — no connection to the paper); France Inter podcast 14 Jan 2026 (Jaravel on French socioeconomics, not the interviews paper); Candidate-withdrawal-in-France PDF (Glasgow eprints; different study, 29 human interviews); academic.oup.com/restud/advance-articles (Cloudflare-blocked — listed as blocked, unusable); openalex.org web page (Cloudflare-blocked; API used instead); SSRN short/papers URLs (Cloudflare 403 — blocked); Semantic Scholar (record not found).

---

## Evidence table

| # | Source | URL | Key claim | Type | Confidence |
|---|--------|-----|-----------|------|------------|
| 1 | LSE Research Online 140596 (record + JSON/BibTeX) | https://researchonline.lse.ac.uk/id/eprint/140596/ | Paper listed as *Review of Economic Studies*, [In Press]; accepted 2026; publisher OUP; ISSN 0034-6527; refereed TRUE; no full text deposited | primary (institutional metadata) | high |
| 2 | Xavier Jaravel — papers page | https://www.xavierjaravel.com/papers | "Conversations at Scale … Accepted Review of Economic Studies, 2026" | primary (author page) | high |
| 3 | Friedrich Geiecke — research page | https://sites.google.com/view/friedrichgeiecke/research | "Accepted, Review of Economic Studies"; abstract; NotebookLM podcast link (new artifact) | primary (author page) | high |
| 4 | SSRN abstract page | https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4974382 | Indexed snapshot: old title ("…with a Simple Open-Source Platform"), "Posted 15 Oct 2024 · Last revised 21 Nov 2024", old abstract; a conflicting unverifiable claim says last revised 7 Feb 2026 | primary record (index snapshot; direct fetch blocked) | medium (conflict noted) |
| 5 | CEPR DP19705 | https://cepr.org/publications/dp19705 | Working paper record unchanged (22 Nov 2024; old abstract) | primary record | high |
| 6 | LSE POID WP120 abstract page | https://poid.lse.ac.uk/PUBLICATIONS/abstract.asp?index=11599 | WP120, 5 June 2025, PDF available; abstract old (no voice) | primary record | high |
| 7 | Author PDF, 7 Feb 2026 | https://www.xavierjaravel.com/_files/ugd/bacd2d_ca55b68204ad4f5395905952ad0f3153.pdf | Behavioural Lab tables; caveat sentence; 384 French / 462 US (per surfaced text + secondary) | self-reported (PDF) | single-source / blocked for full read |
| 8 | Author PDF, Oct 2024 | https://www.xavierjaravel.com/_files/ugd/bacd2d_67114208dd90424fab15ea241707c4e1.pdf | Earlier version lineage (footnote "never match … best human experts"; "1,38…" fragment) | self-reported (PDF) | single-source / blocked |
| 9 | NBER Summer Institute version, 16 Jul 2025 | https://conference.nber.org/conf_papers/f221279.pdf | Contains LSE Behavioural Lab section (June–July 2025 interviews; 8 sociology PhD graders) — **corrects archive dating** | self-reported (PDF) | single-source / blocked |
| 10 | BSE-hosted Nov 2024 version | https://events.bse.eu/live/files/5703-geieckejaravel2024pdf | "we ran 422 interviews with French voters" — 422 anchored to Nov 2024 | self-reported (PDF) | single-source / blocked |
| 11 | CEP "My must-read paper" (Aghion) | https://cep.lse.ac.uk/_new/publications/abstract.asp?index=12051 | Aghion endorsement; NBER SI 2025 presentation citation; 142% word increase | secondary | medium |
| 12 | CEP CentrePiece 695 (authors) | https://ideas.repec.org/p/cep/cepcnp/695.html | 2025 authors' in-brief ("Do try this at work: the AI chatbot that can interview at scale") | primary (authors' magazine piece) | high |
| 13 | EdSurge (22 Nov 2024) | https://www.edsurge.com/news/2024-11-22-researchers-try-using-ai-chatbots-to-conduct-interviews-for-social-science-studies | Direct quote of "the AI-led interviews never match the best human experts"; independent-positionality critique (A. Gillen) | secondary (journalism) | high |
| 14 | Times Higher Education (Nov 2024) | https://www.timeshighereducation.com/news/ai-chatbot-can-conduct-research-interviews-unprecedented-scale | Jaravel scope quotes ("not the primary goal"; bridge qual-quant) | secondary (journalism) | high |
| 15 | LSE Impact blog (authors, 30 Oct 2024) | https://blogs.lse.ac.uk/impactofsocialsciences/2024/10/30/ai-can-carry-out-qualitative-research-at-unprecedented-scale/ | Authors' own summary: ~average human expert; non-judgmental preference; voice as future work | primary (authors) | high |
| 16 | qualz.ai blog | https://qualz.ai/blog/ai-led-interviews-peer-reviewed-validation/ | 384 French; 462 US; five LLMs (GPT-4o, GPT-4.1, Claude Sonnet 4, Llama 3.1 405B, Llama 4 Maverick 17B); "2,100+ respondents"; REStud acceptance | secondary (vendor blog) | low–medium |
| 17 | thevoiceofuser.com blog | https://www.thevoiceofuser.com/the-strongest-paper-yet-on-ai-led-interviewing/ | Table II reproduction (both panels); 0.42/0.62 discussion; 384/462; boundary critique | secondary (commercial blog) | low–medium |
| 18 | Adventures in AI & Democracy (Daepp) blog | https://adventures-in-ai-and-democracy.ghost.io/ai-interviewers-qualitative-literacy-and-big-dick-data/ | "forthcoming in the Review of Economic Studies"; AI-voice ≈ face-to-face summary; boundary framing; Anthropic 80,508-interview context | secondary (academic blog) | medium |
| 19 | Wuttke et al. — AI Conversational Interviewing | https://arxiv.org/abs/2606.20064 | Independent study: 571-respondent analytic sample (1,039 assigned); voice vs chat vs free-choice; "one mode is not clearly better"; completion differed by condition | primary (preprint, independent) | medium |
| 20 | Wuttke et al. — LaTeCH-CLfL 2025 version | https://aclanthology.org/2025.latechclfl-1.17/ | Earlier peer-adjacent version; per synthesis: quality broadly comparable to human interviewing, AI had more issues with unexpected responses/neutral probing | primary (conference paper) | low–medium (synthesis-based) |
| 21 | Jack, Cooper & Flower — Methodological Innovations 2026 | https://journals.sagepub.com/doi/10.1177/20597991261448157 | Peer-reviewed independent test: LLM chatbot interviewed 74 social scientists; rapport/interpretation costs | primary (peer-reviewed) | medium (abstract-level) |
| 22 | Cuevas et al. — PACM HCI 2025 | https://arxiv.org/abs/2309.10187 (DOI 10.1145/3710947) | Richness critique; chatbot responses rarely capture specific motives; low LLM-human IRR | primary (peer-reviewed) | medium |
| 23 | InterviewBot — arXiv 2608.10412 | https://arxiv.org/html/2608.10412v1 | MLLM voice interviewer probe-light (4.9% deepening); reduced social pressure ↔ shallower elaboration | primary (preprint, independent) | medium |
| 24 | Crossref API | https://api.crossref.org/works?query.author=Geiecke | Only SSRN DOI 10.2139/ssrn.4974382 for Geiecke 2024–2027; no REStud DOI | primary (metadata) | high |
| 25 | OpenAlex W4403417545 | https://openalex.org/W4403417545 (API) | Single SSRN location only; 10 citing works (listed); updated 2026-08-04 | primary (metadata) | high |
| 26 | Ideas/RePEc DP19705 + CentrePiece series | https://ideas.repec.org/p/cpr/ceprdp/19705.html | No RePEc:oup:restud entry for the paper; CentrePiece 695 indexed | primary (metadata) | high |
| 27 | St Andrews Dept of Economics seminar | https://events.st-andrews.ac.uk/events/department-of-economics-seminar-with-professor-xavier-jaravel-london-school-of-economics/ | Public seminar, 1 Apr 2025 (old abstract) | secondary (event listing) | medium |
| 28 | Kiel-CEPR research seminar | https://www.ifw-kiel.de/institute/events/seminars-workshops/kiel-cepr-research-seminar/conversations-at-scale-robust-ai-led-interviews-with-a-simple-open-source-platform/ | Seminar listing | secondary (event listing) | medium |
| 29 | LSE Festival poster | http://eprints.lse.ac.uk/130055/ | Poster "What is it like to be interviewed by AI…" (16 Jun–3 Jul 2025) | primary (institutional record) | high |
| 30 | Means-End-Chain chapter (Springer 2026) | https://link.springer.com/rwe/10.1007/978-3-658-46709-8_41-1 (alt. 10.1007/978-3-658-51525-6_41) | Human vs LLM laddering interviews diverge; hybrid strategy recommended (synthetic-respondent strand) | primary (book chapter, peer-ish) | medium (abstract-level) |
| 31 | Ashwin, Chhabra & Rao — SMR 2026 | https://doi.org/10.1177/00491241251338246 | LLM qualitative analysis can introduce serious bias (T3-relevant adjacent) | primary (peer-reviewed) | medium (abstract-level) |
| 32 | "AI Interviews the Interviewers" — CUI 2026 | https://doi.org/10.1145/3816046.3816218 | Practitioner evaluation of conversational AI interviewing (cites G&J) | primary (peer-reviewed) | medium (metadata-level) |

---

## Coverage Status

**Checked directly (read):** LSE Research Online record + JSON/BibTeX exports [1]; xavierjaravel.com/papers and Geiecke Google Sites page (fetched; acceptance status also via index) [2][3]; CEPR DP19705 page [5]; POID WP120 abstract page [6]; arXiv abstract 2606.20064 [19]; adventures-in-ai-and-democracy blog (full text) [18]; Crossref and OpenAlex REST APIs [24][25]; RePEc/IDEAS [26]; LSE eprints 130055 [29]; SSRN (both URLs — gate response recorded; not read) [4]; academic.oup.com/restud/advance-articles (gate response recorded; not read); arXiv PDF 2602.21136 (SparkMe) not read — referenced from search content only; openalex.org web page (gate; API used).

**Read via search-engine included content (NOT fetched by me):** key prose of the Feb 2026 [7], Oct 2024 [8], NBER July 2025 [9], BSE Nov 2024 [10], POID [6-PDF] author PDFs; EdSurge, THE, CEP, LSE Impact [11][13][14][15]; qualz/voiceofuser blogs [16][17]; parts of arXiv 2309.10187, arXiv 2608.10412, arXiv 2606.20064 HTML [22][23][19]; Wuttke LaTeCH summary [20].

**Blocked — PDF only (not read):** Author PDFs [7][8][9][10], POID WP120 PDF, SSRN Delivery.cfm PDF, CEP CentrePiece cp695.pdf content, interviewer-instruction appendices, REStud accepted-version text (not deposited anywhere: `full_text_status: none`).

**Unresolved / needs follow-up:**
- (HIGH) Whether the in-press REStud version reproduces the Behavioural Lab tables and 86%-of-human-human figure — no accessible accepted text; journal page gated.
- (MEDIUM) SSRN "last revised" date: index snapshot says 21 Nov 2024; one unverifiable synthesis says 7 Feb 2026. Recommend a human browser check.
- (MEDIUM) Origin of the 466 (US) figure and the June 2025 POID sample numbers — PDF-blocked.
- (LOW) "142% vs 148%" word-count figure differs across CEP (2024) and current-version blogs — reconciliation needs the in-press text.
- (BLOCKED) `feynman alpha search` (alphaXiv) unavailable this run (not logged in) — semantic paper-metadata layer not covered; Crossref/OpenAlex used instead.

---

## Findings & severity (for the acceptance record)

- **HIGH — no independent replication** of the AI-voice-beats-human-interviewer claim exists anywhere in the checked record (Q2). Any downstream use citing it as "validated" must carry the single-source caveat.
- **HIGH — no published-version verification possible today**: the paper is in-press at REStud (now institutionally corroborated) but unreadable; headline numbers remain author-version + secondary-blog level.
- **MEDIUM — sample discrepancies unresolved in a canonical text**; the current-version figures (384 French; 462 US) are supported by two independent secondary sources; 422/466 are old-version numbers; 466's source version unverified.
- **MEDIUM — yardstick (0.42/0.62) has only one external discussion** (commercial blog); no academic response or revision observed.
- **LOW — SSRN parity:** gate persists; no evidence of update; likely stale posting.
- Correction recorded: Behavioural Lab comparison dates to the 16 Jul 2025 NBER version, not Feb 2026.

(Severity legend: HIGH = materially affects downstream claims about the method; MEDIUM = affects precision/attribution; LOW = housekeeping.)