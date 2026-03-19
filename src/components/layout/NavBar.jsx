import { useNavigate, useLocation } from 'react-router-dom'

function NavBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const items = [
    { icon: '🎙', path: '/dashboard' },
    { icon: '🔍', path: '/explore' },
    { icon: '👥', path: '/friends' },
  ]

  return (
    <div className="w-[72px] bg-[#0c0c10] border-r border-[#1e1e28] flex flex-col items-center py-5 gap-2 flex-shrink-0 relative z-10">
      <div
        onClick={() => navigate('/')}
        className="w-10 h-10 bg-white rounded-xl flex items-center justify-center font-black text-black text-xs mb-3 cursor-pointer hover:opacity-90 transition-opacity"
      >
        LG
      </div>

      {items.map((item, i) => (
        <div
          key={i}
          onClick={() => navigate(item.path)}
          className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg cursor-pointer transition-all hover:bg-[#1e1e28] ${
            location.pathname === item.path
              ? 'bg-[#1e1e28] text-white'
              : 'text-[#555568]'
          }`}
        >
          {item.icon}
        </div>
      ))}

      <div className="w-8 h-px bg-[#1e1e28] my-2"></div>

      <div className="w-11 h-11 rounded-xl flex items-center justify-center text-lg cursor-pointer transition-all hover:bg-[#1e1e28] text-[#555568]">
        🔔
      </div>
      <div
        onClick={() => navigate('/settings')}
        className="w-11 h-11 rounded-xl flex items-center justify-center text-lg cursor-pointer transition-all hover:bg-[#1e1e28] text-[#555568]"
      >
        ⚙️
      </div>
      <div
        onClick={() => navigate('/profile')}
        className="mt-auto w-[38px] h-[38px] rounded-full bg-[#1db95430] border-2 border-[#1db954] flex items-center justify-center text-lg cursor-pointer"
      >
        😤
      </div>
    </div>
  )
}

export default NavBar