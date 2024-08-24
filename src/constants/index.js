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
  threejs,
  anime7,
  portfolio,
  portfolio1,
  iphone,
  ai_project,
  openbeta,
  angular,
  future,
  snapgram,
  foody,
  sumit,
  calender,
  peopleCounter,
  imgDetector,
  carCounter,
  newPortfolio,
  visualizer,
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
    title: "Frontend Developer",
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
  {
    name: "Angular",
    icon: angular,
  },
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
    date: "2023 -September ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "OpenSource contribution",
    company_name: "OpenBeta",
    icon: openbeta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "I am grateful for the opportunity to contribute to Openbeta's open source community, where I learned invaluable skills and knowledge.",
      "I contributed to Openbeta, working on ReactJS and backend development.",
      "Excited to collaborate with this amazing community in future endeavors.",
    ],
  },
  {
    title: "Ai & AR/VR",
    company_name: "future",
    icon: future,
    iconBg: "#E6DEDD",
    date: "Future",
    points: [
      "Artificial Intelligence (AI) and Augmented Reality/Virtual Reality (AR/VR) are dynamic and rapidly evolving fields, offering exciting opportunities for exploration and growth.",
      "Work Goals: Striving to work in AI and AR/VR, leveraging certifications to deepen expertise and stay updated with the latest advancements.",
      "Contributing to open-source projects.",
      "Building Immersive Experiences: Developing personal AR/VR projects that showcase creative applications of AI, enhancing immersive experiences for users.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I am grateful for the opportunity to contribute to Openbeta's open source community, where I learned invaluable skills and knowledge.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "OpenBeta",
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
    description: `This anime website offers up-to-date information on the latest anime releases, as well as a search feature for users to easily find their favorite anime. Utilizing API's to gather data,
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
    description: `Realistic iPhone 14 design.
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
    source_code_link:
      "https://github.com/Ali7040/-iPhone14-WebPage-React-ThreeJS",
  },
  {
    name: "My Portfolio",
    description: `I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React and Three.js. I'm a quick learner and collaborate. Lets work together to bring your ideas to life!.`,
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
    source_code_link: "https://github.com/Ali7040/Article-summarizer_AI",
  },
  {
    name: "snapgram",
    description:
      "I created a social media web app using React and TypeScript. This application features interactive user interfaces and dynamic content, providing an engaging and immersive user experience.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "appwrite",
        color: "orange-text-gradient",
      },
    ],
    image: snapgram,
    source_code_link: "https://github.com/Ali7040/Snapgram",
  },

  {
    name: "FoOdy",
    description:
      "I created a food ordering app inspired by Food Panda using Angular. This dynamic and responsive app features a comprehensive product catalog with sorting and filtering options, secure user authentication for login and registration, and advanced styling with SCSS. This project was a great way for me to enhance my skills in building complex, user-friendly applications.",
    tags: [
      {
        name: "Angular",
        color: "ang-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJs ",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "mon-text-gradient",
      },
    ],
    image: foody,
    source_code_link: "https://github.com/Ali7040/foodApp",
  },
  {
    name: "SumIT",
    description:
      "Fed up with disorganized online reading, I created Sumit a web extension crafted with HTML, CSS, and JavaScript. Sumit helps me capture and organize notes, turning my online reading chaos into clarity. This project is a personal testament to solving real challenges with tailored tech solutions.",
    tags: [
      {
        name: "HTML",
        color: "ang-text-gradient",
      },
      {
        name: "JS",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: sumit,
    source_code_link: "",
  },
  {
    name: "Calendar App",
    description:
      "I built a digital calendar app from the ground up using Angular and Angular Material, without relying on any external libraries. This project allowed me to implement features for setting and managing events on specific dates.",
    tags: [
      {
        name: "HTML",
        color: "ang-text-gradient",
      },
      {
        name: "TS",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "Angular Material",
        color: "mon-text-gradient",
      },
    ],
    image: calender,
    source_code_link: "",
  },
  {
    name: "Object Detector",
    description:
      "I created a real-time object detection system using YOLO and Python, integrated with a webcam for live video analysis.This project allowed me to explore and apply machine learning techniques in real time, enhancing my skills and understanding of object detection.",
    tags: [
      {
        name: "python",
        color: "ang-text-gradient",
      },
      {
        name: "yolo v8",
        color: "blue-text-gradient",
      },
    ],
    image: imgDetector,
    source_code_link: "https://github.com/Ali7040/YoloWebCam",
  },

  {
    name: "People Counter",
    description:
      "I created a learning project involving a people counter using YOLO v8 and Python. This system utilizes real-time object detection to count individuals accurately.",
    tags: [
      {
        name: "python",
        color: "ang-text-gradient",
      },
      {
        name: "yolo v8",
        color: "blue-text-gradient",
      },
    ],
    image: peopleCounter,
    source_code_link: "https://github.com/Ali7040/People_counter_model",
  },

  // {
  //   name: "Car Counter",
  //   description:
  //     "I built a car counter as a learning project, using machine learning and computer vision techniques with YOLO in Python. This project was a hands-on way for me to deepen my skills in real-time object detection and practical AI applications.",
  //   tags: [
  //     {
  //       name: "python",
  //       color: "ang-text-gradient",
  //     },
  //     {
  //       name: "yolo v8",
  //       color: "blue-text-gradient",
  //     },
  //   ],
  //   image: carCounter,
  //   source_code_link: "https://github.com/Ali7040/Car_Counter_model",
  // },

  {
    name: "Portfolio in Angular",
    description:
      "I created a new portfolio project using Angular, TypeScript, and SCSS, incorporating Tailwind CSS for streamlined styling. This project showcases my skills in modern frontend development practices and features a responsive design for an enhanced user experience.",
    tags: [
      {
        name: "Angular",
        color: "ang-text-gradient",
      },
      {
        name: "SCSS",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "mon-text-gradient",
      },
    ],
    image: newPortfolio,
    source_code_link: "https://github.com/Ali7040/portfolio",
  },

  {
    name: "Algorithm Visualizer",
    description:
      "Built an algorithm visualizer inspired by Clement Mihailescu's React project, recreated in Angular. It features 4 sorting and 2 searching algorithms, designed to help students visually and interactively understand each step of the algorithms.",
    tags: [
      {
        name: "Angular",
        color: "ang-text-gradient",
      },
      {
        name: "SCSS",
        color: "blue-text-gradient",
      },
      {
        name: "TS",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "mon-text-gradient",
      },
    ],
    image: visualizer,
    source_code_link: "https://github.com/Ali7040/algorithm-visualizer",
  },
];

export { services, technologies, experiences, testimonials, projects };
