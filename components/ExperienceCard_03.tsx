import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard_03({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="xyou.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">アシスタントディレクター</h4>
        <p className="font-bold text-2xl mt-1">XYOU株式会社 映像制作部</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/premire.png" alt="" />
          <img
            className="h-10 w-10 rounded-full"
            src="/aftereffect.png"
            alt=""
          />
          <img className="h-10 w-10 rounded-full" src="/photoshop.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">2021.5.1 - 2022.4.30</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>撮影、編集、サムネイル制作、YouTube運用を行う</li>
          <li>
            <a href="https://www.youtube.com/@dict-world/videos">
              <u>DICT対談 Phase1</u>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/playlist?list=PL1_CJkfPgC2BjZjrzL7WLVu89OmWLcLYy">
              <u>Let's Go Up マ・フォーレ</u>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/@grasppchannel1254">
              <u>GraSPP</u>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
