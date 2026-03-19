import { useState } from 'react'
import NavBar from '../components/layout/NavBar'

const CHANNELS = [
  { icon: '🌎', bg: '#0d2010', name: 'General LATAM', country: 'Todos', flag: '🌍', users: 12, live: true },
  { icon: '🔥', bg: '#201008', name: 'Free Fire MX', country: 'México', flag: '🇲🇽', users: 8, live: true },
  { icon: '🟣', bg: '#180820', name: 'Valorant Ranked', country: 'Colombia', flag: '🇨🇴', users: 5, live: true },
  { icon: '🔵', bg: '#080f20', name: 'League of Legends', country: 'Argentina', flag: '🇦🇷', users: 3, live: false },
  { icon: '🎮', bg: '#0e0e14', name: 'Gaming General AR', country: 'Argentina', flag: '🇦🇷', users: 4, live: false },
  { icon: '🏎', bg: '#0e1408', name: 'Free Fire CO', country: 'Colombia', flag: '🇨🇴', users: 6, live: true },
  { icon: '⚔️', bg: '#140808', name: 'Valorant CL', country: 'Chile', flag: '🇨🇱', users: 2, live: false },
  { icon: '🎯', bg: '#080e14', name: 'LoL LATAM Norte', country: 'México', flag: '🇲🇽', users: 5, live: false },
  { icon: '🕹', bg: '#0a0a14', name: 'Casual VE', country: 'Venezuela', flag: '🇻🇪', users: 3, live: false },
]

const FEATURED = [
  { icon: '🌎', bg: '#0d2010', name: 'General LATAM', sub: 'Todos los países', users: 12 },
  { icon: '🔥', bg: '#201008', name: 'Free Fire MX', sub: '🇲🇽 México', users: 8 },
  { icon: '🏎', bg: '#0e1408', name: 'Free Fire CO', sub: '🇨🇴 Colombia', users: 6 },
]

function Explore() {
  const [search, setSearch] = useState('')

  const filtered = CHANNELS.filter(ch =>
    ch.name.toLowerCase().includes(search.toLowerCase()) ||
    ch.country.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="flex h-screen bg-[#111116] text-[#e8e8f0] overflow-hidden">

      <NavBar />

      <div className="flex-1 flex flex-col overflow-hidden relative z-0">
        <div className="px-6 py-4 border-b border-[#1e1e28] bg-[#0e0e14] flex items-center gap-4 flex-shrink-0 relative z-0">
          <div className="text-base font-black text-[#e8e8f0] flex-shrink-0">Explorar</div>
          <div className="flex-1 max-w-sm">
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="🔍  Buscar canales, países..."
              className="w-full bg-[#141418] border border-[#1e1e28] rounded-xl px-4 py-2.5 text-sm text-[#e8e8f0] placeholder-[#33333e] outline-none focus:border-[#1db95460] transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-5 border border-dashed border-[#1e1e28] rounded-xl px-4 py-2.5 flex items-center justify-between bg-[#0c0c10]">
            <div>
              <div className="text-[9px] font-bold text-[#22222a] tracking-widest uppercase">Publicidad</div>
              <div className="text-xs text-[#2a2a38] mt-0.5">Banner AdSense — explorar</div>
            </div>
            <div className="text-[10px] text-[#1e1e28] font-bold">728×90</div>
          </div>

          {!search && (
            <>
              <div className="text-[10px] font-bold text-[#44444e] tracking-widest uppercase mb-4">Canales más activos</div>
              <div className="grid grid-cols-3 gap-3 mb-8">
                {FEATURED.map((ch, i) => (
                  <div key={i} className="bg-[#0e0e14] border border-[#1e1e28] rounded-xl overflow-hidden cursor-pointer hover:border-[#2a2a38] hover:translate-y-[-2px] transition-all">
                    <div className="h-16 flex items-center justify-center text-4xl relative" style={{ background: ch.bg }}>
                      {ch.icon}
                      <span className="absolute top-2 right-2 text-[10px] font-bold text-[#1db954] bg-[#1db95415] border border-[#1db95430] px-2 py-0.5 rounded-full">● EN VIVO</span>
                    </div>
                    <div className="p-3">
                      <div className="text-sm font-bold text-[#e8e8f0] mb-1">{ch.name}</div>
                      <div className="flex items-center justify-between text-xs text-[#44444e]">
                        <span>{ch.sub}</span>
                        <span className="text-[#1db954] font-semibold">{ch.users}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className="text-[10px] font-bold text-[#44444e] tracking-widest uppercase mb-4">
            {search ? `Resultados para "${search}"` : 'Todos los canales'}
          </div>
          <div className="grid grid-cols-2 gap-3">
            {filtered.map((ch, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl hover:border-[#2a2a38] hover:bg-[#141418] cursor-pointer transition-all">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0" style={{ background: ch.bg }}>{ch.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-[#c0c0d8] truncate mb-1">{ch.name}</div>
                  <div className="flex items-center gap-2 text-xs text-[#33333e]">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ch.live ? '#22c55e' : '#2a2a38' }}></div>
                    <span>{ch.flag} {ch.country}</span>
                  </div>
                </div>
                <div className={`text-sm font-bold ${ch.users >= 6 ? 'text-[#1db954]' : 'text-[#44444e]'}`}>{ch.users}</div>
                <button className="px-3 py-1.5 rounded-lg border border-[#1e1e28] text-xs font-bold text-[#55556a] hover:bg-[#1db954] hover:text-black hover:border-[#1db954] transition-all">
                  Unirse
                </button>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="col-span-2 text-center py-10 text-[#33333e] text-sm">No se encontraron canales</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explore