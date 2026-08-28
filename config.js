/**
 * ===================================================================
 *  90s RETRO PORTFOLIO — CONFIGURATION FILE
 * ===================================================================
 *  Edit the details below to customize your personal portfolio!
 */

const USER_CONFIG = {

  // Personal Profile Data
  profile: {
    name: "Jainal",
    title: "Full-Stack Developer & Creative Technologist",
    tagline: "Building cool digital experiences with code, creativity & good vibes. ✨",
    avatarUrl: "https://media.licdn.com/dms/image/v2/D5603AQFekiwTeElVSg/profile-displayphoto-shrink_800_800/B56ZXXZxugGQAk-/0/1743075615476?e=1789603200&v=beta&t=qDcB5ECZJspf_gddiZVW6L93cARnAVW6we3SSF_ui_Y",
    bioLong: [
      "Hello world! I'm a passionate web creator who loves blending modern tech stacks with bold, expressive design.",
      "I build full-stack web applications, interactive interfaces, tools, and creative side projects.",
      "When I'm not writing code, you can find me exploring design trends, tweaking CSS animations, or playing classic games."
    ],
    location: "Vadodara, Gujarat, India 🇮🇳",
    status: "Available for Freelance & Half-Time Roles",
    experienceYears: "Still a Student at ITM SLS BARODA UNIVERSITY as a Diploma CSE",
    resumeUrl: "#", // Link to your PDF resume e.g. "resume.pdf"
  },

  // Projects Showcase
  projects: [
    {
      id: "proj-1",
      title: "Maa Ki Rasoi",
      category: "Web App",
      year: "2026",
      tech: ["HTML5", "Vanilla CSS", "JavaScript"],
      description: "A website built to solve an everyday problems for all the moms,<br>'What to cook for the meal today?' It suggest you recipes based on the ingredients available in your kitchen.",
      demoUrl: "https://100hal.com/maakirasoi",
      githubUrl: "https://github.com/example",
      emoji: "🍱"
    }
  ],

  // Technical Skills
  skills: [
    {
      category: "Languages & Core",
      color: "#00C9FF",
      items: [
        { name: "JavaScript (ES6+)", level: 65 , icon: "⚡" },
        { name: "HTML5 & CSS3",      level: 88, icon: "🎨" },
        { name: "TypeScript",        level: 8, icon: "📘" },
        { name: "Python",            level: 40, icon: "🐍" },
        { name: "SQL & Relational DBs", level: 80, icon: "🗄️" }
      ]
    }
  ],

  // Experience Timeline
  experience: [
    {
      role: "Junior Developer",
      company: "ITM SLS BARODA UNIVERSITY",
      period: "2026 – Present",
      description: "Developing web applications for some real-life problems, but still learning new things everyday.",
      color: "#00C9FF"
    },
    {
      role: "College Life",
      company: "ITM SLS BARODA UNIVERSITY",
      period: "2025 – Present",
      description: "Started my journey as a Diploma Computer Science Student and learnt the basics of JS, C++, Python and MySQL.",
      color: "#FFE500"
    },
    {
      role: "Just a normal student",
      company: "Sarwa Mangal School",
      period: "2021 – 2025",
      description: "Still learning the basics of HTML and CSS.",
      color: "#FF6B9D"
    }
  ],

  // Social Links
  socials: [
    { platform: "GitHub", handle: "@jainal04", url: "https://github.com/Jainal04", svg: "github" },
    { platform: "LinkedIn", handle: "in/jainal-bhavsar", url: "https://www.linkedin.com/in/jainal-bhavsar/", svg: "linkedin" },
    { platform: "Twitter / X", handle: "@jainal_124",  url: "https://x.com/Jainal_124",  svg: "twitter" },
    { platform: "Email", handle: "jainavya0427@gmail.com", url: "jainavya0427@gmail.com", svg: "email" }
  ]
};