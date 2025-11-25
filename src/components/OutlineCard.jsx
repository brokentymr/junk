import '../styles/globals.css'

function OutlineCard({ title, body, thumbnail, script, isActive }) {
  return (
    <div className={`outline-card ${isActive ? 'card-active' : ''}`}>
      {thumbnail && (
        <div className="outline-card-thumbnail">
          <img src={thumbnail} alt={title} />
        </div>
      )}
      <div className="outline-card-content">
        <h2 className="outline-card-title">{title}</h2>
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

