export default function CTA() {
  return (
    <section className="relative py-20" style={{ backgroundImage: 'url(/gym.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
          Ambil Kendali Badanmu Hari Ini.
        </h2>
        <a href="#membership" className="inline-block px-6 py-3 rounded-lg font-semibold text-[#0A0F0D]" style={{ backgroundColor: '#13C28D' }}>
          Daftar Membership
        </a>
      </div>
    </section>
  )
}
