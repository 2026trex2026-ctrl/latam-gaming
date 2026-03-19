import { useState } from 'react'
import NavBar from '../components/layout/NavBar'

const ACTIVITY = [
  { icon: '🔥', name: 'Se unió a Free Fire MX', sub: 'Estuvo 2h 14min conectado', time: 'Hoy, 3:20pm' },
  { icon: '🌎', name: 'Se unió a General LATAM', sub: 'Estuvo 45min conectado', time: 'Ayer' },
  { icon: '🟣', name: 'Se unió a Valorant Ranked', sub: 'Estuvo 1h 30min conectado', time: 'Hace 2 días' },
  { icon: '🔥', name: 'Se unió a Free Fire MX', sub: 'Estuvo 3h 02min conectado', time: 'Hace 3 días' },
]

const FRIENDS = [
  { av: '👑', name: 'ReyCatrino', flag: '🇦🇷', ch: 'General LATAM' },
  { av: '🥷', name: 'NinjaRoja', flag: '🇨🇱', ch: 'Valorant Ranked' },
  { av: '🦊', name: 'ZorraVerde_MX', flag: '🇲🇽', ch: 'Free Fire MX' },
  { av: '⚡', name: 'ProGamer_Pe', flag: '🇵🇪', ch: 'General LATAM' },
  { av: '🎯', name: 'LatinSniper99', flag: '🇨🇴', ch: 'Valorant Ranked' },
  { av: '🐺', name: 'ShadowWolf_MX', flag: '🇲🇽', ch: 'Free Fire MX' },
]

const HEATMAP = ['','l1','l2','l3','l4','l2','l1','','l3','l4','l2','l1','l2','l3','l1','','l4','l2','l1','l3','','l2','l4','l1','l1','','l2','l3','l1','l4','','l2','l3','l1','l2','','l3','l4','l2','l1','','l3','l2','l4','l1','l2','','l1']
const heatColor = { '': '#1a1a24', l1: '#1db95430', l2: '#1db95460', l3: '#1db95490', l4: '#1db954' }

function Profile() {
  const [tab, setTab] = useState('activity')

  return (
    <div className="flex h-screen bg-[#111116] text-[#e8e8f0] overflow-hidden">

      <NavBar />

      <div className="w-[260px] bg-[#0e0e14] border-r border-[#1e1e28] flex flex-col flex-shrink-0 overflow-y-auto">
        <div className="h-20 relative flex-shrink-0" style={{ background: 'linear-gradient(135deg, #0d2818, #0a1a22, #1a0d22)' }}>
          <div className="absolute bottom-[-22px] left-5">
            <div className="w-14 h-14 rounded-full bg-[#1e1e2c] border-[3px] border-[#0e0e14] flex items-center justify-center text-3xl relative">
              🐉
              <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#1db954] rounded-full border-2 border-[#0e0e14]"></div>
            </div>
          </div>
        </div>
        <div className="px-5 pt-9 pb-5 border-b border-[#1e1e28]">
          <div className="text-base font-black text-[#e8e8f0] mb-1">XxDragonKillerxX</div>
          <div className="text-xs text-[#44444e] mb-3">@dragonkiller · 🇲🇽 México</div>
          <div className="text-xs text-[#55556a] leading-relaxed">Gamer desde los 12. Free Fire main, Valorant en ratos. Siempre buscando squad para rankear 🔥</div>
        </div>
        <div className="grid grid-cols-3 border-b border-[#1e1e28]">
          {[{ val: '342', label: 'Horas' }, { val: '87', label: 'Amigos' }, { val: '18', label: 'Canales' }].map((s, i) => (
            <div key={i} className={`py-4 text-center ${i < 2 ? 'border-r border-[#1e1e28]' : ''}`}>
              <div className="text-lg font-black text-[#e8e8f0]">{s.val}</div>
              <div className="text-[10px] text-[#33333e] mt-1 font-semibold">{s.label}</div>
            </div>
          ))}
        </div>
        <button className="mx-5 my-4 py-2.5 rounded-lg border border-[#1e1e28] text-xs font-semibold text-[#55556a] hover:border-[#2a2a38] hover:text-[#e8e8f0] hover:bg-[#141418] transition-all">
          ✏️ Editar perfil
        </button>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex border-b border-[#1e1e28] px-6 bg-[#0e0e14] flex-shrink-0">
          {[{ id: 'activity', label: 'Actividad' }, { id: 'friends', label: 'Amigos' }].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`py-4 px-4 text-sm font-semibold border-b-2 transition-all mr-2 ${tab === t.id ? 'text-[#e8e8f0] border-[#1db954]' : 'text-[#44444e] border-transparent hover:text-[#8888a0]'}`}>
              {t.label}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {tab === 'activity' ? (
            <>
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-[#0e0e14] border border-[#1db95430] rounded-xl p-4">
                  <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-2">Horas este mes</div>
                  <div className="text-2xl font-black text-[#1db954]">38h</div>
                  <div className="text-xs text-[#44444e] mt-1">+12% vs mes anterior</div>
                </div>
                <div className="bg-[#0e0e14] border border-[#1e1e28] rounded-xl p-4">
                  <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-2">Canal favorito</div>
                  <div className="text-lg font-black text-[#e8e8f0]">🔥 Free Fire</div>
                  <div className="text-xs text-[#44444e] mt-1">24h este mes</div>
                </div>
                <div className="bg-[#0e0e14] border border-[#1e1e28] rounded-xl p-4">
                  <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-2">Racha actual</div>
                  <div className="text-2xl font-black text-[#e8e8f0]">7 días</div>
                  <div className="text-xs text-[#44444e] mt-1">Récord: 21 días</div>
                </div>
              </div>
              <div className="text-[10px] font-bold text-[#44444e] tracking-widest uppercase mb-3">Actividad reciente</div>
              {ACTIVITY.map((a, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#0e0e14] border border-[#1e1e28] rounded-xl mb-2 hover:border-[#2a2a38] transition-colors">
                  <div className="w-9 h-9 bg-[#141418] rounded-lg flex items-center justify-center text-lg flex-shrink-0">{a.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#c0c0d8]">{a.name}</div>
                    <div className="text-xs text-[#33333e] mt-0.5">{a.sub}</div>
                  </div>
                  <div className="text-xs text-[#2a2a38]">{a.time}</div>
                </div>
              ))}
              <div className="text-[10px] font-bold text-[#44444e] tracking-widest uppercase mt-5 mb-3">Historial de conexión</div>
              <div className="grid gap-1" style={{ gridTemplateColumns: 'repeat(12, 1fr)' }}>
                {HEATMAP.map((lvl, i) => (
                  <div key={i} className="h-3.5 rounded-sm" style={{ background: heatColor[lvl] }}></div>
                ))}
              </div>
              <div className="text-[10px] text-[#22222a] mt-2">Últimas 4 semanas</div>
            </>
          ) : (
            <>
              <div className="text-[10px] font-bold text-[#44444e] tracking-widest uppercase mb-3">Amigos en línea — {FRIENDS.length}</div>
              {FRIENDS.map((f, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#0e0e14] border border-[#1e1e28] rounded-xl mb-2 hover:border-[#2a2a38] transition-colors">
                  <div className="w-10 h-10 rounded-full border-2 border-[#1db95440] flex items-center justify-center text-xl flex-shrink-0">{f.av}</div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-[#c0c0d8]">{f.name} {f.flag}</div>
                    <div className="text-xs text-[#33333e] mt-0.5">En {f.ch}</div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        <div className="mx-6 mb-4 border border-dashed border-[#1e1e28] rounded-xl px-4 py-2 flex items-center justify-between bg-[#0c0c10] flex-shrink-0">
          <div>
            <div className="text-[9px] font-bold text-[#22222a] tracking-widest uppercase">Publicidad</div>
            <div className="text-xs text-[#2a2a38] mt-0.5">Banner AdSense — perfil</div>
          </div>
          <div className="text-[10px] text-[#1e1e28] font-bold">728×90</div>
        </div>
      </div>

    </div>
  )
}

export default Profile