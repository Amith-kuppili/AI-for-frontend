import { motion } from 'framer-motion'
import { Copy, Heart, Save } from 'lucide-react'

export default function Generated(){
  return (
    <section id="features" className="px-6 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h3 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-3xl font-bold mb-12">AI Generated Ideas</motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_,i)=>(
            <motion.div key={i} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:i*0.08}} className="p-6 rounded-xl bg-[#021B23]/50 border border-[#0AB6BC]/20 hover:border-[#0AB6BC]/50 transition">
              <h4 className="text-xl font-semibold mb-2">BrandName {i+1}</h4>
              <p className="text-sm mb-4">Your go-to AI-powered business solution.</p>
              <div className="flex gap-4">
                <Copy size={18} className="cursor-pointer hover:text-[#0AB6BC]"/>
                <Heart size={18} className="cursor-pointer hover:text-[#0AB6BC]"/>
                <Save size={18} className="cursor-pointer hover:text-[#0AB6BC]"/>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
