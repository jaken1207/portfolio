import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard_01({}: Props) {
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
        src="/arithmer.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">フロントエンドエンジニア</h4>
        <p className="font-bold text-2xl mt-1">Arithmer株式会社 研究開発本部</p>
        <div className="flex space-x-2 my-2">
          <img className="h-10 w-10 rounded-full" src="/javascript.png" />
          <img className="h-10 w-10 rounded-full" src="/nodejs.png" />
          <img className="h-10 w-10 rounded-full" src="/python.png" />
        </div>
        <p className="uppercase py-5 text-gray-300">2022.6.1 - 2022.7.31</p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>VirtualShowRoomの開発、ChatBotの保守運用業務に従事</li>
          <li>Web上で展開される展示空間の開発には、three.jsを使用</li>
          <li>ffmpegを用いてmp4を再生しやすいHLS形式に変換</li>
          <li>CBの更新はDocumentから見出しを抽出する作業</li>
        </ul>
      </div>
    </article>
  );
}
