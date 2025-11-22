export default function Memberships({ plans }) {
  const items = plans || [
    { name: 'Basic', price: 199000, color: '#F5F5F5', features: ['Akses 06.00–18.00', 'Akses cardio & strength'] },
    { name: 'Standard', price: 299000, color: '#13C28D', highlight: true, features: ['Akses penuh 06.00–22.00', 'Semua zona', '2x kelas/minggu'] },
    { name: 'Premium', price: 499000, color: '#FF9E2C', features: ['PT konsultasi 1x/minggu', 'Unlimited class', 'Progress tracking'] },
  ]

  const formatIDR = (n) => new Intl.NumberFormat('id-ID').format(n)

  return (
    <section id="membership" className="py-16 bg-[#0A0F0D]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Membership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((p) => (
            <div key={p.name} className={`rounded-xl p-6 shadow-lg ${p.highlight ? 'ring-2 ring-[#13C28D]' : ''}`} style={{ backgroundColor: p.color }}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold" style={{ color: p.color === '#F5F5F5' ? '#313131' : '#0A0F0D', fontFamily: 'Poppins, system-ui, sans-serif' }}>{p.name}</h3>
                <div className="text-lg font-semibold" style={{ color: p.color === '#F5F5F5' ? '#313131' : '#0A0F0D', fontFamily: 'Space Grotesk, system-ui, sans-serif' }}>Rp {formatIDR(p.price)}/bln</div>
              </div>
              <ul className="mt-4 space-y-2 text-sm" style={{ color: p.color === '#F5F5F5' ? '#313131' : '#0A0F0D' }}>
                {p.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
              <button className="mt-6 w-full px-4 py-2 rounded-lg font-semibold" style={{ background: '#13C28D', color: '#0A0F0D' }}>Beli Membership</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
