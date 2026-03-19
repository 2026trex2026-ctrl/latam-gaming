import { useNavigate } from 'react-router-dom'

function Landing() {
  const navigate = useNavigate()

  const features = [
    { icon: '🎙', title: 'Voz en tiempo real', desc: 'Canales de voz persistentes. Entrá y salí cuando quieras, sin llamadas ni invitaciones.' },
    { icon: '🌎', title: '100% LATAM', desc: 'Servidores en la región, interfaz en español, comunidad latina. Sin traducciones raras.' },
    { icon: '🎮', title: 'Por juego', desc: 'Canales separados por juego y país. Free Fire, Valorant, League y más.' },
    { icon: '⚡', title: 'Sin lag', desc: 'Infraestructura optimizada para baja latencia en toda América Latina.' },
    { icon: '👥', title: 'Comunidad', desc: 'Encontrá tu squad, agregá amigos y construí tu red gamer en LATAM.' },
    { icon: '💸', title: 'Gratis para siempre', desc: 'Sin suscripciones. La plataforma se mantiene con publicidad no invasiva.' },
  ]

  const channels = [
    { icon: '🌎', name: 'General LATAM', country: 'Todos los países', users: 12, live: true },
    { icon: '🔥', name: 'Free Fire MX', country: '🇲🇽 México', users: 8, live: true },
    { icon: '🟣', name: 'Valorant Ranked', country: '🇨🇴 Colombia', users: 5, live: true },
    { icon: '🔵', name: 'League of Legends', country: '🇦🇷 Argentina', users: 3, live: false },
    { icon: '🎮', name: 'Gaming General AR', country: '🇦🇷 Argentina', users: 4, live: false },
  ]

  return (
    <div className="min-h-screen bg-[#111116]">

      {/* NAV */}
      <nav className="flex items-center justify-between px-10 py-4 border-b border-[#1e1e28] bg-[#0e0e14]">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white rounded-xl flex items-center justify-center font-black text-black text-sm">LG</div>
          <span className="text-lg font-black text-[#e8e8f0]">LATAM Gaming</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span onClick={() => navigate('/explore')} className="text-sm font-medium text-[#55556a] hover:text-[#e8e8f0] cursor-pointer transition-colors">Canales</span>
          <span className="text-sm font-medium text-[#55556a] hover:text-[#e8e8f0] cursor-pointer transition-colors">Comunidad</span>
          <span className="text-sm font-medium text-[#55556a] hover:text-[#e8e8f0] cursor-pointer transition-colors">Descargar app</span>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/login')} className="text-sm font-medium text-[#55556a] hover:text-[#e8e8f0] transition-colors">Iniciar sesión</button>
          <button onClick={() => navigate('/login')} className="bg-[#1db954] text-black text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#1ed760] transition-all hover:scale-105">Registrarse gratis</button>
        </div>
      </nav>

      {/* HERO */}
      <div className="flex flex-col items-center text-center px-6 py-20">
        <div className="flex items-center gap-2 bg-[#1db95415] border border-[#1db95430] rounded-full px-4 py-1 text-[#1db954] text-xs font-semibold mb-6">
          <span className="w-2 h-2 bg-[#1db954] rounded-full animate-pulse"></span>
          247 gamers conectados ahora
        </div>
        <h1 className="text-5xl font-black text-[#e8e8f0] leading-tight mb-4">
          La voz de los<br />gamers de <span className="text-[#1db954]">LATAM</span>
        </h1>
        <p className="text-[#55556a] text-base max-w-md mb-10 leading-relaxed">
          Canales de voz en tiempo real para la comunidad gamer latinoamericana. Encontrá tu squad, jugá y hablá sin límites.
        </p>
        <div className="flex gap-3">
          <button onClick={() => navigate('/login')} className="bg-[#1db954] text-black font-bold px-8 py-3 rounded-xl hover:bg-[#1ed760] transition-all hover:scale-105">
            Entrar gratis
          </button>
          <button onClick={() => navigate('/explore')} className="border border-[#1e1e28] text-[#8888a0] font-bold px-8 py-3 rounded-xl hover:border-[#2a2a38] hover:text-[#e8e8f0] transition-all">
            Ver canales →
          </button>
        </div>

        {/* STATS */}
        <div className="flex mt-14 border border-[#1e1e28] rounded-xl overflow-hidden bg-[#0c0c10]">
          {[
            { val: '247', label: 'En línea ahora' },
            { val: '12', label: 'Canales activos' },
            { val: '8', label: 'Países' },
            { val: '$0', label: 'Costo mensual' },
          ].map((s, i) => (
            <div key={i} className={`px-8 py-4 text-center ${i < 3 ? 'border-r border-[#1e1e28]' : ''}`}>
              <div className="text-2xl font-black text-[#e8e8f0]">{s.val}</div>
              <div className="text-xs text-[#44444e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* AD BANNER */}
      <div className="mx-10 mb-8 border border-dashed border-[#1e1e28] rounded-xl px-5 py-3 flex items-center justify-between bg-[#0c0c10]">
        <div>
          <div className="text-[9px] font-bold text-[#2a2a38] tracking-widest uppercase">Publicidad</div>
          <div className="text-xs text-[#33333e] mt-1">Banner AdSense — espacio publicitario</div>
        </div>
        <div className="text-[10px] text-[#1e1e28] font-bold">728×90</div>
      </div>

      {/* FEATURES */}
      <div className="px-10 py-14">
        <div className="text-[10px] font-bold text-[#1db954] tracking-widest uppercase mb-3">Por qué LATAM Gaming</div>
        <div className="text-3xl font-black text-[#e8e8f0] mb-2">Hecho para LATAM</div>
        <div className="text-sm text-[#44444e] mb-10">Sin barreras de idioma, sin servidores lentos, sin costos.</div>
        <div className="grid grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div key={i} className="bg-[#0e0e14] border border-[#1e1e28] rounded-xl p-5 hover:border-[#2a2a38] transition-colors">
              <div className="w-10 h-10 bg-[#1a1a24] rounded-xl flex items-center justify-center text-xl mb-3">{f.icon}</div>
              <div className="text-sm font-bold text-[#e8e8f0] mb-2">{f.title}</div>
              <div className="text-xs text-[#44444e] leading-relaxed">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CHANNELS PREVIEW */}
      <div className="px-10 pb-14">
        <div className="text-[10px] font-bold text-[#1db954] tracking-widest uppercase mb-4">Canales en vivo</div>
        <div className="bg-[#0e0e14] border border-[#1e1e28] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e1e28]">
            <div className="text-sm font-bold text-[#e8e8f0]">Canales activos ahora</div>
            <div className="text-xs text-[#44444e]">Actualizados en tiempo real</div>
          </div>
          {channels.map((ch, i) => (
            <div key={i} onClick={() => navigate('/login')} className="flex items-center gap-3 px-5 py-3 hover:bg-[#141418] transition-colors cursor-pointer border-b border-[#1e1e28] last:border-0">
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ch.live ? '#22c55e' : '#2a2a38' }}></div>
              <span className="text-base">{ch.icon}</span>
              <span className="text-sm font-semibold text-[#8888a0] flex-1">{ch.name}</span>
              {ch.live && <span className="text-[10px] font-bold text-[#1db954] bg-[#1db95415] border border-[#1db95430] px-2 py-1 rounded-full">● EN VIVO</span>}
              <span className="text-xs text-[#33333e] bg-[#1a1a24] px-2 py-1 rounded-full">{ch.users} conectados</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-10 mb-14 bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-10 py-12 text-center">
        <div className="text-3xl font-black text-[#e8e8f0] mb-3">¿Listo para unirte?</div>
        <div className="text-sm text-[#44444e] mb-6">Gratis, sin tarjeta de crédito, sin excusas.</div>
        <button onClick={() => navigate('/login')} className="bg-[#1db954] text-black font-bold px-10 py-3 rounded-xl hover:bg-[#1ed760] transition-all hover:scale-105">
          Crear cuenta gratis
        </button>
      </div>

      {/* FOOTER */}
      <div className="px-10 py-5 border-t border-[#1e1e28] flex items-center justify-between bg-[#0c0c10]">
        <div className="text-xs text-[#33333e]">© 2026 LATAM Gaming</div>
        <div className="flex gap-6">
          {['Términos', 'Privacidad', 'Contacto', 'Anunciarte'].map(l => (
            <span key={l} className="text-xs text-[#33333e] hover:text-[#55556a] cursor-pointer transition-colors">{l}</span>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Landing