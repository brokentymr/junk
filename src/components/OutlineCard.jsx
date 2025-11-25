import '../styles/globals.css'

function OutlineCard({ title, body, thumbnail, script, isActive, animationType }) {
  return (
    <div className={`outline-card ${isActive ? 'card-active' : ''} animation-${animationType}`}>
      <div className="outline-card-thumbnail">
        <div className={`content-animation ${animationType}`}>
          {animationType === 'building-blocks' && (
            <div className="visualizer-bars">
              {[...Array(32)].map((_, i) => (
                <div key={i} className="bar" style={{ '--delay': i * 0.05 + 's', '--index': i }}></div>
              ))}
            </div>
          )}
          
          {animationType === 'neural-network' && (
            <div className="visualizer-spectrum">
              <svg viewBox="0 0 200 150" className="spectrum-svg">
                <defs>
                  <linearGradient id="spectrumGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#ffd700" />
                    <stop offset="50%" stopColor="#ff6600" />
                    <stop offset="100%" stopColor="#ffd700" />
                  </linearGradient>
                </defs>
                {[...Array(40)].map((_, i) => {
                  const x = (i / 40) * 200;
                  const height = 20 + Math.sin(i * 0.5) * 30 + Math.random() * 20;
                  return (
                    <rect key={i} x={x} y={75 - height/2} width="4" height={height} fill="url(#spectrumGrad)" className="spectrum-bar" style={{ '--delay': i * 0.02 + 's' }} />
                  );
                })}
              </svg>
            </div>
          )}
          
          {animationType === 'trading-pairs' && (
            <div className="visualizer-oscilloscope">
              <svg viewBox="0 0 200 150" className="oscilloscope-svg">
                <path className="oscilloscope-line" d="M 0,75 Q 25,50 50,75 T 100,75 T 150,75 T 200,75" />
                <path className="oscilloscope-line line-2" d="M 0,75 Q 25,100 50,75 T 100,75 T 150,75 T 200,75" />
                <circle className="oscilloscope-dot" cx="50" cy="75" r="3" />
                <circle className="oscilloscope-dot" cx="100" cy="75" r="3" />
                <circle className="oscilloscope-dot" cx="150" cy="75" r="3" />
              </svg>
            </div>
          )}
          
          {animationType === 'mobile-interface' && (
            <div className="visualizer-particles">
              {[...Array(50)].map((_, i) => (
                <div key={i} className="particle" style={{ '--delay': i * 0.1 + 's', '--x': Math.random() * 100 + '%', '--y': Math.random() * 100 + '%' }}></div>
              ))}
            </div>
          )}
          
          {animationType === 'vault-stacking' && (
            <div className="visualizer-waterfall">
              <svg viewBox="0 0 200 150" className="waterfall-svg">
                {[...Array(20)].map((_, i) => {
                  const x = (i / 20) * 200;
                  const height = 10 + Math.sin(i * 0.8) * 40 + Math.random() * 30;
                  return (
                    <rect key={i} x={x} y={150 - height} width="8" height={height} fill="#ffd700" className="waterfall-bar" style={{ '--delay': i * 0.03 + 's' }} />
                  );
                })}
              </svg>
            </div>
          )}
          
          {animationType === 'money-flow' && (
            <div className="visualizer-waves">
              <svg viewBox="0 0 200 150" className="waves-svg">
                <path d="M 0,75 Q 25,50 50,75 T 100,75 T 150,75 T 200,75" className="wave-line wave-1" />
                <path d="M 0,75 Q 25,100 50,75 T 100,75 T 150,75 T 200,75" className="wave-line wave-2" />
                <path d="M 0,75 Q 25,60 50,75 T 100,75 T 150,75 T 200,75" className="wave-line wave-3" />
              </svg>
            </div>
          )}
          
          {animationType === 'network-ecosystem' && (
            <div className="visualizer-matrix">
              {[...Array(100)].map((_, i) => (
                <div key={i} className="matrix-char" style={{ '--delay': i * 0.05 + 's', '--x': (i % 20) * 5 + '%', '--y': Math.floor(i / 20) * 5 + '%' }}>1</div>
              ))}
            </div>
          )}
          
          {animationType === 'automation-waves' && (
            <div className="visualizer-circle">
              <svg viewBox="0 0 200 150" className="circle-svg">
                <circle cx="100" cy="75" r="40" className="circle-ring ring-1" />
                <circle cx="100" cy="75" r="50" className="circle-ring ring-2" />
                <circle cx="100" cy="75" r="60" className="circle-ring ring-3" />
                {[...Array(8)].map((_, i) => {
                  const angle = (i / 8) * Math.PI * 2;
                  const x = 100 + Math.cos(angle) * 50;
                  const y = 75 + Math.sin(angle) * 50;
                  return (
                    <circle key={i} cx={x} cy={y} r="4" className="circle-dot" style={{ '--delay': i * 0.1 + 's' }} />
                  );
                })}
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
    </div>
  )
}

export default OutlineCard

