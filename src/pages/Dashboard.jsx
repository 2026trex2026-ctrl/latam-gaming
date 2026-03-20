import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../components/layout/NavBar'
import { LiveKitRoom, RoomAudioRenderer } from '@livekit/components-react'
import '@livekit/components-styles'
import { supabase } from '../supabase'

const CHANNELS = [
  { id: 1, icon: '🌎', name: 'General LATAM', bg: '#0d2010', sub: 'Canal general para toda la comunidad', users: 12 },
  { id: 2, icon: '🔥', name: 'Free Fire MX', bg: '#201008', sub: 'Canal Free Fire para México', users: 8 },
  { id: 3, icon: '🟣', name: 'Valorant Ranked', bg: '#180820', sub: 'Canal competitivo de Valorant', users: 5 },
  { id: 4, icon: '🔵', name: 'League of Legends', bg: '#0a1020', sub: 'Canal LoL para LATAM', users: 3 },
  { id: 5, icon: '🎮', name: 'Gaming General AR', bg: '#0e0e14', sub: 'Canal general Argentina', users: 4 },
]

const USERS = [
  { id: 1, av: '🐉', name: 'XxDragonKillerxX', country: '🇲🇽', talking: true, muted: false },
  { id: 2, av: '👑', name: 'ReyCatrino', country: '🇦🇷', talking: true, muted: false },
  { id: 3, av: '🥷', name: 'NinjaRoja', country: '🇨🇱', talking: true, muted: false },
  { id: 4, av: '🦊', name: 'ZorraVerde_MX', country: '🇲🇽', talking: true, muted: false },
  { id: 5, av: '🎯', name: 'LatinSniper99', country: '🇨🇴', talking: false, muted: true },
  { id: 6, av: '⚡', name: 'ProGamer_Pe', country: '🇵🇪', talking: false, muted: true },
  { id: 7, av: '🐺', name: 'ShadowWolf_MX', country: '🇲🇽', talking: false, muted: false },
]

const GAMES = [
  { name: 'Free Fire', pct: 82 },
  { name: 'Valorant', pct: 61 },
  { name: 'League', pct: 44 },
  { name: 'Gaming General', pct: 35 },
]

const LIVEKIT_URL = 'wss://lg-j90di068.livekit.cloud'

const getToken = async (room, username) => {
  const res = await fetch('https://latam-gaming-production-1d53.up.railway.app/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ room, username })
  })
  const data = await res.json()
  return data.token
}

function WaveIcon() {
  return (
    <div className="flex items-center gap-[2px] h-4">
      {[0, 1, 2, 3].map(i => (
        <div key={i} className="w-[3px] bg-[#1db954] rounded-sm"
          style={{ height: '100%', animation: `wave 0.7s ease-in-out infinite`, animationDelay: `${i * 0.15}s` }} />
      ))}
      <style>{`@keyframes wave { 0%, 100% { transform: scaleY(0.3); } 50% { transform: scaleY(1); } }`}</style>
    </div>
  )
}

function Dashboard() {
  const navigate = useNavigate()
  const [activeChannel, setActiveChannel] = useState(1)
  const [mic, setMic] = useState(true)
  const [ear, setEar] = useState(true)
  const [joined, setJoined] = useState(false)
  const [token, setToken] = useState(null)
  const [connecting, setConnecting] = useState(false)

  const ch = CHANNELS.find(c => c.id === activeChannel)
  const talking = USERS.filter(u => u.talking)
  const listening = USERS.filter(u => !u.talking)

  const handleJoin = async () => {
    if (joined) {
      setJoined(false)
      setToken(null)
      return
    }
    setConnecting(true)
    try {
      const roomName = ch.name.toLowerCase().replace(/ /g, '-')
      const t = await getToken(roomName, 'TuNombre_MX_' + Math.random().toString(36).substr(2, 5))
      setToken(t)
      setJoined(true)
    } catch (e) {
      alert('Error al conectar al canal')
    }
    setConnecting(false)
  }

  return (
    <div className="flex h-screen bg-[#111116] text-[#e8e8f0] overflow-hidden">

      <NavBar />

      <div className="w-[230px] bg-[#111116] border-r border-[#1e1e28] flex flex-col flex-shrink-0">
        <div className="px-4 py-5 border-b border-[#1e1e28]">
          <div className="text-sm font-black text-[#e8e8f0]">LATAM Gaming</div>
          <div className="text-xs text-[#44444e] mt-1">Comunidad gamer latinoamericana</div>
        </div>
        <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase px-4 pt-4 pb-2">Canales de voz</div>
        <div className="flex-1 overflow-y-auto pb-2">
          {CHANNELS.map(ch => (
            <div key={ch.id} onClick={() => setActiveChannel(ch.id)}
              className={`flex items-center gap-3 px-3 mx-2 py-2 rounded-lg cursor-pointer transition-all mb-1 ${activeChannel === ch.id ? 'bg-[#1e1e2c]' : 'hover:bg-[#1a1a24]'}`}>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0" style={{ background: ch.bg }}>{ch.icon}</div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-medium truncate ${activeChannel === ch.id ? 'text-[#e8e8f0] font-semibold' : 'text-[#55556a]'}`}>{ch.name}</div>
              </div>
              <div className={`text-xs px-2 py-0.5 rounded-full ${activeChannel === ch.id ? 'bg-[#252534] text-[#8888a0]' : 'bg-[#1a1a24] text-[#33333e]'}`}>{ch.users}</div>
            </div>
          ))}
        </div>
        <div className="border-t border-[#1e1e28] p-3 bg-[#0e0e14]">
          <div className="flex items-center gap-2 mb-2">
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg-[#1a1a2c] flex items-center justify-center text-base">😤</div>
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#1db954] rounded-full border-2 border-[#0e0e14]"></div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-[#c0c0d8] truncate">TuNombre_MX</div>
              <div className="text-[10px] text-[#33333e]">En línea</div>
            </div>
          </div>
          <div className="flex gap-1.5">
            {[
              { icon: mic ? '🎤' : '🔇', active: !mic, action: () => setMic(!mic) },
              { icon: ear ? '🎧' : '🔕', active: !ear, action: () => setEar(!ear) },
            ].map((btn, i) => (
              <button key={i} onClick={btn.action} className={`w-7 h-7 rounded-lg border flex items-center justify-center text-xs transition-all ${btn.active ? 'bg-[#2a1010] border-[#e0555530]' : 'bg-[#0c0c10] border-[#1e1e28] hover:bg-[#1e1e2c]'}`}>
                {btn.icon}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        <div className="px-6 py-4 border-b border-[#1e1e28] flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xl">{ch?.icon}</span>
            <div>
              <div className="text-base font-bold text-[#e8e8f0]">{ch?.name}</div>
              <div className="text-xs text-[#33333e] mt-0.5">{ch?.sub}</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#1db954] bg-[#1db95415] border border-[#1db95430] px-3 py-1 rounded-full">● En vivo</span>
            <span className="text-xs text-[#55556a] bg-[#1e1e2c] border border-[#2a2a38] px-3 py-1 rounded-full">{ch?.users} conectados</span>
            <button onClick={handleJoin}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 ${joined ? 'bg-[#2a1010] text-[#e05555] border border-[#e0555530]' : 'bg-[#1db954] text-black'}`}>
              {joined ? 'Salir' : connecting ? 'Conectando...' : 'Unirse'}
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-0 py-4">
          <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase px-6 pb-3">Hablando ahora</div>
          {talking.map(u => (
            <div key={u.id} className="flex items-center gap-4 px-6 py-2.5 hover:bg-[#141418] transition-colors cursor-default bg-[#111a13]">
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#1e1e2c] flex items-center justify-center text-xl border-2 border-[#1db954]">{u.av}</div>
                <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-[#1db954] rounded-full border-2 border-[#111116]"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#e8e8f0] truncate">{u.name}</div>
                <div className="text-xs text-[#44444e] mt-0.5">{u.country}</div>
              </div>
              <WaveIcon />
            </div>
          ))}
          <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase px-6 py-3 mt-2">Escuchando</div>
          {listening.map(u => (
            <div key={u.id} className="flex items-center gap-4 px-6 py-2.5 hover:bg-[#141418] transition-colors cursor-default">
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 rounded-full bg-[#1e1e2c] flex items-center justify-center text-xl border-2 border-transparent opacity-60">{u.av}</div>
                <div className="absolute bottom-0.5 right-0.5 w-2.5 h-2.5 bg-[#1db954] rounded-full border-2 border-[#111116]"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#8888a0] truncate">{u.name}</div>
                <div className="text-xs text-[#33333e] mt-0.5">{u.country}</div>
              </div>
              <span className="text-sm">{u.muted ? '🔇' : '🎧'}</span>
            </div>
          ))}
        </div>

        <div className="mx-6 mb-4 border border-dashed border-[#1e1e28] rounded-xl px-4 py-2 flex items-center justify-between bg-[#0c0c10] flex-shrink-0">
          <div>
            <div className="text-[9px] font-bold text-[#22222a] tracking-widest uppercase">Publicidad</div>
            <div className="text-xs text-[#2a2a38] mt-0.5">Banner AdSense horizontal</div>
          </div>
          <div className="text-[10px] text-[#1e1e28] font-bold">728×90</div>
        </div>

        <div className="px-6 py-3 border-t border-[#1e1e28] flex items-center gap-2 bg-[#0e0e14] flex-shrink-0">
          {[
            { icon: mic ? '🎤' : '🔇', active: !mic, action: () => setMic(!mic), label: 'Micrófono' },
            { icon: ear ? '🎧' : '🔕', active: !ear, action: () => setEar(!ear), label: 'Audio' },
            { icon: '🖥', active: false, action: () => {}, label: 'Pantalla' },
            { icon: '⚙️', active: false, action: () => navigate('/settings'), label: 'Config' },
            { icon: '🚪', active: false, action: async () => { await supabase.auth.signOut(); navigate('/login') }, label: 'Salir' },
          ].map((btn, i) => (
            <button key={i} onClick={btn.action} title={btn.label}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center text-base transition-all hover:border-[#2a2a38] ${btn.active ? 'bg-[#2a1010] border-[#e0555530]' : 'bg-[#161620] border-[#1e1e28] hover:bg-[#1e1e2c]'}`}>
              {btn.icon}
            </button>
          ))}
          <div className="ml-auto text-xs text-[#33333e]">Latencia: <span className="text-[#1db954] font-bold">23ms</span></div>
        </div>
      </div>

      <div className="w-[190px] bg-[#0e0e14] border-l border-[#1e1e28] flex flex-col flex-shrink-0">
        <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase px-4 py-5 border-b border-[#1e1e28]">Estadísticas</div>
        <div className="px-4 py-4 border-b border-[#1e1e28]">
          <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-1">En línea</div>
          <div className="text-3xl font-black text-[#e8e8f0]">247</div>
          <div className="text-xs text-[#33333e] mt-1">+18 última hora</div>
        </div>
        <div className="px-4 py-4 border-b border-[#1e1e28]">
          <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-1">En voz</div>
          <div className="text-3xl font-black text-[#e8e8f0]">38</div>
          <div className="text-xs text-[#33333e] mt-1">5 canales activos</div>
        </div>
        <div className="px-4 py-4 flex-1">
          <div className="text-[10px] font-bold text-[#33333e] tracking-widest uppercase mb-3">Top juegos</div>
          {GAMES.map((g, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-xs text-[#44444e] mb-1">
                <span>{g.name}</span>
                <span className="text-[#55556a] font-semibold">{g.pct}%</span>
              </div>
              <div className="h-1 bg-[#1a1a24] rounded-full">
                <div className="h-full bg-[#1db954] rounded-full" style={{ width: `${g.pct}%`, opacity: 1 - i * 0.15 }}></div>
              </div>
            </div>
          ))}
        </div>
        <div className="mx-3 mb-3 border border-dashed border-[#1e1e28] rounded-xl p-3 bg-[#0c0c10] text-center">
          <div className="text-[9px] font-bold text-[#22222a] tracking-widest uppercase mb-1">Publicidad</div>
          <div className="text-[10px] text-[#2a2a38]">AdSense vertical<br />160×600</div>
        </div>
      </div>

      {joined && token && (
        <LiveKitRoom
          token={token}
          serverUrl={LIVEKIT_URL}
          audio={mic}
          video={false}
          onDisconnected={() => { setJoined(false); setToken(null) }}
        >
          <RoomAudioRenderer />
        </LiveKitRoom>
      )}

    </div>
  )
}

export default Dashboard