const Stat = ({ value, label }) => (
  <div className="text-center">
    <div className="text-3xl md:text-5xl font-semibold text-[#13C28D]" style={{ fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>{value}</div>
    <div className="text-sm md:text-base text-[#F5F5F5]/80 mt-1">{label}</div>
  </div>
)

export default function Stats({ data }) {
  const stats = data || [
    { value: '+800', label: 'Member Aktif' },
    { value: '12', label: 'Pelatih Bersertifikat' },
    { value: '20+', label: 'Jenis Kelas' },
    { value: '4', label: 'Zona Latihan' },
  ]

  return (
    <section className="py-12 md:py-16 bg-[#0A0F0D]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <Stat key={i} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  )
}
