"use client";

import { motion } from "framer-motion";
import { Clock, User, Mic, Coffee, Users, Star, Download } from "lucide-react";
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
    image: "/Japan AI 大忘年会 2025 登壇者告知 ハレンさん (4).png",
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
  const downloadShareImage = async (opts: { part: 1 | 2 }) => {
    // Xに載せやすい「16:9 横長」画像を、前半/後半で分けて生成します。
    const WIDTH = 1600;
    const HEIGHT = 900;
    const SCALE = Math.min(2, Math.max(1, window.devicePixelRatio || 1));

    const part =
      opts.part === 1
        ? { label: "10:00 - 14:00", accent: "#FF4500", items: scheduleData1, filename: "japan-ai-bounenkai-2025-10-14.png" }
        : { label: "14:00 - 18:00", accent: "#9400D3", items: scheduleData2, filename: "japan-ai-bounenkai-2025-14-18.png" };

    const canvas = document.createElement("canvas");
    canvas.width = Math.round(WIDTH * SCALE);
    canvas.height = Math.round(HEIGHT * SCALE);
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
      cardBorder: "rgba(255,255,255,0.14)",
    } as const;

    const loadImage = (src: string) =>
      new Promise<HTMLImageElement | null>((resolve) => {
        const img = new window.Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null);
        img.src = src;
      });

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
      ctx.font = '800 18px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
      const padX = 12;
      const w = Math.ceil(ctx.measureText(text).width) + padX * 2;
      const h = 30;
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
    const glow = ctx.createRadialGradient(WIDTH * 0.18, HEIGHT * 0.18, 0, WIDTH * 0.18, HEIGHT * 0.18, 420);
    glow.addColorStop(0, "rgba(0,206,209,0.22)");
    glow.addColorStop(1, "rgba(0,206,209,0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const glow2 = ctx.createRadialGradient(WIDTH * 0.86, HEIGHT * 0.16, 0, WIDTH * 0.86, HEIGHT * 0.16, 420);
    glow2.addColorStop(0, "rgba(255,20,147,0.18)");
    glow2.addColorStop(1, "rgba(255,20,147,0)");
    ctx.fillStyle = glow2;
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    const P = 64;

    // Header + icon
    const icon = await loadImage("/icon.png");
    if (icon) {
      const iconSize = 64;
      ctx.save();
      roundRect(P, 40, iconSize, iconSize, 16);
      ctx.clip();
      ctx.drawImage(icon, P, 40, iconSize, iconSize);
      ctx.restore();
    }

    const titleX = icon ? P + 64 + 18 : P;
    const titleTop = 54;
    ctx.textBaseline = "alphabetic";

    ctx.fillStyle = COLORS.yellow;
    ctx.font = '900 20px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.fillText("JAPAN AI", titleX, titleTop);

    ctx.fillStyle = COLORS.text;
    ctx.font = '900 48px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.fillText("大忘年会 2025", titleX, titleTop + 54);

    ctx.fillStyle = COLORS.muted;
    ctx.font = '700 18px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.fillText("2025/12/13（土） 10:00 - 18:00  |  川崎タワー 26F", titleX, titleTop + 82);

    // Part label
    const chipsY = 128;
    const w1 = drawPill(P, chipsY, `TIME: ${part.label}`, part.accent, COLORS.text);
    drawPill(P + w1 + 10, chipsY, "Xに投稿しやすい16:9", COLORS.cyan, "#000000");

    // Divider
    const dividerY = 176;
    ctx.strokeStyle = "rgba(255,255,255,0.16)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(P, dividerY);
    ctx.lineTo(WIDTH - P, dividerY);
    ctx.stroke();

    // Content grid (2 columns if needed)
    const items = part.items;
    const cols = items.length > 6 ? 2 : 1;
    const gapX = 24;
    const gapY = 14;
    const contentTop = dividerY + 28;
    const contentBottom = HEIGHT - 96;
    const contentH = contentBottom - contentTop;
    const contentW = WIDTH - P * 2;
    const colW = cols === 1 ? contentW : Math.floor((contentW - gapX) / 2);
    const rowsPerCol = Math.ceil(items.length / cols);
    const cardH = Math.max(86, Math.floor((contentH - gapY * (rowsPerCol - 1)) / rowsPerCol));

    const roleToBadge = (role?: ScheduleItem["role"]) => {
      switch (role) {
        case "speaker":
          return { text: "登壇", bg: COLORS.cyan, fg: "#000000" };
        case "sponsor":
          return { text: "スポンサー", bg: COLORS.yellow, fg: "#000000" };
        case "management":
          return { text: "運営", bg: COLORS.pink, fg: COLORS.text };
        case "break":
          return { text: "休憩", bg: "#666666", fg: COLORS.text };
        default:
          return null;
      }
    };

    for (let i = 0; i < items.length; i++) {
      const col = Math.min(cols - 1, Math.floor(i / rowsPerCol));
      const row = i % rowsPerCol;
      const x = P + col * (colW + gapX);
      const y = contentTop + row * (cardH + gapY);
      const item = items[i];

      // Card
      ctx.fillStyle = COLORS.card;
      roundRect(x, y, colW, cardH, 18);
      ctx.fill();
      ctx.strokeStyle = COLORS.cardBorder;
      ctx.lineWidth = 1;
      ctx.stroke();

      // Role badge
      const badge = roleToBadge(item.role);
      if (badge) {
        ctx.save();
        ctx.globalAlpha = 0.95;
        drawPill(x + colW - 18 - 120, y + 14, badge.text, badge.bg, badge.fg);
        ctx.restore();
      }

      // Time
      ctx.fillStyle = COLORS.yellow;
      ctx.font = '900 18px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
      const timeText = item.time.replace(" - ", "–");
      ctx.fillText(timeText, x + 18, y + 30);

      // Speaker
      const titleMaxW = colW - 18 - 18;
      const speakerLine = item.speaker ? wrapText(item.speaker, titleMaxW).slice(0, 1)[0] ?? item.speaker : "";
      if (speakerLine) {
        ctx.fillStyle = COLORS.muted;
        ctx.font = '700 16px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
        ctx.fillText(speakerLine, x + 18, y + 54);
      }

      // Title (2 lines max)
      const mainTitle = item.title?.trim() ? item.title : (item.speaker || "");
      ctx.fillStyle = COLORS.text;
      ctx.font = '900 18px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
      const lines = wrapText(mainTitle, titleMaxW).slice(0, speakerLine ? 2 : 2);
      const baseY = speakerLine ? y + 80 : y + 58;
      for (let li = 0; li < lines.length; li++) {
        ctx.fillText(lines[li], x + 18, baseY + li * 22);
      }
    }

    // Footer
    const footerY = HEIGHT - 62;
    ctx.fillStyle = "rgba(255,255,255,0.18)";
    ctx.fillRect(P, footerY - 20, WIDTH - P * 2, 2);

    ctx.fillStyle = COLORS.muted;
    ctx.font = '700 16px ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans JP", sans-serif';
    ctx.fillText("Present by GAKUSE.AI / AIで遊ぼうコミュニティ  |  @sora19ai  @taiyo_ai_gakuse", P, footerY + 12);

    // Download
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = part.filename;
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

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={() => downloadShareImage({ part: 1 })}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full border-4 border-[var(--color-party-cyan)] shadow-[4px_4px_0_rgba(0,0,0,0.3)] font-black hover:shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition-shadow"
              aria-label="10:00-14:00の画像をダウンロード"
            >
              <Download className="w-5 h-5" />
              10:00-14:00をDL
            </button>
            <button
              type="button"
              onClick={() => downloadShareImage({ part: 2 })}
              className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full border-4 border-[var(--color-party-cyan)] shadow-[4px_4px_0_rgba(0,0,0,0.3)] font-black hover:shadow-[6px_6px_0_rgba(0,0,0,0.35)] transition-shadow"
              aria-label="14:00-18:00の画像をダウンロード"
            >
              <Download className="w-5 h-5" />
              14:00-18:00をDL
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