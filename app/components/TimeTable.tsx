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
  images?: string[];
  titleClassName?: string;
};

const scheduleData1: ScheduleItem[] = [
  {
    time: "10:00 - 10:30",
    title: "開会式",
    speaker: "運営チーム",
    role: "management",
    images: ["/Wz8kSWMa_400x400.jpg", "/ZC2pFIIh_400x400.jpg"],
  },
  {
    time: "10:30 - 11:00",
    title: "AIの今と未来セッション",
    role: "speaker",
    images: ["/Wz8kSWMa_400x400.jpg", "/ZC2pFIIh_400x400.jpg", "/ZCYlwKLv_400x400.jpg"],
  },
  {
    time: "11:00 - 12:00",
    title: "ヒューマノイドロボット フィジカルAI 最新動向",
    speaker: "大曽根 宏幸",
    role: "speaker",
    description: "EmplifAI 代表取締役 / Unitree G1レンタルサービス / ヒューマノイド研究家 / LLMエンジニア",
    image: "/osone.png",
  },
  {
    time: "12:00 - 12:15",
    title: "2026年の動画編集AIに起きる変化",
    speaker: "ひかる｜動画編集AI",
    role: "speaker",
    description: "動画編集AIエージェント VIDEOPOCKET開発者",
    image: "/NM7ifjyK_400x400.jpg",
  },
  {
    time: "12:15 - 12:30",
    title: "Googleをぶっ倒す最後の時は今かもしれない",
    speaker: "てる@プロンプトマフィア",
    role: "speaker",
    image: "/7y8K_1AK_400x400.jpg",
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
    title: "SECRET GUEST",
    role: "speaker",
    titleClassName: "text-3xl md:text-4xl text-[var(--color-party-pink)] py-2",
  },
  {
    time: "13:15 - 13:30",
    title: "「技術」を「商売」に変えるための答え合わせ",
    speaker: "AppTalentHub 宮崎 翼",
    role: "speaker",
    description: "～地方研修と人材紹介の現場で見えた、稼げるエンジニアの共通点～",
    image: "/9mV-gc-s_400x400.jpg",
  },
  {
    time: "13:30 - 13:45",
    title: "生成AIから保守AIへ 2026年、生成AIサービスの新しい潮流",
    speaker: "Explaza CPO みやっち",
    role: "speaker",
    description: "株式会社エクスプラザ CPO 生成AIエバンジェリスト",
    image: "/miyacchi_new.png",
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
    title: "企業のAI活用をドライブするFDEについて",
    speaker: "Omluc 代表取締役 岸田崇史",
    role: "speaker",
    description: "法人向け生成AI導入支援 / Dify本 著者 / Dify Studio ファウンダー",
    image: "/kishida_session.png",
  },
  {
    time: "15:15 - 15:30",
    title: "",
    speaker: "駒谷様",
    role: "sponsor",
  },
  {
    time: "15:30 - 15:45",
    title: "まだ間に合う！Claude Code元年を振り返る",
    speaker: "個人開発者・ソロプレナー NOGU",
    role: "speaker",
    description: "AI愛好家 / 生成AI推進者 / AIエージェント開発者",
    image: "/miyacchi.jpg",
  },
  {
    time: "16:00 - 16:15",
    title: "Cursorアンバサダーが語るCursorの進化と今後の未来",
    speaker: "Kinopee",
    role: "speaker",
    description: "「CURSOR完全ガイド」著者 / CURSOR AMBASSADOR / DEVIN EXPERT / WINDSURF AMBASSADOR",
    image: "/tOenj1eZ_400x400.jpg",
  },
  {
    time: "16:15 - 16:18",
    title: "",
    speaker: "AIブレインパートナーズ株式会社",
    role: "sponsor",
    image: "/WdIzT_w3_400x400.jpg",
  },
  {
    time: "16:20 - 16:27",
    title: "",
    speaker: "AquaVoice",
    role: "sponsor",
    image: "/aquavoice.jpg",
  },
  {
    time: "16:30 - 16:45",
    title: "SECRET GUEST",
    role: "speaker",
    titleClassName: "text-3xl md:text-4xl text-[var(--color-party-pink)] py-2",
  },
  {
    time: "16:45 - 17:30",
    title: "アプリ爆速ローンチハンズオン",
    speaker: "Genspark",
    role: "speaker",
    description: "オールインワンAIワークスペース\n忙しいだけの仕事を自動化しよう",
    image: "/genspark.jpeg",
  },
  {
    time: "17:30 - 17:45",
    title: "懇親会？",
    role: "management",
  },
  {
    time: "17:45 - 18:00",
    title: "閉会式？写真撮影",
    role: "management",
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
          
          {item.title && (
            <h3 className={`text-lg font-bold leading-tight group-hover:text-[var(--color-party-cyan)] transition-colors ${item.titleClassName || ""}`}>
              {item.title}
            </h3>
          )}
          
          {(item.speaker || item.image || item.images) && (
            <div className="flex items-center gap-4 mt-3">
              {item.images ? (
                <div className="flex -space-x-3 overflow-hidden pl-1">
                  {item.images.map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-gray-500 overflow-hidden relative shadow-lg bg-gray-700">
                      <Image
                        src={img}
                        alt={`Speaker ${i + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-700 flex items-center justify-center border-2 border-gray-500 overflow-hidden relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.speaker || "Speaker"}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <User size={24} className="text-gray-300" />
                  )}
                </div>
              )}
              
              {item.speaker && (
                <div className="flex flex-col">
                  <span className={`text-base md:text-lg font-bold text-gray-200 leading-tight ${item.speaker === "AquaVoice" ? "text-2xl md:text-3xl" : ""}`}>
                    {item.speaker}
                  </span>
                  {item.description && !item.title.includes(item.description) && (
                     <span className="text-sm text-gray-400 leading-tight mt-1">
                       {item.description}
                     </span>
                  )}
                </div>
              )}
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
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm shadow-lg">
              <p className="text-lg md:text-xl text-white font-bold flex items-center gap-2">
                <span className="text-2xl">🎉</span> 
                <span>9:30 開場・受付開始！</span>
              </p>
            </div>
            <p className="text-white/90 font-bold text-base md:text-lg bg-black/30 px-6 py-2 rounded-lg border border-white/10 flex items-center gap-2">
               <span>🍱</span>
               <span>会場内は飲食OK！お昼ご飯は各自ご持参ください</span>
            </p>
          </div>
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
