import { motion } from 'framer-motion'

export default function Pricing(){
  return (
    <section id="pricing" className="px-6 py-24 bg-[#021B23]">
      <div className="max-w-5xl mx-auto">
        <motion.h3 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-3xl font-bold mb-12 text-center">Pricing</motion.h3>
        <div className="grid md:grid-cols-3 gap-8">
          {['Basic','Pro','Enterprise'].map((tier, idx)=>(
            <motion.div key={tier} initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:idx*0.12}} className="rounded-xl p-8 bg-black/40 border border-[#0AB6BC]/20 hover:shadow-lg hover:shadow-[#0AB6BC]/30 transition">
              <h4 className="text-2xl font-semibold mb-4">{tier}</h4>
              <p className="text-4xl font-bold mb-6">${idx*10+10}/mo</p>
              <ul className="mb-6 space-y-2">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#0AB6BC] to-[#045C43] hover:shadow-lg hover:shadow-[#0AB6BC]/50 transition">Subscribe Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
