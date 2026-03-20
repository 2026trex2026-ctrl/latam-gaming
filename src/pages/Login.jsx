import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

function Login() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async () => {
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    } else {
      navigate('/dashboard')
    }
    setLoading(false)
  }

  const handleRegister = async () => {
    if (!username) { setError('Necesitás un nombre de usuario'); return }
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { username } }
    })
    if (error) {
      setError(error.message)
    } else {
      navigate('/dashboard')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-[#111116] flex">

      {/* LEFT - BRANDING */}
      <div className="flex-1 bg-[#0c0c10] border-r border-[#1e1e28] flex flex-col justify-between p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,#1db95410,transparent)]"></div>

        <div onClick={() => navigate('/')} className="flex items-center gap-3 relative z-10 cursor-pointer">
          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black text-sm">LG</div>
          <div>
            <div className="text-lg font-black text-[#e8e8f0]">LATAM Gaming</div>
            <div className="text-[10px] text-[#44444e] tracking-widest uppercase">LATAM Edition</div>
          </div>
        </div>

        <div className="relative z-10">
          <div className="text-4xl font-black text-[#e8e8f0] leading-tight mb-4">
            Habla con<br />gamers de<br /><span className="text-[#1db954]">toda LATAM</span>
          </div>
          <div className="text-sm text-[#55556a] leading-relaxed max-w-xs">
            Canales de voz en tiempo real para la comunidad gamer latinoamericana. Sin lag, sin barreras.
          </div>
        </div>

        <div className="flex gap-8 relative z-10">
          {[
            { val: '247', label: 'En línea ahora' },
            { val: '12', label: 'Canales activos' },
            { val: '8', label: 'Países' },
          ].map((s, i) => (
            <div key={i}>
              <div className="text-2xl font-black text-[#e8e8f0]">{s.val}</div>
              <div className="text-xs text-[#44444e] mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT - FORM */}
      <div className="w-96 flex flex-col justify-center px-10 flex-shrink-0">

        <div className="flex bg-[#0c0c10] border border-[#1e1e28] rounded-xl p-1 mb-7">
          <button onClick={() => { setTab('login'); setError('') }}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${tab === 'login' ? 'bg-[#1e1e2c] text-[#e8e8f0]' : 'text-[#44444e] hover:text-[#8888a0]'}`}>
            Iniciar sesión
          </button>
          <button onClick={() => { setTab('register'); setError('') }}
            className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${tab === 'register' ? 'bg-[#1e1e2c] text-[#e8e8f0]' : 'text-[#44444e] hover:text-[#8888a0]'}`}>
            Registrarse
          </button>
        </div>

        {error && (
          <div className="bg-[#2a1010] border border-[#e0555530] rounded-xl px-4 py-3 text-sm text-[#e05555] mb-4">
            {error}
          </div>
        )}

        {tab === 'login' ? (
          <div>
            <div className="text-xl font-black text-[#e8e8f0] mb-1">Bienvenido de vuelta</div>
            <div className="text-sm text-[#44444e] mb-6">Ingresá a tu cuenta para continuar</div>

            <div className="mb-4">
              <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Correo electrónico</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@correo.com"
                className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] placeholder-[#33333e] outline-none focus:border-[#1db95460] transition-colors" />
            </div>
            <div className="mb-2">
              <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Contraseña</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••"
                className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] placeholder-[#33333e] outline-none focus:border-[#1db95460] transition-colors" />
            </div>
            <div className="text-xs text-[#1db954] text-right mb-6 cursor-pointer">¿Olvidaste tu contraseña?</div>

            <button onClick={handleLogin} disabled={loading}
              className="w-full bg-[#1db954] text-black font-bold py-3 rounded-xl hover:bg-[#1ed760] transition-all hover:scale-[1.01] mb-5 disabled:opacity-50">
              {loading ? 'Entrando...' : 'Entrar a LATAM Gaming'}
            </button>

            <div className="text-xs text-[#33333e] text-center">
              ¿No tenés cuenta? <span onClick={() => setTab('register')} className="text-[#1db954] cursor-pointer">Registrate gratis</span>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-xl font-black text-[#e8e8f0] mb-1">Crear cuenta</div>
            <div className="text-sm text-[#44444e] mb-6">Gratis para siempre</div>

            <div className="mb-4">
              <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Nombre de usuario</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="XxDragonKillerxX"
                className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] placeholder-[#33333e] outline-none focus:border-[#1db95460] transition-colors" />
            </div>
            <div className="mb-4">
              <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Correo electrónico</label>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="tu@correo.com"
                className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] placeholder-[#33333e] outline-none focus:border-[#1db95460] transition-colors" />
            </div>
            <div className="mb-5">
              <label className="block text-[10px] font-bold text-[#55556a] tracking-widest uppercase mb-2">Contraseña</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mínimo 6 caracteres"
                className="w-full bg-[#0c0c10] border border-[#1e1e28] rounded-xl px-4 py-3 text-sm text-[#e8e8f0] placeholder-[#33333e] outline-none focus:border-[#1db95460] transition-colors" />
            </div>

            <button onClick={handleRegister} disabled={loading}
              className="w-full bg-[#1db954] text-black font-bold py-3 rounded-xl hover:bg-[#1ed760] transition-all hover:scale-[1.01] mb-5 disabled:opacity-50">
              {loading ? 'Creando cuenta...' : 'Crear mi cuenta'}
            </button>

            <div className="text-xs text-[#33333e] text-center">
              ¿Ya tenés cuenta? <span onClick={() => setTab('login')} className="text-[#1db954] cursor-pointer">Iniciá sesión</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Login