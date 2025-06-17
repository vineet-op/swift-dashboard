import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Profile from './components/Profile/Profile'
import Dashboard from './components/Dashboard/Dashboard'
import Notfound from './components/Notfound/Notfound'

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen w-screen bg-neutral-100 overflow-hidden'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
