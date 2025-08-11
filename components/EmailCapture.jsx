import { motion } from 'framer-motion'

export default function EmailCapture(){
  return (
    <section className="relative px-6 py-24 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0AB6BC]/10 to-transparent"/>
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h3 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-3xl font-bold mb-6">Want even more creative names?</motion.h3>
        <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input placeholder="Enter your email" className="px-4 py-3 rounded-lg bg-[#021B23]/50 border border-[#0AB6BC]/30 focus:outline-none"/>
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:shadow-lg hover:shadow-[#0AB6BC]/50 transition">Subscribe</button>
        </motion.div>
        <p className="text-sm mt-4">Get 20+ extra name ideas in your inbox.</p>
      </div>
    </section>
  )
}
