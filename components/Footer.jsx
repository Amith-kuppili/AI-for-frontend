export default function Footer(){
  return (
    <footer className="px-6 py-12 bg-[#021B23] border-t border-[#0AB6BC]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div className="flex gap-6">
          {['About','Privacy','Terms','Contact'].map((link)=>(
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#0AB6BC] transition">{link}</a>
          ))}
        </div>
        <p className="text-sm">Built with ❤️ by Amith Kuppili</p>
      </div>
    </footer>
  )
}
