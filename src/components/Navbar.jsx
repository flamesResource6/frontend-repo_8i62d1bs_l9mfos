import { Menu } from 'lucide-react'

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#facilities', label: 'Facilities' },
    { href: '#programs', label: 'Programs' },
    { href: '#membership', label: 'Membership' },
    { href: '#blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#0A0F0D]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-[#13C28D] font-extrabold text-xl">CoreMotion</a>
        <nav className="hidden md:flex items-center gap-6 text-[#F5F5F5]/80 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden text-white">
          <Menu />
        </button>
      </div>
    </header>
  )
}
