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
    summary: "संख्या पद्धति (Number System) में परिमेय संख्याएँ (Rational Numbers), अपरिमेय संख्याएँ (Irrational Numbers), वास्तविक संख्याओं पर संक्रियाएँ, हर का परिमेयकरण (Rationalization of Denominator), आवर्त दशमलव को p/q रूप में बदलना तथा वास्तविक संख्याओं के लिए घातांक के नियम (Laws of Exponents) शामिल हैं।",
    keyConcepts: [
      {
        heading: "1. परिमेय एवं अपरिमेय संख्याएँ (Rational & Irrational Numbers)",
        body: "• परिमेय संख्याएँ (Rational Numbers): वे संख्याएँ जिन्हें p/q के रूप में लिखा जा सके, जहाँ p और q पूर्णांक हैं तथा q ≠ 0 है। इनका दशमलव प्रसार सांत (Terminating) या अनवसानी आवर्ती (Non-terminating Recurring) होता है।\n• अपरिमेय संख्याएँ (Irrational Numbers): वे संख्याएँ जिन्हें p/q के रूप में नहीं लिखा जा सकता (जैसे √2, √3, √5, π)।"
      },
      {
        heading: "2. हर का परिमेयकरण एवं बीजगणितीय सर्वसमिकाएँ (Rationalization)",
        body: "यदि किसी व्यंजक के हर में अपरिमेय संख्या (a + b√x) हो, तो अंश और हर में उसके संयुग्मी (a - b√x) से गुणा करके हर को परिमेय बनाया जाता है।"
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
      "a³ + b³ + c³ - 3abc = (a + b + c)(a² + b² + c² - ab - bc - ca)",
      "यदि a + b + c = 0 हो, तो a³ + b³ + c³ = 3abc"
    ],
    mcqs: [
      {
        id: "q-9m2-1",
        question: "यदि a + b + c = 0 हो, तो a³ + b³ + c³ का मान किसके बराबर होता है?",
        options: ["0", "abc", "3abc", "a² + b² + c²"],
        correctIndex: 2,
        explanation: "यदि a + b + c = 0 हो, तो सर्वसमिका से a³ + b³ + c³ = 3abc प्राप्त होता है।"
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
    weightage: "10 Marks (BSEB)",
    summary: "निर्देशांक ज्यामिति (Coordinate Geometry) में कार्तीय तल (Cartesian Plane), X-अक्ष तथा Y-अक्ष, मूलबिंदु (0,0), चारों चतुर्थांशों के चिह्न तथा भुज (Abscissa) व कोटि (Ordinate) की सहायता से बिंदुओं का आलेखन और क्षेत्रफल ज्ञात किया जाता है।",
    keyConcepts: [
      {
        heading: "1. भुज, कोटि एवं चतुर्थांश (Abscissa, Ordinate & Quadrants)",
        body: "• बिंदु (x, y) में x को भुज और y को कोटि कहते हैं।\n• चतुर्थांश चिह्न: प्रथम (+, +), द्वितीय (-, +), तृतीय (-, -), चतुर्थ (+, -)।\n• X-अक्ष पर बिंदु (x, 0) तथा Y-अक्ष पर बिंदु (0, y) के रूप में होता है।"
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
        body: "• पूरक कोणों का योग = 90° तथा संपूरक कोणों का योग = 180°।\n• समांतर रेखाओं में संगत कोण एवं एकांतर अंतः कोण बराबर होते हैं, तथा एक ही ओर के अंतः कोणों का योग 180° होता है।"
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
        body: "• अर्धपरिमाप s = (a + b + c)/2।\n• त्रिभुज का क्षेत्रफल = √[s(s - a)(s - b)(s - c)]।"
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
        explanation: "भुजाएँ 2a, 2b, 2c होने पर नया क्षेत्रफल 4Δ हो जाता है। अतः वृद्धि = 300%।"
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
        body: "• बेलन: वक्र पृष्ठ = 2πrh, कुल पृष्ठ = 2πr(r + h), आयतन = πr²h।\n• शंकु: l = √(r² + h²), वक्र पृष्ठ = πrl, कुल पृष्ठ = πr(l + r), आयतन = ⅓πr²h।\n• गोला: पृष्ठ = 4πr², आयतन = (4/3)πr³; अर्द्धगोला: TSA = 3πr², आयतन = (2/3)πr³।"
      }
    ],
    formulas: [
      "बेलन का वक्र पृष्ठ = 2πrh  |  बेलन का आयतन = πr²h",
      "शंकु का वक्र पृष्ठ = πrl (l = √(r² + h²))  |  आयतन = ⅓πr²h",
      "गोले का पृष्ठ = 4πr²  |  आयतन = (4/3)πr³  |  1 m³ = 1000 लीटर"
    ],
    mcqs: [
      {
        id: "q-9m13-1",
        question: "एक शंकु के आधार की त्रिज्या 7 cm और ऊँचाई 24 cm है। इसकी तिर्यक ऊँचाई (l) क्या होगी?",
        options: ["25 cm", "26 cm", "31 cm", "17 cm"],
        correctIndex: 0,
        explanation: "l = √(7² + 24²) = √625 = 25 cm।"
      }
    ]
  }
};

const GEOMETRY_CH7_TO_11 = [
  {
    id: "ch-math-9-ch7",
    number: 7,
    title: "अध्याय 7: त्रिभुज (Triangles)",
    duration: "65 mins",
    weightage: "6 Marks (BSEB)",
    pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf",
    downloadUrl: "./class-9-math-book-hindi.html#ch7",
    downloadName: "BSEB_Class_9_Math_Ch7_Triangles.html",
    pdfPages: 14,
    pdfSize: "1.14 MB",
    notes: {
      summary: "त्रिभुजों की सर्वांगसमता की पाँच कसौटियाँ (SAS, ASA, AAS, SSS, RHS), CPCT नियम, समद्विबाहु त्रिभुज के गुणधर्म एवं त्रिभुज असमिकाएँ।",
      keyConcepts: [
        {
          heading: "1. सर्वांगसमता की पाँच कसौटियाँ (Congruence Rules)",
          body: "• SAS (भुजा-कोण-भुजा), ASA (कोण-भुजा-कोण), AAS (कोण-कोण-भुजा), SSS (भुजा-भुजा-भुजा), RHS (समकोण-कर्ण-भुजा)।\n• ध्यान रखें: AAA और SSA सर्वांगसमता की कसौटियाँ नहीं हैं।"
        },
        {
          heading: "2. समद्विबाहु त्रिभुज एवं असमिकाएँ",
          body: "• बराबर भुजाओं के सम्मुख कोण बराबर होते हैं।\n• बड़े कोण की सम्मुख भुजा सबसे लंबी होती है; दो भुजाओं का योग तीसरी भुजा से बड़ा होता है (a + b > c)।"
        }
      ],
      formulas: [
        "समबाहु त्रिभुज का प्रत्येक कोण = 60°",
        "त्रिभुज असमिका: a + b > c, b + c > a, c + a > b",
        "समकोण त्रिभुज में कर्ण सबसे लंबी भुजा होती है"
      ]
    },
    objectiveQuestions: [
      {
        id: "q-9m7-1",
        question: "निम्नलिखित में से कौन त्रिभुजों की सर्वांगसमता की कसौटी नहीं है?",
        options: ["SAS", "ASA", "SSS", "SSA"],
        correctIndex: 3,
        explanation: "SSA और AAA सर्वांगसमता की कसौटियाँ नहीं होतीं।"
      }
    ],
    subjectiveQuestions: [
      {
        id: "sq-9m7-1",
        type: "प्रमेय 7.2 (Board Important)",
        question: "सिद्ध कीजिए कि एक समद्विबाहु त्रिभुज की बराबर भुजाओं के सम्मुख कोण बराबर होते हैं।",
        solution: "∠A का समद्विभाजक AD खींचें। △BAD व △CAD में AB = AC, ∠BAD = ∠CAD, AD = AD। SAS से △BAD ≅ △CAD ⇒ ∠B = ∠C (CPCT)।"
      }
    ]
  },
  {
    id: "ch-math-9-ch8",
    number: 8,
    title: "अध्याय 8: चतुर्भुज (Quadrilaterals)",
    duration: "60 mins",
    weightage: "6 Marks (BSEB)",
    pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf",
    downloadUrl: "./class-9-math-book-hindi.html#ch8",
    downloadName: "BSEB_Class_9_Math_Ch8_Quadrilaterals.html",
    pdfPages: 13,
    pdfSize: "1.14 MB",
    notes: {
      summary: "चतुर्भुज के चारों कोणों का योग 360°, समांतर चतुर्भुज, आयत, वर्ग, समचतुर्भुज के गुणधर्म तथा मध्य-बिंदु प्रमेय (Mid-Point Theorem)।",
      keyConcepts: [
        {
          heading: "1. मध्य-बिंदु प्रमेय (Mid-Point Theorem)",
          body: "किसी त्रिभुज की किन्हीं दो भुजाओं के मध्य-बिंदुओं को मिलाने वाला रेखाखंड तीसरी भुजा के समांतर और उसका आधा होता है (EF || BC, EF = ½BC)।"
        }
      ],
      formulas: [
        "चतुर्भुज कोण योग: ∠A + ∠B + ∠C + ∠D = 360°",
        "आयत विकर्ण = √(l² + b²)  |  वर्ग विकर्ण = a√2  |  समचतुर्भुज भुजा = ½√(d₁² + d₂²)"
      ]
    },
    objectiveQuestions: [
      {
        id: "q-9m8-1",
        question: "समचतुर्भुज के विकर्ण परस्पर किस कोण पर समद्विभाजित करते हैं?",
        options: ["45°", "60°", "90°", "120°"],
        correctIndex: 2,
        explanation: "समचतुर्भुज और वर्ग के विकर्ण परस्पर 90° (समकोण) पर समद्विभाजित करते हैं।"
      }
    ],
    subjectiveQuestions: []
  },
  {
    id: "ch-math-9-ch9",
    number: 9,
    title: "अध्याय 9: समांतर चतुर्भुजों और त्रिभुजों के क्षेत्रफल",
    duration: "50 mins",
    weightage: "5 Marks (BSEB)",
    pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf",
    downloadUrl: "./class-9-math-book-hindi.html#ch9",
    downloadName: "BSEB_Class_9_Math_Ch9_Areas.html",
    pdfPages: 12,
    pdfSize: "1.14 MB",
    notes: {
      summary: "एक ही आधार और एक ही समांतर रेखाओं के बीच स्थित समांतर चतुर्भुजों एवं त्रिभुजों के क्षेत्रफल संबंध तथा माध्यिका गुणधर्म।",
      keyConcepts: [
        {
          heading: "1. प्रमुख क्षेत्रफल प्रमेय",
          body: "• एक ही आधार और समांतर रेखाओं के बीच स्थित समांतर चतुर्भुजों के क्षेत्रफल बराबर होते हैं।\n• त्रिभुज का क्षेत्रफल समांतर चतुर्भुज का आधा होता है।\n• माध्यिका किसी त्रिभुज को बराबर क्षेत्रफल वाले दो त्रिभुजों में विभाजित करती है।"
        }
      ],
      formulas: [
        "ar(∥gm) = आधार × ऊँचाई  |  ar(△) = ½ × आधार × ऊँचाई",
        "समचतुर्भुज क्षेत्रफल = ½ × d₁ × d₂  |  समलंब = ½(a + b) × h"
      ]
    },
    objectiveQuestions: [
      {
        id: "q-9m9-1",
        question: "यदि एक समांतर चतुर्भुज का क्षेत्रफल 48 cm² है, तो उसी आधार व समांतर रेखाओं के बीच बने त्रिभुज का क्षेत्रफल होगा:",
        options: ["12 cm²", "24 cm²", "48 cm²", "96 cm²"],
        correctIndex: 1,
        explanation: "त्रिभुज का क्षेत्रफल समांतर चतुर्भुज के क्षेत्रफल का आधा (48/2 = 24 cm²) होता है।"
      }
    ],
    subjectiveQuestions: []
  },
  {
    id: "ch-math-9-ch10",
    number: 10,
    title: "अध्याय 10: वृत्त (Circles)",
    duration: "65 mins",
    weightage: "7 Marks (BSEB)",
    pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf",
    downloadUrl: "./class-9-math-book-hindi.html#ch10",
    downloadName: "BSEB_Class_9_Math_Ch10_Circles.html",
    pdfPages: 14,
    pdfSize: "1.14 MB",
    notes: {
      summary: "जीवा, केंद्र से लंब, प्रमेय 10.8 (केंद्र का कोण परिधि का दोगुना), अर्द्धवृत्त का कोण 90°, तथा चक्रीय चतुर्भुज के गुणधर्म।",
      keyConcepts: [
        {
          heading: "1. वृत्त के प्रमुख प्रमेय",
          body: "• केंद्र से जीवा पर डाला गया लंब जीवा को समद्विभाजित करता है।\n• केंद्र पर अंतरित कोण परिधि पर अंतरित कोण का दोगुना होता है (∠AOB = 2∠ACB)।\n• अर्द्धवृत्त का कोण समकोण (90°) होता है।\n• चक्रीय चतुर्भुज के सम्मुख कोणों का योग 180° होता है।"
        }
      ],
      formulas: [
        "r² = OM² + (AB/2)²  |  ∠AOB = 2∠ACB",
        "चक्रीय चतुर्भुज: ∠A + ∠C = 180° तथा ∠B + ∠D = 180°"
      ]
    },
    objectiveQuestions: [
      {
        id: "q-9m10-1",
        question: "अर्द्धवृत्त का कोण कितना होता है?",
        options: ["45°", "60°", "90°", "180°"],
        correctIndex: 2,
        explanation: "अर्द्धवृत्त में बना कोण सदैव समकोण (90°) होता है।"
      }
    ],
    subjectiveQuestions: []
  },
  {
    id: "ch-math-9-ch11",
    number: 11,
    title: "अध्याय 11: रचनाएँ (Constructions)",
    duration: "45 mins",
    weightage: "5 Marks (BSEB)",
    pdfFileName: "BSEB_Class_9_Math_Hindi_Book.pdf",
    downloadUrl: "./class-9-math-book-hindi.html#ch11",
    downloadName: "BSEB_Class_9_Math_Ch11_Constructions.html",
    pdfPages: 11,
    pdfSize: "1.14 MB",
    notes: {
      summary: "पटरी व परकार की सहायता से मानक कोण (15° के गुणज) तथा दिए गए प्रतिबंधों के अंतर्गत त्रिभुजों की रचना।",
      keyConcepts: [
        {
          heading: "1. मानक कोण एवं त्रिभुज रचना की 3 स्थितियाँ",
          body: "• परकार से 60°, 120°, 90°, 45°, 30°, 75°, 105°, 135° के कोण बनाए जाते हैं।\n• त्रिभुज रचना: (1) आधार, कोण व योग AB+AC, (2) आधार, कोण व अंतर AB-AC, (3) परिमाप व दोनों आधार कोण।"
        }
      ],
      formulas: [
        "लंब समद्विभाजक त्रिज्या > रेखाखंड की आधी लंबाई",
        "परिमाप विधि में सिरों पर ½∠B और ½∠C कोण बनाए जाते हैं"
      ]
    },
    objectiveQuestions: [
      {
        id: "q-9m11-1",
        question: "पटरी और परकार की सहायता से निम्न में कौन-सा कोण नहीं बनाया जा सकता?",
        options: ["45°", "75°", "40°", "105°"],
        correctIndex: 2,
        explanation: "केवल 15° के गुणज या उनके आधे कोण ही पटरी व परकार से बनाए जा सकते हैं; 40° नहीं।"
      }
    ],
    subjectiveQuestions: []
  }
];

export function buildCompleteBsebClass9Maths() {
  const arrangedChapters = [];

  // 0. Featured Complete 205-Page Hindi Edition PDF Book right at the TOP of Class 9th Math
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
      summary: "बिहार बोर्ड (BSEB / SCERT) कक्षा 9 गणित के सभी 15 अध्यायों की संपूर्ण 205-पेज हिंदी संस्करण PDF पुस्तक। इसमें प्रत्येक अध्याय के विस्तृत नोट्स, महा-सूत्र संग्रह, प्रमेय-उपपत्ति, 150+ चरणबद्ध हल उदाहरण, 225+ वस्तुनिष्ठ प्रश्न (MCQs), अध्यायवार यूनिट टेस्ट एवं 100-अंक मॉडल प्रश्न पत्र शामिल हैं। वेब रीडर के लिए ./class-9-math-book-hindi.html खोलें या ऊपर दिए गए डाउनलोड बटन से सीधे 205-पेज PDF डाउनलोड करें।",
      keyConcepts: [
        {
          heading: "पुस्तक में सम्मिलित सभी 15 अध्याय (Complete 15-Chapter Index)",
          body: "• अध्याय 1: संख्या पद्धति (10 अंक)\n• अध्याय 2: बहुपद & अध्याय 4: दो चरों वाले रैखिक समीकरण (25 अंक)\n• अध्याय 3: निर्देशांक ज्यामिति (10 अंक)\n• अध्याय 5–11: यूक्लिड की ज्यामिति, रेखाएँ और कोण, त्रिभुज, चतुर्भुज, क्षेत्रफल, वृत्त, रचनाएँ (30 अंक)\n• अध्याय 12–13: हीरोन का सूत्र, पृष्ठीय क्षेत्रफल और आयतन (15 अंक)\n• अध्याय 14–15: सांख्यिकी एवं प्रायिकता (10 अंक)"
        },
        {
          heading: "पुस्तक डाउनलोड एवं ऑनलाइन रीडर लिंक",
          body: "• लाइव 205-पेज PDF प्रीव्यू व वेब बुक: https://simpledev12.github.io/ExamPulse/class-9-math-book-hindi.html\n• डायरेक्ट PDF डाउनलोड (1.14 MB, 205 Pages): " + PDF_BOOK_DRIVE_VIEW
        }
      ],
      formulas: [
        "अध्याय 1: (√a + √b)(√a - √b) = a - b  |  a^m · a^n = a^(m+n)",
        "अध्याय 2: x³ + y³ + z³ - 3xyz = (x+y+z)(x²+y²+z²-xy-yz-zx)",
        "अध्याय 6–10: ∠A+∠B+∠C = 180°  |  EF = ½BC  |  ∠AOB = 2∠ACB  |  चक्रीय ∠A+∠C = 180°",
        "अध्याय 12–13: Δ = √[s(s-a)(s-b)(s-c)]  |  शंकु V = ⅓πr²h  |  गोला V = (4/3)πr³",
        "अध्याय 14–15: Mode = 3·Median - 2·Mean  |  0 ≤ P(E) ≤ 1  |  P(E) + P(Ē) = 1"
      ]
    },
    objectiveQuestions: [
      {
        id: "q-book-1",
        question: "बिहार बोर्ड कक्षा 9 गणित की वार्षिक परीक्षा का कुल पूर्णांक कितना होता है?",
        options: ["50 अंक", "70 अंक", "80 अंक", "100 अंक"],
        correctIndex: 3,
        explanation: "BSEB कक्षा 9 गणित में कुल 100 अंक (संख्या पद्धति 10, बीजगणित 25, निर्देशांक ज्यामिति 10, ज्यामिति 30, क्षेत्रमिति 15, सांख्यिकी-प्रायिकता 10) होते हैं।"
      }
    ],
    subjectiveQuestions: []
  });

  // 1. Chapters 1–6 from bsebClass9MathSubjective50 + CHAPTER_METADATA_MAP
  const mapByCh = {};
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

    mapByCh[chNum] = {
      id: `ch-math-9-ch${chNum}`,
      number: chNum,
      title: `अध्याय ${chNum}: ${hch.chapterName}`,
      duration: meta.duration,
      weightage: meta.weightage,
      pdfFileName: `BSEB_Class_9_Math_Hindi_Book.pdf`,
      downloadUrl: `./class-9-math-book-hindi.html#ch${chNum}`,
      downloadName: `Class9_Maths_BSEB_Ch${chNum}_Notes.html`,
      pdfPages: 12,
      pdfSize: "1.14 MB",
      notes: {
        summary: meta.summary,
        keyConcepts: meta.keyConcepts,
        formulas: meta.formulas
      },
      objectiveQuestions: meta.mcqs,
      subjectiveQuestions: subjQuestions
    };
  });

  [1, 2, 3, 4, 5, 6].forEach(n => { if (mapByCh[n]) arrangedChapters.push(mapByCh[n]); });
  GEOMETRY_CH7_TO_11.forEach(ch => arrangedChapters.push(ch));
  [12, 13].forEach(n => { if (mapByCh[n]) arrangedChapters.push(mapByCh[n]); });

  // 2. Chapter 14: Statistics
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

  // 3. Chapter 15: Probability
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
    }))
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
      summary: bsebClass9Ch15.description || "गणित में अनिश्चितता की माप को प्रायिकता (Probability) कहा जाता है।",
      keyConcepts: [
        {
          heading: "1. प्रायिकता का सूत्र एवं मुख्य गुणधर्म",
          body: "• P(E) = अनुकूल परिणामों की संख्या / कुल अभिप्रयोगों की संख्या।\n• 0 ≤ P(E) ≤ 1, P(निश्चित) = 1, P(असंभव) = 0, P(E) + P(E नहीं) = 1।"
        }
      ],
      formulas: [
        "आनुभविक प्रायिकता P(E) = m / n",
        "0 ≤ P(E) ≤ 1  |  P(E) + P(E नहीं) = 1"
      ]
    },
    objectiveQuestions: ch15Mcqs,
    subjectiveQuestions: ch15Subj
  });

  // 4. Master 50 HOTS Question Bank
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
      summary: "यह विशेष मास्टर प्रश्न बैंक बिहार बोर्ड (BSEB) कक्षा 9वीं गणित के सभी 50 कठिन सब्जेक्टिव प्रश्नों (HOTS) और उनके चरणबद्ध हल को एक साथ प्रस्तुत करता है।",
      keyConcepts: [],
      formulas: [
        "x² + 1/x² = (x + 1/x)² - 2  |  a³ + b³ + c³ - 3abc = (a+b+c)(a²+b²+c²-ab-bc-ca)",
        "हीरोन का सूत्र: Δ = √[s(s - a)(s - b)(s - c)]"
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
    description: "205-पेज संपूर्ण हिंदी PDF पुस्तक + सभी 15 अध्याय (संख्या पद्धति से प्रायिकता तक) के नोट्स, सूत्र एवं 50 HOTS प्रश्न बैंक",
    chapters: arrangedChapters
  };
}

export const BSEB_CLASS9_MATHS_MOCK_TEST = {
  id: "test-bseb-9-maths",
  title: "Class 9 Mathematics (BSEB) — Complete Board Mock Test",
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
      explanation: "14 सबसे अधिक बार (4 बार) आया है, इसलिए बहुलक = 14।"
    },
    {
      id: "mt9-2",
      section: "अध्याय 15: प्रायिकता",
      question: "किसी निश्चित घटना (Sure Event) की प्रायिकता क्या होती है?",
      options: ["0", "1", "0.5", "अनंत"],
      correctIndex: 1,
      explanation: "निश्चित घटना की प्रायिकता सदैव 1 होती है।"
    },
    {
      id: "mt9-3",
      section: "अध्याय 2: बहुपद",
      question: "यदि a + b + c = 0 हो, तो a³ + b³ + c³ का मान किसके बराबर होता है?",
      options: ["0", "abc", "3abc", "a² + b² + c²"],
      correctIndex: 2,
      explanation: "यदि a + b + c = 0 हो, तो a³ + b³ + c³ = 3abc।"
    }
  ]
};

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
