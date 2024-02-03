import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  shopify,
  carrent,
  jobit,
  tripguide,
  parkInnovation,
  brava,
  freelancer,
  Fifteenology,
  ishop,
  Mysql,
  Sql,
  Bootstrap,
  MaterialUI,
} from "../assets";
import { avatar } from "../assets/clients";

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
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "Front End Development",
    icon: mobile,
  },
  {
    title: "CMS Development",
    icon: backend,
  },
  {
    title: "SEO Optimization",
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
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  {
    name: "MaterialUI",
    icon: MaterialUI,
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
    name: "Mysql",
    icon: Mysql,
  },
  {
    name: "sql",
    icon: Sql,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Junior Developer",
    company_name: "Brava 360 Digital",
    icon: brava,
    iconBg: "#383E56",
    date: "July 2023 - Present",
    points: [
      "Excelling in WordPress, advancing skills to create diverse websites and demonstrating versatile proficiency.",
      "Applying quality assurance methods to align work with design standards, ensuring a consistent standard of excellence.",
      "Collaborating closely with graphic designers to achieve outstanding results in website development.",
      "Specializing in developing headless CMS websites using Next.js and WordPress, leveraging advanced technologies",
      "Implementing SEO strategies, consistently achieving website optimization scores between 90-100% for enhanced online visibility and user experience.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Fifteenology",
    icon: Fifteenology,
    iconBg: "#E6DEDD",
    date: "November 2023 - January 2024",
    points: [
      "Mastering React.js Concepts: Acquired an in-depth understanding of React.js, delving into its core concepts, including state management, component lifecycle, and virtual DOM.",
      "Precision in resolving warnings and errors, showcasing adept problem-solving skills in React application development.",
      "Strengthening skills in Material UI, contributing to elevated design and user interface elements.",
      "Conducting comprehensive testing of database entries and APIs, ensuring robust data integrity and optimal application performance.",
    ],
  },
  {
    title: "Full Stack Development Trainee ",
    company_name: "Park Innovation",
    icon: parkInnovation,
    iconBg: "#383E56",
    date: "June 2023 - October 2023",
    points: [
      "Gaining hands-on experience with MERN stack, SQL, MySQL, HTML, CSS, JavaScript, Bootstrap, Material UI, and jQuery.",
      "Collaborating closely with UI/UX teams to convert Figma files into polished and functional web interfaces.",
      "Expanding knowledge in SEO practices to optimize web projects for improved visibility and search engine performance.",
      "Applying Scrum methodologies for effective project management, showcasing leadership skills through organized task management on Trello and consistent deadline achievement.",
      "Committing to ongoing learning and adaptation in a fast-paced environment to stay current with industry standards.",
    ],
  },
  {
    title: "Website Developer ",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Creating and maintaining visually appealing, responsive websites with HTML, CSS, JavaScript, jQuery, and WordPress.",
      "Enhancing expertise by collaborating on React JS websites, leveraging its efficiency and versatility to create dynamic user experiences.",
      "Staying up-to-date with the latest web development technologies and trends, ensuring clients receive cutting-edge services and solutions.",
      "Implementing effective SEO strategies, Achieving a 90% increase in website visibility through effective SEO strategies.",
    ],
  },
  {
    title: "IT-SUPPORT  ",
    company_name: "ISHOP",
    icon: ishop,
    iconBg: "#E6DEDD",
    date: "August 2021 - August 2022",
    points: [
      "Installing and configuring hardware and software for computers and mobile devices.",
      "Conducting wireless internet installations for clients, providing reliable connectivity and resolving any network connectivity issues.",
      "Responsibly installing and configuring desktop software for new computers.",
      "Continuously acquiring new technical skills through training, expanding proficiency in diverse areas, including Linux environments.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A great Candidate that dedicated his time to work  with me. He was very professional and responsive.",
    name: "Firas Abo Fadel",
    designation: "CEO",
    company: "Fiftechnology",
    image: avatar,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like rayan bouezzeddine.",
    name: "Gloria Hanna",
    designation: "Development Manager",
    company: "Freshco ",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Quiqpay App",
    description:
      "Engineered a React app for internet providers, streamlining user transactions with personalized links for enhanced purchasing experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Material UI",
        color: "pink-text-gradient",
      },
      {
        name: "VS Code",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Rayan200013/quiqpay-app",
  },
  {
    name: "Freshco Lebanon",
    description:
      "Designed FreshCoLebanon to elevate the presentation of fresh fruit products in Lebanon, driving increased sales through an engaging platform.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Woo commerce",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://freshcolebanon.com",
  },
  {
    name: "Allez retour",
    description:
      "Developed 'Allez Retour' as a senior project for Park Innovation, catering to users exploring destinations in Shouf, providing valuable insights and information.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "green-text-gradient",
      },
      {
        name: "Mysql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Rayan200013/mern-final-project/",
  },
];

export { services, technologies, experiences, testimonials, projects };
