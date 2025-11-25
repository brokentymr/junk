import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import VideoOnePage from './pages/VideoOnePage'
import QuantMarketplace from './pages/QuantMarketplace'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/video-1" replace />} />
        <Route path="/video-1" element={<VideoOnePage />} />
        <Route path="/marketplace" element={<QuantMarketplace />} />
      </Routes>
    </Router>
  )
}

export default App

