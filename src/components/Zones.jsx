import { Dumbbell, Activity, HeartPulse, Sprout } from 'lucide-react'

const iconMap = {
  dumbbell: Dumbbell,
  activity: Activity,
  'heart-pulse': HeartPulse,
  leaf: Sprout,
}

const Card = ({ title, icon: Icon, items }) => (
  <div className="bg-[#F5F5F5] rounded-xl p-6 hover:scale-[1.03] transition-transform">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#13C28D10' }}>
        <Icon color="#313131" />
      </div>
      <h3 className="text-lg font-semibold" style={{ color: '#313131', fontFamily: 'Poppins, system-ui, sans-serif' }}>{title}</h3>
    </div>
    <ul className="text-sm text-[#313131]/80 space-y-1" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {items.map((it, i) => (<li key={i}>• {it}</li>))}
    </ul>
  </div>
)

export default function Zones() {
  const grid = [
    { title: 'Strength Zone', icon: 'dumbbell', items: ['Barbell', 'Squat Rack', 'Bench', 'Dumbbell 2–50kg'] },
    { title: 'Functional Zone', icon: 'activity', items: ['Kettlebell', 'TRX', 'Battle Rope', 'Plyo Box'] },
    { title: 'Cardio Zone', icon: 'heart-pulse', items: ['Treadmill', 'Cross Trainer', 'Rowing Machine'] },
    { title: 'Yoga & Class Studio', icon: 'leaf', items: ['Yoga', 'Pilates', 'Dance Fit', 'HIIT'] },
  ]

  return (
    <section className="py-14 bg-[#0A0F0D]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Zona Fasilitas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {grid.map((c) => {
            const Icon = iconMap[c.icon]
            return <Card key={c.title} title={c.title} icon={Icon} items={c.items} />
          })}
        </div>
      </div>
    </section>
  )
}
