"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Beer, PartyPopper, Music, Gift, ChevronRight, ExternalLink, Users, Mic, Lock, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import TimeTable from "./components/TimeTable";

// 紙吹雪コンポーネント
const Confetti = () => {
  const [pieces, setPieces] = useState<{ id: number; x: number; y: number; color: string; rotation: number }[]>([]);

  useEffect(() => {
    const colors = ["#FFD700", "#FF1493", "#00CED1", "#FF4500", "#FFF"];
    const newPieces = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * -100,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
    }));
    setPieces(newPieces);
  }, []);

  // クライアントサイドでのみレンダリング（SSR時は何も表示しない）
  if (pieces.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: `${p.x}vw`, rotate: p.rotation, opacity: 1 }}
          animate={{ y: "120vh", rotate: p.rotation + 360 }}
          transition={{ 
            duration: Math.random() * 5 + 5, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          style={{
            position: "absolute",
            width: "10px",
            height: "10px",
            backgroundColor: p.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "0",
          }}
        />
      ))}
    </div>
  );
};

// フラッグガーランドコンポーネント
const Flags = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-12 z-20 flex justify-between overflow-hidden pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="w-8 h-10 origin-top"
          style={{
            backgroundColor: ["#FF1493", "#FFD700", "#00CED1", "#FF4500"][i % 4],
            clipPath: "polygon(0% 0%, 100% 0%, 50% 100%)",
            transform: `rotate(${Math.sin(i) * 5}deg)`,
            marginLeft: "-5px",
            marginRight: "-5px",
          }}
        />
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--color-background)] text-white relative overflow-hidden">
      <Confetti />
      <Flags />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
        {/* 乾杯アニメーション */}
        <motion.div 
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
          className="absolute top-20 right-5 md:right-20 opacity-20 md:opacity-50 rotate-12"
        >
          <Beer size={120} className="text-[var(--color-beer-yellow)]" />
        </motion.div>
        <motion.div 
          initial={{ scale: 0, rotate: 30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.4 }}
          className="absolute bottom-20 left-5 md:left-20 opacity-20 md:opacity-50 -rotate-12"
        >
          <PartyPopper size={120} className="text-[var(--color-party-pink)]" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 relative"
        >
          <span className="inline-block px-6 py-2 bg-[var(--color-party-pink)] text-white rounded-full font-bold text-sm md:text-base shadow-lg transform -rotate-2 border-2 border-white/50 mb-4">
             \ 学生・社会人 大歓迎！ /
          </span>
          <h2 className="text-[var(--color-party-cyan)] font-bold text-sm md:text-lg tracking-wide mt-2 max-w-2xl mx-auto leading-relaxed">
            学生最強AIコミュニティ GAKUSE.AI <span className="mx-2 text-white/50">/</span> AIで遊ぼうコミュニティ
            <br className="md:hidden" /> Presents
          </h2>
        </motion.div>

        <div className="relative mb-12 py-4">
          <motion.div
            animate={{ 
              textShadow: [
                "0 0 0px #fff",
                "0 0 10px #ff00de",
                "0 0 0px #fff"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-tight text-white drop-shadow-[5px_5px_0_#FF1493]">
              <span className="block text-3xl md:text-5xl mb-2 text-[var(--color-beer-yellow)] drop-shadow-[2px_2px_0_#000]">
                JAPAN AI
              </span>
              大忘年会
              <span className="block text-7xl md:text-9xl mt-2 text-[var(--color-party-cyan)] drop-shadow-[5px_5px_0_#9400D3] transform -rotate-3 inline-block">
                2025
              </span>
            </h1>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center mb-12 text-lg"
        >
          <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl border-4 border-[var(--color-party-orange)] shadow-[4px_4px_0_rgba(0,0,0,0.3)] transform rotate-1 hover:rotate-0 transition-transform cursor-default">
            <Calendar className="text-[var(--color-party-orange)] w-6 h-6" />
            <span className="font-black text-xl">12/13 (土)</span>
          </div>
          <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl border-4 border-[var(--color-party-cyan)] shadow-[4px_4px_0_rgba(0,0,0,0.3)] transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
            <Clock className="text-[var(--color-party-cyan)] w-6 h-6" />
            <span className="font-black text-xl">10:00 - 18:00</span>
          </div>
          <div className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl border-4 border-[var(--color-party-pink)] shadow-[4px_4px_0_rgba(0,0,0,0.3)] transform rotate-1 hover:rotate-0 transition-transform cursor-default">
            <MapPin className="text-[var(--color-party-pink)] w-6 h-6" />
            <span className="font-black text-xl">川崎タワー 26F</span>
          </div>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            href="https://peatix.com/event/4697750/view"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-[#FFD700] text-black font-black text-2xl md:text-3xl rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,215,0,0.6)] border-4 border-white hover:shadow-[0_0_40px_rgba(255,215,0,0.8)] transition-all"
          >
            <span className="relative flex items-center gap-3">
              <Beer className="w-8 h-8 text-black" strokeWidth={2.5} />
              参加登録 (無料)
              <ChevronRight className="w-8 h-8 text-black" strokeWidth={3} />
            </span>
          </Link>
          <p className="text-gray-300 text-sm font-bold bg-black/30 px-4 py-1 rounded-full">
            ※Peatixにてチケットをお申し込みください
          </p>
        </motion.div>
      </section>

      {/* Concept Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white text-black rounded-3xl p-8 md:p-12 shadow-[8px_8px_0_#FF1493] relative overflow-hidden border-4 border-black">
            
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl md:text-4xl font-black mb-4 text-[var(--color-party-purple)]">
                🎊 今年のAI、みんなで振り返ろう！
              </h2>
              <div className="w-20 h-2 bg-[var(--color-party-cyan)] mx-auto rounded-full" />
            </div>
            
            <div className="space-y-6 text-gray-800 leading-relaxed text-lg font-medium">
              <p>
                2025年は<span className="font-bold text-[var(--color-party-orange)] bg-yellow-100 px-1">「AIエージェント元年」</span>！
                進化が爆速すぎて、追いつくのが大変だった1年じゃなかったですか？
              </p>
              <p>
                そんな1年の締めくくりに、AI好きのみんなで集まって
                <br />
                <span className="block text-center text-2xl font-black my-6 text-[var(--color-party-pink)] transform -rotate-1">
                  「お疲れ様！」「来年も頑張ろう！」
                </span>
                と言い合える、最高に楽しい忘年会を開催します！
              </p>
              <p>
                堅苦しい勉強会ではありません。
                <span className="font-bold text-[var(--color-party-purple)]">最先端ロボット</span>を見たり、
                <span className="font-bold text-[var(--color-party-cyan)]">インフルエンサー</span>と話したり、
                <span className="font-bold text-orange-500 text-shadow-pop">ワイワイ交流</span>するのがメインです。
              </p>
              <p className="text-center font-bold text-xl mt-8">
                AIが好きなら、初心者でもガチ勢でも大歓迎！🎉
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-black text-center mb-16 text-white text-shadow-pop">
            <span className="text-[var(--color-beer-yellow)]">楽しさ</span>満載の3大要素
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card 
              Icon={PartyPopper}
              title="2025年トレンド総決算"
              description="「あれ何だっけ？」となる激動の1年を月ごとに振り返り！みんなの失敗談や裏話も聞けるかも！？"
              color="bg-[var(--color-party-pink)]"
            />
            <Card 
              Icon={Gift}
              title="ロボット × 未来体験"
              description="話題のヒューマノイド『Unitree G1』がやってくる！動く実機を見て、2026年の未来を先取りしよう！"
              color="bg-[var(--color-party-cyan)]"
            />
            <Card 
              Icon={Users}
              title="豪華ゲストと交流"
              description="有名インフルエンサーやAIスタートアップも参加予定！この日だけの特別な繋がりが生まれるかも！"
              color="bg-[var(--color-party-orange)]"
            />
          </div>
        </div>
      </section>

      {/* Time Schedule */}
      <TimeTable />

      {/* Target Audience */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-md border-4 border-[var(--color-beer-yellow)] rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-black text-center mb-12 flex items-center justify-center gap-3">
              <span className="text-[var(--color-beer-yellow)]">🙌</span>
              こんな人は絶対楽しい！
              <span className="text-[var(--color-beer-yellow)]">🙌</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "今年はAI追いきれなかったけど、来年こそは！という人",
                "とにかくAIの話ができる友達が欲しい人",
                "情報の波に疲れて、ちょっと癒やされたい人",
                "学生・社会人問わず交流したい人",
                "AIエージェント開発に興味がある人",
                "お祭り騒ぎが好きな人"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-[var(--color-party-purple)] shadow-md transform transition hover:scale-105 hover:rotate-1">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-party-purple)] flex items-center justify-center shrink-0 text-white font-bold">
                    ✔
                  </div>
                  <span className="text-black font-bold text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info & Access */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white text-black p-8 rounded-3xl shadow-[8px_8px_0_#00CED1] border-4 border-black">
            <h2 className="text-3xl font-display font-black mb-8 border-b-4 border-dotted border-gray-300 pb-4">
              開催情報
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-party-orange)] p-3 rounded-full text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-500 font-bold text-sm mb-1">日時</h3>
                  <p className="text-2xl font-black">2025年12月13日 (土)</p>
                  <p className="text-lg font-bold text-[var(--color-party-orange)]">OPEN 10:00 - CLOSE 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-party-cyan)] p-3 rounded-full text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-500 font-bold text-sm mb-1">会場</h3>
                  <p className="text-xl font-black leading-tight mb-1">Fujitsu Uvance Kawasaki Tower 26F</p>
                  <p className="text-gray-600">神奈川県川崎市幸区大宮町1-5</p>
                  <span className="inline-block mt-2 bg-black text-white text-xs px-2 py-1 rounded">川崎駅すぐ！</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[var(--color-beer-yellow)] p-3 rounded-full text-black">
                  <Gift className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-500 font-bold text-sm mb-1">参加費 & 定員</h3>
                  <p className="text-4xl font-black text-[var(--color-party-pink)]">無料！ <span className="text-lg text-black font-normal">(0円)</span></p>
                  <div className="mt-2 font-bold text-gray-700">
                    <p>現地: 50名 / オンライン: 100名</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-full min-h-[300px] bg-gray-200 rounded-3xl border-4 border-white overflow-hidden relative shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.6577991371185!2d139.69442227627797!3d35.5304603726366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601860990c8575ab%3A0x8903568222039046!2sFujitsu%20Uvance%20Kawasaki%20Tower!5e0!3m2!1sja!2sjp!4v1717171717171!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* 注意事項 */}
      <section className="py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white text-black rounded-3xl p-8 border-4 border-black shadow-[8px_8px_0_#FF4500]">
            <h2 className="text-3xl font-display font-black text-center mb-8 flex items-center justify-center gap-3">
              <span className="text-[#FF4500] animate-bounce">⚠️</span>
              ご参加時のお願い
              <span className="text-[#FF4500] animate-bounce">⚠️</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-4 rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#FF4500] hover:bg-red-50 transition-all group">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                  🚫
                </div>
                <h3 className="font-black text-xl mb-2">アルコール禁止</h3>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">
                  会場内での持ち込み・飲酒は<br/>固くお断りします
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#00CED1] hover:bg-cyan-50 transition-all group">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                  ♻️
                </div>
                <h3 className="font-black text-xl mb-2">ごみの分別</h3>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">
                  会場のルールに従って<br/>分別にご協力ください
                </p>
              </div>

              <div className="flex flex-col items-center text-center p-4 rounded-2xl border-2 border-dashed border-gray-300 hover:border-[#FFD700] hover:bg-yellow-50 transition-all group">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform">
                  👜
                </div>
                <h3 className="font-black text-xl mb-2">忘れ物注意</h3>
                <p className="text-sm font-bold text-gray-600 leading-relaxed">
                  お帰りの際は<br/>身の回りをご確認ください
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center relative z-10 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black mb-8 font-display text-shadow-glow text-white">
            2025年の最後は、<br />
            <span className="text-[var(--color-beer-yellow)]">最高の仲間</span>と締めくくろう！
          </h2>
          
          <div className="inline-block relative group">
            <div className="absolute inset-0 bg-[var(--color-party-pink)] rounded-full blur-xl group-hover:blur-2xl transition-all opacity-70"></div>
            <Link
              href="https://peatix.com/event/4697750/view"
            target="_blank"
            rel="noopener noreferrer"
              className="relative flex items-center gap-3 px-12 py-6 bg-white text-[var(--color-party-purple)] font-black text-2xl rounded-full transition-transform hover:scale-105 border-4 border-[var(--color-party-purple)] shadow-xl"
            >
              今すぐ申し込む！
              <ExternalLink className="w-6 h-6" />
            </Link>
          </div>
          
          <div className="mt-12 text-gray-400 text-sm">
            <p className="font-bold text-white mb-2">Present by</p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white/10 px-4 py-1 rounded-full">学生最強AIコミュニティ GAKUSE.AI</span>
              <span className="bg-white/10 px-4 py-1 rounded-full">AIで遊ぼうコミュニティ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#0f0518] text-center text-gray-500 text-sm relative z-10 border-t border-white/10">
        <div className="flex justify-center gap-6 mb-6">
           <Link href="https://x.com/sora19ai" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
             <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">𝕏</span> @sora19ai
           </Link>
           <Link href="https://x.com/taiyo_ai_gakuse" target="_blank" className="flex items-center gap-2 hover:text-white transition-colors">
             <span className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">𝕏</span> @taiyo_ai_gakuse
           </Link>
        </div>
        <p>© 2025 Japan AI 大忘年会実行委員会</p>
      </footer>
    </main>
  );
}

// アイコンの型定義を修正し、コンポーネントとして受け取るように変更
function Card({ Icon, title, description, color }: { Icon: React.ElementType; title: string; description: string; color: string }) {
  return (
    <div className="group relative h-full">
      <div className={`absolute inset-0 ${color} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform`} />
      <div className="relative h-full p-8 bg-white text-black rounded-3xl border-4 border-black transition-transform hover:-translate-y-2">
        <div className={`mb-6 w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-[4px_4px_0_rgba(0,0,0,0.2)]`}>
          <Icon className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-black mb-4">{title}</h3>
        <p className="text-gray-700 font-bold leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
