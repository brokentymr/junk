import NavBar from '../components/NavBar'
import '../styles/globals.css'

function QuantMarketplace() {
  return (
    <div className="page">
      <NavBar />
      <div className="page-content">
        <h1 className="page-title">Quant Marketplace</h1>
        
        <div className="marketplace-hero">
          <a href="https://mainnet.lfg.land/vault" className="vault-banner" target="_blank" rel="noopener noreferrer">
            <div className="vault-banner-content">
              <div className="vault-banner-left">
                <div className="vault-logo">LFG</div>
                <div className="vault-banner-text">
                  <h2 className="vault-banner-title">LFGVault</h2>
                  <p className="vault-banner-subtitle">Click to view vault details</p>
                </div>
              </div>
              <div className="vault-banner-right">
                <div className="vault-banner-stats">
                  <div className="vault-stat">
                    <div className="vault-stat-label">Est. APR</div>
                    <div className="vault-stat-value positive">505%</div>
                  </div>
                  <div className="vault-stat">
                    <div className="vault-stat-label">TVL</div>
                    <div className="vault-stat-value">$6,918,599</div>
                  </div>
                  <div className="vault-stat">
                    <div className="vault-stat-label">All-time P&L</div>
                    <div className="vault-stat-value positive">$2,531,495</div>
                  </div>
                </div>
                <div className="vault-banner-arrow">→</div>
              </div>
            </div>
          </a>
        </div>
        
        <div className="marketplace-container">
          <div className="marketplace-section">
            <h2 className="marketplace-section-title">Holdings</h2>
            <div className="marketplace-search">
              <input 
                type="text" 
                placeholder="Type to search" 
                className="marketplace-search-input"
              />
            </div>
            
            <div className="marketplace-table">
              <div className="marketplace-table-header">
                <div className="table-col-market">MARKET</div>
                <div className="table-col-size">SIZE</div>
                <div className="table-col-30d">PAST 30 DAYS</div>
                <div className="table-col-pnl">30D P&L</div>
                <div className="table-col-equity">EQUITY</div>
              </div>
              
              <div className="marketplace-table-body">
                {/* Sample holdings data - you can make this dynamic */}
                <div className="marketplace-table-row">
                  <div className="table-col-market">
                    <div className="market-icon">B</div>
                    <div>
                      <div className="market-name">Bitcoin</div>
                      <div className="market-position long">Long</div>
                    </div>
                  </div>
                  <div className="table-col-size">
                    <div className="size-value">$676,112</div>
                    <div className="size-quantity">7.7165 BTC</div>
                  </div>
                  <div className="table-col-30d">
                    <div className="chart-mini">📈</div>
                  </div>
                  <div className="table-col-pnl positive">
                    <span className="pnl-arrow">↑</span> $1,675,317
                  </div>
                  <div className="table-col-equity">$2,150,834</div>
                </div>
                
                <div className="marketplace-table-row">
                  <div className="table-col-market">
                    <div className="market-icon">S</div>
                    <div>
                      <div className="market-name">USDC</div>
                      <div className="market-position long">Long</div>
                    </div>
                  </div>
                  <div className="table-col-size">
                    <div className="size-value">$851,782</div>
                    <div className="size-quantity">851,781.9095 USDC</div>
                  </div>
                  <div className="table-col-30d">
                    <div className="chart-mini">📈</div>
                  </div>
                  <div className="table-col-pnl">$0</div>
                  <div className="table-col-equity">$851,782</div>
                </div>
                
                <div className="marketplace-table-row">
                  <div className="table-col-market">
                    <div className="market-icon">S</div>
                    <div>
                      <div className="market-name">Solana</div>
                      <div className="market-position long">Long</div>
                    </div>
                  </div>
                  <div className="table-col-size">
                    <div className="size-value">$383,667</div>
                    <div className="size-quantity">2,801.74 SOL</div>
                  </div>
                  <div className="table-col-30d">
                    <div className="chart-mini">📈</div>
                  </div>
                  <div className="table-col-pnl positive">
                    <span className="pnl-arrow">↑</span> $332,195
                  </div>
                  <div className="table-col-equity">$518,557</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="marketplace-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Futures Balance</h3>
              <div className="sidebar-value">$0.00</div>
              <input 
                type="text" 
                placeholder="Enter amount to add" 
                className="sidebar-input"
              />
            </div>
          </div>
        </div>
        
        <div className="marketplace-info">
          <p>
            This vault automatically trades across LFG markets, earning a share of platform fee revenue. 
            It maintains a market-neutral strategy by quoting on both sides of the order book. 
            Performance may fluctuate with market conditions, and there is a risk of partial or total loss of deposited USDC.
          </p>
          <p>
            This vault is operated by LFG, the core team behind the LFG ecosystem. 
            Operators are selected and governed by the LFG community.
          </p>
        </div>
      </div>
    </div>
  )
}

export default QuantMarketplace

