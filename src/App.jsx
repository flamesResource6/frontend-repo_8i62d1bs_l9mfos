import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Stats from './components/Stats'
import Zones from './components/Zones'
import Testimonials from './components/Testimonials'
import Memberships from './components/Memberships'
import CTA from './components/CTA'
import Footer from './components/Footer'

const API = import.meta.env.VITE_BACKEND_URL || ''

export default function App() {
  const [stats, setStats] = useState(null)
  const [plans, setPlans] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/stats`).then(r => r.json()).then(setStats).catch(() => {})
    fetch(`${API}/api/memberships`).then(r => r.json()).then(setPlans).catch(() => {})
  }, [])

  const statList = stats ? [
    { value: `+${stats.members}`, label: 'Member Aktif' },
    { value: `${stats.coaches}`, label: 'Pelatih Bersertifikat' },
    { value: `${stats.classes}+`, label: 'Jenis Kelas' },
    { value: `${stats.zones}`, label: 'Zona Latihan' },
  ] : null

  return (
    <div id="home" className="bg-[#0A0F0D]">
      <Navbar />
      <Hero onPrimaryCTA={() => window.location.hash = 'contact'} />
      <Stats data={statList || undefined} />
      <div id="facilities"><Zones /></div>
      <Testimonials />
      <div id="membership"><Memberships plans={plans || undefined} /></div>
      <CTA />
      <Footer />
    </div>
  )
}
