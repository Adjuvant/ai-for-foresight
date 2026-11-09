---
type: raw-paper
citekey: bostromBytePairEncoding2020
title: "Byte Pair Encoding is Suboptimal for Language Model Pretraining"
authors:
  - Bostrom, Kaj
  - Durrett, Greg
year: 2020
venue: "Findings of the Association for Computational Linguistics: EMNLP 2020"
doi: 10.18653/v1/2020.findings-emnlp.414
url: https://aclanthology.org/2020.findings-emnlp.414/
abstract: "The success of pretrained transformer language models (LMs) in natural language processing has led to a wide range of pretraining setups. In particular, these models employ a variety of subword tokenization methods, most notably byte-pair encoding (BPE) (Sennrich et al., 2016; Gage, 1994), the WordPiece method (Schuster and Nakajima, 2012), and unigram language modeling (Kudo, 2018), to segment text. However, to the best of our knowledge, the literature does not contain a direct evaluation of the impact of tokenization on language model pretraining. We analyze differences between BPE and unigram LM tokenization, finding that the latter method recovers subword units that align more closely with morphology and avoids problems stemming from BPE's greedy construction procedure. We then compare the fine-tuned task performance of identical transformer masked language models pretrained with these tokenizations. Across downstream tasks and two languages (English and Japanese), we find that the unigram LM tokenization method matches or outperforms BPE. We hope that developers of future pretrained LMs will consider adopting the unigram LM method over the more prevalent BPE."
full_text_source: pdfplumber
imported: 2026-10-09
tags:
  - tokenization
  - byte-pair-encoding
  - subword-segmentation
  - language-model-pretraining
  - morphology
  - ingested

---

# Byte Pair Encoding is Suboptimal for Language Model Pretraining

Bostrom, Kaj; Durrett, Greg (2020). *Findings of the Association for Computational Linguistics: EMNLP 2020*. DOI: 10.18653/v1/2020.findings-emnlp.414

## Abstract

The success of pretrained transformer language models (LMs) in natural language processing has led to a wide range of pretraining setups. In particular, these models employ a variety of subword tokenization methods, most notably byte-pair encoding (BPE) (Sennrich et al., 2016; Gage, 1994), the WordPiece method (Schuster and Nakajima, 2012), and unigram language modeling (Kudo, 2018), to segment text. However, to the best of our knowledge, the literature does not contain a direct evaluation of the impact of tokenization on language model pretraining. We analyze differences between BPE and unigram LM tokenization, finding that the latter method recovers subword units that align more closely with morphology and avoids problems stemming from BPE's greedy construction procedure. We then compare the fine-tuned task performance of identical transformer masked language models pretrained with these tokenizations. Across downstream tasks and two languages (English and Japanese), we find that the unigram LM tokenization method matches or outperforms BPE. We hope that developers of future pretrained LMs will consider adopting the unigram LM method over the more prevalent BPE.

## Full Text *(extracted via pdfplumber)*

Byte Pair Encoding is Suboptimal for Language Model Pretraining
KajBostrom and GregDurrett
DepartmentofComputerScience
TheUniversityofTexasatAustin
{kaj,gdurrett}@cs.utexas.edu
Abstract levelsofgranularity,fromindividualcharactersto
fullwords. Asaresult,rarewordsarebrokendown
The success of pretrained transformer lan- intoacollectionofsubwordunits,bottomingout
guage models (LMs) in natural language
incharactersintheworstcase.
processing has led to a wide range of
Critically, a pretrained language model’s sub-
pretrainingsetups. Inparticular,thesemodels
word vocabulary cannot be altered: any down-
employ a variety of subword tokenization
methods, most notably byte-pair encoding streamapplicationofthesemodelsmusttokenize
(BPE)(Sennrichetal.,2016;Gage,1994),the inputorgenerateoutputusingtheoriginalsubword
WordPiece method (Schuster and Nakajima, vocabulary, making the choice of tokenization a
2012),andunigramlanguagemodeling(Kudo, particularlysignificantdecision.
2018), to segment text. However, to the
Avarietyofsubwordtokenizationmethodshave
best of our knowledge, the literature does not
seen use in pretrained language models. BERT
contain a direct evaluation of the impact of
uses the WordPiece method (Schuster and Naka-
tokenization on language model pretraining.
We analyze differences between BPE and un- jima,2012),alanguage-modelingbasedvariantof
igram LM tokenization, finding that the latter BPE;T5(Raffeletal.,2019)usescharacter-level
methodrecoverssubwordunitsthatalignmore BPE; GPT2 (Radfordetal.,2019)and ROBERTA
closelywithmorphologyandavoidsproblems (Liuetal.,2019)useBPEoverrawbytesinstead
stemming from BPE’s greedy construction
ofunicodecharacters; XLNET(Yangetal.,2019)
procedure. We then compare the fine-tuned
andALBERT(Lanetal.,2019)usetheSentence-
task performance of identical transformer
Piecelibrary(KudoandRichardson,2018)which
maskedlanguagemodelspretrainedwiththese
implementsbothBPEandunigramlanguagemodel
tokenizations. Across downstream tasks and
two languages (English and Japanese), we tokenization,butinbothcasesfailtoclarifywhich
findthattheunigramLMtokenizationmethod of these methods they chose. The effects of tok-
matches or outperforms BPE. We hope that enization are not examined in a reported experi-
developers of future pretrained LMs will ment in any of the above works except Liu et al.
consider adopting the unigram LM method
(2019),whonotethatWordPiecegaveasmallad-
overthemoreprevalentBPE.
vantageoverBPEintheirpreliminaryinvestigation.
Inthemachinetranslationliterature,Kudo(2018)
1 Introduction
introducedtheunigramlanguagemodeltokeniza-
Large transformers (Vaswani et al., 2017) pre- tionmethodinthecontextofmachinetranslation
trained with variants of a language modeling ob- and found it comparable in performance to BPE.
jective,suchas BERT (Devlinetal.,2019),have Domingo et al. (2018) performed further experi-
proventheireffectivenessatflexiblytransferringto mentstoinvestigatetheeffectsoftokenizationon
a variety of domains and tasks. One design deci- neuralmachinetranslation,butusedasharedBPE
sionthatmakesthemparticularlyadaptableistheir vocabulary across all experiments. Galle´ (2019)
gracefulhandlingoftheopenvocabularyproblem examinedalgorithmsintheBPEfamily,butdidnot
throughsubwordtokenization. Subwordtokeniza- comparetounigramlanguagemodeling.
tion,popularizedintheneuralmachinetranslation In this work, we characterize the space of pro-
literature (Sennrich et al., 2016; Vaswani et al., posed subword tokenization algorithms and ana-
2017;Wuetal.,2016),producestokensatmultiple lyzethedifferencesbetweenthetwomethodswith
4617
FindingsoftheAssociationforComputationalLinguistics:EMNLP2020,pages4617–4624
November16-20,2020.(cid:13)c2020AssociationforComputationalLinguistics

publicly available implementations: BPE (merg- taining ordered merges and applies them to new
ing tokens based on bigram frequency) and uni- textinthesameorderastheyoccurredduringvo-
gramlanguagemodeling(pruningtokensbasedon cabularyconstruction.
unigram LM perplexity). While the vocabularies TheWordPiecealgorithm(SchusterandNaka-
resultingfromtheseschemesareheavilyoverlap- jima,2012),usedtoconstructBERT’svocabulary,
ping, wecompareeachmethodtoreferencemor- closelyresemblesBPE.However,insteadofmerg-
phologicalsegmentationsandfindthattheunigram ing the most frequent token bigram, each poten-
LM method produces tokens better aligned with tialmergeisscoredbasedonthelikelihoodofan
morphology. Tounderstandwhetherthismorenat- n-gram language model trained on a version of
uraltokenizationleadstoimprovedperformance, thecorpusincorporatingthatmerge. Schusterand
we pretrain separate language models using the Nakajima(2012)notethattheprocessofestimat-
ROBERTA objective(Liuetal.,2019)witheach inglanguagemodelparametersforeverypotential
tokenization for both English and Japanese, two merge is prohibitive, so they employ aggressive
typologically distant languages. On downstream heuristicstoreducethenumberofpotentialmerges
tasks,wefindaperformancegapacrosstasksand considered. Astheirimplementationisnotpublic,1
languages, with the unigram LM method provid- weareunabletomakeacomparisontothismethod.
ing an improvement over BPE of up to 10% in TheunigramLMmethod(Kudo,2018),incon-
ourJapaneseQAexperiments,indicatingtheben- trasttothebottom-upconstructionprocessofBPE
efits of adopting this technique in the context of andWordPiece,beginswithasupersetofthefinal
languagemodelpretraining. vocabulary,pruningittothedesiredsize:
2 Algorithms Algorithm2UnigramLM(Kudo,2018)
1: Input: setofstringsD,targetvocabsizek
Subword tokenization algorithms consist of two
components: avocabularyconstructionprocedure,
2: procedureUNIGRAMLM(D,k)
3: V ←allsubstringsoccurringmorethan
whichtakesacorpusoftextandreturnsavocabu-
4: onceinD (notcrossingwords)
larywiththedesiredsize,andatokenizationproce-
5: while|V| > k do (cid:46)Prunetokens
dure,whichtakesthebuiltvocabularyandappliesit
6: FitunigramLMθ toD
tonewtext,returningasequenceoftokens. Inthe-
7: fort ∈ V do (cid:46)Estimatetoken‘loss’
ory,thesetwostepscanbeindependent,although
for the algorithms we examine the tokenization 8: L t ← p θ (D)−p θ(cid:48) (D)
9: whereθ(cid:48) istheLMwithouttokent
procedureistightlycoupledtothevocabularycon-
10: endfor
structionprocedure.
11: Removemin(|V|−k,(cid:98)α|V|(cid:99))ofthe
ABPEvocabularyisconstructedasfollows:
12: tokenstwithhighestL t fromV,
Algorithm 1 Byte-pair encoding (Sennrich et al., 13: whereα ∈ [0,1]isahyperparameter
2016;Gage,1994) 14: endwhile
15: FitfinalunigramLMθ toD
1: Input: setofstringsD,targetvocabsizek
16: returnV,θ
2: procedureBPE(D,k)
17: endprocedure
3: V ←alluniquecharactersinD
4: (about4,000inEnglishWikipedia)
5: while|V| < k do (cid:46)Mergetokens UnigramLMtokenizationtakesthevocabulary
6: t L ,t R ←MostfrequentbigraminD V and unigram LM parameters θ and performs
7: t NEW ← t L +t R (cid:46)Makenewtoken Viterbiinferencetodecodethesegmentationwith
8: V ← V +[t ] maximum likelihood under θ. This method is
NEW
9: Replaceeachoccurrenceoft L ,t R in similartoMorfessor’sunsupervisedsegmentation
10: D witht (CreutzandLagus,2005)withoutitsinformedprior
NEW
11: endwhile overtokenlength.
12: returnV 1AlthoughitsnameandassociationwithGooglemightsug-
13: endprocedure gestotherwise,theSentencePiecelibrary(KudoandRichard-
son,2018)doesnot,infact,implementtheWordPiecealgo-
rithm;itprovidesimplementationsofBPEandunigramLM
BPE tokenization takes the vocabulary V con- basedtokenization.
4618

Original: furiously Original: tricycles Original: nanotechnology
BPE: fur iously BPE: t ric y cles BPE: n an ote chn ology
Uni.LM: fur ious ly Uni.LM: tri cycle s Uni.LM: nano technology
Original: Completely preposterous suggestions
BPE: Comple t ely prep ost erous suggest ions
UnigramLM: Complete ly pre post er ous suggestion s
Original: corrupted Original: 1848 and 1852,
BPE: cor rupted BPE: 184 8 and 185 2,
UnigramLM: corrupt ed UnigramLM: 1848 and 1852 ,
Original 磁性は様々に分類がなされている。
BPE 磁 性は 様々 に分類 がなされている 。
UnigramLM 磁 性 は 様々 に 分類 がなされている 。
Gloss magnetism (top.) variousways in classification isdone .
Translation Magnetismisclassifiedinvariousways.
Figure 1: Example tokenizations. The character ‘ ’ is a word boundary marker. BPE merges common tokens,
suchasEnglishinflectionalsuffixesandJapaneseparticles,intotheirneighborsevenwhentheresultingunitisnot
semanticallymeaningful.
4000
3000
2000
1000
0
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15
Token length
4619
snekot
fo
rebmuN
7
10
BPE
6 10
Unigram LM
5
10
4 10
3
10
2 10
1 20000
Token frequency rank
(a)Tokenlengthdistributionswithineachvocabulary
ycneuqerf
nekoT
BPE
Unigram LM
(b)Tokenfrequencyprofilesoverthecorpus
Figure2: Englishsubwordvocabularyandcorpusprofiles. TheunigramLMmethodproduceslongertokenson
average(a)andusesitsvocabularyspacemoreeffectively(b),withmoretokensofmoderatefrequency.
Inthecourseofourexperimentswedidnotob- Morefrequentin
serveamajordifferenceinspeedbetweenthetwo BPE UnigramLM
algorithms. Bothrequiresimilaramountsoftimeto H L M T B s . , ed d
P C K D R ing e ly t a
constructavocabulary,andbothhaveanegligible
impactonoverallmodelinferencelatency.
Table 1: Tokens with the highest difference in fre-
quency between tokenizations. The unigram LM
3 ComparisonofSegmentations
method tends to produce more parsimonious prefixes
andsuffixes.
3.1 Morphology
In Figure 1 we illustrate the differences in tok- Tokenization
enization output between BPE and the unigram BPE UnigramLM
LM method. We observe that the unigram LM Tokensperwordtype 4.721 4.633
Tokensperword 1.343 1.318
methodproducessubwordunitsthatqualitatively
alignwithmorphologymuchbetterthanthosepro-
Table2:Meansubwordunitsperwordforeachmethod
duced by BPE. In particular, we note that the un-
acrossallofEnglishWikipedia.
igramLMmethodrecoverscommonaffixessuch
as-ly,-s,pre-,andtri-whileBPEdoesnot,instead
absorbing them into adjacent units (-cles) while weobservethatrecognizableaffixesappearmuch
alsoproducingmeaninglesssingle-characterunits. morefrequentlyintheunigramLMtokenizationof
This trend is supported by Table 1, in which ourpretrainingcorpusthanintheBPEtokenization.

English(w.r.t.CELEX2) Japanese(w.r.t.MeCab)
Method
Precision Recall F1 Precision Recall F1
BPE 38.6% 12.9% 19.3% 78.6% 69.5% 73.8%
Uni.LM 62.2% 20.1% 30.3% 82.2% 72.8% 77.2%
Table3: Correspondenceofsubwordboundariesbetweenunsupervisedtokenizationmethodsandmorphological
referencesegmentations.
As the BPE tokenization is constructed greedily Creutz and Lagus (2005), who successfully use
accordingtofrequency,commonaffixes(andpunc- maximum-a-posterioriunigramlanguagemodels
tuation)arefrequentlyabsorbedintoothertokens.2 toperformunsupervisedmorphologicalsegmenta-
We see in Figure 2a that the unigram LM tok- tionofEnglishandFinnish.
enizationtendstohavelongersubwordunitsthan
3.2 VocabularyAllocation
BPE. This is closer to the length distribution of
gold-standardEnglishmorphs,whichhaveamean By surfacing subword units that align with mor-
lengthofapproximately6characters(Creutzand phology, the unigram LM tokenization provides
Linden,2004). theopportunityforthemodeltolearncomposable
subwordembeddings. Ifanaffixreliablysignalsa
Comparison with morphological segmenters
linguisticfeature,ratherthanneedingtostorethat
In Table 3, we further corroborate these observa- informationredundantlyacrosstheembeddingsof
tionsbyperformingaquantitativeevaluationofthe many tokens containing the affix, the model can
degreetowhicheachunsupervisedsegmentation storeitinjusttheembeddingoftheaffix.
algorithmalignswithmorphologicalbaselinesfor
These results suggest that the unigram LM
eachlanguage. ForEnglish,weproducegoldsur-
methodmayallocateitsvocabularymoreeconomi-
faceallomorphboundariesfromtheCELEX2lexi-
cally. WenoteinFigure2bthatbothvocabularies
caldatabase(Baayenetal.,1995)inthemannerof
containa“deadzone”oftokenswhosefrequency
CreutzandLinde´n(2004). Wethencompareeach
ismuchlowerthantherestofthevocabulary. This
algorithm’ssubwordunitboundarieswithgoldmor-
islargelytheresultofthepresenceofanumberof
phemeboundariesforwordswith2ormoremor-
veryuncommoncharacters,includingChineseand
phemes, weighted by their frequency in English
Japanesekanji,inthetrainingcorpus. IntheBPE
Wikipedia. For Japanese, we compare subword
tokenization, however, this effect is exacerbated,
tokenizationsofJapaneseWikipediasentencesto
with the dead zone containing about 1500 more
morphological reference tokenizations produced
entriesasaresultofthetendencyofitsvocabulary
usingtheMeCabmorphologicalanalysisandtok-
constructionprocesstoproduceintermediate“junk”
enizationtool(Kudo,2006)usingversion2.3.0of
tokens. Forexample,inthecasewherethreetokens
theUniDicdictionary(Denetal.,2007).
almostalwaysoccurasagroup,inordertomerge
We find that for both languages, the segmenta- themintoasingletoken,BPEmustfirstmergeone
tions produced by the unigram LM method cor- pairbeforeincorporatingthethirdtoken;thisleaves
respond more closely to the morphological refer- an intermediate token in the vocabulary that will
ences,confirmingourqualitativeanalysis. OnEn- onlyoccurrarelyonitsown. Additionally,tokens
glishdata,bothunsupervisedmethodsexhibitlow thatappearinmanycontexts,suchasinflectional
boundary recall; we attribute this to the fact that affixes(-s,-ed),willtendtomergewithmanyadja-
theyrepresentmanycommonwordswithunderly- centunitsduetotheirfrequency. However,these
ing derivational morphology as single tokens, al- merges lead to embedding redundancy, as these
thoughforBPEthisiscompoundedbyeffectswe affixesusuallyhavethesamelinguisticfunctionin
discussinSection3.2. everycontext. SincetheunigramLMmethodse-
TheabilityoftheunigramLMmethodtorecover lectstokensduringvocabularyconstructionusinga
themorphologicalstructureofthetextwithoutex- globaloptimizationprocedure,itdoesnotproduce
plicitsupervisionalignswiththemainfindingsof junk tokens; this property also allows it to avoid
mergingfrequenttokenswiththeirneighborstoo
2NotethattheBPEvocabularystillincludestheseaffixes,
aggressively.
butwhentheyareencounteredduringtokenization,theyare
almostalwaysmergedintolargerunitsasinFigure1. Japanesevocabularycomparisonsareincluded
4620

English Japanese
SQuAD1.1(dev.) MNLI(dev.) CoNLLNER TyDiQA(dev.)
Model
EM F1 Acc.(m) Acc.(mm) Dev.F1 TestF1 EM F1
Ours,BPE 80.6±.2 88.2±.1 81.4±.3 82.4±.3 94.0±.1 90.2±.0 41.4±0.6 42.1±0.6
Ours,Uni.LM 81.8±.2 89.3±.1 82.8±.2 82.9±.2 94.3±.1 90.4±.1 53.7±1.3 54.4±1.2
BERT 80.5 88.5 84.6 83.4 96.4 92.4 – –
BASE
Table 4: Fine-tuning results. Metrics are averaged across 5 fine-tuning seeds with standard deviations indicated
by ±; due to computational constraints we did not pretrain more than once per tokenization. We include fine-
tuningresultsforatransformerwithacomparablearchitecture,BERT ,forreference,althoughwenotethata
BASE
directcomparisoncannotbemadeduetoBERT usingbothalargerpretrainingcorpusandalargersubword
BASE
vocabulary.
inAppendixB. ical plausibility of the unigram LM tokenization
maytranslateintobetterdownstreamtaskperfor-
4 DownstreamTaskExperiments mance as well. Larger performance gaps are ev-
ident on SQuAD and MNLI, but the largest gap
Inordertomakeafairexperimentalcomparisonbe-
appearsonJapaneseTyDi. Differencesinpretrain-
tweenthesetwomethodsondownstreamtasks,we
ingmaybemoreevidentinthissettingduetothe
donotuseanexistingpretrainedlanguagemodel
fact that the Japanese portion of the TyDi train-
likeBERT,butinsteadtrainourownlanguagemod-
ing split only contains ∼5k examples, compared
elsfromscratch,controllingforthedata,training
tothe∼88kexamplesavailableforfine-tuningon
objective, and optimization procedure. We pre-
SQuAD. Additionally, written Japanese does not
train four transformer masked language models
feature whitespace between words, so it is possi-
using the architecture and training objective of
ble for tokenizations to differ in word boundary
ROBERTA-BASE(Liuetal.,2019)usingtherefer-
placementaswellassubwordsegmentation.
encefairseqimplementation(Ottetal.,2019).
TwoarepretrainedonthetextofEnglishWikipedia, 5 Conclusion
comprising∼3Btokensundereithertokenization.
TheothertwoarepretrainedonthetextofJapanese In this work we show that the choice of input en-
Wikipedia,comprising∼0.6Btokens. Ineachpair, codingmakesadifferenceinhowwellpretrained
onemodelispretrainedontheBPEtokenizationof language models are able to perform end tasks.
thecorpus,andtheotherontheunigramLMtok- Thisindicatesthattokenizationencodesasurpris-
enization,eachwithavocabularyof20,000tokens. ingamountofinductivebias,andwesuggestthat
HyperparametersarelistedinAppendixA. unigramLMtokenizationmaybethebetterchoice
fordevelopmentoffuturepretrainedmodels.
Wesubsequentlyfine-tuneeachofthepretrained
EnglishmodelsontheSQuADquestion-answering
Acknowledgments
task (Rajpurkar et al., 2016), the MNLI textual
entailment task (Williams et al., 2018), and the This work was partially supported by NSF Grant
EnglishportionoftheCoNLL2003named-entity IIS-1814522 and a gift from Arm. This material
recognition shared task (Tjong Kim Sang and isalsobasedonresearchthatissupportedbythe
De Meulder, 2003). We fine-tune the Japanese AirForceResearchLaboratory(AFRL),DARPA,
models on the Japanese minimal-answer subset for the KAIROS program under agreement num-
oftheTyDiquestion-answeringtask(Clarketal., berFA8750-19-2-1003. TheU.S.Governmentis
2020). Webaseourfine-tuningimplementationson authorizedtoreproduceanddistributereprintsfor
thoseofthetransformerstoolkit(Wolfetal., Governmentalpurposesnotwithstandinganycopy-
2019). rightnotationthereon. Theviewsandconclusions
The results of our fine-tuning experiments are containedhereinarethoseoftheauthorsandshould
presented in Table 4. We show that fine-tuning not be interpreted as necessarily representing the
modelspretrainedwithunigramLMtokenization officialpoliciesorendorsements,eitherexpressed
producesbetterperformancethanfine-tuningmod- orimplied,oftheAirForceResearchLaboratory
elspretrainedwithBPEtokenizationforalltasks. (AFRL),DARPA,ortheU.S.Government.
These results suggest that the higher morpholog-
4621

References TakuKudo.2006. MeCab: Yetanotherpart-of-speech
andmorphologicalanalyzer.
R.HaraldBaayen,RichardPiepenbrock,andLeonGu-
likers. 1995. The CELEX lexical database (release
2). TakuKudo.2018. Subwordregularization: Improving
neuralnetworktranslationmodelswithmultiplesub-
JonathanClark,JennimariaPalomaki,VitalyNikolaev, wordcandidates. InProceedingsofthe56thAnnual
Eunsol Choi, Dan Garrette, Michael Collins, and Meeting of the Association for Computational Lin-
Tom Kwiatkowski. 2020. TyDi QA: A benchmark guistics(Volume1:LongPapers),pages66–75,Mel-
forinformation-seekingquestionansweringintypo- bourne, Australia. Association for Computational
logicallydiverselanguages. TransactionsoftheAs- Linguistics.
sociation for Computational Linguistics, 8(0):454–
470.
TakuKudoandJohnRichardson.2018. SentencePiece:
A simple and language independent subword tok-
MathiasCreutzandKristaLagus.2005. Unsupervised
enizeranddetokenizerforneuraltextprocessing. In
morphemesegmentationandmorphologyinduction
Proceedings of the 2018 Conference on Empirical
from text corpora using Morfessor 1.0. Helsinki
Methods in Natural Language Processing: System
UniversityofTechnologyHelsinki.
Demonstrations, pages 66–71, Brussels, Belgium.
Mathias Creutz and Krister Linde´n. 2004. Morpheme AssociationforComputationalLinguistics.
segmentationgoldstandardsforfinnishandenglish.
Report,HelsinkiUniversityofTechnology. Zhenzhong Lan, Mingda Chen, Sebastian Goodman,
Kevin Gimpel, Piyush Sharma, and Radu Soricut.
MathiasJohanPhilipCreutzandBoKristerJohanLin-
2019. ALBERT: A lite BERT for self-supervised
den.2004. Morphemesegmentationgoldstandards
learningoflanguagerepresentations. arXivpreprint
for Finnish and English. Publications in Computer
arXiv:1909.11942.
andInformationScienceReportA77.
Yasuharu Den, Toshinobu Ogiso, Hideki Ogura, At- YinhanLiu,MyleOtt,NamanGoyal,JingfeiDu,Man-
sushiYamada,NobuakiMinematsu,KiyotakaUchi- dar Joshi, Danqi Chen, Omer Levy, Mike Lewis,
moto, and Hanae Koiso. 2007. The development Luke Zettlemoyer, and Veselin Stoyanov. 2019.
ofanelectronicdictionaryformorphologicalanaly- RoBERTa: A robustly optimized BERT pretraining
sisanditsapplicationtojapanesecorpuslinguistics. approach. arXivpreprintarXiv:1907.11692.
JapaneseLinguistics,22:101–123.
Myle Ott, Sergey Edunov, Alexei Baevski, Angela
Jacob Devlin, Ming-Wei Chang, Kenton Lee, and
Fan, Sam Gross, Nathan Ng, David Grangier, and
Kristina Toutanova. 2019. BERT: Pre-training of
Michael Auli. 2019. fairseq: A fast, extensible
deep bidirectional transformers for language under-
toolkit for sequence modeling. In Proceedings of
standing. In Proceedings of the 2019 Conference
the 2019 Conference of the North American Chap-
of the North American Chapter of the Association
teroftheAssociationforComputationalLinguistics
for Computational Linguistics: Human Language
(Demonstrations), pages 48–53, Minneapolis, Min-
Technologies, Volume 1 (Long and Short Papers),
nesota.AssociationforComputationalLinguistics.
pages4171–4186,Minneapolis,Minnesota.Associ-
ationforComputationalLinguistics.
Alec Radford, Jeff Wu, Rewon Child, David Luan,
MiguelDomingo, MercedesGarcıa-Martınez, Alexan- DarioAmodei,andIlyaSutskever.2019. Language
dre Helle, and Francisco Casacuberta. 2018. How modelsareunsupervisedmultitasklearners.
much does tokenization affect in neural machine
translation? arXivpreprintarXiv:1812.08621.
ColinRaffel,NoamShazeer,AdamRoberts,Katherine
PhilipGage.1994. Anewalgorithmfordatacompres- Lee, Sharan Narang, Michael Matena, Yanqi Zhou,
sion. CUsersJournal,12(2):23–38. WeiLi, andPeterJLiu.2019. Exploringthelimits
of transfer learning with a unified text-to-text trans-
MatthiasGalle´.2019. Investigatingtheeffectivenessof former. arXivpreprintarXiv:1910.10683.
BPE: The power of shorter sequences. In Proceed-
ings of the 2019 Conference on Empirical Methods
PranavRajpurkar,JianZhang,KonstantinLopyrev,and
in Natural Language Processing and the 9th Inter-
PercyLiang.2016. SQuAD:100,000+questionsfor
nationalJointConferenceonNaturalLanguagePro-
machine comprehension of text. In Proceedings of
cessing(EMNLP-IJCNLP),pages1375–1381,Hong
the2016ConferenceonEmpiricalMethodsinNatu-
Kong, China. Association for Computational Lin-
ralLanguageProcessing,pages2383–2392,Austin,
guistics.
Texas.AssociationforComputationalLinguistics.
Diederik P. Kingma and Jimmy Ba. 2015. Adam: A
method for stochastic optimization. In 3rd Inter- MikeSchusterandKaisukeNakajima.2012. Japanese
national Conference on Learning Representations, and Korean voice search. 2012 IEEE International
ICLR 2015, San Diego, CA, USA, May 7-9, 2015, Conference on Acoustics, Speech and Signal Pro-
ConferenceTrackProceedings. cessing(ICASSP),pages5149–5152.
4622

Rico Sennrich, Barry Haddow, and Alexandra Birch. A Hyperparameters
2016. Neural machine translation of rare words
withsubwordunits. InProceedingsofthe54thAn- Pretraining
nual Meeting of the Association for Computational
ROBERTA-BASE
Linguistics (Volume 1: Long Papers), pages 1715– Modelarchitecture (Liuetal.,2019)
1725, Berlin, Germany. Association for Computa-
fairseq
tionalLinguistics.
Implementation (Ottetal.,2019)
Erik F. Tjong Kim Sang and Fien De Meulder. ADAM,(cid:15)=1e-6
2003. IntroductiontotheCoNLL-2003sharedtask: Optimizer β =(0.9,0.98)
Language-independentnamedentityrecognition. In (KingmaandBa,2015)
Proceedings of the Seventh Conference on Natu- Learningratedecay Polynomial
ralLanguageLearningatHLT-NAACL2003,pages Peaklearningrate 0.0005
142–147. Warmupsteps 10000
Weightdecay 0.01
Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob
Batchsize 2048
Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz
Sequencelength 512
Kaiser, and Illia Polosukhin. 2017. Attention is all
Totalupdates 125000
you need. In Advances in Neural Information Pro-
MLPdropout 0.1
cessingSystems,pages5998–6008.
Attentiondropout 0.1
Precision 16-bit
Adina Williams, Nikita Nangia, and Samuel Bowman.
2018. A broad-coverage challenge corpus for sen- Fine-tuning
tenceunderstandingthroughinference. InProceed-
transformers
ingsofthe2018ConferenceoftheNorthAmerican Implementations (Wolfetal.,2019)
Chapter of the Association for Computational Lin-
guistics: Human Language Technologies, Volume Optimizer β AD = A ( M 0 , .9 (cid:15) , = 0.9 1 9 e 9 -8 )
1 (Long Papers), pages 1112–1122, New Orleans,
Louisiana. Association for Computational Linguis- Learningratedecay Linear
tics. Peaklearningrate 5e-5
Warmupsteps 0
Thomas Wolf, Lysandre Debut, Victor Sanh, Julien Weightdecay 0
Chaumond, ClementDelangue, AnthonyMoi, Pier- Batchsize 32
ric Cistac, Tim Rault, Re´mi Louf, Morgan Fun- Sequencelength
512
towicz, et al. 2019. Transformers: State-of-the- (SQuAD,TyDiQA)
art natural language processing. arXiv preprint Passagestride
192
arXiv:1910.03771. (SQuAD,TyDiQA)
Sequencelength
128
Yonghui Wu, Mike Schuster, Zhifeng Chen, Quoc V (MNLI,NER)
Le, Mohammad Norouzi, Wolfgang Macherey, Epochs 3
Maxim Krikun, Yuan Cao, Qin Gao, Klaus Precision 16-bit
Macherey, et al. 2016. Google’s neural machine
Tokenization
translation system: Bridging the gap between hu-
man and machine translation. arXiv preprint Implementations SentencePiece
(KudoandRichardson,2018)
arXiv:1609.08144.
Vocabularysize 20000
Zhilin Yang, Zihang Dai, Yiming Yang, Jaime Car- UnigramLMα 0.25
bonell, Ruslan Salakhutdinov, and Quoc V Le.
2019. XLNet: Generalized autoregressive pretrain-
ing for language understanding. arXiv preprint
arXiv:1906.08237.
4623

B Japanesevocabularycomparison
Morefrequentin
BPE UnigramLM
)、 )。 ) ンの スの li lo ていく vi てしまう
は のは の 、2 ンは hi 0% to no ta
Table5:Tokenswiththehighestdifferenceinfrequencybetweentokenizations.TheBPEmethodmergescommon
tokens,suchasparticlesandpunctuation,evenwhentheydonotformmeaningfulunits. TheunigramLMmethod
recovers the units ていく and てしまう, which are productive components of the Japanese verb conjugation
system.
8000
6000
4000
2000
0
1 2 3 4 5 6 7 8 9
Token length
4624
snekot
fo
rebmuN
BPE
6 10
Unigram LM
4 10
2 10
1 20000
Token frequency rank
(a)Tokenlengthdistributionswithineachvocabulary
ycneuqerf
nekoT
BPE
Unigram LM
(b)Tokenfrequencyprofilesoverthecorpus
Figure3: Japanesesubwordvocabularyandcorpusprofiles. (a)TheunigramLMmethodproduceslongertokens,
asitdoesinEnglish. (b)TokenfrequencyprofilesresemblethoseofEnglish,thoughtheeffectofthe“deadzone”
islesspronounced.

| BPE
Unigram LM |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |
|  |  |  |  |  |

