import { Facebook, Instagram, Youtube, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0F0D] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-[#13C28D] font-extrabold text-xl mb-3">CoreMotion</div>
          <p className="text-white/70 text-sm">Gym fungsional modern dengan program progresif dan komunitas suportif.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Menu</div>
          <ul className="space-y-2 text-white/70 text-sm">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#facilities">Facilities</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Kontak</div>
          <div className="text-white/70 text-sm flex items-start gap-2"><MapPin size={16} /> Jl. Atletik No. 10, Bandung</div>
          <div className="text-white/70 text-sm mt-2">WA: +62 812-3456-7890</div>
          <div className="flex gap-3 mt-3 text-white/80">
            <a href="#"><Instagram /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Youtube /></a>
          </div>
        </div>
        <div className="text-white/60 text-xs">
          <div>Terms • Privacy</div>
          <div className="mt-2">© {new Date().getFullYear()} CoreMotion Gym</div>
        </div>
      </div>
    </footer>
  )
}
