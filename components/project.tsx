"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import { FiYoutube } from "react-icons/fi";
import { Icon } from "@iconify/react";

type ProjectProps = typeof projectsData[number];

export default function Project({
  title,
  description,
  tags,
  icons,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative md:min-h-[20rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 md:max-w-[50%] flex flex-col h-full">
          <h3 className="text-2xl font-semibold mb-4">{title}</h3>
          <ul className="flex flex-wrap gap-2 mb-3 sm:mt-auto">
            <p className="font-bold text-gray-500 dark:text-white/70">
              Made with:{" "}
            </p>
            {icons.map((icon, iconIndex) => (
              <Icon key={iconIndex} icon={icon} className="mr-3 text-2xl" />
            ))}
          </ul>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3">
            {description}
          </p>
          <div className="flex">
            <a
              href="#"
              className="flex items-center bg-[#111827] text-white py-1 px-3 rounded-full"
            >
              <BiLinkExternal className="mr-1" /> Live
            </a>

            <a
              href="#"
              className="flex items-center border border-[#111827] py-1 px-3 rounded-full mx-3 text-[#111827]"
            >
              <FiYoutube className="mr-1" /> Demo
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden md:block top-8 -right-10 w-[28.25rem] rounded-t-lg shadow-2xl
          transition 
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          "
        />
      </section>
    </motion.div>
  );
}
