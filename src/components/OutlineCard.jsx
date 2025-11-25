import '../styles/globals.css'

function OutlineCard({ title, body, thumbnail, script, isActive, animationType }) {
  return (
    <div className={`outline-card ${isActive ? 'card-active' : ''} animation-${animationType}`}>
      <div className="outline-card-thumbnail">
        <div className={`content-animation ${animationType}`}>
          {animationType === 'building-blocks' && (
            <div className="building-blocks-animation">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="block" style={{ '--delay': i * 0.15 + 's', '--x': (i % 3) * 33.33 + '%', '--y': Math.floor(i / 3) * 33.33 + '%' }}></div>
              ))}
            </div>
          )}
          
          {animationType === 'neural-network' && (
            <div className="neural-network-animation">
              <svg viewBox="0 0 200 150" className="neural-svg">
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const x = 100 + Math.cos(angle) * 50;
                  const y = 75 + Math.sin(angle) * 50;
                  return (
                    <g key={i}>
                      <line x1="100" y1="75" x2={x} y2={y} className="neural-connection" style={{ '--delay': i * 0.1 + 's' }} />
                      <circle cx={x} cy={y} r="6" className="neural-node" style={{ '--delay': i * 0.1 + 's' }} />
                    </g>
                  );
                })}
                <circle cx="100" cy="75" r="8" className="neural-node central" />
              </svg>
            </div>
          )}
          
          {animationType === 'trading-pairs' && (
            <div className="trading-pairs-animation">
              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2;
                return (
                  <div key={i} className="trading-pair" style={{ '--angle': angle + 'rad', '--delay': i * 0.2 + 's' }}>
                    <div className="pair-dot dot-1"></div>
                    <div className="pair-line"></div>
                    <div className="pair-dot dot-2"></div>
                  </div>
                );
              })}
            </div>
          )}
          
          {animationType === 'mobile-interface' && (
            <div className="mobile-interface-animation">
              <div className="mobile-screen">
                <div className="interface-element element-1"></div>
                <div className="interface-element element-2"></div>
                <div className="interface-element element-3"></div>
                <div className="interface-element element-4"></div>
                <div className="touch-indicator"></div>
              </div>
            </div>
          )}
          
          {animationType === 'vault-stacking' && (
            <div className="vault-stacking-animation">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="coin-stack" style={{ '--delay': i * 0.2 + 's', '--x': 20 + i * 15 + '%' }}></div>
              ))}
              <div className="value-glow"></div>
            </div>
          )}
          
          {animationType === 'money-flow' && (
            <div className="money-flow-animation">
              <svg viewBox="0 0 200 150" className="flow-svg">
                <path d="M 20,75 Q 50,30 100,75 T 180,75" className="flow-path" />
                <circle className="flow-coin coin-1" cx="20" cy="75" r="8" />
                <circle className="flow-coin coin-2" cx="100" cy="75" r="8" />
                <circle className="flow-coin coin-3" cx="180" cy="75" r="8" />
              </svg>
            </div>
          )}
          
          {animationType === 'network-ecosystem' && (
            <div className="network-ecosystem-animation">
              <svg viewBox="0 0 200 150" className="network-svg">
                {[...Array(12)].map((_, i) => {
                  const angle = (i / 12) * Math.PI * 2;
                  const x = 100 + Math.cos(angle) * 60;
                  const y = 75 + Math.sin(angle) * 60;
                  return (
                    <g key={i}>
                      {i % 3 === 0 && (
                        <line x1="100" y1="75" x2={x} y2={y} className="network-line" style={{ '--delay': i * 0.05 + 's' }} />
                      )}
                      <circle cx={x} cy={y} r="5" className="network-node" style={{ '--delay': i * 0.1 + 's' }} />
                    </g>
                  );
                })}
                <circle cx="100" cy="75" r="10" className="network-node central" />
              </svg>
            </div>
          )}
          
          {animationType === 'automation-waves' && (
            <div className="automation-waves-animation">
              <svg viewBox="0 0 200 150" className="waves-svg">
                <path d="M 0,75 Q 50,50 100,75 T 200,75" className="wave wave-1" />
                <path d="M 0,75 Q 50,100 100,75 T 200,75" className="wave wave-2" />
                <path d="M 0,75 Q 50,40 100,75 T 200,75" className="wave wave-3" />
                <circle className="automation-dot dot-1" cx="50" cy="75" r="4" />
                <circle className="automation-dot dot-2" cx="100" cy="75" r="4" />
                <circle className="automation-dot dot-3" cx="150" cy="75" r="4" />
              </svg>
            </div>
          )}
        </div>
      </div>
      
      <div className="outline-card-content">
        <h2 className="outline-card-title">
          <span className="title-text">{title}</span>
          <span className="title-glow"></span>
        </h2>
        <p className="outline-card-body">{body}</p>
        {script && (
          <div className="outline-card-script">
            <p className="script-label">Script:</p>
            <p className="script-text">{script}</p>
          </div>
        )}
      </div>
      {isActive && (
        <div className="card-energy-rings">
          <div className="energy-ring ring-1"></div>
          <div className="energy-ring ring-2"></div>
          <div className="energy-ring ring-3"></div>
        </div>
      )}
    </div>
  )
}

export default OutlineCard

