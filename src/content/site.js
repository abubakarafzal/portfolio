/**
 * Single source of truth for every piece of copy and data on the site.
 *
 * CONTENT RULES
 * -------------
 * Everything here comes from one of two verified sources:
 *   1. the previous portfolio config (src/portfolio.js, kept in git history), or
 *   2. an explicit statement from Abu Bakar.
 *
 * Anything not covered by those sources is left as a `[ADD ...]` placeholder.
 * Please replace the placeholders rather than deleting them — nothing on this
 * site is invented, and it should stay that way.
 */

export const meta = {
  name: "Abu Bakar Afzal",
  shortName: "Abu Bakar",
  initials: "AB",
  role: "Software Development Engineer in Test",
  roleShort: "SDET Engineer",
  location: "United States",
  siteUrl: "https://abubakarafzal.github.io/portfolio/",
  title: "Abu Bakar | SDET Engineer | Test Automation & AI Testing",
  description:
    "Abu Bakar Afzal is a Software Development Engineer in Test (SDET) who engineers test automation frameworks, CI/CD quality gates, and AI testing systems — including RAG evaluation and LLM quality validation — for enterprise software.",
  keywords: [
    "SDET",
    "Software Development Engineer in Test",
    "Test Automation Engineer",
    "Quality Engineering",
    "AI Testing",
    "RAG Evaluation",
    "LLM Evaluation",
    "Playwright",
    "Selenium",
    "API Automation"
  ]
};

export const links = {
  github: "https://github.com/abubakarafzal",
  linkedin: "https://www.linkedin.com/in/abubakrafzal",
  email: "bakrshk@gmail.com",
  resume:
    "https://app.enhancv.com/share/eef3e876/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
};

export const nav = [
  {label: "Home", href: "#home"},
  {label: "Work", href: "#work"},
  {label: "Experience", href: "#experience"},
  {label: "AI Testing", href: "#ai-testing"},
  {label: "Tools", href: "#toolkit"},
  {label: "About", href: "#about"},
  {label: "Contact", href: "#contact"}
];

export const hero = {
  eyebrow: "Available for SDET & Quality Engineering roles",
  // Rendered as three stacked display lines.
  headline: ["Software", "Development", "Engineer in Test"],
  rotating: [
    "SDET Engineering",
    "Test Automation",
    "AI Testing",
    "RAG Evaluation",
    "LLM Quality",
    "Quality Engineering"
  ],
  disciplines: "SDET • Automation • AI Testing • Quality Engineering",
  statement:
    "I engineer scalable automation and intelligent quality systems for modern software — frameworks, pipelines, and evaluation harnesses that hold up under production load.",
  ctas: [
    {label: "View my work", href: "#work", variant: "primary"},
    {label: "Let's connect", href: "#contact", variant: "ghost"}
  ]
};

/**
 * Metrics.
 * `value` numbers are only used where they are verifiable from the source
 * portfolio config; everything else is a qualitative statement instead.
 */
export const metrics = [
  {value: 9, suffix: "+", label: "Years engineering quality"},
  {value: 10, suffix: "", label: "Enterprise platforms automated"},
  {value: 8, suffix: "", label: "Regulated program domains"},
  {
    value: null,
    display: "AI-native",
    label: "Testing beyond deterministic software"
  }
];

export const marquee = [
  "SDET",
  "Test Automation",
  "Quality Engineering",
  "AI Testing",
  "RAG Evaluation",
  "API Automation",
  "CI/CD",
  "Cloud Testing",
  "LLM Validation",
  "Cross-Browser"
];

/**
 * Selected work — every entry below is carried over verbatim in substance from
 * the previous portfolio config. `challenge` / `solution` / `result` are left as
 * placeholders because the source config did not record them.
 */
export const work = [
  {
    id: "vertical-bridge",
    name: "Vertical Bridge",
    category: "Telecom / GenAI",
    year: "",
    role: "SDET — Automation & AI model validation",
    description:
      "Automation across telecom infrastructure workflows and GenAI modeling pipelines, spanning web and mobile surfaces on real-device cloud infrastructure.",
    stack: ["Python", "Appium", "Selenium", "Bitbucket CI", "Perfecto"],
    url: "https://www.verticalbridge.com/",
    logo: "vertical-bridge-logo.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "opencascade",
    name: "OpenCascade AI Modeling",
    category: "AI / ML Systems",
    year: "",
    role: "SDET — AI/ML test engineering",
    description:
      "Test engineering for AI/ML modeling systems: model-facing validation suites, containerised execution, and automated runs wired into CI.",
    stack: [
      "Python",
      "Pytest",
      "Robot Framework",
      "TensorFlow",
      "PyTorch",
      "Docker",
      "Kubernetes",
      "GitHub Actions"
    ],
    url: "https://www.opencascade.com/",
    logo: "occ.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "alexa",
    name: "Alexa / Alexa AI",
    category: "Voice & NLP",
    year: "",
    role: "SDET — Voice and NLP pipeline validation",
    description:
      "Voice skill testing, NLP pipeline validation, and conversational UX testing across a serverless skill architecture.",
    stack: ["Python", "AWS Lambda", "Alexa Skills Kit"],
    url: "https://developer.amazon.com/en-US/alexa",
    logo: "Alexa.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "siemens",
    name: "Siemens Healthineers",
    category: "Healthcare",
    year: "",
    role: "SDET — Platform quality engineering",
    description:
      "Quality engineering for a healthcare platform: behaviour-driven end-to-end coverage, performance auditing, and virtualised test environments.",
    stack: ["Cypress", "Cucumber", "CircleCI", "Lighthouse", "VMware"],
    url: "https://www.siemens-healthineers.com/",
    logo: "Siemens_Healthineers_logo.svg.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "witty",
    name: "Witty",
    category: "Fintech",
    year: "",
    role: "SDET — Automation framework ownership",
    description:
      "TypeScript automation framework for a fintech platform, with containerised CI execution, Allure reporting, Slack notifications, and Xray test management.",
    stack: [
      "Playwright",
      "TypeScript",
      "Mocha",
      "Allure",
      "GitHub Actions",
      "Docker",
      "Xray"
    ],
    url: "https://www.w1tty.com/",
    logo: "witty.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "zact",
    name: "Zact",
    category: "Real Estate / Fintech",
    year: "",
    role: "SDET — Web, mobile & API automation",
    description:
      "End-to-end automation for a real estate and expense management product across web, mobile, and API layers.",
    stack: [
      "WebdriverIO",
      "TypeScript",
      "Mocha",
      "Appium",
      "SuperTest",
      "Postman"
    ],
    url: "https://www.zact.com/",
    logo: "Zact_Logo.jpg",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "elgrocer",
    name: "elGrocer",
    category: "E-Commerce",
    year: "",
    role: "SDET — Cross-platform automation & performance",
    description:
      "Java automation across mobile and web for an e-commerce platform, executed on cloud device infrastructure with API, load, and reporting layers.",
    stack: [
      "Java",
      "Appium",
      "Maven",
      "BrowserStack",
      "REST Assured",
      "GitLab CI",
      "Selenium",
      "JMeter",
      "Grafana",
      "TestRail"
    ],
    url: "https://www.elgrocer.com/",
    logo: "elgrocer.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "cialfo",
    name: "CIALFO",
    category: "Enterprise Platform",
    year: "",
    role: "SDET — Framework architecture",
    description:
      "Java/TestNG automation architecture covering UI, API, and database validation, with load testing and rich reporting wired into Jenkins.",
    stack: [
      "Selenium",
      "Java",
      "TestNG",
      "Maven",
      "Jenkins",
      "REST Assured",
      "JMeter",
      "Extent Reports"
    ],
    url: "https://www.cialfo.com/",
    logo: "cialfo.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "leading-quality",
    name: "Leading Quality",
    category: "Quality Platform",
    year: "",
    role: "SDET — Multi-framework automation",
    description:
      "Automation across a quality engineering platform using several JavaScript/TypeScript runners, containerised and deployed on AWS.",
    stack: [
      "TypeScript",
      "Cypress",
      "Playwright",
      "WebdriverIO",
      "Mocha/Chai",
      "Jenkins",
      "Docker",
      "AWS"
    ],
    url: "https://app.leadingquality.com/",
    logo: "lqa.png",
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  },
  {
    id: "cuddleclone",
    name: "CuddleClone",
    category: "Retail Logistics",
    year: "",
    role: "SDET — Framework stabilisation",
    description:
      "Playwright automation for a retail logistics product, containerised in CI with Allure reporting and a substantial reduction in suite flakiness.",
    stack: ["Playwright", "TypeScript", "Docker", "GitHub Actions", "Allure"],
    url: "https://www.cuddleclone.com/",
    logo: null,
    challenge: "[ADD CHALLENGE]",
    solution: "[ADD SOLUTION]",
    result: "[ADD RESULT]"
  }
];

/**
 * Case study groupings. Each one points at real work above; the narrative
 * fields are intentionally light so nothing is overstated.
 */
export const caseStudies = [
  {
    index: "01",
    title: "Test Automation Architecture",
    summary:
      "Reusable framework design in TypeScript and Java — page/component models, fixtures, parallel execution, and reporting that a whole team can build on rather than a script collection one person maintains.",
    evidence: ["witty", "leading-quality", "cialfo"]
  },
  {
    index: "02",
    title: "API & Service Automation",
    summary:
      "Contract, integration, and regression coverage at the service layer with REST Assured, SuperTest, and Postman — validated independently of the UI so failures point at the right system.",
    evidence: ["zact", "elgrocer", "cialfo"]
  },
  {
    index: "03",
    title: "Enterprise Quality Engineering",
    summary:
      "Quality engineering inside regulated and enterprise delivery: behaviour-driven coverage, release compliance, and shift-left practices adopted by delivery teams.",
    evidence: ["siemens", "cialfo"]
  },
  {
    index: "04",
    title: "AI, RAG & Model Testing",
    summary:
      "Validation for non-deterministic systems — retrieval and generation pipelines, model-facing test suites, and evaluation harnesses that produce a score rather than a pass/fail guess.",
    evidence: ["opencascade", "alexa", "vertical-bridge"]
  },
  {
    index: "05",
    title: "Cloud & Cross-Browser Execution",
    summary:
      "Suites that run wide and fast: real-device and cross-browser grids, containerised runners, and CI pipelines that keep feedback inside a review cycle.",
    evidence: ["elgrocer", "vertical-bridge", "cuddleclone"]
  }
];

/**
 * AI Quality Engineering.
 */
export const aiTesting = {
  title: "AI Quality Engineering",
  subtitle: "Testing beyond deterministic software.",
  intro:
    "Traditional assertions assume one correct output. Language models do not work that way. Quality for AI systems means evaluating retrieval, grounding, and generation as measurable properties — then gating releases on them like any other test.",
  pipeline: [
    {
      step: "User query",
      note: "Input framing, prompt variants, and adversarial phrasing."
    },
    {
      step: "Retrieval",
      note: "Recall and precision of the retrieved set against a ground-truth corpus."
    },
    {
      step: "Context",
      note: "Context relevancy — is the retrieved context actually usable for this question?"
    },
    {
      step: "LLM",
      note: "Generation under controlled parameters, repeated for variance."
    },
    {
      step: "Response",
      note: "Output validation: schema, format, safety, and refusal behaviour."
    },
    {
      step: "RAGAS evaluation",
      note: "Faithfulness, answer relevancy, and context relevancy scored per case."
    },
    {
      step: "Quality gate",
      note: "Thresholds enforced in CI — regressions in evaluation scores block the release."
    }
  ],
  capabilities: [
    "RAG testing",
    "RAGAS",
    "LLM evaluation",
    "Prompt testing",
    "Hallucination testing",
    "Faithfulness",
    "Answer relevancy",
    "Context relevancy",
    "Retrieval evaluation",
    "AI regression testing",
    "LLM output validation",
    "AI agent testing",
    "AI-assisted test automation"
  ],
  assisted: {
    title: "AI-Assisted SDET Engineering",
    intro:
      "The other half of AI in quality engineering: using it to build and maintain the automation itself.",
    items: [
      {
        name: "Cursor AI",
        note: "Repository-aware test authoring and refactoring inside the codebase."
      },
      {
        name: "MCP — Model Context Protocol",
        note: "Wiring models to real tooling and context so suggestions are grounded in the actual system."
      },
      {
        name: "AI-assisted test generation",
        note: "Draft coverage from specs and existing patterns, reviewed and hardened by hand."
      },
      {
        name: "AI-assisted debugging",
        note: "Faster triage of failures and flakiness across large suites."
      },
      {
        name: "Test maintenance",
        note: "Keeping selectors, fixtures, and assertions current as the product moves."
      },
      {
        name: "AI-assisted documentation",
        note: "Test strategy and framework docs kept close to the code."
      }
    ]
  }
};

/**
 * Experience.
 *
 * NOTE FOR ABU BAKAR — please verify this section.
 * The previous portfolio config listed Amazon Web Services as the current role
 * ("Jun 2025 – Present"). You have since stated that your current company is
 * Expleo, in the USA. Expleo is therefore listed first as the current role, and
 * the AWS end date is a placeholder rather than an invented date.
 */
export const experience = [
  {
    company: "Expleo",
    role: "Software Development Engineer in Test",
    date: "[ADD DATES]",
    location: "United States",
    current: true,
    summary:
      "Quality engineering across large-scale public-sector health and human services platforms.",
    bullets: [
      "Engineering automated coverage across enterprise applications in regulated program domains.",
      "[ADD KEY RESPONSIBILITY]",
      "[ADD KEY RESPONSIBILITY]"
    ],
    stack: ["[ADD STACK]"],
    logo: null
  },
  {
    company: "Amazon Web Services (AWS)",
    role: "SDET (SDE II)",
    date: "Jun 2025 – [ADD END DATE]",
    location: "",
    current: false,
    summary:
      "Automation for backend, API, and UI validation of Amazon Linux builds, with AWS-native CI/CD and observability.",
    bullets: [
      "Built AWS-based CI/CD with GitHub Actions, CodeBuild, and Lambda to execute large-scale test suites.",
      "Raised automation coverage from 70% to 95% and reduced suite runtime by 35%.",
      "Instrumented CloudWatch and Grafana reporting, driving shift-left quality adoption."
    ],
    stack: [
      "Python",
      "AWS",
      "GitHub Actions",
      "CodeBuild",
      "Lambda",
      "Grafana"
    ],
    logo: "amazon.png"
  },
  {
    company: "Pointivo",
    role: "Senior QA Automation Engineer / QA Automation Lead",
    date: "Jan 2019 – May 2025",
    location: "",
    current: false,
    summary:
      "Led automation across multiple B2B and B2C platforms with Playwright, Cypress, and WebdriverIO.",
    bullets: [
      "Authored reusable TypeScript frameworks, improving team efficiency by roughly 15%.",
      "Reduced regression cycle time by roughly 50% and cut suite flakiness substantially.",
      "Integrated automation into GitLab CI/CD alongside Docker and SonarQube."
    ],
    stack: [
      "Playwright",
      "Cypress",
      "WebdriverIO",
      "TypeScript",
      "GitLab CI",
      "Docker",
      "SonarQube"
    ],
    logo: "pv3.png"
  },
  {
    company: "Abraxas Informatik AG",
    role: "Senior Software Development Engineer in Test (Consultant)",
    date: "Jun 2019 – Jun 2022",
    location: "",
    current: false,
    summary:
      "End-to-end automation with Playwright, Selenium, Appium, and Cypress, focused on release compliance and delivery speed.",
    bullets: [
      "Achieved roughly 98% QA compliance across releases.",
      "Jenkins and AWS integration improved release efficiency by roughly 30%.",
      "Partnered with development and UX; post-release defects reduced by roughly 20%."
    ],
    stack: ["Playwright", "Selenium", "Appium", "Cypress", "Jenkins", "AWS"],
    logo: "abraxas.png"
  },
  {
    company: "Kualitatem",
    role: "Senior QA Automation Engineer",
    date: "Nov 2015 – Dec 2018",
    location: "",
    current: false,
    summary:
      "Selenium-based automation for enterprise web applications, integrated into Jenkins CI/CD.",
    bullets: ["Reduced manual testing effort by roughly 40%."],
    stack: ["Selenium", "Java", "Jenkins"],
    logo: "kualitatemLogo.png"
  },
  {
    company: "Buggy TLC",
    role: "Software Engineer",
    date: "Dec 2014 – Dec 2015",
    location: "",
    current: false,
    summary:
      "Web and mobile development, and introduced API testing to the team.",
    bullets: [
      "Established API testing practice using Postman and REST Assured."
    ],
    stack: ["Postman", "REST Assured"],
    logo: "Untitled-design-35.png"
  }
];

export const toolkit = [
  {
    group: "Automation",
    items: [
      "Playwright",
      "Selenium",
      "Cypress",
      "WebdriverIO",
      "Appium",
      "Java",
      "JavaScript",
      "TypeScript",
      "Python"
    ]
  },
  {
    group: "API",
    items: ["REST Assured", "Postman", "SuperTest", "REST APIs"]
  },
  {
    group: "AI / GenAI",
    items: [
      "RAGAS",
      "RAG testing",
      "LLM evaluation",
      "Cursor AI",
      "MCP",
      "TensorFlow",
      "PyTorch"
    ]
  },
  {
    group: "DevOps",
    items: [
      "Git",
      "GitHub",
      "GitHub Actions",
      "Jenkins",
      "GitLab CI",
      "Docker",
      "Kubernetes",
      "Terraform"
    ]
  },
  {
    group: "Cloud & Devices",
    items: ["AWS", "BrowserStack", "Sauce Labs", "Perfecto"]
  },
  {
    group: "Data & Reporting",
    items: ["SQL", "Allure", "Extent Reports", "TestRail", "Grafana", "JMeter"]
  },
  {
    group: "Enterprise",
    items: ["Salesforce", "PWA", "Xray", "SonarQube"]
  }
];

export const domains = [
  {abbr: "MMIS", full: "Medicaid Management Information Systems"},
  {abbr: "Medicare", full: "Federal health coverage programs"},
  {abbr: "Medicaid", full: "State and federal medical assistance"},
  {abbr: "IES", full: "Integrated Eligibility Systems"},
  {abbr: "SNAP", full: "Supplemental Nutrition Assistance Program"},
  {abbr: "TANF", full: "Temporary Assistance for Needy Families"},
  {abbr: "MFP", full: "Money Follows the Person"},
  {abbr: "LTSS", full: "Long-Term Services and Supports"}
];

export const capabilities = [
  "UI Automation",
  "API Automation",
  "End-to-End Testing",
  "Regression Automation",
  "Integration Testing",
  "Cross-Browser Testing",
  "Cloud Testing",
  "CI/CD Quality Gates",
  "Performance Testing",
  "AI Testing",
  "RAG Evaluation",
  "LLM Testing",
  "Accessibility",
  "Database Validation"
];

export const philosophy = {
  title: "Engineering quality at scale",
  intro:
    "Quality is not a phase at the end of delivery. It is a system you design, build, and operate alongside the product.",
  steps: [
    {
      name: "Understand",
      note: "Map the product, its risk surface, and where failure actually costs something."
    },
    {
      name: "Design",
      note: "Choose a test architecture that matches the system — layers, boundaries, and data."
    },
    {
      name: "Automate",
      note: "Build reusable frameworks, not scripts. Fixtures, models, and helpers a team can extend."
    },
    {
      name: "Validate",
      note: "Assert on behaviour across UI, API, and data — deterministic where possible, scored where not."
    },
    {
      name: "Integrate",
      note: "Wire suites into CI/CD so every change is checked before it reaches a user."
    },
    {
      name: "Monitor",
      note: "Report, trend, and observe. A suite nobody reads is a suite nobody trusts."
    },
    {
      name: "Improve",
      note: "Cut flakiness, cut runtime, widen coverage. Repeat every release."
    }
  ]
};

export const about = {
  title: "About",
  paragraphs: [
    "I am a Software Development Engineer in Test. I write software whose purpose is to prove other software works — automation frameworks, CI/CD quality gates, and evaluation harnesses that make quality measurable instead of assumed.",
    "Over nine years I have built automation across healthcare, fintech, e-commerce, telecom, cloud infrastructure, and public-sector health and human services platforms. The stack changes; the discipline does not — model the system, automate the risk, integrate into delivery, and keep the feedback loop short.",
    "More recently my work has moved into non-deterministic territory: retrieval-augmented generation, LLM output validation, and evaluation pipelines scored with RAGAS. Testing an AI system is a different engineering problem to testing a deterministic one, and it is the part of quality engineering I find most interesting right now.",
    "I do not just test software. I engineer quality into it."
  ],
  education: [
    {
      school: "University of Management and Technology — UMT",
      qualification: "BSc, Software Engineering",
      date: "2012 – 2015"
    },
    {
      school: "The Punjab College",
      qualification: "F.Sc Pre-Engineering",
      date: ""
    },
    {school: "The Educators", qualification: "Matriculation", date: ""}
  ],
  certifications: [
    {name: "ISTQB® Certified", issuer: "ISTQB®"},
    {name: "Selenium Certification", issuer: ""},
    {name: "Appium Certification", issuer: ""},
    {name: "PWA Web App Automation", issuer: "SMIT"}
  ]
};

export const notes = {
  title: "Engineering Notes",
  subtitle:
    "Writing on automation architecture, AI evaluation, and quality engineering.",
  items: [
    {
      title: "Evaluating RAG systems with RAGAS",
      topic: "AI Testing",
      status: "Coming soon"
    },
    {
      title: "Designing a test framework a team will actually use",
      topic: "SDET Architecture",
      status: "Coming soon"
    },
    {
      title: "Quality gates that do not slow delivery down",
      topic: "CI/CD",
      status: "Coming soon"
    },
    {
      title: "MCP and repository-aware test automation",
      topic: "AI-Assisted SDET",
      status: "Coming soon"
    }
  ]
};

export const contact = {
  headline: ["Let's engineer", "better quality."],
  intro:
    "Open to SDET, test automation, and quality engineering roles. If you are building something that has to work, I would like to hear about it.",
  channels: [
    {label: "Email", value: links.email, href: `mailto:${links.email}`},
    {label: "LinkedIn", value: "in/abubakrafzal", href: links.linkedin},
    {label: "GitHub", value: "abubakarafzal", href: links.github},
    {label: "Résumé", value: "View full résumé", href: links.resume}
  ]
};
