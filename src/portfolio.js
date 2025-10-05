/* Updated portfolio config — aligned to latest resume (AWS SDET, dates, contact) */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true
};

const greeting = {
  username: "Abu Bakar Afzal",
  title: "Hi, I'm Abu Bakar",
  subTitle: emoji(
    "SDET with 9+ years building scalable automation for Web, API, and Linux systems. Expert in TypeScript, Java, Python with Playwright, Selenium, Appium, REST Assured. CI/CD on AWS. Currently SDET (SDE II) at Amazon Web Services (AWS)."
  ),
  resumeLink:
    "https://app.enhancv.com/share/660a8a38/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/abubakarafzal",
  linkedin: "https://www.linkedin.com/in/abubakrafzal",
  gmail: "bakrshk@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "EXPERIENCED QA AUTOMATION ENGINEER WITH EXPERTISE IN TEST AUTOMATION AND QUALITY ASSURANCE",
  skills: [
    emoji(
      "⚡ Test Automation: Build reusable frameworks with Playwright, Selenium, Appium, WebdriverIO, Cypress"
    ),
    emoji(
      "⚡ CI/CD Integration: GitHub Actions, GitLab CI, Jenkins; Docker, Terraform; quality gates and reporting"
    ),
    emoji(
      "⚡ Cross-Platform Testing: Web, mobile, API; performance and reliability at scale"
    )
  ],

  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Management and Technology - UMT",
      logo: require("./assets/images/umtLogo.png"),
      subHeader: "Bachelor of Science in Software Engineering",
      duration: "2012 – 2015",
      desc: "Studied core software engineering, testing, and systems design.",
      descBullets: [
        "Strong foundation in SDLC, testing methodologies, and automation",
        "Hands-on projects across web and mobile development"
      ]
    },
    {
      schoolName: "The Punjab College",
      logo: require("./assets/images/punjablogo.png"),
      subHeader: "F.Sc Pre-Engineering",
      duration: "Completed",
      desc: "Focused on mathematics and engineering principles.",
      descBullets: ["Prepared for a career in engineering and technology."]
    },
    {
      schoolName: "The Educators",
      logo: require("./assets/images/educators.png"),
      subHeader: "Matriculation",
      duration: "Completed",
      desc: "High school education with a focus on science.",
      descBullets: ["Built a strong foundation in science and mathematics."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Web Automation", progressPercentage: "95%"},
    {Stack: "Mobile Automation", progressPercentage: "90%"},
    {Stack: "API Automation", progressPercentage: "85%"}
  ],
  displayCodersrank: false
};

const talkSection = {
  title: "Tech Stack",
  subtitle: emoji(
    "I love sharing what I learn and contributing to the community."
  ),
  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  badges: [
    '<img src="https://img.shields.io/badge/Playwright-2EAD33.svg?&style=for-the-badge&logo=Playwright&logoColor=white" alt="Playwright">',
    '<img src="https://img.shields.io/badge/Selenium-43B02A.svg?&style=for-the-badge&logo=Selenium&logoColor=white" alt="Selenium">',
    '<img src="https://img.shields.io/badge/Cypress-17202C.svg?&style=for-the-badge&logo=Cypress&logoColor=white" alt="Cypress">',
    '<img src="https://img.shields.io/badge/Appium-41BDF5.svg?&style=for-the-badge&logo=Appium&logoColor=white" alt="Appium">',
    '<img src="https://img.shields.io/badge/AWS-232F3E.svg?&style=for-the-badge&logo=Amazon-AWS&logoColor=white" alt="AWS">',
    '<img src="https://img.shields.io/badge/Docker-0db7ed.svg?&style=for-the-badge&logo=Docker&logoColor=white" alt="Docker">',
    '<img src="https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white" alt="Java">',
    '<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=black" alt="TypeScript">'
  ],
  display: true
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "SDET (SDE II)",
      company: "Amazon Web Services (AWS)",
      companylogo: require("./assets/images/amazon.png"),
      date: "Jun 2025 – Present",
      desc: "Automation for backend, API, and UI validation of Amazon Linux builds; AWS-native CI/CD and observability.",
      descBullets: [
        "Built AWS-based CI/CD (GitHub Actions, CodeBuild, Lambda) executing large-scale test suites",
        "Raised automation coverage 70% → 95%; reduced runtime by 35%",
        "CloudWatch & Grafana reporting; shift-left quality adoption"
      ]
    },
    {
      role: "Senior QA Automation Engineer / QA Automation Lead",
      company: "Pointivo",
      companylogo: require("./assets/images/pv3.png"),
      date: "Jan 2019 – May 2025",
      desc: "Led automation across multiple B2B/B2C platforms with Playwright, Cypress, WebdriverIO.",
      descBullets: [
        "Authored reusable TS frameworks; improved team efficiency by ~15%",
        "Regression cycle time reduced by ~50%; flakiness down substantially",
        "Integrated automation into GitLab CI/CD with Docker & SonarQube"
      ]
    },
    {
      role: "Senior Software Development Engineer in Test (Consultant)",
      company: "Abraxas Informatik AG",
      companylogo: require("./assets/images/abraxas.png"),
      date: "Jun 2019 – Jun 2022",
      desc: "E2E automation with Playwright, Selenium, Appium, Cypress; compliance and release acceleration.",
      descBullets: [
        "Achieved ~98% QA compliance across releases",
        "Jenkins + AWS integration improved release efficiency by ~30%",
        "Partnered with Dev/UX; post-release bugs reduced by ~20%"
      ]
    },
    {
      role: "Senior QA Automation Engineer",
      company: "Kualitatem",
      companylogo: require("./assets/images/kualitatemLogo.png"),
      date: "Nov 2015 – Dec 2018",
      desc: "Selenium-based automation for enterprise web apps; CI/CD with Jenkins.",
      descBullets: ["Reduced manual testing effort by ~40%"]
    },
    {
      role: "Software Engineer",
      company: "Buggy TLC",
      companylogo: require("./assets/images/Untitled-design-35.png"),
      date: "Dec 2014 – Dec 2015",
      desc: "Web & mobile development; introduced API testing with Postman & REST Assured."
    }
  ]
};

/* Open Source */
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Alexa.png"),
      projectName: "Alexa / Alexa AI",
      projectDesc:
        "Voice skill testing, NLP pipeline validation, conversational UX testing using Python, AWS Lambda, Alexa Skills Kit.",
      footerLink: [
        {
          name: "Amazon Alexa AI",
          url: "https://developer.amazon.com/en-US/alexa"
        }
      ]
    },
    {
      image: require("./assets/images/Siemens_Healthineers_logo.svg.png"),
      projectName: "Siemens Healthineers",
      projectDesc:
        "Healthcare platform QA using Cypress, Cucumber, CircleCI; Lighthouse, VMware.",
      footerLink: [
        {name: "Visit Website", url: "https://www.siemens-healthineers.com/"}
      ]
    },
    {
      image: require("./assets/images/witty.png"),
      projectName: "Witty",
      projectDesc:
        "Fintech automation with Playwright (TS), Mocha, Allure, GitHub CI, Slack reporting, Docker, Xray.",
      footerLink: [{name: "Visit Website", url: "https://www.w1tty.com/"}]
    },
    {
      image: require("./assets/images/vertical-bridge-logo.png"),
      projectName: "Vertical Bridge",
      projectDesc:
        "Telecom & GenAI modeling QA with Python, Appium, Selenium, Bitbucket CI, Perfecto.",
      footerLink: [
        {name: "Visit Website", url: "https://www.verticalbridge.com/"}
      ]
    },
    {
      image: require("./assets/images/Zact_Logo.jpg"),
      projectName: "Zact",
      projectDesc:
        "Real estate & expense management: WebdriverIO, TypeScript, Mocha, Appium, SuperTest, Postman.",
      footerLink: [{name: "Visit Website", url: "https://www.zact.com/"}]
    },
    {
      image: require("./assets/images/elgrocer.png"),
      projectName: "Elgrocer",
      projectDesc:
        "E-commerce: Java, Appium, Maven, BrowserStack, REST Assured, GitLab CI, Selenium, JMeter, Grafana, TestRail.",
      footerLink: [{name: "Visit Website", url: "https://www.elgrocer.com/"}]
    },
    {
      image: require("./assets/images/CC.png"),
      projectName: "CuddleClone",
      projectDesc:
        "Retail logistics: Playwright (TS), Docker, GitHub CI, Allure; major flakiness reduction.",
      footerLink: [{name: "Visit Website", url: "https://www.cuddleclone.com/"}]
    },
    {
      image: require("./assets/images/cialfo.png"),
      projectName: "CIALFO",
      projectDesc:
        "Banking platform automation: Selenium, Java, TestNG, Maven, Jenkins; REST Assured; DB testing; JMeter; Extent Reports.",
      footerLink: [{name: "Visit Website", url: "https://www.cialfo.com/"}]
    },
    {
      image: require("./assets/images/lqa.png"),
      projectName: "Leading Quality",
      projectDesc:
        "Quality platform: JavaScript/TypeScript, Cypress, Playwright, WebDriverIO, Mocha/Chai, Jenkins, Docker, AWS, REST.",
      footerLink: [
        {name: "Visit Website", url: "https://app.leadingquality.com/"}
      ]
    },
    {
      image: require("./assets/images/occ.png"),
      projectName: "OpenCascade AI Modeling",
      projectDesc:
        "AI/ML testing with Python, Pytest, Robot Framework, TensorFlow, PyTorch, Docker, Kubernetes, GitHub Actions, Postman.",
      footerLink: [{name: "Visit Website", url: "https://www.opencascade.com/"}]
    }
  ],
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "ISTQB® Certified",
      subtitle: "ISTQB® - International Software Testing Qualifications Board",
      image: require("./assets/images/istqbLogo.webp"),
      imageAlt: "ISTQB Certification Logo",
      footerLink: [{name: "Certification", url: "https://linkedin.com/"}]
    },
    {
      title: "PWA Web App Automation Certification",
      subtitle: "Completed Certification from SMIT for PWA Web App Automation",
      image: require("./assets/images/pwa.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/"}
      ]
    },
    {
      title: "Selenium Certification",
      subtitle:
        "Certified skills in Selenium for test automation of web applications.",
      image: require("./assets/images/Selenium_Logo.png"),
      imageAlt: "Selenium Logo",
      footerLink: [{name: "Certification", url: ""}]
    },
    {
      title: "Appium Certification",
      subtitle: "Certified expertise in Appium for mobile application testing.",
      image: require("./assets/images/appium.png"),
      imageAlt: "Appium Logo",
      footerLink: [{name: "Certification", url: ""}]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "With love for building cool stuff, I share what I learn.",
  displayMediumBlogs: "true",
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Create a Google Assistant Action in less than 30 minutes."
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React for building user interfaces."
    }
  ],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Open to SDET / QA Automation roles (Remote EU / Germany).",
  number: "+49 176 26681637",
  email_address: "bakrshk@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  talkSection,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
