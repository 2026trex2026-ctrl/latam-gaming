import { useState } from 'react'
import NavBar from '../components/layout/NavBar'

function Toggle({ value, onChange }) {
  return (
    <div
      onClick={() => onChange(!value)}
      className={`w-10 h-5 rounded-full cursor-pointer transition-all flex-shrink-0 flex items-center px-0.5 ${value ? 'bg-[#1db954]' : 'bg-[#2a2a38]'}`}
    >
      <div className={`w-4 h-4 rounded-full bg-white transition-all ${value ? 'translate-x-5' : 'translate-x-0'}`} />
    </div>
  )
}

function Settings() {
  const [section, setSection] = useState('perfil')

  // Perfil
  const [username, setUsername] = useState('XxDragonKillerxX')
  const [bio, setBio] = useState('Gamer desde los 12. Free Fire main, Valorant en ratos. Siempre buscando squad para rankear 🔥')
  const [country, setCountry] = useState('mx')

  // Cuenta
  const [email, setEmail] = useState('dragon@gmail.com')
  const [twofa, setTwofa] = useState(false)

  // Privacidad
  const [profilePublic, setProfilePublic] = useState(true)
  const [friendRequests, setFriendRequests] = useState(true)
  const [showActivity, setShowActivity] = useState(true)

  // Voz
  const [noiseSuppression, setNoiseSuppression] = useState(true)
  const [echoCancellation, setEchoCancellation] = useState(true)
  const [autoGain, setAutoGain] = useState(false)
  const [inputVol, setInputVol] = useState(80)
  const [outputVol, setOutputVol] = useState(90)

  // Notificaciones
  const [notifFriends, setNotifFriends] = useState(true)
  const [notifChannels, setNotifChannels] = useState(false)
  const [notifRequests, setNotifRequests] = useState(true)
  const [notifSystem, setNotifSystem] = useState(true)

  // Apariencia
  const [darkMode, setDarkMode] = useState(true)
  const [animations, setAnimations] = useState(true)
  const [compactMode, setCompactMode] = useState(false)

  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  const menu = [
    { id: 'perfil', icon: '👤', label: 'Perfil' },
    { id: 'cuenta', icon: '🔐', label: 'Cuenta y seguridad' },
    { id: 'privacidad', icon: '🛡', label: 'Privacidad' },
    { id: 'voz', icon: '🎙', label: 'Voz y audio' },
    { id: 'notif', icon: '🔔', label: 'Notificaciones' },
    { id: 'apariencia', icon: '🎨', label: 'Apariencia' },
  ]

  return (
    <div className="flex h-screen bg-[#111116] text-[#e8e8f0] overflow-hidden">

      <NavBar />

      {/* SETTINGS SIDEBAR */}
      <div className="w-[220px] bg-[#0e0e14] border-r border-[#1e1e28] flex flex-col flex-shrink-0">
        <div className="px-4 py-5 border-b border-[#1e1e28]">
          <div className="text-sm font-black text-[#e8e8f0]">Configuración</div>
          <div className="text-xs text-[#44444e] mt-1">Ajustá tu cuenta</div>
        </div>

        <div className="flex-1 overflow-y-auto py-3">
          {menu.map(item => (
            <div
              key={item.id}
              onClick={() => setSection(item.id)}
              className={`flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg cursor-pointer transition-all mb-0.5 ${
                section === item.id
                  ? 'bg-[#1e1e2c] text-[#e8e8f0]'
                  : 'text-[#55556a] hover:bg-[#1a1a24] hover:text-[#8888a0]'
              }`}
            >
              <span className="text-base">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}

          <div className="mx-2 mt-4 pt-4 border-t border-[#1e1e28]">
            <div
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer text-[#e05555] hover:bg-[#2a1010] transition-all"
            >
              <span className="text-base">🚪</span>
              <span className="text-sm font-medium">Cerrar sesión</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* TOPBAR */}
        <div className="px-6 py-4 border-b border-[#1e1e28] bg-[#0e0e14] flex items-center justify-between flex-shrink-0">
          <div>
            <div className="text-base font-black text-[#e8e8f0]">{menu.find(m => m.id === section)?.label}</div>
            <div className="text-xs text-[#33333e] mt-0.5">Cambios guardados automáticamente</div>
          </div>
          <button
            onClick={handleSave}
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 ${
              saved
                ? 'bg-[#1db95420] text-[#1db954] border border-[#1db95440]'
                : 'bg-[#1db954] text-black hover:bg-[#1ed760]'
            }`}
          >
            {saved ? '✓ Guardado' : 'Guardar cambios'}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {/* PERFIL */}
          {section === 'perfil' && (
            <div className="max-w-xl">
              <div className="flex items-center gap-5 mb-8 p-5 bg-[#0e0e14] border border-[#1e1e28] rounded-xl">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#1e1e2c] flex items-center justify-center text-3xl border-2 border-[#1db95440]">🐉</div>
                  <button className="absolute bottom-0 right-0 w-6 h-6 bg-[#1db954] rounded-full flex items-center justify-center text-xs text-black font-bold border-2 border-[#0e0e14]">+</button>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#e8e8f0] mb-1">Foto de perfil</div>
                  <div className="text-xs text-[#44444e] mb-2">JPG, PNG o GIF. Máximo 5MB.</div>
                  <button className="text-xs font-semibold text-[#1db954] border border-[#1db95430] px-3 py-1.5 rounded-lg hover:bg-[#1db95415] transition-all">
                    Cambiar avatar
                  </button>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Nombre de usuario</label>
                  <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] outline-none focus:border-[#1db95460] transition-colors"
                  />
                  <div className="text-[10px] text-[#33333e] mt-1.5">Solo letras, números y guiones bajos.</div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Descripción</label>
                  <textarea
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    rows={3}
                    className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] outline-none focus:border-[#1db95460] transition-colors resize-none"
                  />
                  <div className="text-[10px] text-[#33333e] mt-1.5">{bio.length}/150 caracteres</div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">País</label>
                  <select
                    value={country}
                    onChange={e => setCountry(e.target.value)}
                    className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] outline-none focus:border-[#1db95460] transition-colors"
                  >
                    <option value="mx">🇲🇽 México</option>
                    <option value="ar">🇦🇷 Argentina</option>
                    <option value="co">🇨🇴 Colombia</option>
                    <option value="cl">🇨🇱 Chile</option>
                    <option value="pe">🇵🇪 Perú</option>
                    <option value="ve">🇻🇪 Venezuela</option>
                    <option value="uy">🇺🇾 Uruguay</option>
                    <option value="other">🌎 Otro</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* CUENTA */}
          {section === 'cuenta' && (
            <div className="max-w-xl space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Correo electrónico</label>
                <div className="flex gap-3">
                  <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="flex-1 bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] outline-none focus:border-[#1db95460] transition-colors"
                  />
                  <button className="px-4 py-3 rounded-xl border border-[#1e1e28] text-sm font-semibold text-[#55556a] hover:border-[#2a2a38] hover:text-[#e8e8f0] transition-all">
                    Cambiar
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Contraseña</label>
                <button className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm font-semibold text-[#55556a] hover:border-[#2a2a38] hover:text-[#e8e8f0] transition-all text-left">
                  Cambiar contraseña →
                </button>
              </div>

              <div className="p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-[#e8e8f0] mb-1">Autenticación en dos pasos</div>
                  <div className="text-xs text-[#44444e]">Protege tu cuenta con un código adicional al iniciar sesión.</div>
                </div>
                <Toggle value={twofa} onChange={setTwofa} />
              </div>

              <div className="p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl">
                <div className="text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-3">Sesiones activas</div>
                {[
                  { device: 'Chrome — Windows', location: '🇲🇽 México', current: true },
                  { device: 'Firefox — Android', location: '🇲🇽 México', current: false },
                ].map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-2.5 border-b border-[#1a1a24] last:border-0">
                    <div>
                      <div className="text-sm font-medium text-[#c0c0d8]">{s.device}</div>
                      <div className="text-xs text-[#33333e] mt-0.5">{s.location} {s.current && <span className="text-[#1db954] ml-1">● Sesión actual</span>}</div>
                    </div>
                    {!s.current && (
                      <button className="text-xs text-[#e05555] border border-[#e0555530] px-3 py-1 rounded-lg hover:bg-[#2a1010] transition-all">
                        Cerrar
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-4 bg-[#0e0e14] border border-[#2a1010] rounded-xl">
                <div className="text-sm font-semibold text-[#e05555] mb-1">Zona de peligro</div>
                <div className="text-xs text-[#44444e] mb-3">Esta acción es irreversible. Se eliminarán todos tus datos.</div>
                <button className="text-xs font-bold text-[#e05555] border border-[#e0555530] px-4 py-2 rounded-lg hover:bg-[#2a1010] transition-all">
                  Eliminar mi cuenta
                </button>
              </div>
            </div>
          )}

          {/* PRIVACIDAD */}
          {section === 'privacidad' && (
            <div className="max-w-xl space-y-3">
              {[
                { label: 'Perfil público', desc: 'Cualquier usuario puede ver tu perfil y actividad.', value: profilePublic, onChange: setProfilePublic },
                { label: 'Recibir solicitudes de amistad', desc: 'Otros usuarios pueden enviarte solicitudes.', value: friendRequests, onChange: setFriendRequests },
                { label: 'Mostrar actividad reciente', desc: 'Otros pueden ver a qué canales te conectaste.', value: showActivity, onChange: setShowActivity },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-[#e8e8f0] mb-1">{item.label}</div>
                    <div className="text-xs text-[#44444e]">{item.desc}</div>
                  </div>
                  <Toggle value={item.value} onChange={item.onChange} />
                </div>
              ))}
            </div>
          )}

          {/* VOZ */}
          {section === 'voz' && (
            <div className="max-w-xl space-y-5">
              <div>
                <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-3">Volumen de entrada (micrófono)</label>
                <div className="flex items-center gap-4">
                  <span className="text-sm">🎤</span>
                  <input type="range" min={0} max={100} value={inputVol} onChange={e => setInputVol(Number(e.target.value))}
                    className="flex-1 accent-[#1db954]" />
                  <span className="text-sm font-bold text-[#e8e8f0] w-8 text-right">{inputVol}</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-3">Volumen de salida (auriculares)</label>
                <div className="flex items-center gap-4">
                  <span className="text-sm">🎧</span>
                  <input type="range" min={0} max={100} value={outputVol} onChange={e => setOutputVol(Number(e.target.value))}
                    className="flex-1 accent-[#1db954]" />
                  <span className="text-sm font-bold text-[#e8e8f0] w-8 text-right">{outputVol}</span>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: 'Supresión de ruido', desc: 'Elimina el ruido de fondo del micrófono.', value: noiseSuppression, onChange: setNoiseSuppression },
                  { label: 'Cancelación de eco', desc: 'Evita que el audio de los auriculares vuelva al micrófono.', value: echoCancellation, onChange: setEchoCancellation },
                  { label: 'Control automático de ganancia', desc: 'Ajusta el volumen del micrófono automáticamente.', value: autoGain, onChange: setAutoGain },
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-[#e8e8f0] mb-1">{item.label}</div>
                      <div className="text-xs text-[#44444e]">{item.desc}</div>
                    </div>
                    <Toggle value={item.value} onChange={item.onChange} />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* NOTIFICACIONES */}
          {section === 'notif' && (
            <div className="max-w-xl space-y-3">
              {[
                { label: 'Amigos se conectan', desc: 'Te avisa cuando un amigo entra a un canal de voz.', value: notifFriends, onChange: setNotifFriends },
                { label: 'Actividad en canales', desc: 'Notificaciones cuando hay mucha actividad en tus canales favoritos.', value: notifChannels, onChange: setNotifChannels },
                { label: 'Solicitudes de amistad', desc: 'Alguien quiere agregarte como amigo.', value: notifRequests, onChange: setNotifRequests },
                { label: 'Notificaciones del sistema', desc: 'Actualizaciones de la plataforma y avisos importantes.', value: notifSystem, onChange: setNotifSystem },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-[#e8e8f0] mb-1">{item.label}</div>
                    <div className="text-xs text-[#44444e]">{item.desc}</div>
                  </div>
                  <Toggle value={item.value} onChange={item.onChange} />
                </div>
              ))}
            </div>
          )}

          {/* APARIENCIA */}
          {section === 'apariencia' && (
            <div className="max-w-xl space-y-3">
              {[
                { label: 'Modo oscuro', desc: 'Interfaz oscura, más cómoda para sesiones largas.', value: darkMode, onChange: setDarkMode },
                { label: 'Animaciones', desc: 'Transiciones y efectos visuales en la interfaz.', value: animations, onChange: setAnimations },
                { label: 'Modo compacto', desc: 'Reduce el espaciado para ver más contenido en pantalla.', value: compactMode, onChange: setCompactMode },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-semibold text-[#e8e8f0] mb-1">{item.label}</div>
                    <div className="text-xs text-[#44444e]">{item.desc}</div>
                  </div>
                  <Toggle value={item.value} onChange={item.onChange} />
                </div>
              ))}

              <div className="p-4 bg-[#0e0e14] border border-[#1e1e28] rounded-xl">
                <div className="text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-3">Idioma</div>
                <select className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] outline-none focus:border-[#1db95460] transition-colors">
                  <option>🇪🇸 Español</option>
                  <option>🇺🇸 English</option>
                  <option>🇧🇷 Português</option>
                </select>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default Settings