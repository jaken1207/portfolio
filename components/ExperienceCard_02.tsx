import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard_02({}: Props) {
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
        src="/protosolution.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">データサイエンティスト</h4>
        <p className="font-bold text-2xl mt-1">
          PROTO Solution AI technology 推進室
        </p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/python.png" alt="" />
          <img className="h-10 w-10 rounded-full" src="/sql.png" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">2021.3.1 - 2021.3.31</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>分類問題【タイタニック号の生存可否問題】に取り組む</li>
          <li>回帰問題【住宅価格予測】に取り組む</li>
          <li>
            <a href="https://www.protosolution.co.jp/news-20210421">
              <u>詳細記事</u>
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
