import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Products from './pages/products/Products'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
