"use client";

import { motion } from "framer-motion";
import { Clock, User, Mic, Coffee, Users, Star, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
  {
    time: "13:45 - 14:00",
    title: "休憩",
    role: "break",
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
    title: "年の瀬に振り返るAI新規事業",
    speaker: "Exa Enterprise AI 駒谷 徹",
    role: "speaker",
    description: "社長室室長 / 生成AI事業開発部 部長",
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
    time: "15:45 - 16:00",
    title: "休憩",
    role: "break",
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
    time: "17:30 - 18:30",
    title: "懇親会",
    role: "management",
  },
  {
    time: "18:30 - 19:00",
    title: "閉会式・写真撮影",
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
  const [imageError, setImageError] = useState(false);

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
                  {item.image && !imageError ? (
                    <Image
                      src={item.image}
                      alt={item.speaker || "Speaker"}
                      fill
                      className="object-cover"
                      unoptimized
                      onError={() => setImageError(true)}
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
  const downloadShareImage = async () => {
    // Xに載せたときに見栄えしやすい「縦長・2カラム」画像を生成します。
    const WIDTH = 1600;
    const HEIGHT = 2000;
    const SCALE = Math.min(2, Math.max(1, Math.floor(window.devicePixelRatio || 1)));

    const canvas = document.createElement("canvas");
    canvas.width = WIDTH * SCALE;
    canvas.height = HEIGHT * SCALE;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(SCALE, SCALE);

    const COLORS = {
      bg1: "#0f0518",
      bg2: "#120a1d",
      cyan: "#00CED1",
      pink: "#FF1493",
      purple: "#9400D3",
      orange: "#FF4500",
      yellow: "#FFD700",
      text: "#FFFFFF",
      muted: "rgba(255,255,255,0.72)",
      card: "rgba(255,255,255,0.06)",
      cardBorder: "rgba(255,255,255,0.12)",
    } as const;

    const roundRect = (x: number, y: number, w: number, h: number, r: number) => {
      const rr = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + w, y, x + w, y + h, rr);
      ctx.arcTo(x + w, y + h, x, y + h, rr);
      ctx.arcTo(x, y + h, x, y, rr);
      ctx.arcTo(x, y, x + w, y, rr);
      ctx.closePath();
    };

    const wrapText = (text: string, maxWidth: number) => {
      const lines: string[] = [];
      let line = "";
      for (const ch of text.replace(/\s+/g, " ").trim()) {
        const next = line + ch;
        if (ctx.measureText(next).width <= maxWidth || line.length === 0) {
          line = next;
          continue;
        }
        lines.push(line);
        line = ch;
      }
      if (line) lines.push(line);
      return lines;
    };

    const drawPill = (x: number, y: number, text: string, bg: string, fg: string) => {
      ctx.font = '700 20px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
      const padX = 14;
      const w = Math.ceil(ctx.measureText(text).width) + padX * 2;
      const h = 34;
      ctx.fillStyle = bg;
      roundRect(x, y, w, h, 999);
      ctx.fill();
      ctx.fillStyle = fg;
      ctx.textBaseline = "middle";
      ctx.fillText(text, x + padX, y + h / 2 + 1);
      return w;
    };

    // Background
    const bg = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
    bg.addColorStop(0, COLORS.bg1);
    bg.addColorStop(1, COLORS.bg2);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Soft glow
    const glow = ctx.createRadialGradient(WIDTH * 0.2, HEIGHT * 0.15, 0, WIDTH * 0.2, HEIGHT * 0.15, 520);
    glow.addColorStop(0, "rgba(0,206,209,0.22)");
    glow.addColorStop(1, "rgba(0,206,209,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const glow2 = ctx.createRadialGradient(WIDTH * 0.85, HEIGHT * 0.1, 0, WIDTH * 0.85, HEIGHT * 0.1, 520);
    glow2.addColorStop(0, "rgba(255,20,147,0.18)");
    glow2.addColorStop(1, "rgba(255,20,147,0)");
    ctx.fillStyle = glow2;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const P = 80;
    let y = 72;

    // Header
    ctx.fillStyle = COLORS.yellow;
    ctx.font = '900 22px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.textBaseline = "alphabetic";
    ctx.fillText("JAPAN AI", P, y);

    ctx.fillStyle = COLORS.text;
    ctx.font = '900 64px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.fillText("大忘年会 2025", P, y + 74);

    ctx.fillStyle = COLORS.muted;
    ctx.font = '700 24px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.fillText("2025/12/13（土） 10:00 - 19:00  |  川崎タワー 26F", P, y + 112);

    // Accent chips
    const chipsY = y + 138;
    const w1 = drawPill(P, chipsY, "タイムテーブル", COLORS.cyan, "#000000");
    drawPill(P + w1 + 12, chipsY, "保存してXでシェア", COLORS.pink, COLORS.text);

    // Divider
    y = chipsY + 68;
    ctx.strokeStyle = "rgba(255,255,255,0.14)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(P, y);
    ctx.lineTo(WIDTH - P, y);
    ctx.stroke();
    y += 36;

    // Columns
    const gap = 44;
    const colW = Math.floor((WIDTH - P * 2 - gap) / 2);
    const leftX = P;
    const rightX = P + colW + gap;
    const topY = y;

    const drawColumn = (x: number, title: string, accent: string, items: ScheduleItem[]) => {
      let cy = topY;
      // Column title
      ctx.fillStyle = COLORS.text;
      ctx.font = '900 36px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
      ctx.fillText(title, x, cy + 34);

      ctx.fillStyle = accent;
      roundRect(x, cy + 44, 220, 8, 6);
      ctx.fill();
      cy += 72;

      for (const item of items) {
        const cardX = x;
        const cardY = cy;
        const cardW = colW;
        const cardH = 132;

        ctx.fillStyle = COLORS.card;
        roundRect(cardX, cardY, cardW, cardH, 18);
        ctx.fill();
        ctx.strokeStyle = COLORS.cardBorder;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Time
        ctx.fillStyle = COLORS.yellow;
        ctx.font = '900 22px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
        const [start, end] = item.time.split(" - ");
        ctx.fillText(start || item.time, cardX + 18, cardY + 34);
        ctx.fillStyle = "rgba(255,255,255,0.45)";
        ctx.font = '700 18px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
        if (end) ctx.fillText(end, cardX + 18, cardY + 58);

        // Role badge
        const role = item.role || "";
        const badgeText =
          role === "speaker" ? "登壇" :
          role === "sponsor" ? "スポンサー" :
          role === "management" ? "運営" :
          role === "break" ? "休憩" : "";
        const badgeBg =
          role === "speaker" ? COLORS.cyan :
          role === "sponsor" ? COLORS.yellow :
          role === "management" ? COLORS.pink :
          role === "break" ? "#666666" : "rgba(255,255,255,0.16)";
        const badgeFg = role === "sponsor" || role === "speaker" ? "#000000" : COLORS.text;
        if (badgeText) {
          drawPill(cardX + cardW - 18 - 140, cardY + 18, badgeText, badgeBg, badgeFg);
        }

        // Title
        const mainTitle = item.title?.trim() ? item.title : (item.speaker || "");
        ctx.fillStyle = COLORS.text;
        ctx.font = '900 24px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
        const titleMaxW = cardW - 18 - 18;
        const titleLines = wrapText(mainTitle, titleMaxW);
        const t1 = titleLines.slice(0, 2);
        const titleY = cardY + 92;
        for (let i = 0; i < t1.length; i++) {
          ctx.fillText(t1[i], cardX + 18, titleY + i * 28);
        }

        // Speaker
        if (item.speaker && item.title?.trim()) {
          ctx.fillStyle = COLORS.muted;
          ctx.font = '700 18px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
          const sp = wrapText(item.speaker, titleMaxW).slice(0, 1)[0] ?? item.speaker;
          ctx.fillText(sp, cardX + 18, cardY + 72);
        }

        cy += cardH + 16;
      }
      return cy;
    };

    const leftEnd = drawColumn(leftX, "10:00 - 14:00", COLORS.orange, scheduleData1);
    const rightEnd = drawColumn(rightX, "14:00 - 19:00", COLORS.purple, scheduleData2);

    // Footer
    const footerY = Math.min(HEIGHT - 90, Math.max(leftEnd, rightEnd) + 36);
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.fillRect(P, footerY, WIDTH - P * 2, 2);

    ctx.fillStyle = COLORS.muted;
    ctx.font = '700 20px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.fillText("Present by GAKUSE.AI / AIで遊ぼうコミュニティ", P, footerY + 36);
    ctx.fillText("@sora19ai  @taiyo_ai_gakuse", P, footerY + 64);

    // Download
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = "japan-ai-bounenkai-2025-timetable.png";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

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
          <div className="mt-6 inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20 backdrop-blur-sm shadow-lg">
            <p className="text-lg md:text-xl text-white font-bold flex items-center gap-2">
              <span className="text-2xl">🎉</span> 
              <span>9:30 開場・受付開始！</span>
            </p>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={downloadShareImage}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full border-4 border-[var(--color-party-cyan)] shadow-[4px_4px_0_rgba(0,0,0,0.3)] font-black hover:shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition-shadow"
              aria-label="タイムテーブル画像をダウンロード"
            >
              <Download className="w-5 h-5" />
              X向け画像をダウンロード
            </button>
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

          {/* Part 2: 14:00 - 19:00 */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[var(--color-party-purple)] p-3 rounded-full text-white shadow-lg shadow-purple-500/30">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-display font-black text-white border-b-4 border-[var(--color-party-purple)] pb-1 inline-block">
                14:00 - 19:00
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