export default function Testimonials() {
  const items = [
    { name: 'Raka', progress: '-8kg dalam 10 minggu' },
    { name: 'Maya', progress: '+3kg lean mass' },
    { name: 'Dion', progress: 'First pull-up!' },
  ]

  return (
    <section className="py-14 bg-[#0A0F0D]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#F5F5F5] mb-8" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>Testimonial</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="bg-[#0F1513] border border-[#13C28D33] rounded-xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full border-2" style={{ borderColor: '#13C28D', background: 'url(/avatar.jpg) center/cover' }} />
                <div>
                  <div className="text-[#F5F5F5] font-semibold">{t.name}</div>
                  <div className="text-[#13C28D] text-sm">{t.progress}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-[#F5F5F5]/80" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                Video 10-15 detik berjalan di sini (placeholder). Pengalaman nyata member CoreMotion.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
