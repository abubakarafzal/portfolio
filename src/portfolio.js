/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abu Bakr Afzal",
  title: "Hi all, I'm Abu Bakr",
  subTitle: emoji(
    "I'm a dedicated Software Development Engineer in Test (SDET) with a strong commitment to ensuring the quality and reliability of software products. With 8 plus years of experience in the software testing and test automation field, I'm your go-to expert for crafting robust testing solutions."
  ),
  resumeLink:
    "https://app.enhancv.com/share/660a8a38/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic", // Update with your actual resume link if needed
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abubakarafzal",
  linkedin: "https://www.linkedin.com/in/bakrshk",
  gmail: "bakrshk@gmail.com",
  // Add other social media links if needed
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "EXPERT SDET WITH A PASSION FOR TEST AUTOMATION AND QUALITY ASSURANCE",
  skills: [
    emoji(
      "⚡ Test Automation: Creating and maintaining automation frameworks using tools like Selenium, Appium, WebDriverIO, Cypress, Playwright."
    ),
    emoji(
      "⚡ Test Strategy: Designing comprehensive test plans and strategies to ensure thorough test coverage."
    ),
    emoji(
      "⚡ Cross-Platform Testing: Ensuring software functions seamlessly across various platforms and devices."
    )
  ],

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JAVA",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Management and Technology - UMT",
      logo: require("./assets/images/umtLogo.png"),
      subHeader: "Bachelor of Science in Computer Software Engineering",
      duration: "January 2012 - February 2016",
      desc: "Studied various aspects of computer software engineering.",
      descBullets: [
        "Developed a strong foundation in software engineering principles.",
        "Gained experience in software development and testing."
      ]
    },
    {
      schoolName: "The Punjab College",
      logo: require("./assets/images/punjablogo.png"),
      subHeader: "F.sc Pre-Engineering",
      duration: "Completed",
      desc: "Focused on mathematics and engineering principles.",
      descBullets: ["Prepared for a career in engineering and technology."]
    },
    {
      schoolName: "The Educators",
      logo: require("./assets/images/educators.png"),
      subHeader: "Matriculation",
      duration: "Completed",
      desc: "High school education with a focus on science subjects.",
      descBullets: ["Built a strong foundation in science and mathematics."]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Automation", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Mobile Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "API Automation",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section, defaults to false
};

const talkSection = {
  title: "Tech Stack",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
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
    '<img src="https://img.shields.io/badge/CSS3-1572B6.svg?&style=for-the-badge&logo=CSS3&logoColor=white" alt="CSS3">',
    '<img src="https://img.shields.io/badge/Appium-41BDF5.svg?&style=for-the-badge&logo=Appium&logoColor=white" alt="Appium">',
    '<img src="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white" alt="HTML5">',
    '<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">',
    '<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?&style=for-the-badge&logo=Firebase&logoColor=black" alt="Firebase">',
    '<img src="https://img.shields.io/badge/Gatsby-663399.svg?&style=for-the-badge&logo=Gatsby&logoColor=white" alt="Gatsby">',
    '<img src="https://img.shields.io/badge/MySQL-4479A1.svg?&style=for-the-badge&logo=MySQL&logoColor=white" alt="MySQL">',
    '<img src="https://img.shields.io/badge/Node.js-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white" alt="NodeJS">',
    '<img src="https://img.shields.io/badge/AWS-232F3E.svg?&style=for-the-badge&logo=Amazon-AWS&logoColor=white" alt="AWS">',
    '<img src="https://img.shields.io/badge/Postman-FF6C37.svg?&style=for-the-badge&logo=Postman&logoColor=white" alt="Postman">',
    '<img src="https://img.shields.io/badge/WebDriverIO-EA5906.svg?&style=for-the-badge&logo=WebdriverIO&logoColor=white" alt="WebDriverIO">',
    '<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=black" alt="TypeScript">',
    '<img src="https://img.shields.io/badge/JavaScript-F0DB4F.svg?&style=for-the-badge&logo=JavaScript&logoColor=black" alt="JavaScript">',
    '<img src="https://img.shields.io/badge/Docker-0db7ed.svg?&style=for-the-badge&logo=Docker&logoColor=white" alt="Docker">',
    '<img src="https://img.shields.io/badge/Mocha-8D6748.svg?&style=for-the-badge&logo=Mocha&logoColor=white" alt="Mocha">',
    '<img src="https://img.shields.io/badge/Cucumber-23D96C.svg?&style=for-the-badge&logo=Cucumber&logoColor=white" alt="Cucumber">',
    '<img src="https://img.shields.io/badge/Selenium-43B02A.svg?&style=for-the-badge&logo=Selenium&logoColor=white" alt="Selenium">',
    '<img src="https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white" alt="Java">',
    '<img src="https://img.shields.io/badge/Rest%20Assured-4BA82E.svg?&style=for-the-badge&logo=Java&logoColor=white" alt="Rest-Assured">',
    '<img src="https://img.shields.io/badge/Postman-FF6C37.svg?&style=for-the-badge&logo=Postman&logoColor=white" alt="Postman">',
    '<img src="https://img.shields.io/badge/Apache%20Maven-C71A36.svg?&style=for-the-badge&logo=Apache-Maven&logoColor=white" alt="Apache Maven">',
    '<img src="https://img.shields.io/badge/Git-F05032.svg?&style=for-the-badge&logo=Git&logoColor=white" alt="Git">',
    '<img src="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white" alt="GitHub">',
    '<img src="https://img.shields.io/badge/GitHub%20Actions-181717.svg?&style=for-the-badge&logo=GitHub-Actions&logoColor=white" alt="GitHub-Actions">',
    '<img src="https://img.shields.io/badge/Jenkins-D24939.svg?&style=for-the-badge&logo=Jenkins&logoColor=white" alt="Jenkins">',
    '<img src="https://img.shields.io/badge/Cypress-17202C.svg?&style=for-the-badge&logo=Cypress&logoColor=white" alt="Cypress">',
    '<img src="https://img.shields.io/badge/Node.js-339933.svg?&style=for-the-badge&logo=Node.js&logoColor=white" alt="NodeJS">',
    '<img src="https://img.shields.io/badge/Apache%20JMeter-D22128.svg?&style=for-the-badge&logo=Apache-JMeter&logoColor=white" alt="JMeter">',
    '<img src="https://img.shields.io/badge/Playwright-2EAD33.svg?&style=for-the-badge&logo=Playwright&logoColor=white" alt="Playwright">',
    '<img src="https://img.shields.io/badge/Pytest-0A9EDC.svg?&style=for-the-badge&logo=Pytest&logoColor=white" alt="Pytest">',
    '<img src="https://img.shields.io/badge/Testing%20Library-E33332.svg?&style=for-the-badge&logo=Testing-Library&logoColor=white" alt="Testing Library">',
    '<img src="https://img.shields.io/badge/CircleCI-343434.svg?&style=for-the-badge&logo=CircleCI&logoColor=white" alt="CircleCI">',
    '<img src="https://img.shields.io/badge/Gradle-02303A.svg?&style=for-the-badge&logo=Gradle&logoColor=white" alt="Gradle">',
    '<img src="https://img.shields.io/badge/Android-3DDC84.svg?&style=for-the-badge&logo=Android&logoColor=white" alt="Android">',
    '<img src="https://img.shields.io/badge/iOS-000000.svg?&style=for-the-badge&logo=iOS&logoColor=white" alt="iOS">',
    '<img src="https://img.shields.io/badge/Cucumber-23D96C.svg?&style=for-the-badge&logo=Cucumber&logoColor=white" alt="Cucumber">',
    '<img src="https://img.shields.io/badge/Robot%20Framework-000000.svg?&style=for-the-badge&logo=Robot-Framework&logoColor=white" alt="Robot Framework">',
    '<img src="https://img.shields.io/badge/Chai.js-F7E018.svg?&style=for-the-badge&logo=Chai&logoColor=black" alt="Chai.js">',
    '<img src="https://img.shields.io/badge/DevOps-007ACC.svg?&style=for-the-badge&logo=DevOps&logoColor=white" alt="DevOps">'
  ],
  display: true // Set false to hide this section, defaults to true
};
// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Development Engineer In Test",
      company: "Capgemini Engineering",
      companylogo: require("./assets/images/Capgemini-Emblem.png"),
      date: "June 2022 – Present",
      desc: "Develop and maintain automated test scripts and frameworks for UI, API, and performance testing.",
      descBullets: [
        "Integrate automated tests into CI/CD pipelines.",
        "Conduct load and performance testing.",
        "Collaborate with cross-functional teams to identify and prioritize defects."
      ]
    },
    {
      role: "Software Engineer in Test | QA Automation Lead",
      company: "Kualitatem PVT Limited.",
      companylogo: require("./assets/images/kualitatemLogo.png"),
      date: "Jan 2019 – May 2022",
      desc: "Developed and maintained automation scripts and frameworks for testing."
    },
    {
      role: "Senior Quality Assurance Automation Engineer",
      company: "Siemens",
      companylogo: require("./assets/images/Siemens.png"),
      date: "Oct 2017 – Dec 2018",
      desc: "Coordinated the automation department and implemented successful CI strategies.",
      descBullets: [
        "Analyzed business requirements and software specifications.",
        "Created and optimized test documentation."
      ]
    },
    {
      role: "Software QA Automation Engineer",
      company: "elGrocer",
      companylogo: require("./assets/images/elgrocer.png"),
      date: "Jan 2016 – Sep 2017",
      desc: "Developed frameworks using Selenium and CI/CD techniques.",
      descBullets: [
        "Managed projects and achieved scheduled goals.",
        "Automated websites and monitored application concepts."
      ]
    },
    {
      role: "Software Engineer",
      company: "Buggy TLC",
      companylogo: require("./assets/images/Untitled-design-35.png"),
      date: "Dec 2014 – Dec 2015",
      desc: "Conducted automation testing and improved testing processes."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Siemens_Healthineers_logo.svg.png"),
      projectName: "Healthineers",
      projectDesc: "Automated and developed features for Fleetio application.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.siemens-healthineers.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Untitled-design-35.png"),
      projectName: "BuggyOnched",
      projectDesc:
        "Developed automation scripts and monitored application performance.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.buggyonched.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle:
    //     "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: require("./assets/images/googleAssistantLogo.webp"),
    //   imageAlt: "Google Assistant Action Logo",
    //   footerLink: [
    //     {
    //       name: "View Google Assistant Action",
    //       url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
    //     }
    //   ]
    // },

    {
      title: "PWA Web App Automation Certification",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Automation",
      image: require("./assets/images/pwa.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
    {
      title: "ISTQB Foundation Certification",
      subtitle: "Certified foundation level skills in software testing.",
      image: require("./assets/images/istqbLogo.webp"), // Make sure to have this image in the specified path
      imageAlt: "ISTQB Certification Logo",
      footerLink: [
        {name: "Certification", url: "https://linkedin.com/"} // Update with actual certification URL if available
      ]
    },
    {
      title: "Selenium Certification",
      subtitle:
        "Certified skills in Selenium for test automation of web applications.",
      image: require("./assets/images/Selenium_Logo.png"), // Ensure the logo image file exists at this path
      imageAlt: "Selenium Logo",
      footerLink: [
        {name: "Certification", url: ""} // Provide the link if available
      ]
    },
    {
      title: "Appium Certification",
      subtitle: "Certified expertise in Appium for mobile application testing.",
      image: require("./assets/images/appium.png"), // Ensure the logo image file exists at this path
      imageAlt: "Appium Logo",
      footerLink: [
        {name: "Certification", url: ""} // Provide the link if available
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+351-927-443-477",
  email_address: "abubakarsdet777@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
