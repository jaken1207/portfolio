import React from "react";
import { motion } from "framer-motion";
import ExperienceCard_01 from "./ExperienceCard_01";
import ExperienceCard_02 from "./ExperienceCard_02";
import ExperienceCard_03 from "./ExperienceCard_03";
import ExperienceCard_04 from "./ExperienceCard_04";

type Props = {};

export default function WorkExperience({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <ExperienceCard_01 />
        <ExperienceCard_02 />
        <ExperienceCard_03 />
        <ExperienceCard_04 />
      </div>
    </motion.div>
  );
}
