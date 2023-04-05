import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="-md-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src="/nagata.png"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          <span className="underline decoration-[#F7AB0A]/50">経歴</span>{" "}
        </h4>
        <p className="text-base">
          私のポートフォリオを閲覧してくださり、ありがとうございます。
          <br />
          まだ、未完成のサイトですが、許してください。
          <br />
          ここで、少し私の自己紹介をしようと思います。
          <br />
          私が現在、情報経営イノベーション専門職大学に所属している大学3年生です。
          <br />
          大学では教育工学ゼミに所属しており、拡張現実を位置情報共有システムの開発、
          <br />
          および、それらの優位性について研究しています。
          <br />
          また、私は大学1年の冬から長期インターンに参加してきました。
          <br />
          機械学習やWebアプリ開発、動画編集のスキルを習得しました。
          <br />
          最近はバックエンドの知識を深めています。
        </p>
      </div>
    </motion.div>
  );
}
