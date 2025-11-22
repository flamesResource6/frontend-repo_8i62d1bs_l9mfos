import Spline from '@splinetool/react-spline'

const colors = {
  primary: '#0A0F0D',
  mint: '#13C28D',
  white: '#F5F5F5',
  steel: '#313131',
  orange: '#FF9E2C',
  aqua: '#7FFFD4'
}

export default function Hero({ onPrimaryCTA }) {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to match brand */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F0D]/80 via-[#0A0F0D]/70 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
        <div className="max-w-2xl">
          <p className="uppercase tracking-widest text-xs md:text-sm text-[#7FFFD4] mb-3">Move Better, Live Stronger</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#F5F5F5] leading-tight" style={{ fontFamily: 'Montserrat, system-ui, sans-serif' }}>
            Stronger Starts Here.
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#F5F5F5]/80" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
            Gym menengah dengan fasilitas modern, program progresif, dan pelatih bersertifikat. Komunitas suportif untuk semua level: pelajar, pekerja, dan pemula.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={onPrimaryCTA} className="px-5 py-3 rounded-lg font-semibold text-[#0A0F0D]" style={{ backgroundColor: colors.orange }}>
              Coba Gratis 7 Hari
            </button>
            <a href="#membership" className="px-5 py-3 rounded-lg font-semibold border" style={{ color: colors.white, borderColor: colors.white }}>
              Lihat Membership
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
