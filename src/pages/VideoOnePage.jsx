import NavBar from '../components/NavBar'
import CardSlider from '../components/CardSlider'

const video1Outline = [
  {
    title: "A New Quant Era",
    body: "LFG is building the first modular on-chain quant ecosystem — fast, automated, composable.",
    script: "Welcome to the future of decentralized finance. We're not just building another platform—we're creating the infrastructure for an entirely new quant economy. One that's fast, automated, and completely composable."
  },
  {
    title: "Autonomous Quant Agents",
    body: "Purpose-built AI/quant strategies that generate sustainable volume and yield.",
    script: "Imagine trading bots that don't just follow simple rules, but learn, adapt, and optimize in real-time. Our autonomous quant agents are purpose-built to generate sustainable volume and yield, powered by cutting-edge AI and quantitative strategies."
  },
  {
    title: "The LFG Orderbook",
    body: "35+ pairs, precise routing, and clean execution designed for bots.",
    script: "With 35+ trading pairs, our orderbook delivers precise routing and clean execution—specifically engineered for automated trading. Every transaction is optimized for speed, efficiency, and minimal slippage."
  },
  {
    title: "Mobile Quant Terminal",
    body: "Trade, automate, monitor bots, and manage vaults from one place.",
    script: "Take control of your quant strategies from anywhere. Our mobile terminal puts the entire ecosystem in your pocket—trade, automate, monitor your bots, and manage vaults, all from one intuitive interface."
  },
  {
    title: "Quant Vaults",
    body: "Deposit, earn yield, and benefit from dual-reward mechanisms.",
    script: "Deposit your assets and watch them work. Our quant vaults don't just hold your funds—they actively deploy strategies to generate yield, with dual-reward mechanisms that maximize your returns."
  },
  {
    title: "LFG Money Market",
    body: "Borrow, lend, collateralize — unlock capital efficiency.",
    script: "Unlock the true potential of your assets. Borrow against your holdings, lend to earn, and collateralize strategically. Our money market maximizes capital efficiency across the entire ecosystem."
  },
  {
    title: "The Modular Quant Economy",
    body: "Users, quants, bots, and liquidity form a self-reinforcing network.",
    script: "This isn't just a platform—it's an economy. Users, quants, bots, and liquidity providers all connect in a self-reinforcing network. Each component strengthens the others, creating value for everyone."
  },
  {
    title: "The Future Is Automated",
    body: "LFG is building the quant layer for everyone.",
    script: "The future of finance is automated, accessible, and built on-chain. LFG is creating the quant layer that makes advanced trading strategies available to everyone—not just institutions. Welcome to the new era."
  }
]

function VideoOnePage() {
  return (
    <div className="page">
      <NavBar />
      <div className="page-content">
        <h1 className="page-title">The LFG Quant Ecosystem</h1>
        <div className="slider-section">
          <p className="slider-instruction">Use arrows or swipe to navigate</p>
          <CardSlider cards={video1Outline} />
        </div>
      </div>
    </div>
  )
}

export default VideoOnePage

