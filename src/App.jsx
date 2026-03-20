import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Explore from './pages/Explore'
import Friends from './pages/Friends'
import Settings from './pages/Settings'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/explore" element={<ProtectedRoute><Explore /></ProtectedRoute>} />
        <Route path="/friends" element={<ProtectedRoute><Friends /></ProtectedRoute>} />
        <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App