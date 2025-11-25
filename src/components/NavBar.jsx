import { Link, useLocation } from 'react-router-dom'
import '../styles/globals.css'

function NavBar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/video-1" className="navbar-logo">
          LFG
        </Link>
        <div className="navbar-links">
          <Link 
            to="/video-1" 
            className={`navbar-link ${location.pathname === '/video-1' ? 'active' : ''}`}
          >
            Overview
          </Link>
          <Link 
            to="/marketplace" 
            className={`navbar-link ${location.pathname === '/marketplace' ? 'active' : ''}`}
          >
            Marketplace
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

