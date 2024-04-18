import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { TbBrandLeetcode } from "react-icons/tb";

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
  {
    name: "LeetCode",
    icon: TbBrandLeetcode,
    link: "https://leetcode.com/shivamsamant1111",
  }
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
    image: "/projects/sankalptaru.png",
    link: "https://sankalptaru.org/",
  },
  {
    title: "Lopez Design",
    description: 'Multidisciplinary design studio and brand consultant.',
    image: "/projects/lopez.png",
    link: "https://thisislopez.com/",
  },
  {
    title: "BeCause",
    description: 'An ecosystem containing various modules to become the home for citizen’s social contribution milestones.',
    image: "/projects/because.png",
    link: "https://because.center/welcome",
  },
  {
    title: "CII - Sustainable Development",
    description: 'Centre of Excellence for Sustainable Development.',
    image: "/projects/cii.png",
    link: "https://sustainabledevelopment.in/brands/17th-sustainability-summit/",
  },
  {
    title: "SwaTaleem",
    description: 'Creating Thriving School Communities For Adolescent Girls In India.',
    image: "/projects/swataleem.png",
    link: "https://www.swataleem.org/",
  },
] as const;

export const EXTRA = [
  {
    title: "SPASHT",
    description: 'Smart Parking Automated System for Hassle-Free Tracking.',
    image: "/projects/spasht.png",
    link: "https://github.com/Shivam-Samant/SPASHT",
  },
  {
    title: "CMS",
    description: 'Central Maintenance System.',
    image: "/projects/cms.png",
    link: "https://github.com/Shivam-Samant/central-maintenance-system/",
  },
  {
    title: "Employee Portal",
    description: 'A hub-and-spoke platform for organizations to effectively manage their operations and data.',
    image: "/projects/portal.png",
    link: "https://github.com/coloredcow/portal",
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About Me",
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
    title: "Contact Me",
    link: "#contact-me",
  },
] as const;
