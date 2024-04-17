import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SOCIALS = [
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/Shivam-Samant",
  },
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://linkedin.com/in/shivam~samant",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com/ShivamSamant5",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Bootstrap",
    image: "bootstrap.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "jQuery",
    image: "jquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Flask",
    image: "flask.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "php.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Laravel",
    image: "laravel.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "WordPress",
    image: "wordpress.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
] as const;

export const TOOLS_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Git",
    image: "git.png",
    width: 65,
    height: 65,
  },
    {
    skill_name: "GitHub",
    image: "github.png",
    width: 65,
    height: 65,
  },
    {
    skill_name: "GitHub Actions",
    image: "github-actions.png",
    width: 70,
    height: 85,
  },
    {
    skill_name: "Postman",
    image: "postman.png",
    width: 65,
    height: 65,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "AWS",
    image: "aws.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "NGINX",
    image: "nginx.png",
    width: 70,
    height: 70,
  },

] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 40,
    height: 40,
  },
] as const;

export const PROJECTS = [
  {
    title: "SankalpTaru",
    description: 'Nature-centric enthusiasts, planting trees for the people, by the people!',
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "Lopez Design",
    description: 'Multidisciplinary design studio and brand consultant.',
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "BeCause",
    description: 'An ecosystem containing various modules to become the home for citizen’s social contribution milestones.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
  {
    title: "SPASHT",
    description: 'Smart Parking Automated System for Hassle-Free Tracking.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
  {
    title: "CMS",
    description: 'Central Maintenance System.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
  {
    title: "VALL",
    description: 'Bringing together diverse talents to drive sustainable and impactful change for NGOs.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
  {
    title: "CII - Sustainable Development",
    description: 'Centre of Excellence for Sustainable Development.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
  {
    title: "SwaTaleem",
    description: 'Creating Thriving School Communities For Adolescent Girls In India.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
  {
    title: "Employee Portal",
    description: 'A hub-and-spoke platform for organizations to effectively manage their operations and data.',
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com/shivam5",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com/in/shivam~samant",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact me",
    link: "#contact-me",
  },
] as const;
