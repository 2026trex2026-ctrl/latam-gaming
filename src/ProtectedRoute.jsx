import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from './supabase'

function ProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if (session === undefined) return (
    <div className="min-h-screen bg-[#111116] flex items-center justify-center">
      <div className="text-[#1db954] text-sm">Cargando...</div>
    </div>
  )

  if (!session) return <Navigate to="/login" replace />

  return children
}

export default ProtectedRoute