// Unified BSEB Class 9 Mathematics Curriculum Aggregator (All 15 Chapters + 205-Page Hindi PDF Book + 50 HOTS)
import { BSEB_CLASS9_MATHS_SUBJECT as CH14_SUBJECT } from './bsebClass9Ch14.js';
import { bsebClass9Ch15 } from './bsebClass9Ch15.js';
import { bsebClass9MathSubjective50 } from './bsebClass9MathSubjective50.js';

const PDF_BOOK_DRIVE_VIEW = "https://drive.google.com/file/d/1oN6MwReVrY8pJ_OYGJm95878H-U1Dt_b/view?usp=drivesdk";
const PDF_BOOK_DRIVE_DOWNLOAD = "https://drive.google.com/uc?export=download&id=1oN6MwReVrY8pJ_OYGJm95878H-U1Dt_b";

const CHAPTER_METADATA_MAP = {
  1: {
    englishTitle: "Number System",
    duration: "60 mins",
    weightage: "10 Marks (BSEB)",
    summary: "संख्या पद्धति (Number System) में परिमेय संख्याएँ, अपरिमेय संख्याएँ, वास्तविक संख्याओं पर संक्रियाएँ, हर का परिमेयकरण, आवर्त दशमलव तथा घातांक के नियम शामिल हैं।",
    keyConcepts: [
      { heading: "1. परिमेय एवं अपरिमेय संख्याएँ", body: "• परिमेय संख्याएँ: p/q रूप (q ≠ 0)।\n• अपरिमेय संख्याएँ: √2, √3, √5, π।" },
      { heading: "2. हर का परिमेयकरण एवं घातांक नियम", body: "हर से करणी हटाने हेतु संयुग्मी गुणांक से अंश व हर में गुणा किया जाता है।" }
    ],
    formulas: [
      "(√a + √b)(√a - √b) = a - b  |  (a + √b)(a - √b) = a² - b",
      "a^m · a^n = a^(m+n)  |  (a^m)/(a^n) = a^(m-n)  |  (a^m)^n = a^(mn)"
    ],
    mcqs: [
      { id: "q-9m1-1", question: "निम्नलिखित में से कौन-सी संख्या अपरिमेय है?", options: ["√4", "√9", "√3", "0.25"], correctIndex: 2, explanation: "√3 एक अपरिमेय संख्या है।" }
    ]
  },
  2: {
    englishTitle: "Polynomials",
    duration: "75 mins",
    weightage: "12 Marks (BSEB)",
    summary: "बहुपद के शून्यक, शेषफल प्रमेय, गुणनखंड प्रमेय तथा सभी बीजीय सर्वसमिकाएँ।",
    keyConcepts: [
      { heading: "1. शेषफल एवं गुणनखंड प्रमेय", body: "p(x) को (x - a) से भाग देने पर शेषफल p(a) होता है। यदि p(a) = 0, तो (x - a) गुणनखंड है।" }
    ],
    formulas: [
      "(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)",
      "a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)",
      "यदि a + b + c = 0 हो, तो a³ + b³ + c³ = 3abc"
    ],
    mcqs: [
      { id: "q-9m2-1", question: "यदि a + b + c = 0 हो, तो a³ + b³ + c³ =", options: ["0", "abc", "3abc", "a² + b² + c²"], correctIndex: 2, explanation: "सर्वसमिका से 3abc प्राप्त होता है।" }
    ]
  },
  3: {
    englishTitle: "Coordinate Geometry",
    duration: "45 mins",
    weightage: "10 Marks (BSEB)",
    summary: "कार्तीय तल, अक्ष, मूलबिंदु (0,0), चतुर्थांश, भुज व कोटि।",
    keyConcepts: [{ heading: "1. चतुर्थांश एवं निर्देशांक", body: "I (+,+), II (-,+), III (-,-), IV (+,-)।" }],
    formulas: ["मूलबिंदु = (0, 0)  |  X-अक्ष से दूरी = |y|  |  Y-अक्ष से दूरी = |x|"],
    mcqs: [{ id: "q-9m3-1", question: "बिंदु (7, -4) किस चतुर्थांश में है?", options: ["प्रथम", "द्वितीय", "तृतीय", "चतुर्थ"], correctIndex: 3, explanation: "(+, -) चतुर्थ चतुर्थांश में होता है।" }]
  },
  4: {
    englishTitle: "Linear Equations in Two Variables",
    duration: "55 mins",
    weightage: "8 Marks (BSEB)",
    summary: "मानक रूप ax + by + c = 0, अनंत हल तथा सरल रेखा आलेख।",
    keyConcepts: [{ heading: "1. मानक रूप एवं आलेख", body: "दो चरों वाले रैखिक समीकरण के अपरिमित रूप से अनेक हल होते हैं।" }],
    formulas: ["ax + by + c = 0  |  X-अक्ष: y = 0  |  Y-अक्ष: x = 0"],
    mcqs: [{ id: "q-9m4-1", question: "3x + 2y = 12 का आलेख X-अक्ष को कहाँ काटता है?", options: ["(0, 6)", "(4, 0)", "(6, 0)", "(0, 4)"], correctIndex: 1, explanation: "y = 0 रखने पर x = 4।" }]
  },
  5: {
    englishTitle: "Introduction to Euclid's Geometry",
    duration: "40 mins",
    weightage: "5 Marks (BSEB)",
    summary: "यूक्लिड की परिभाषाएँ, 7 अभिगृहीत एवं 5 अभिधारणाएँ।",
    keyConcepts: [{ heading: "1. अभिगृहीत व अभिधारणाएँ", body: "पूर्ण अपने भाग से बड़ा होता है (अभिगृहीत 5)।" }],
    formulas: ["दो भिन्न बिंदुओं से एक अद्वितीय सरल रेखा खींची जा सकती है"],
    mcqs: [{ id: "q-9m5-1", question: "'पूर्ण अपने भाग से बड़ा होता है' — यह क्या है?", options: ["परिभाषा", "अभिगृहीत", "अभिधारणा", "प्रमेय"], correctIndex: 1, explanation: "यह यूक्लिड का 5वाँ अभिगृहीत है।" }]
  },
  6: {
    englishTitle: "Lines and Angles",
    duration: "60 mins",
    weightage: "10 Marks (BSEB)",
    summary: "कोणों के प्रकार, रैखिक युग्म, शीर्षाभिमुख कोण, समांतर रेखाएँ व त्रिभुज कोण योग।",
    keyConcepts: [{ heading: "1. कोण युग्म व समांतर रेखाएँ", body: "पूरक योग = 90°, संपूरक योग = 180°, त्रिभुज कोण योग = 180°।" }],
    formulas: ["∠A + ∠B + ∠C = 180°  |  बहिष्कोण = ∠A + ∠B"],
    mcqs: [{ id: "q-9m6-1", question: "वह कोण जो अपने पूरक के बराबर है:", options: ["30°", "45°", "60°", "90°"], correctIndex: 1, explanation: "2x = 90° ⇒ x = 45°।" }]
  },
  12: {
    englishTitle: "Heron's Formula",
    duration: "50 mins",
    weightage: "8 Marks (BSEB)",
    summary: "हीरोन के सूत्र द्वारा त्रिभुज एवं चतुर्भुज का क्षेत्रफल।",
    keyConcepts: [{ heading: "1. हीरोन का सूत्र", body: "s = (a+b+c)/2 तथा Δ = √[s(s-a)(s-b)(s-c)]।" }],
    formulas: ["s = (a + b + c)/2  |  Δ = √[s(s-a)(s-b)(s-c)]  |  समबाहु Δ = (√3/4)a²"],
    mcqs: [{ id: "q-9m12-1", question: "भुजाएँ दोगुनी करने पर क्षेत्रफल में प्रतिशत वृद्धि:", options: ["100%", "200%", "300%", "400%"], correctIndex: 2, explanation: "नया क्षेत्रफल 4Δ ⇒ 300% वृद्धि।" }]
  },
  13: {
    englishTitle: "Surface Areas and Volumes",
    duration: "70 mins",
    weightage: "12 Marks (BSEB)",
    summary: "घनाभ, घन, बेलन, शंकु, गोला एवं अर्द्धगोला के पृष्ठीय क्षेत्रफल और आयतन।",
    keyConcepts: [{ heading: "1. सभी 3D ठोस आकृतियों के सूत्र", body: "शंकु l = √(r²+h²), V = ⅓πr²h; गोला SA = 4πr², V = (4/3)πr³; 1 m³ = 1000 लीटर।" }],
    formulas: ["बेलन: 2πrh, πr²h  |  शंकु: πrl, ⅓πr²h  |  गोला: 4πr², (4/3)πr³"],
    mcqs: [{ id: "q-9m13-1", question: "शंकु r = 7 cm, h = 24 cm की तिर्यक ऊँचाई l है:", options: ["25 cm", "26 cm", "31 cm", "17 cm"], correctIndex: 0, explanation: "√(49+576) = 25 cm।" }]
  }
};

const GEOMETRY_CH7_TO_11 = [
  { id: "ch-math-9-ch7", number: 7, title: "अध्याय 7: त्रिभुज (Triangles)", duration: "65 mins", weightage: "6 Marks (BSEB)", pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf", downloadUrl: "./class-9-math-book-hindi.html#ch7", downloadName: "BSEB_Class_9_Math_Ch7.html", pdfPages: 14, pdfSize: "1.14 MB", notes: { summary: "सर्वांगसमता (SAS, ASA, AAS, SSS, RHS), समद्विबाहु त्रिभुज व असमिकाएँ।", keyConcepts: [{ heading: "सर्वांगसमता नियम", body: "SAS, ASA, AAS, SSS, RHS (AAA व SSA नहीं)।" }], formulas: ["a + b > c  |  समबाहु प्रत्येक कोण = 60°"] }, objectiveQuestions: [{ id: "q-9m7-1", question: "कौन सर्वांगसमता की कसौटी नहीं है?", options: ["SAS", "ASA", "SSS", "SSA"], correctIndex: 3, explanation: "SSA कसौटी नहीं है।" }], subjectiveQuestions: [] },
  { id: "ch-math-9-ch8", number: 8, title: "अध्याय 8: चतुर्भुज (Quadrilaterals)", duration: "60 mins", weightage: "6 Marks (BSEB)", pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf", downloadUrl: "./class-9-math-book-hindi.html#ch8", downloadName: "BSEB_Class_9_Math_Ch8.html", pdfPages: 13, pdfSize: "1.14 MB", notes: { summary: "समांतर चतुर्भुज, आयत, वर्ग, समचतुर्भुज एवं मध्य-बिंदु प्रमेय।", keyConcepts: [{ heading: "मध्य-बिंदु प्रमेय", body: "EF || BC तथा EF = ½BC।" }], formulas: ["∠A + ∠B + ∠C + ∠D = 360°"] }, objectiveQuestions: [{ id: "q-9m8-1", question: "समचतुर्भुज के विकर्ण किस कोण पर काटते हैं?", options: ["45°", "60°", "90°", "120°"], correctIndex: 2, explanation: "90° पर समद्विभाजित करते हैं।" }], subjectiveQuestions: [] },
  { id: "ch-math-9-ch9", number: 9, title: "अध्याय 9: समांतर चतुर्भुजों और त्रिभुजों के क्षेत्रफल", duration: "50 mins", weightage: "5 Marks (BSEB)", pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf", downloadUrl: "./class-9-math-book-hindi.html#ch9", downloadName: "BSEB_Class_9_Math_Ch9.html", pdfPages: 12, pdfSize: "1.14 MB", notes: { summary: "एक ही आधार व समांतर रेखाओं के बीच आकृतियों के क्षेत्रफल व माध्यिका गुणधर्म।", keyConcepts: [{ heading: "क्षेत्रफल प्रमेय", body: "ar(△) = ½ ar(∥gm)।" }], formulas: ["ar(∥gm) = b × h  |  ar(△) = ½ b h"] }, objectiveQuestions: [], subjectiveQuestions: [] },
  { id: "ch-math-9-ch10", number: 10, title: "अध्याय 10: वृत्त (Circles)", duration: "65 mins", weightage: "7 Marks (BSEB)", pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf", downloadUrl: "./class-9-math-book-hindi.html#ch10", downloadName: "BSEB_Class_9_Math_Ch10.html", pdfPages: 14, pdfSize: "1.14 MB", notes: { summary: "जीवा प्रमेय, प्रमेय 10.8 (∠AOB = 2∠ACB), अर्द्धवृत्त का कोण 90° तथा चक्रीय चतुर्भुज।", keyConcepts: [{ heading: "वृत्त प्रमेय", body: "चक्रीय चतुर्भुज के सम्मुख कोणों का योग 180° होता है।" }], formulas: ["∠AOB = 2∠ACB  |  ∠A + ∠C = 180°"] }, objectiveQuestions: [], subjectiveQuestions: [] },
  { id: "ch-math-9-ch11", number: 11, title: "अध्याय 11: रचनाएँ (Constructions)", duration: "45 mins", weightage: "5 Marks (BSEB)", pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf", downloadUrl: "./class-9-math-book-hindi.html#ch11", downloadName: "BSEB_Class_9_Math_Ch11.html", pdfPages: 11, pdfSize: "1.14 MB", notes: { summary: "पटरी व परकार से मानक कोण तथा त्रिभुज रचना की तीनों स्थितियाँ।", keyConcepts: [{ heading: "मानक कोण", body: "15° के गुणज (30°, 45°, 60°, 75°, 90°, 105°, 120°, 135°)।" }], formulas: ["लंब समद्विभाजक त्रिज्या > ½AB"] }, objectiveQuestions: [], subjectiveQuestions: [] }
];

export function buildCompleteBsebClass9Maths() {
  const arrangedChapters = [];

  arrangedChapters.push({
    id: "ch-bseb-9-math-complete-pdf-book",
    number: "BOOK",
    title: "संपूर्ण 205-पेज PDF पुस्तक — BSEB कक्षा 9 गणित (सभी 15 अध्याय, सूत्र, प्रमेय एवं मॉडल पेपर — हिंदी संस्करण)",
    duration: "205 Pages PDF",
    weightage: "100 Marks (Full Syllabus)",
    pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf",
    downloadUrl: PDF_BOOK_DRIVE_DOWNLOAD,
    downloadName: "BSEB_Class_9_Math_Hindi_Book.pdf",
    pdfPages: 205,
    pdfSize: "1.14 MB",
    notes: {
      summary: "बिहार बोर्ड (BSEB / SCERT) कक्षा 9 गणित के सभी 15 अध्यायों की संपूर्ण 205-पेज हिंदी संस्करण PDF पुस्तक। वेब रीडर के लिए ./class-9-math-book-hindi.html खोलें या सीधे 205-पेज PDF डाउनलोड करें।",
      keyConcepts: [
        { heading: "पुस्तक में सम्मिलित सभी 15 अध्याय", body: "अध्याय 1 से 15 (संख्या पद्धति से प्रायिकता तक), 150+ हल उदाहरण, 225+ MCQs, महा-सूत्र संग्रह एवं 100-अंक मॉडल पेपर।" },
        { heading: "ऑनलाइन रीडर व डायरेक्ट डाउनलोड लिंक", body: "• वेब रीडर: https://simpledev12.github.io/ExamPulse/class-9-math-book-hindi.html\n• PDF लिंक: " + PDF_BOOK_DRIVE_VIEW }
      ],
      formulas: [
        "अध्याय 1–2: (√a+√b)(√a-√b)=a-b  |  a³+b³+c³=3abc (जब a+b+c=0)",
        "अध्याय 6–10: ∠A+∠B+∠C=180°  |  EF=½BC  |  ∠AOB=2∠ACB",
        "अध्याय 12–15: Δ=√[s(s-a)(s-b)(s-c)]  |  Mode=3Med-2Mean  |  P(E)+P(Ē)=1"
      ]
    },
    objectiveQuestions: [{ id: "q-book-1", question: "BSEB कक्षा 9 गणित का कुल पूर्णांक है:", options: ["50", "70", "80", "100"], correctIndex: 3, explanation: "कुल 100 अंक।" }],
    subjectiveQuestions: []
  });

  const mapByCh = {};
  bsebClass9MathSubjective50.chapters.forEach(hch => {
    const chNum = hch.chapterNumber;
    if (chNum === 14) return;
    const meta = CHAPTER_METADATA_MAP[chNum] || { englishTitle: hch.chapterName, duration: "55 mins", weightage: "8 Marks", summary: hch.chapterName, keyConcepts: [], formulas: [], mcqs: [] };
    mapByCh[chNum] = {
      id: `ch-math-9-ch${chNum}`,
      number: chNum,
      title: `अध्याय ${chNum}: ${hch.chapterName}`,
      duration: meta.duration,
      weightage: meta.weightage,
      pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf",
      downloadUrl: `./class-9-math-book-hindi.html#ch${chNum}`,
      downloadName: `Class9_Maths_BSEB_Ch${chNum}_Notes.html`,
      pdfPages: 12,
      pdfSize: "1.14 MB",
      notes: { summary: meta.summary, keyConcepts: meta.keyConcepts, formulas: meta.formulas },
      objectiveQuestions: meta.mcqs,
      subjectiveQuestions: hch.questions.map(q => ({ id: `sq-9m${chNum}-q${q.qNo}`, qNo: q.qNo, type: `HOTS Subjective • प्रश्न #${q.qNo}`, question: q.question, table: q.table, answer: q.answer, solution: q.solution }))
    };
  });

  [1, 2, 3, 4, 5, 6].forEach(n => { if (mapByCh[n]) arrangedChapters.push(mapByCh[n]); });
  GEOMETRY_CH7_TO_11.forEach(ch => arrangedChapters.push(ch));
  [12, 13].forEach(n => { if (mapByCh[n]) arrangedChapters.push(mapByCh[n]); });

  const baseCh14 = CH14_SUBJECT.chapters[0];
  const hotsCh14Obj = bsebClass9MathSubjective50.chapters.find(c => c.chapterNumber === 14);
  const hotsCh14Questions = (hotsCh14Obj ? hotsCh14Obj.questions : []).map(q => ({ id: `sq-9m14-q${q.qNo}`, qNo: q.qNo, type: `HOTS Subjective • प्रश्न #${q.qNo}`, question: q.question, table: q.table, answer: q.answer, solution: q.solution }));
  arrangedChapters.push({ ...baseCh14, number: 14, title: "अध्याय 14: सांख्यिकी (Statistics) — संपूर्ण नोट्स, MCQs एवं हल", downloadUrl: "./public/notes/Class9_Maths_BSEB_Ch14_Statistics.md", downloadName: "Class9_Maths_BSEB_Ch14_Statistics_Notes.md", subjectiveQuestions: [...baseCh14.subjectiveQuestions, ...hotsCh14Questions] });

  const ch15Mcqs = (bsebClass9Ch15.mcqs || []).map((m, idx) => ({ id: `q-9m15-${m.id || (idx + 1)}`, question: m.question, options: m.options, correctIndex: m.correctIndex !== undefined ? m.correctIndex : m.correctAnswer, explanation: m.explanation }));
  const ch15Subj = (bsebClass9Ch15.subjective || []).map((s, idx) => ({ id: `sq-9m15-${s.id || (idx + 1)}`, type: `${s.type || 'लघु उत्तरीय'} (Q#${idx + 1})`, question: s.question, solution: s.solution }));
  arrangedChapters.push({ id: "ch-probability-9-bseb", number: 15, title: "अध्याय 15: प्रायिकता (Probability) — संपूर्ण नोट्स, MCQs एवं हल", duration: "60 mins", weightage: "8 Marks (BSEB)", pdfFileName: "Class9_Maths_BSEB_Ch15_Probability_Notes_Hi.pdf", downloadUrl: "./public/notes/Class9_Maths_BSEB_Ch15_Probability.md", downloadName: "Class9_Maths_BSEB_Ch15_Probability_Notes.md", pdfPages: 8, pdfSize: "1.6 MB", notes: { summary: bsebClass9Ch15.description || "आनुभविक प्रायिकता नोट्स।", keyConcepts: [{ heading: "प्रायिकता सूत्र", body: "P(E) = अनुकूल परिणाम / कुल अभिप्रयोग; 0 ≤ P(E) ≤ 1।" }], formulas: ["P(E) = m / n  |  P(E) + P(E नहीं) = 1"] }, objectiveQuestions: ch15Mcqs, subjectiveQuestions: ch15Subj });

  const all50Questions = [];
  bsebClass9MathSubjective50.chapters.forEach(hch => { hch.questions.forEach(q => { all50Questions.push({ id: `hots50-q${q.qNo}`, qNo: q.qNo, type: `अध्याय ${hch.chapterNumber}: ${hch.chapterName} • प्रश्न #${q.qNo}`, question: q.question, table: q.table, answer: q.answer, solution: q.solution }); }); });
  arrangedChapters.push({ id: "ch-hots-50-9-bseb", number: "50-HOTS", title: "संपूर्ण 50 कठिन सब्जेक्टिव प्रश्न बैंक एवं हल (Master HOTS Set)", duration: "180 mins", weightage: "50 Marks", pdfFileName: "Class9_Maths_BSEB_50_Subjective_HOTS_Complete.pdf", downloadUrl: "./class-9-math-subjective-50.html", downloadName: "Class9_Maths_BSEB_50_Subjective_HOTS.html", pdfPages: 18, pdfSize: "3.2 MB", notes: { summary: "सभी 50 कठिन सब्जेक्टिव प्रश्न एवं हल।", keyConcepts: [], formulas: ["हीरोन का सूत्र: Δ = √[s(s-a)(s-b)(s-c)]"] }, objectiveQuestions: [...baseCh14.objectiveQuestions.slice(0, 5), ...ch15Mcqs.slice(0, 5)], subjectiveQuestions: all50Questions });

  return { id: "maths-9", name: "Mathematics (गणित — BSEB)", icon: "Calculator", code: "MAT-09-BSEB", chaptersCount: arrangedChapters.length, description: "205-पेज संपूर्ण हिंदी PDF पुस्तक + सभी 15 अध्याय (संख्या पद्धति से प्रायिकता तक) के नोट्स, सूत्र एवं 50 HOTS प्रश्न बैंक", chapters: arrangedChapters };
}

export const BSEB_CLASS9_MATHS_MOCK_TEST = { id: "test-bseb-9-maths", title: "Class 9 Mathematics (BSEB) — Complete Board Mock Test", classLabel: "Class 9 (BSEB)", subject: "Mathematics (गणित — बिहार बोर्ड)", durationSeconds: 900, totalMarks: 40, marksPerCorrect: 4, negativeMarks: 0, questions: [{ id: "mt9-1", section: "अध्याय 14: सांख्यिकी", question: "14, 25, 14, 28, 18, 14 का बहुलक है:", options: ["14", "18", "25", "28"], correctIndex: 0, explanation: "14 सबसे अधिक बार आया है।" }] };

export function enrichExamPulseCurriculum(mockData) {
  const completeMaths9 = buildCompleteBsebClass9Maths();
  const class9 = mockData.classes.find(c => c.id === 'class-9');
  if (class9) {
    class9.boardTag = 'BSEB / CBSE • Hindi + English (205p Book)';
    class9.subjects = [completeMaths9, ...class9.subjects.filter(s => s.id !== 'maths-9')];
    class9.subjectsCount = class9.subjects.length;
    class9.chaptersCount = class9.subjects.reduce((acc, s) => acc + (s.chapters ? s.chapters.length : 0), 0);
  }
  if (mockData.mockTests && !mockData.mockTests.some(t => t.id === BSEB_CLASS9_MATHS_MOCK_TEST.id)) {
    mockData.mockTests = [BSEB_CLASS9_MATHS_MOCK_TEST, ...mockData.mockTests];
  }
  return mockData;
}

export default enrichExamPulseCurriculum;
