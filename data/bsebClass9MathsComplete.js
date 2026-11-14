// Unified BSEB Class 9 Mathematics Curriculum Aggregator
// Connects bsebClass9Ch14.js, bsebClass9Ch15.js, and bsebClass9MathSubjective50.js into the ExamPulse website
import { BSEB_CLASS9_MATHS_SUBJECT as CH14_SUBJECT } from './bsebClass9Ch14.js';
import { bsebClass9Ch15 } from './bsebClass9Ch15.js';
import { bsebClass9MathSubjective50 } from './bsebClass9MathSubjective50.js';

const CHAPTER_METADATA_MAP = {
  1: {
    englishTitle: "Number System",
    duration: "60 mins",
    weightage: "10 Marks (BSEB)",
    summary: "संख्या पद्धति (Number System) में परिमेय संख्याएँ (Rational Numbers), अपरिमेय संख्याएँ (Irrational Numbers), वास्तविक संख्याओं पर संक्रियाएँ, हर का परिमेयकरण (Rationalization of Denominator), आवर्त दशमलव को p/q रूप में बदलना तथा वास्तविक संख्याओं के लिए घातांक के नियम (Laws of Exponents) शामिल हैं।",
    keyConcepts: [
      {
        heading: "1. परिमेय एवं अपरिमेय संख्याएँ (Rational & Irrational Numbers)",
        body: "• परिमेय संख्याएँ (Rational Numbers): वे संख्याएँ जिन्हें p/q के रूप में लिखा जा सके, जहाँ p और q पूर्णांक हैं तथा q ≠ 0 है। इनका दशमलव प्रसार सांत (Terminating) या अनवसानी आवर्ती (Non-terminating Recurring) होता है।\n• अपरिमेय संख्याएँ (Irrational Numbers): वे संख्याएँ जिन्हें p/q के रूप में नहीं लिखा जा सकता (जैसे √2, √3, √5, π)।"
      },
      {
        heading: "2. हर का परिमेयकरण एवं बीजगणितीय सर्वसमिकाएँ (Rationalization)",
        body: "यदि किसी व्यंजक के हर में अपरिमेय संख्या (a + b√x) हो, तो अंश और हर में उसके संयुग्मी (a - b√x) से गुणा करके हर को परिमेय बनाया जाता है। यदि x = a + √b और 1/x = a - √b हो, तो x + 1/x = 2a से x² + 1/x² = (x + 1/x)² - 2 तथा x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x) आसानी से ज्ञात किए जाते हैं।"
      }
    ],
    formulas: [
      "(√a + √b)(√a - √b) = a - b  |  (a + √b)(a - √b) = a² - b",
      "x² + 1/x² = (x + 1/x)² - 2 = (x - 1/x)² + 2",
      "x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x)",
      "a^m · a^n = a^(m+n)  |  (a^m)/(a^n) = a^(m-n)  |  (a^m)^n = a^(mn)"
    ],
    mcqs: [
      {
        id: "q-9m1-1",
        question: "निम्नलिखित में से कौन-सी संख्या एक अपरिमेय संख्या (Irrational Number) है?",
        options: ["√4", "√9", "√3", "0.25"],
        correctIndex: 2,
        explanation: "√4 = 2, √9 = 3 और 0.25 = 1/4 परिमेय संख्याएँ हैं, जबकि √3 एक अपरिमेय संख्या है।"
      },
      {
        id: "q-9m1-2",
        question: "1 / (√3 - √2) के हर का परिमेयकरण करने पर प्राप्त मान क्या होगा?",
        options: ["√3 - √2", "√3 + √2", "(√3 + √2)/5", "1"],
        correctIndex: 1,
        explanation: "अंश और हर में (√3 + √2) से गुणा करने पर: (√3 + √2) / (3 - 2) = √3 + √2।"
      },
      {
        id: "q-9m1-3",
        question: "यदि x = 3 + 2√2 हो, तो (x + 1/x) का मान क्या होगा?",
        options: ["6", "4√2", "3", "34"],
        correctIndex: 0,
        explanation: "1/x = 3 - 2√2, अतः x + 1/x = (3 + 2√2) + (3 - 2√2) = 6।"
      }
    ]
  },
  2: {
    englishTitle: "Polynomials",
    duration: "75 mins",
    weightage: "12 Marks (BSEB)",
    summary: "बहुपद (Polynomials) में बहुपद के शून्यक, शेषफल प्रमेय (Remainder Theorem), गुणनखंड प्रमेय (Factor Theorem), तथा विशेष बीजगणितीय सर्वसमिकाएँ (a³+b³, a³-b³, a³+b³+c³-3abc एवं त्रिघात बहुपदों का गुणनखंड) बोर्ड परीक्षा के लिए अत्यंत महत्वपूर्ण हैं।",
    keyConcepts: [
      {
        heading: "1. शेषफल प्रमेय एवं गुणनखंड प्रमेय (Remainder & Factor Theorem)",
        body: "• शेषफल प्रमेय: बहुपद p(x) को (x - a) से भाग देने पर शेषफल p(a) होता है।\n• गुणनखंड प्रमेय: यदि p(a) = 0 हो, तो (x - a) बहुपद p(x) का एक गुणनखंड होता है।"
      },
      {
        heading: "2. विशेष घन एवं त्रिपदीय गुणनखंड सूत्र (Cubic Factor Identities)",
        body: "• a³ + b³ = (a + b)(a² - ab + b²)\n• a³ - b³ = (a - b)(a² + ab + b²)\n• a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)\n• यदि a + b + c = 0 हो, तो a³ + b³ + c³ = 3abc होता है।"
      }
    ],
    formulas: [
      "(a + b + c)² = a² + b² + c² + 2(ab + bc + ca)",
      "a³ + b³ = (a + b)(a² - ab + b²)  |  a³ - b³ = (a - b)(a² + ab + b²)",
      "a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca) = ½(a+b+c)[(a-b)² + (b-c)² + (c-a)²]",
      "यदि a + b + c = 0 हो, तो a³ + b³ + c³ = 3abc"
    ],
    mcqs: [
      {
        id: "q-9m2-1",
        question: "यदि a + b + c = 0 हो, तो a³ + b³ + c³ का मान किसके बराबर होता है?",
        options: ["0", "abc", "3abc", "a² + b² + c²"],
        correctIndex: 2,
        explanation: "सर्वसमिका a³ + b³ + c³ - 3abc = (a+b+c)(a²+b²+c²-ab-bc-ca) में a+b+c = 0 रखने पर a³ + b³ + c³ = 3abc प्राप्त होता है।"
      },
      {
        id: "q-9m2-2",
        question: "यदि (x - 1) बहुपद p(x) = 4x³ + 3x² - 4x + k का एक गुणनखंड है, तो k का मान क्या होगा?",
        options: ["3", "-3", "1", "-1"],
        correctIndex: 1,
        explanation: "p(1) = 0 ⇒ 4(1) + 3(1) - 4(1) + k = 0 ⇒ 3 + k = 0 ⇒ k = -3।"
      }
    ]
  },
  3: {
    englishTitle: "Coordinate Geometry",
    duration: "45 mins",
    weightage: "6 Marks (BSEB)",
    summary: "निर्देशांक ज्यामिति (Coordinate Geometry) में कार्तीय तल (Cartesian Plane), X-अक्ष तथा Y-अक्ष, मूलबिंदु (0,0), चारों चतुर्थांशों के चिह्न तथा भुज (Abscissa) व कोटि (Ordinate) की सहायता से बिंदुओं का आलेखन और क्षेत्रफल ज्ञात किया जाता है।",
    keyConcepts: [
      {
        heading: "1. भुज, कोटि एवं चतुर्थांश (Abscissa, Ordinate & Quadrants)",
        body: "• बिंदु (x, y) में x को भुज (Y-अक्ष से लांबिक दूरी) और y को कोटि (X-अक्ष से लांबिक दूरी) कहते हैं।\n• चतुर्थांश चिह्न: प्रथम (+, +), द्वितीय (-, +), तृतीय (-, -), चतुर्थ (+, -)।\n• X-अक्ष पर बिंदु (x, 0) तथा Y-अक्ष पर बिंदु (0, y) के रूप में होता है।"
      }
    ],
    formulas: [
      "मूलबिंदु (Origin) के निर्देशांक = (0, 0)",
      "X-अक्ष से बिंदु (x, y) की दूरी = |y|  |  Y-अक्ष से बिंदु (x, y) की दूरी = |x|"
    ],
    mcqs: [
      {
        id: "q-9m3-1",
        question: "बिंदु (7, -4) किस चतुर्थांश (Quadrant) में स्थित है?",
        options: ["प्रथम चतुर्थांश", "द्वितीय चतुर्थांश", "तृतीय चतुर्थांश", "चतुर्थ चतुर्थांश"],
        correctIndex: 3,
        explanation: "भुज धनात्मक (+) और कोटि ऋणात्मक (-) होने के कारण बिंदु (7, -4) चतुर्थ चतुर्थांश में स्थित है।"
      }
    ]
  },
  4: {
    englishTitle: "Linear Equations in Two Variables",
    duration: "55 mins",
    weightage: "8 Marks (BSEB)",
    summary: "ax + by + c = 0 के रूप के समीकरण को दो चरों वाला रैखिक समीकरण कहते हैं। इसके अपरिमित रूप से अनेक हल होते हैं और इसका आलेख सदैव एक सरल रेखा होता है।",
    keyConcepts: [
      {
        heading: "1. मानक रूप, हल एवं आलेख (Standard Form, Solutions & Graph)",
        body: "• मानक रूप: ax + by + c = 0।\n• रेखा जहाँ X-अक्ष को काटती है वहाँ y = 0 होता है, और जहाँ Y-अक्ष को काटती है वहाँ x = 0 होता है।"
      }
    ],
    formulas: [
      "मानक रूप: ax + by + c = 0",
      "X-अक्ष का समीकरण: y = 0  |  Y-अक्ष का समीकरण: x = 0"
    ],
    mcqs: [
      {
        id: "q-9m4-1",
        question: "दो चरों वाले रैखिक समीकरण 3x + 2y = 12 का आलेख X-अक्ष को किस बिंदु पर काटता है?",
        options: ["(0, 6)", "(4, 0)", "(6, 0)", "(0, 4)"],
        correctIndex: 1,
        explanation: "X-अक्ष पर y = 0 रखने पर 3x = 12 ⇒ x = 4, अतः प्रतिच्छेद बिंदु (4, 0) है।"
      }
    ]
  },
  5: {
    englishTitle: "Introduction to Euclid's Geometry",
    duration: "40 mins",
    weightage: "5 Marks (BSEB)",
    summary: "यूक्लिड की ज्यामिति में मौलिक परिभाषाओं, अभिगृहीतों (Axioms) तथा पाँच अभिधारणाओं (Postulates) की सहायता से ज्यामितीय परिणाम सिद्ध किए जाते हैं।",
    keyConcepts: [
      {
        heading: "1. यूक्लिड के अभिगृहीत एवं पाँचवीं अभिधारणा (Euclid's Axioms & 5th Postulate)",
        body: "• अभिगृहीत 3: यदि बराबरों को बराबरों में से घटाया जाए, तो शेषफल भी बराबर होते हैं।\n• अभिगृहीत 4: वे वस्तुएँ जो परस्पर संपाती हों, एक-दूसरे के बराबर होती हैं।\n• अभिगृहीत 5: पूर्ण अपने भाग से बड़ा होता है।"
      }
    ],
    formulas: [
      "यदि C रेखाखंड AB के मध्य स्थित हो, तो AC + CB = AB (अभिगृहीत 4)",
      "दो भिन्न बिंदुओं से होकर केवल एक अद्वितीय सरल रेखा खींची जा सकती है"
    ],
    mcqs: [
      {
        id: "q-9m5-1",
        question: "'पूर्ण अपने भाग से बड़ा होता है' — यह कथन क्या कहलाता है?",
        options: ["एक परिभाषा", "एक अभिगृहीत (Axiom)", "एक अभिधारणा", "एक प्रमेय"],
        correctIndex: 1,
        explanation: "यह यूक्लिड का पाँचवाँ अभिगृहीत (Axiom 5) है जो गणित में सर्वत्र सत्य माना जाता है।"
      }
    ]
  },
  6: {
    englishTitle: "Lines and Angles",
    duration: "60 mins",
    weightage: "10 Marks (BSEB)",
    summary: "रेखाएँ और कोण (Lines and Angles) में पूरक व संपूरक कोण, रैखिक युग्म, शीर्षाभिमुख कोण, समांतर रेखाओं पर तिर्यक रेखा के गुण तथा त्रिभुज का कोण योग गुण (180°) व बहिष्कोण प्रमेय शामिल हैं।",
    keyConcepts: [
      {
        heading: "1. कोण युग्म एवं समांतर रेखाओं के गुण (Angle Pairs & Parallel Lines)",
        body: "• पूरक कोणों का योग = 90° तथा संपूरक कोणों का योग = 180°।\n• समांतर रेखाओं में संगत कोण एवं एकांतर अंतः कोण बराबर होते हैं, तथा एक ही ओर के अंतः कोणों का योग 180° होता है (अतः उनके समद्विभाजक 90° पर मिलते हैं)।"
      }
    ],
    formulas: [
      "पूरक कोण = 90° - θ  |  संपूरक कोण = 180° - θ",
      "त्रिभुज के तीनों कोणों का योग: ∠A + ∠B + ∠C = 180°",
      "बहिष्कोण प्रमेय: ∠ACD = ∠A + ∠B"
    ],
    mcqs: [
      {
        id: "q-9m6-1",
        question: "एक कोण अपने पूरक कोण के बराबर है। उस कोण की माप क्या होगी?",
        options: ["30°", "45°", "60°", "90°"],
        correctIndex: 1,
        explanation: "x + x = 90° ⇒ 2x = 90° ⇒ x = 45°।"
      }
    ]
  },
  12: {
    englishTitle: "Heron's Formula",
    duration: "50 mins",
    weightage: "8 Marks (BSEB)",
    summary: "हीरोन के सूत्र (Heron's Formula) द्वारा त्रिभुज की तीनों भुजाएँ a, b, c ज्ञात होने पर उसका क्षेत्रफल Δ = √[s(s-a)(s-b)(s-c)] निकाला जाता है।",
    keyConcepts: [
      {
        heading: "1. हीरोन का सूत्र एवं चतुर्भुज का क्षेत्रफल (Heron's Formula & Quadrilaterals)",
        body: "• अर्धपरिमाप s = (a + b + c)/2।\n• त्रिभुज का क्षेत्रफल = √[s(s - a)(s - b)(s - c)]।\n• किसी चतुर्भुज का क्षेत्रफल निकालने के लिए विकर्ण खींचकर उसे दो त्रिभुजों में बाँटते हैं।"
      }
    ],
    formulas: [
      "अर्धपरिमाप s = (a + b + c) / 2",
      "हीरोन का सूत्र: क्षेत्रफल Δ = √[s(s - a)(s - b)(s - c)]",
      "समबाहु त्रिभुज का क्षेत्रफल = (√3 / 4) × भुजा²"
    ],
    mcqs: [
      {
        id: "q-9m12-1",
        question: "यदि किसी त्रिभुज की प्रत्येक भुजा को दोगुना कर दिया जाए, तो उसके क्षेत्रफल में कितने प्रतिशत की वृद्धि होगी?",
        options: ["100%", "200%", "300%", "400%"],
        correctIndex: 2,
        explanation: "भुजाएँ 2a, 2b, 2c होने पर नया क्षेत्रफल 4Δ हो जाता है। अतः वृद्धि = ((4Δ - Δ)/Δ)×100% = 300%।"
      }
    ]
  },
  13: {
    englishTitle: "Surface Areas and Volumes",
    duration: "70 mins",
    weightage: "12 Marks (BSEB)",
    summary: "पृष्ठीय क्षेत्रफल और आयतन (Surface Areas & Volumes) में घनाभ, घन, बेलन, शंकु तथा गोले के वक्र पृष्ठ, कुल पृष्ठ एवं आयतन के सूत्र और व्यावहारिक प्रश्न शामिल हैं।",
    keyConcepts: [
      {
        heading: "1. बेलन, शंकु एवं गोले के मुख्य सूत्र (Cylinder, Cone & Sphere)",
        body: "• बेलन (Cylinder): वक्र पृष्ठ = 2πrh, कुल पृष्ठ = 2πr(r + h), आयतन = πr²h।\n• शंकु (Cone): तिर्यक ऊँचाई l = √(r² + h²), वक्र पृष्ठ = πrl, कुल पृष्ठ = πr(l + r), आयतन = ⅓πr²h।\n• गोला (Sphere): पृष्ठीय क्षेत्रफल = 4πr², आयतन = (4/3)πr³।"
      }
    ],
    formulas: [
      "बेलन का वक्र पृष्ठ = 2πrh  |  बेलन का आयतन = πr²h",
      "शंकु का वक्र पृष्ठ = πrl (l = √(r² + h²))  |  शंकु का कुल पृष्ठ = πr(l + r)  |  आयतन = ⅓πr²h",
      "गोले का पृष्ठ = 4πr²  |  आयतन = (4/3)πr³  |  1 m³ = 1000 लीटर"
    ],
    mcqs: [
      {
        id: "q-9m13-1",
        question: "एक शंकु के आधार की त्रिज्या 7 cm और ऊँचाई 24 cm है। इसकी तिर्यक ऊँचाई (l) क्या होगी?",
        options: ["25 cm", "26 cm", "31 cm", "17 cm"],
        correctIndex: 0,
        explanation: "l = √(r² + h²) = √(7² + 24²) = √(49 + 576) = √625 = 25 cm।"
      }
    ]
  }
};

export function buildCompleteBsebClass9Maths() {
  const arrangedChapters = [];

  // 1. Build Chapters 1–6 and 12–13 from bsebClass9MathSubjective50 + CHAPTER_METADATA_MAP
  bsebClass9MathSubjective50.chapters.forEach(hch => {
    const chNum = hch.chapterNumber;
    if (chNum === 14) return;
    const meta = CHAPTER_METADATA_MAP[chNum] || {
      englishTitle: hch.chapterName,
      duration: "55 mins",
      weightage: "8 Marks (BSEB)",
      summary: hch.chapterName,
      keyConcepts: [],
      formulas: [],
      mcqs: []
    };

    const subjQuestions = hch.questions.map(q => ({
      id: `sq-9m${chNum}-q${q.qNo}`,
      qNo: q.qNo,
      type: `HOTS Subjective • प्रश्न #${q.qNo}`,
      question: q.question,
      table: q.table,
      answer: q.answer,
      solution: q.solution
    }));

    arrangedChapters.push({
      id: `ch-math-9-ch${chNum}`,
      number: chNum,
      title: `अध्याय ${chNum}: ${hch.chapterName}`,
      duration: meta.duration,
      weightage: meta.weightage,
      pdfFileName: `Class9_Maths_BSEB_Ch${chNum}_${meta.englishTitle.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
      downloadUrl: `./class-9-math-subjective-50.html#ch${chNum}`,
      downloadName: `Class9_Maths_BSEB_Ch${chNum}_HOTS.html`,
      pdfPages: 6,
      pdfSize: "1.2 MB",
      notes: {
        summary: meta.summary,
        keyConcepts: meta.keyConcepts,
        formulas: meta.formulas
      },
      objectiveQuestions: meta.mcqs,
      subjectiveQuestions: subjQuestions
    });
  });

  // 2. Build Chapter 14: Statistics (full chapter from bsebClass9Ch14.js + 5 HOTS questions Q46–Q50)
  const baseCh14 = CH14_SUBJECT.chapters[0];
  const hotsCh14Obj = bsebClass9MathSubjective50.chapters.find(c => c.chapterNumber === 14);
  const hotsCh14Questions = (hotsCh14Obj ? hotsCh14Obj.questions : []).map(q => ({
    id: `sq-9m14-q${q.qNo}`,
    qNo: q.qNo,
    type: `HOTS Subjective (5 Marks) • प्रश्न #${q.qNo}`,
    question: q.question,
    table: q.table,
    answer: q.answer,
    solution: q.solution
  }));

  arrangedChapters.push({
    ...baseCh14,
    number: 14,
    title: "अध्याय 14: सांख्यिकी (Statistics) — संपूर्ण नोट्स, MCQs एवं हल",
    downloadUrl: "./public/notes/Class9_Maths_BSEB_Ch14_Statistics.md",
    downloadName: "Class9_Maths_BSEB_Ch14_Statistics_Notes.md",
    subjectiveQuestions: [...baseCh14.subjectiveQuestions, ...hotsCh14Questions]
  });

  // 3. Build Chapter 15: Probability (from bsebClass9Ch15.js + full notes)
  const ch15Mcqs = (bsebClass9Ch15.mcqs || []).map((m, idx) => ({
    id: `q-9m15-${m.id || (idx + 1)}`,
    question: m.question,
    options: m.options,
    correctIndex: m.correctIndex !== undefined ? m.correctIndex : m.correctAnswer,
    explanation: m.explanation
  }));

  const ch15Subj = [
    ...(bsebClass9Ch15.subjective || []).map((s, idx) => ({
      id: `sq-9m15-${s.id || (idx + 1)}`,
      type: `${s.type || 'लघु उत्तरीय'} (Board Q#${idx + 1})`,
      question: s.question,
      solution: s.solution
    })),
    {
      id: "sq-9m15-4",
      type: "लघु उत्तरीय (3 Marks)",
      question: "एक सिक्के को 1000 बार उछाला जाता है और निम्नलिखित बारंबारताएँ प्राप्त होती हैं: चित (Head): 455, पट (Tail): 545। प्रत्येक घटना की प्रायिकता ज्ञात कीजिए।",
      answer: "P(चित) = 0.455, P(पट) = 0.545",
      solution: "कुल अभिप्रयोगों की संख्या (n) = 1000\n1. चित आने की प्रायिकता P(E) = 455 / 1000 = 0.455\n2. पट आने की प्रायिकता P(F) = 545 / 1000 = 0.545\nसत्यापन: P(E) + P(F) = 0.455 + 0.545 = 1.000।"
    },
    {
      id: "sq-9m15-5",
      type: "दीर्घ उत्तरीय (5 Marks)",
      question: "एक पासे को 500 बार फेंका गया और परिणामों की बारंबारताएँ इस प्रकार दर्ज की गईं: परिणाम 1 (80 बार), 2 (75 बार), 3 (90 बार), 4 (85 बार), 5 (85 बार), 6 (85 बार)। विषम संख्या (1, 3, 5) आने की प्रायिकता ज्ञात कीजिए।",
      answer: "51/100 = 0.51",
      solution: "कुल अभिप्रयोग (n) = 500। विषम संख्याएँ (1, 3, 5) आने की कुल बारंबारता = 80 + 90 + 85 = 255।\nअतः P(विषम संख्या) = 255 / 500 = 51 / 100 = 0.51।"
    }
  ];

  arrangedChapters.push({
    id: "ch-probability-9-bseb",
    number: 15,
    title: "अध्याय 15: प्रायिकता (Probability) — संपूर्ण नोट्स, MCQs एवं हल",
    duration: "60 mins",
    weightage: "8 Marks (BSEB Special)",
    pdfFileName: "Class9_Maths_BSEB_Ch15_Probability_Notes_Hi.pdf",
    downloadUrl: "./public/notes/Class9_Maths_BSEB_Ch15_Probability.md",
    downloadName: "Class9_Maths_BSEB_Ch15_Probability_Notes.md",
    pdfPages: 8,
    pdfSize: "1.6 MB",
    notes: {
      summary: bsebClass9Ch15.description || "गणित में अनिश्चितता की माप को प्रायिकता (Probability) कहा जाता है। कक्षा 9 के पाठ्यक्रम में आनुभविक प्रायिकता (Empirical Probability) का अध्ययन किया जाता है।",
      keyConcepts: [
        {
          heading: "1. प्रायिकता का परिचय एवं महत्वपूर्ण शब्दावली (Key Definitions)",
          body: "• प्रयोग (Experiment): कोई भी सुनियोजित क्रिया जिसका कोई स्पष्ट परिणाम प्राप्त होता है।\n• यादृच्छिक प्रयोग (Random Experiment): ऐसा प्रयोग जिसके सभी संभावित परिणाम पहले से ज्ञात हों, परंतु किसी परीक्षण में कौन-सा परिणाम आएगा यह निश्चित रूप से न कहा जा सके।\n• अभिप्रयोग (Trial): किसी प्रयोग को एक बार संपन्न करना (जैसे सिक्का उछालना या पासा फेंकना)।\n• घटना (Event, E): किसी प्रयोग के एक या अधिक परिणामों का संग्रह।"
        },
        {
          heading: "2. आनुभविक प्रायिकता का सूत्र एवं मुख्य गुणधर्म (Formula & Properties)",
          body: "• सूत्र: P(E) = (अभिप्रयोगों की संख्या जिनमें घटना घटी है m) / (अभिप्रयोगों की कुल संख्या n) = m / n\n• मान की सीमा: किसी भी घटना E की प्रायिकता सदैव 0 और 1 के बीच होती है: 0 ≤ P(E) ≤ 1।\n• असंभव घटना की प्रायिकता = 0 तथा निश्चित घटना की प्रायिकता = 1 होती है।\n• पूरक घटना: P(E) + P(E नहीं) = 1।"
        },
        {
          heading: "3. सिक्के, पासे, थैले की गेंदें एवं ताश के पत्ते (Coins, Dice, Balls & Cards)",
          body: "• सिक्का: 2 पहलू (चित Head, पट Tail)।\n• पासा: 6 फलक (1, 2, 3, 4, 5, 6); सम = {2,4,6}, विषम = {1,3,5}, अभाज्य = {2,3,5}।\n• ताश की गड्डी (52 पत्ते): 26 लाल (13 पान + 13 ईंट) और 26 काले (13 हुकुम + 13 चिड़ी); कुल 12 तस्वीर वाले पत्ते (Face Cards) और 4 इक्के (Aces)।"
        }
      ],
      formulas: [
        "आनुभविक प्रायिकता P(E) = m / n = (अनुकूल परिणामों की संख्या) / (अभिप्रयोगों की कुल संख्या)",
        "प्रायिकता की सीमा: 0 ≤ P(E) ≤ 1 (प्रायिकता कभी ऋणात्मक या 1 से अधिक नहीं हो सकती)",
        "निश्चित घटना की प्रायिकता = 1  |  असंभव घटना की प्रायिकता = 0",
        "पूरक घटना का नियम: P(E) + P(E नहीं) = 1  ⇒  P(E नहीं) = 1 - P(E)"
      ]
    },
    objectiveQuestions: ch15Mcqs,
    subjectiveQuestions: ch15Subj
  });

  // 4. Build Master 50 HOTS Question Bank Chapter (All 50 questions in one place)
  const all50Questions = [];
  bsebClass9MathSubjective50.chapters.forEach(hch => {
    hch.questions.forEach(q => {
      all50Questions.push({
        id: `hots50-q${q.qNo}`,
        qNo: q.qNo,
        type: `अध्याय ${hch.chapterNumber}: ${hch.chapterName} • प्रश्न #${q.qNo}`,
        question: q.question,
        table: q.table,
        answer: q.answer,
        solution: q.solution
      });
    });
  });

  arrangedChapters.push({
    id: "ch-hots-50-9-bseb",
    number: "50-HOTS",
    title: "संपूर्ण 50 कठिन सब्जेक्टिव प्रश्न बैंक एवं हल (Master HOTS Set: Ch 1–6 & 12–14)",
    duration: "180 mins",
    weightage: "50 Marks (Board Special)",
    pdfFileName: "Class9_Maths_BSEB_50_Subjective_HOTS_Complete.pdf",
    downloadUrl: "./class-9-math-subjective-50.html",
    downloadName: "Class9_Maths_BSEB_50_Subjective_HOTS.html",
    pdfPages: 18,
    pdfSize: "3.2 MB",
    notes: {
      summary: "यह विशेष मास्टर प्रश्न बैंक बिहार बोर्ड (BSEB) कक्षा 9वीं गणित के अध्याय 1 से 6 तथा अध्याय 12 से 14 के सभी 50 कठिन सब्जेक्टिव प्रश्नों (HOTS) और उनके चरणबद्ध हल को एक साथ प्रस्तुत करता है।",
      keyConcepts: [
        {
          heading: "अध्यायवार 50 कठिन प्रश्न वितरण (Chapter-Wise Breakdown: Q1 – Q50)",
          body: "• अध्याय 1: संख्या पद्धति (Q1 – Q7)\n• अध्याय 2: बहुपद — विशेष गुणनखंड सूत्र (Q8 – Q18)\n• अध्याय 3: निर्देशांक ज्यामिति (Q19 – Q22)\n• अध्याय 4: दो चरों वाले रैखिक समीकरण (Q23 – Q27)\n• अध्याय 5: यूक्लिड की ज्यामिति का परिचय (Q28 – Q30)\n• अध्याय 6: रेखाएँ और कोण (Q31 – Q35)\n• अध्याय 12: हीरोन का सूत्र (Q36 – Q40)\n• अध्याय 13: पृष्ठीय क्षेत्रफल और आयतन (Q41 – Q45)\n• अध्याय 14: सांख्यिकी (Q46 – Q50)"
        }
      ],
      formulas: [
        "x² + 1/x² = (x + 1/x)² - 2  |  x³ + 1/x³ = (x + 1/x)³ - 3(x + 1/x)",
        "a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)",
        "हीरोन का सूत्र: Δ = √[s(s - a)(s - b)(s - c)]",
        "कल्पित माध्य विधि: x̄ = a + (∑ f_i d_i) / (∑ f_i)"
      ]
    },
    objectiveQuestions: [...baseCh14.objectiveQuestions.slice(0, 5), ...ch15Mcqs.slice(0, 5)],
    subjectiveQuestions: all50Questions
  });

  return {
    id: "maths-9",
    name: "Mathematics (गणित — BSEB)",
    icon: "Calculator",
    code: "MAT-09-BSEB",
    chaptersCount: arrangedChapters.length,
    description: "अध्याय 1–6 (संख्या पद्धति, बहुपद, ज्यामिति), अध्याय 12–13 (क्षेत्रमिति), अध्याय 14 (सांख्यिकी), अध्याय 15 (प्रायिकता) एवं 50 HOTS सब्जेक्टिव प्रश्न बैंक",
    chapters: arrangedChapters
  };
}

export const BSEB_CLASS9_MATHS_MOCK_TEST = {
  id: "test-bseb-9-maths",
  title: "Class 9 Mathematics (BSEB) — Statistics, Probability & Algebra Board Mock Test",
  classLabel: "Class 9 (BSEB)",
  subject: "Mathematics (गणित — बिहार बोर्ड)",
  durationSeconds: 900,
  totalMarks: 40,
  marksPerCorrect: 4,
  negativeMarks: 0,
  questions: [
    {
      id: "mt9-1",
      section: "अध्याय 14: सांख्यिकी",
      question: "आँकड़ों 14, 25, 14, 28, 18, 17, 18, 14, 23, 22, 14, 18 का बहुलक (Mode) क्या होगा?",
      options: ["14", "18", "22", "25"],
      correctIndex: 0,
      explanation: "दिए गए आँकड़ों में 14 सबसे अधिक बार (4 बार) आया है, इसलिए बहुलक (Mode) = 14 है।"
    },
    {
      id: "mt9-2",
      section: "अध्याय 14: सांख्यिकी",
      question: "आँकड़ों 12, 17, 81, 26, 38, 42, 57, 62 का परिसर (Range) क्या है?",
      options: ["62", "69", "50", "81"],
      correctIndex: 1,
      explanation: "परिसर (Range) = उच्चतम मान - न्यूनतम मान = 81 - 12 = 69।"
    },
    {
      id: "mt9-3",
      section: "अध्याय 14: सांख्यिकी",
      question: "यदि किसी बंटन का माध्य (Mean) = 15 और माध्यक (Median) = 16 हो, तो आनुभविक सूत्र से बहुलक (Mode) क्या होगा?",
      options: ["17", "18", "15.5", "20"],
      correctIndex: 1,
      explanation: "बहुलक (Mode) = 3 × माध्यक - 2 × माध्य = 3(16) - 2(15) = 48 - 30 = 18।"
    },
    {
      id: "mt9-4",
      section: "अध्याय 14: सांख्यिकी",
      question: "आरोही क्रम में व्यवस्थित आँकड़ों 29, 32, 48, 50, x, x+2, 72, 78, 84, 95 का माध्यक (Median) 63 है, तो x का मान क्या है?",
      options: ["60", "61", "62", "63"],
      correctIndex: 2,
      explanation: "यहाँ कुल प्रेक्षण n = 10 (सम) हैं। माध्यक = (x + x + 2)/2 = 63 ⇒ x + 1 = 63 ⇒ x = 62।"
    },
    {
      id: "mt9-5",
      section: "अध्याय 15: प्रायिकता",
      question: "किसी निश्चित या अवश्यंभावी घटना (Sure Event) की प्रायिकता क्या होती है?",
      options: ["0", "1", "0.5", "अनंत"],
      correctIndex: 1,
      explanation: "जो घटना निश्चित रूप से घटती है, उसकी प्रायिकता सदैव 1 होती है।"
    },
    {
      id: "mt9-6",
      section: "अध्याय 15: प्रायिकता",
      question: "यदि किसी मैच में जीतने की प्रायिकता 0.62 है, तो हारने की प्रायिकता क्या होगी?",
      options: ["0.62", "0.38", "0.48", "1"],
      correctIndex: 1,
      explanation: "P(हार) = 1 - P(जीत) = 1 - 0.62 = 0.38।"
    },
    {
      id: "mt9-7",
      section: "अध्याय 15: प्रायिकता",
      question: "एक सिक्के को 1000 बार उछालने पर 455 बार चित प्राप्त होता है। चित आने की आनुभविक प्रायिकता क्या होगी?",
      options: ["0.455", "0.545", "0.5", "1"],
      correctIndex: 0,
      explanation: "P(चित) = 455 / 1000 = 0.455।"
    },
    {
      id: "mt9-8",
      section: "अध्याय 2: बहुपद",
      question: "यदि a + b + c = 0 हो, तो a³ + b³ + c³ का मान किसके बराबर होता है?",
      options: ["0", "abc", "3abc", "a² + b² + c²"],
      correctIndex: 2,
      explanation: "यदि a + b + c = 0 हो, तो सर्वसमिका से a³ + b³ + c³ = 3abc होता है।"
    },
    {
      id: "mt9-9",
      section: "अध्याय 1: संख्या पद्धति",
      question: "1 / (√3 - √2) के हर का परिमेयकरण करने पर प्राप्त मान क्या होगा?",
      options: ["√3 - √2", "√3 + √2", "(√3 + √2)/5", "1"],
      correctIndex: 1,
      explanation: "(√3 + √2) / ((√3)² - (√2)²) = (√3 + √2) / (3 - 2) = √3 + √2।"
    },
    {
      id: "mt9-10",
      section: "अध्याय 13: क्षेत्रमिति",
      question: "एक शंकु के आधार की त्रिज्या 7 cm और ऊँचाई 24 cm है। इसकी तिर्यक ऊँचाई (Slant Height, l) क्या होगी?",
      options: ["25 cm", "26 cm", "31 cm", "17 cm"],
      correctIndex: 0,
      explanation: "तिर्यक ऊँचाई l = √(r² + h²) = √(7² + 24²) = √(49 + 576) = √625 = 25 cm।"
    }
  ]
};

export function enrichExamPulseCurriculum(mockData) {
  const completeMaths9 = buildCompleteBsebClass9Maths();
  const class9 = mockData.classes.find(c => c.id === 'class-9');
  if (class9) {
    class9.boardTag = 'BSEB / CBSE • Hindi + English';
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
