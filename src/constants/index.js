import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  anime7,
  portfolio,
  portfolio1,
  iphone,
  ai_project,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Open Source contributor",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "introduction to frontend developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Distinguish between front-end, back-end, and full-stack developers.",
      "Create and style a webpage with HTML and CSS.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",

    ],
  },
  {
    title: "version control",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Implement Version Control systems",
      "Navigate and configure using the command line. ",
      "Use a GitHub repository. Create a GitHub repository.",
      "Participating in code reviews and Manage code revisions.",
    ],
  },
  {
    title: "Programming with JavaScript",
    company_name: "Meta",
    icon: meta,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Creating simple JavaScript codes..",
      "Creating and manipulating objects and arrays.",
      "Writing unit tests using Jest.",
      " learn about Node.js and Node Package Manager (npm).",
    ],
  },
  {
    title: "Meta Front End Professional",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Intrested in AI & Cyber security",
    company_name: "future",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "(2024-2026) - future",
    points: [
      "Artificial intelligence (AI) and cybersecurity are two rapidly growing fields that intersect in various ways, making them incredibly important and interesting areas of study.",
      "Certifications: Obtaining certifications in AI and cybersecurity.",
      "Contributing to open-source projects.",
      "Developing personal projects that explore the intersection of AI and cybersecurity.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Anime7",
    description:
      `This anime website offers up-to-date information on the latest anime releases, as well as a search feature for users to easily find their favorite anime. Utilizing API's to gather data,
       the site is constantly improving and adding new features to enhance the user experience.`,
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: anime7,
    source_code_link: "https://ali7040.github.io/Anime7/",
  },
  {
    name: "Iphone 14 webpage",
    description:
      `Realistic iPhone 14 design.
      The project uses React components, allowing for modular and reusable code,
      making it easy to extend or customize the web page.
      Three.js library is used to create stunning 3D graphics and animations,
      bringing the iPhone 14 design to life on the web. Responsive and interactive. `,
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Threejs",
        color: "orange-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: iphone,
    source_code_link: "https://github.com/Ali7040/-iPhone14-WebPage-React-ThreeJS",
  },
  {
    name: "My Portfolio",
    description:
      `Overview.
         I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React and Three.js. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Lets work together to bring your ideas to life!.`,
    tags: [
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio1,
    source_code_link: "https://github.com/Ali7040/MY_Portfolio",
  },
  {
    name: "AI article summarizer",
    description:
      "Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "rapid-API",
        color: "orange-text-gradient",
      },

    ],
    image: ai_project,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
