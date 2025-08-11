import { motion } from "framer-motion";
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://my.spline.design/genkubgreetingrobot-dyqf0k5MGBQeQ6mkBRpwmdzr/" />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-[#F6F6F6] px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Name Your Startup in Seconds with AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl"
        >
          Generate catchy, brandable names + taglines instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center gap-4 w-full max-w-lg"
        >
          <input
            type="text"
            placeholder="Describe your startup or product…"
            className="flex-1 px-4 py-3 rounded-xl bg-[#021B23]/70 border border-[#0AB6BC] placeholder-gray-400 text-white backdrop-blur-lg"
          />
          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:shadow-lg hover:shadow-[#0AB6BC]/50 transition">
            Generate Name
          </button>
        </motion.div>
      </div>
    </section>
  );
}
