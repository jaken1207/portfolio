import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Skill_01 from "./Skill_01";
import Skill_02 from "./Skill_02";
import Skill_03 from "./Skill_03";
import Skill_04 from "./Skill_04";
import Skill_05 from "./Skill_05";
import Skill_06 from "./Skill_06";
import Skill_07 from "./Skill_07";
import Skill_08 from "./Skill_08";
import Skill_09 from "./Skill_09";
import Skill_10 from "./Skill_10";
import Skill_11 from "./Skill_11";
import Skill_12 from "./Skill_12";
import Skill_13 from "./Skill_13";
import Skill_14 from "./Skill_14";

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for currency profieciecy
      </h3>

      <div className="grid grid-cols-4 gap-5">
        <Skill_01 />
        <Skill_02 />
        <Skill_03 />
        <Skill_04 />
        <Skill_05 />
        <Skill_06 />
        <Skill_07 />
        <Skill_08 />
        <Skill_09 />
        <Skill_10 />
        <Skill_11 />
        <Skill_12 />
        <Skill_13 />
        <Skill_14 />
      </div>
    </motion.div>
  );
}
