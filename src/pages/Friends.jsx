import { useState } from 'react'
import NavBar from '../components/layout/NavBar'

const ONLINE_VOICE = [
  { av: '👑', name: 'ReyCatrino', flag: '🇦🇷', ch: 'General LATAM' },
  { av: '🥷', name: 'NinjaRoja', flag: '🇨🇱', ch: 'Valorant Ranked' },
  { av: '🦊', name: 'ZorraVerde_MX', flag: '🇲🇽', ch: 'Free Fire MX' },
  { av: '⚡', name: 'ProGamer_Pe', flag: '🇵🇪', ch: 'General LATAM' },
]

const ONLINE = [
  { av: '🎯', name: 'LatinSniper99', flag: '🇨🇴', status: 'away' },
  { av: '🐺', name: 'ShadowWolf_MX', flag: '🇲🇽', status: 'online' },
]

const OFFLINE = [
  { av: '🐉', name: 'XxDragonMX2', flag: '🇲🇽' },
  { av: '🎮', name: 'GameOver_VE', flag: '🇻🇪' },
  { av: '🔥', name: 'FlameAR', flag: '🇦🇷' },
  { av: '⭐', name: 'StarPlayer_CO', flag: '🇨🇴' },
  { av: '🏹', name: 'ArcherCL', flag: '🇨🇱' },
  { av: '🌊', name: 'WaveMX', flag: '🇲🇽' },
]

const REQUESTS = [
  { av: '🐯', name: 'TigreAR', flag: '🇦🇷', mutual: 4 },
  { av: '🌙', name: 'LunaCO', flag: '🇨🇴', mutual: 1 },
  { av: '🎵', name: 'MusicMX', flag: '🇲🇽', mutual: 2 },
]

const SENT = [
  { av: '🦅', name: 'AguilaMX', flag: '🇲🇽' },
  { av: '🌺', name: 'FloresPE', flag: '🇵🇪' },
]

function WaveIcon() {
  return (
    <div className="flex items-center gap-[2px] h-3">
      {[0,1,2].map(i => (
        <div key={i} className="w-[2px] bg-[#1db954] rounded-sm"
          style={{ height: '100%', animation: `wave 0.7s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }} />
      ))}
      <style>{`@keyframes wave { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }`}</style>
    </div>
  )
}

function Friends() {
  const [tab, setTab] = useState('online')
  const [search, setSearch] = useState('')

  const tabs = [
    { id: 'online', label: 'En línea', badge: ONLINE_VOICE.length + ONLINE.length },
    { id: 'todos', label: 'Todos', badge: ONLINE_VOICE.length + ONLINE.length + OFFLINE.length },
    { id: 'solicitudes', label: 'Solicitudes', badge: REQUESTS.length, pending: true },
  ]

  return (
    <div className="flex h-screen bg-[#111116] text-[#e8e8f0] overflow-hidden">

      <NavBar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="px-6 py-4 border-b border-[#1e1e28] bg-[#0e0e14] flex items-center gap-4 flex-shrink-0">
          <div className="text-base font-black text-[#e8e8f0] flex-shrink-0">Amigos</div>
          <div className="relative flex-1 max-w-xs">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#33333e]">🔍</span>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Buscar amigos..."
              className="w-full bg-[#141418] border border-[#1e1e28] rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#e8e8f0] placeholder-[#33333e] outline-none focus:border-[#1db95460] transition-colors" />
          </div>
          <button className="ml-auto bg-[#1db954] text-black text-sm font-bold px-4 py-2.5 rounded-xl hover:bg-[#1ed760] transition-all hover:scale-105">
            + Agregar amigo
          </button>
        </div>

        <div className="flex border-b border-[#1e1e28] px-6 bg-[#0e0e14] flex-shrink-0">
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`py-3.5 px-4 text-sm font-semibold border-b-2 transition-all mr-1 flex items-center gap-2 ${tab === t.id ? 'text-[#e8e8f0] border-[#1db954]' : 'text-[#44444e] border-transparent hover:text-[#8888a0]'}`}>
              {t.label}
              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${t.pending ? 'bg-[#f5a62330] text-[#f5a623]' : 'bg-[#1db95430] text-[#1db954]'}`}>
                {t.badge}
              </span>
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {tab === 'online' && (
            <>
              <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-3">En voz ahora — {ONLINE_VOICE.length}</div>
              {ONLINE_VOICE.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-[#111a13] border border-[#1db95420] rounded-xl mb-2 hover:border-[#2a2a38] transition-colors">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-[#1db95440] flex items-center justify-center text-xl">{f.av}</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#1db954] rounded-full border-2 border-[#0e0e14]"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-[#c0c0d8]">{f.name} {f.flag}</div>
                    <div className="flex items-center gap-2 text-xs text-[#33333e] mt-0.5"><WaveIcon /> {f.ch}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#1e1e2c] transition-all">🔊</button>
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#1e1e2c] transition-all">👤</button>
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#2a1010] hover:border-[#e0555530] transition-all">✕</button>
                  </div>
                </div>
              ))}
              <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-3 mt-5">En línea — {ONLINE.length}</div>
              {ONLINE.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-[#0e0e14] border border-[#1e1e28] rounded-xl mb-2 hover:border-[#2a2a38] transition-colors">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-transparent flex items-center justify-center text-xl opacity-80">{f.av}</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2 border-[#0e0e14]" style={{ background: f.status === 'online' ? '#1db954' : '#f5a623' }}></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#c0c0d8]">{f.name} {f.flag}</div>
                    <div className="text-xs mt-0.5" style={{ color: f.status === 'online' ? '#1db954' : '#f5a623' }}>● {f.status === 'online' ? 'En línea' : 'Ausente'}</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#1e1e2c] transition-all">👤</button>
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#2a1010] transition-all">✕</button>
                  </div>
                </div>
              ))}
            </>
          )}

          {tab === 'todos' && (
            <>
              <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-3">En línea — {ONLINE_VOICE.length + ONLINE.length}</div>
              {[...ONLINE_VOICE.map(f => ({ ...f, status: 'online' })), ...ONLINE].map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-[#0e0e14] border border-[#1e1e28] rounded-xl mb-2 hover:border-[#2a2a38] transition-colors">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-transparent flex items-center justify-center text-xl">{f.av}</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#1db954] rounded-full border-2 border-[#0e0e14]"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#c0c0d8]">{f.name} {f.flag}</div>
                    <div className="text-xs text-[#1db954] mt-0.5">● En línea</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#1e1e2c] transition-all">👤</button>
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#2a1010] transition-all">✕</button>
                  </div>
                </div>
              ))}
              <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-3 mt-5">Desconectados — {OFFLINE.length}</div>
              {OFFLINE.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-[#0e0e14] border border-[#1e1e28] rounded-xl mb-2 opacity-60">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-transparent flex items-center justify-center text-xl opacity-70">{f.av}</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#2a2a38] rounded-full border-2 border-[#0e0e14]"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#8888a0]">{f.name} {f.flag}</div>
                    <div className="text-xs text-[#33333e] mt-0.5">● Desconectado</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#1e1e2c] transition-all">👤</button>
                    <button className="w-8 h-8 rounded-lg border border-[#1e1e28] bg-[#141418] flex items-center justify-center text-sm hover:bg-[#2a1010] transition-all">✕</button>
                  </div>
                </div>
              ))}
            </>
          )}

          {tab === 'solicitudes' && (
            <>
              <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-3">Solicitudes recibidas — {REQUESTS.length}</div>
              {REQUESTS.map((r, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-[#0e0e14] border border-[#1e1e28] rounded-xl mb-2 hover:border-[#2a2a38] transition-colors">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-[#1db95440] flex items-center justify-center text-xl">{r.av}</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#1db954] rounded-full border-2 border-[#0e0e14]"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#c0c0d8]">{r.name} {r.flag}</div>
                    <div className="text-xs text-[#33333e] mt-0.5">{r.mutual} amigo{r.mutual > 1 ? 's' : ''} en común</div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-[#1db954] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#1ed760] transition-all">Aceptar</button>
                    <button className="border border-[#1e1e28] text-[#55556a] text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#2a1010] hover:text-[#e05555] transition-all">Ignorar</button>
                  </div>
                </div>
              ))}
              <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-3 mt-5">Solicitudes enviadas — {SENT.length}</div>
              {SENT.map((r, i) => (
                <div key={i} className="flex items-center gap-4 p-3 bg-[#0e0e14] border border-[#1e1e28] rounded-xl mb-2 opacity-70">
                  <div className="relative flex-shrink-0">
                    <div className="w-11 h-11 rounded-full border-2 border-transparent flex items-center justify-center text-xl">{r.av}</div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#2a2a38] rounded-full border-2 border-[#0e0e14]"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#8888a0]">{r.name} {r.flag}</div>
                    <div className="text-xs text-[#33333e] mt-0.5">Pendiente de respuesta</div>
                  </div>
                  <button className="border border-[#1e1e28] text-[#55556a] text-xs font-semibold px-4 py-2 rounded-lg hover:bg-[#2a1010] hover:text-[#e05555] transition-all">Cancelar</button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Friends