"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Full-stack software engineer living in Brisbane, Australia. I currently
        spend my day working on web applications using TypeScript, React,
        Node.js, PHP, Symfony and AWS. I also completed a Bachelor's degree in
        Information Technology at QUT, with a major in Computer Science. I enjoy
        tinkering with new tech and staying up to date with the latest industry
        trends.
      </p>
    </motion.section>
  );
}
