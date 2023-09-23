import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/cryptocrowd2.png";
import rmtdevImg from "@/public/ozdevs.png";
import wordanalyticsImg from "@/public/asset-trading.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Web Developer",
    location: "M3 Digital",
    description:
      "Worked on variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2021 - February 2022",
  },
  {
    title: "Junior Developer",
    location: "YouPay",
    description:
      "YouPay allows shoppers to share Shopify carts anonymously with another person via a generated link, allowing for someone else to pay.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2022 - November 2022",
  },
  {
    title: "Software Engineer",
    location: "The University of Queensland",
    description: "I work in the application development and support team.",
    icon: React.createElement(CgWorkAlt),
    date: "November 2022 - Present",
  },
  {
    title: "Graduated University",
    location: "Queensland University of Technology",
    description:
      "I graduated from QUT with a bachelor's degree in information technology, majoring in computer science.",
    icon: React.createElement(LuGraduationCap),
    date: "June 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CryptoCrowd",
    description:
      "Cryptocurrency sentiment analysis on tweets. Users can see the overall sentiment (positive, negative or neutral) of different Cryptocurrencies based on what people are currently tweeting.",
    tags: ["JavaScript", "React", "Express.js", "AWS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "OzDevs",
    description:
      "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Company Asset Trading",
    description:
      "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Euphorus",
    description:
      "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit.",
    tags: ["React", "JavaScript", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Country Happiness API",
    description:
      "Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.",
    tags: ["React", "JavaScript", "Bootstrap"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue.js",
  "Node.js",
  "PHP",
  "Laravel",
  "Symfony",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "SCSS",
  "Git",
  "Bootstrap",
  "MySQL",
  "Linux",
  "AWS",
  "Shopify",
] as const;
