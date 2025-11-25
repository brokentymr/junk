import '../styles/globals.css'

function StrategyCard({ strategy, onClick }) {
  const IconComponent = strategy.icon
  
  return (
    <div className="strategy-card" onClick={onClick}>
      <div className="strategy-card-thumbnail">
        <div className="wireframe-animation">
          <svg className="wireframe-chart" viewBox="0 0 200 80" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`gradient-${strategy.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 215, 0, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 215, 0, 0)" />
              </linearGradient>
            </defs>
            <path 
              d={strategy.chartPath} 
              fill={`url(#gradient-${strategy.id})`}
              className="chart-area"
            />
            <path 
              d={strategy.chartPath} 
              fill="none"
              stroke="var(--accent-yellow)"
              strokeWidth="2"
              className="chart-line"
            />
            {strategy.chartDots && strategy.chartDots.map((dot, i) => (
              <circle
                key={i}
                cx={dot.x}
                cy={dot.y}
                r="3"
                fill="var(--accent-yellow)"
                className="chart-dot"
              />
            ))}
          </svg>
          <div className="wireframe-overlay">
            <div className="wireframe-icon">
              <IconComponent />
            </div>
          </div>
        </div>
      </div>
      
      <div className="strategy-card-content">
        <div className="strategy-card-header">
          <div className="strategy-icon-wrapper">
            <IconComponent />
          </div>
          <div className="strategy-card-title-section">
            <h3 className="strategy-name">{strategy.name}</h3>
            <p className="strategy-description">{strategy.description}</p>
          </div>
        </div>
        
        <div className="strategy-card-stats">
          <div className="strategy-stat">
            <span className="stat-label">Win Rate</span>
            <span className={`stat-value ${strategy.winRate >= 50 ? 'positive' : 'negative'}`}>
              {strategy.winRate}%
            </span>
          </div>
          <div className="strategy-stat">
            <span className="stat-label">APR</span>
            <span className="stat-value positive">{strategy.apr}%</span>
          </div>
          <div className="strategy-stat">
            <span className="stat-label">Trades</span>
            <span className="stat-value">{strategy.trades}</span>
          </div>
        </div>
        
        <div className="strategy-card-footer">
          <span className="strategy-type">{strategy.type}</span>
          <span className="strategy-arrow">→</span>
        </div>
      </div>
    </div>
  )
}

export default StrategyCard

