"use client";

import { motion } from "framer-motion";
import { Clock, User, Mic, Coffee, Users, Star } from "lucide-react";
import Image from "next/image";

type ScheduleItem = {
  time: string;
  title: string;
  speaker?: string;
  role?: "speaker" | "sponsor" | "management" | "break";
  description?: string;
  image?: string;
};

const scheduleData1: ScheduleItem[] = [
  {
    time: "10:00 - 11:00",
    title: "開会式",
    speaker: "運営スタッフ",
    role: "management",
  },
  {
    time: "11:00 - 12:00",
    title: "G1登壇・ヒューマノイドについて",
    speaker: "大曽根さん",
    role: "speaker",
  },
  {
    time: "12:00 - 12:15",
    title: "AI×Youtube",
    speaker: "ひかるくん",
    role: "speaker",
  },
  {
    time: "12:30 - 13:00",
    title: "昼休憩＆ミニ懇親会",
    speaker: "全員",
    role: "management",
    description: "軽食をつまみながら交流しましょう！",
  },
  {
    time: "13:00 - 13:15",
    title: "内容交渉中",
    speaker: "KEITOさん",
    role: "speaker",
  },
  {
    time: "13:15 - 13:30",
    title: "セッション3",
    speaker: "翼さん",
    role: "sponsor",
  },
  {
    time: "13:30 - 13:45",
    title: "AIPM",
    speaker: "みやっちさん",
    role: "speaker",
  },
];

const scheduleData2: ScheduleItem[] = [
  {
    time: "14:00 - 15:00",
    title: "Google AIプロダクト一挙解説！",
    speaker: "バンダリ・ハレン",
    role: "speaker",
    description: "Google Cloud シニア デベロッパー リレーションズ エンジニア",
    image: "/10.png",
  },
  {
    time: "15:00 - 15:15",
    title: "Dify",
    speaker: "岸田さん",
    role: "speaker",
  },
  {
    time: "15:15 - 15:30",
    title: "休憩",
    role: "break",
  },
  {
    time: "15:30 - 15:45",
    title: "Claude code",
    speaker: "noguさん",
    role: "speaker",
  },
  {
    time: "16:00 - 16:15",
    title: "Cursorアンバサダーが語るCursorの進化",
    speaker: "きのぴーさん",
    role: "speaker",
  },
  {
    time: "16:15 - 16:18",
    title: "Cursor",
    speaker: "中村",
    role: "sponsor",
  },
  {
    time: "16:20 - 16:27",
    title: "Aqua Voice",
    speaker: "AquaVoice",
    role: "sponsor",
  },
];

const RoleBadge = ({ role }: { role: string }) => {
  switch (role) {
    case "speaker":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-[var(--color-party-cyan)] text-black">
          <Mic size={12} /> 登壇
        </span>
      );
    case "sponsor":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-[var(--color-beer-yellow)] text-black">
          <Star size={12} /> スポンサー
        </span>
      );
    case "management":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-[var(--color-party-pink)] text-white">
          <Users size={12} /> 運営
        </span>
      );
    case "break":
      return (
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-gray-600 text-white">
          <Coffee size={12} /> 休憩
        </span>
      );
    default:
      return null;
  }
};

const ScheduleCard = ({ item }: { item: ScheduleItem }) => {
  return (
    <div className="flex gap-4 items-start group">
      {/* Time Column */}
      <div className="flex-shrink-0 w-24 pt-1">
        <div className="bg-white/10 rounded-lg px-2 py-1 text-center border border-white/20 group-hover:border-[var(--color-party-cyan)] transition-colors">
          <span className="text-sm font-bold font-display text-[var(--color-beer-yellow)]">
            {item.time.split(" - ")[0]}
          </span>
          <div className="h-px w-full bg-white/10 my-0.5" />
          <span className="text-xs text-gray-400">
            {item.time.split(" - ")[1]}
          </span>
        </div>
      </div>

      {/* Content Column */}
      <div className="flex-grow bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-colors relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[var(--color-party-pink)] to-[var(--color-party-purple)] opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            {item.role && <RoleBadge role={item.role} />}
          </div>
          
          <h3 className="text-lg font-bold leading-tight group-hover:text-[var(--color-party-cyan)] transition-colors">
            {item.title}
          </h3>
          
          {item.speaker && (
            <div className="flex items-center gap-4 mt-3">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-700 flex items-center justify-center border-2 border-gray-500 overflow-hidden relative">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.speaker}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <User size={24} className="text-gray-300" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-lg font-bold text-gray-200 leading-tight">
                  {item.speaker}
                </span>
                {item.description && !item.title.includes(item.description) && (
                   <span className="text-sm text-gray-400 leading-tight mt-1">
                     {item.description}
                   </span>
                )}
              </div>
            </div>
          )}
          
          {item.description && !item.speaker && (
            <p className="text-xs text-gray-400 mt-2 border-t border-white/10 pt-2">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default function TimeTable() {
  return (
    <section className="py-20 px-4 relative z-10" id="timetable">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black mb-4 text-white text-shadow-pop">
            <span className="text-[var(--color-party-pink)]">TIME</span> SCHEDULE
          </h2>
          <p className="text-xl font-bold text-[var(--color-party-cyan)]">
            当日のタイムテーブル
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Part 1: 10:00 - 14:00 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[var(--color-party-orange)] p-3 rounded-full text-white shadow-lg shadow-orange-500/30">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-black text-white border-b-4 border-[var(--color-party-orange)] pb-1 inline-block">
                10:00 - 14:00
              </h3>
            </div>
            
            <div className="space-y-4">
              {scheduleData1.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ScheduleCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Part 2: 14:00 - 18:00 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[var(--color-party-purple)] p-3 rounded-full text-white shadow-lg shadow-purple-500/30">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-black text-white border-b-4 border-[var(--color-party-purple)] pb-1 inline-block">
                14:00 - 18:00
              </h3>
            </div>

            <div className="space-y-4">
              {scheduleData2.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <ScheduleCard item={item} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
