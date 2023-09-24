import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cryptoCrowdImg from "@/public/cryptocrowd2.png";
import ozdevsImg from "@/public/ozdevs.png";
import assetTradingImg from "@/public/asset-trading.png";
import euphorusImg from "@/public/euphorus.png";
import euphorusBackendImg from "@/public/euphorus-backend.png";
import techprowlImg from "@/public/techprowl2.png";
import taskManagerImg from "@/public/task-manager.png";
import familyTreeImg from "@/public/bfsproject.jpg";
import binaryGameImg from "@/public//binary-game.png";
import { Icon } from "@iconify/react";

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
    imageUrl: cryptoCrowdImg,
  },
  {
    title: "OzDevs",
    description:
      "Reverse Job board for companies looking to hire developers in Australia. Filter by experience, location and keyboards.  Companies can pay a monthly fee to be able to message developers on the site and view their information.",
    tags: ["PHP", "Laravel", "JavaScript", "Tailwind", "MySQL"],
    imageUrl: ozdevsImg,
  },
  {
    title: "Company Asset Trading",
    description:
      "Client-server system written in Java for trading of virtual assets within departments of a company. Facilitated trades via a marketplace model where users can buy and sell assets. Admins of an organisation can create assets, users and modify details. Uses MariaDB as a database and Swing for the GUI.",
    tags: ["Java", "MariaDB", "Swing"],
    imageUrl: assetTradingImg,
  },
  {
    title: "Euphorus",
    description:
      "React application for viewing country happiness data collected from the World Happiness Report initiative. Users can filter by year, country and search limit.",
    tags: ["JavaScript", "React", "Bootstrap"],
    imageUrl: euphorusImg,
  },
  {
    title: "Country Happiness API",
    description:
      "Express API to support the front-end of the Euphorus Happiness Data web application. Routes support query parameters and authorization using JWT. Includes endpoints for countries, rankings, factors, registration, login, and profile. Tested software extensively with Jest and created Swagger documentation for the API as well.",
    tags: ["JavaScript", "Node.js", "Express.js", "Swagger", "MySQL", "Knex"],
    imageUrl: euphorusBackendImg,
  },
  {
    title: "Techprowl Computer Auction",
    description:
      "Computer Auction CRUD application built with Flask that allows users to bid, review, login/register, post new listings, manage listings, search by keyword, and keep a watch list. The website is responsive and uses Bootstrap. Internal server errors and page not found errors are also handled appropriately. The project was developed with a team using Git.",
    tags: ["Python", "Flask", "Bootstrap", "SQLite"],
    imageUrl: techprowlImg,
  },
  {
    title: "Task Manager Console App",
    description:
      "Console app that manages tasks in a project. Users can load projects from a file and generate a seqeuence to complete them in, based on each task's dependencies. Users can also find earliest possible commencement time of each task, add new tasks, update tasks, remove tasks, and save the results to a text file.",
    tags: ["C#"],
    imageUrl: taskManagerImg,
  },
  {
    title: "Family Tree Shortest Path",
    description:
      "Python program that implements a breadth-first search algorithm to generate a minimal spanning tree. Problem was to calculate a shortest path from a starting vertex in a graph to each other vertex. The vertices represent people and each person is related to every other person through parent-child relationships. A person can see how they are related to each other person in the tree",
    tags: ["Python"],
    imageUrl: familyTreeImg,
  },
  {
    title: "Arduino Binary Game",
    description:
      "Binary game written in C that runs on an Arduino Uno using Tinkercad. The game aims to help users learn binary by challenging them to input different integers in their binary form within a time limit.",
    tags: ["C"],
    imageUrl: binaryGameImg,
  },
] as const;

export const skillsData = [
  {
    name: "JavaScript",
    icon: "logos:javascript",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
  },
  {
    name: "React",
    icon: "logos:react",
  },
  {
    name: "Vue.js",
    icon: "logos:vue",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
  },
  {
    name: "PHP",
    icon: "logos:php",
  },
  {
    name: "Laravel",
    icon: "logos:laravel",
  },
  {
    name: "Symfony",
    icon: "logos:symfony",
  },
  {
    name: "Python",
    icon: "logos:python",
  },
  {
    name: "Java",
    icon: "logos:java",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
  },
  {
    name: "SCSS",
    icon: "logos:sass",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
  },
  {
    name: "Bootstrap",
    icon: "logos:bootstrap",
  },
  {
    name: "MySQL",
    icon: "logos:mysql",
  },
  {
    name: "Linux",
    icon: "flat-color-icons:linux",
  },
  {
    name: "AWS",
    icon: "logos:aws",
  },
  {
    name: "Shopify",
    icon: "logos:shopify",
  },
] as const;
