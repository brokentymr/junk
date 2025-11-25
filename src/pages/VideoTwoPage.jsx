import NavBar from '../components/NavBar'
import CardSlider from '../components/CardSlider'

const video2Outline = [
  {
    title: "Utility With Purpose",
    body: "The LFG token isn't passive — it powers the entire quant stack.",
    script: "The LFG token isn't just another cryptocurrency. It's the fuel that powers our entire quant ecosystem. Every feature, every strategy, every transaction flows through LFG—making it essential, not optional."
  },
  {
    title: "Vault Access",
    body: "Token-gated access to top-performing quant vaults.",
    script: "Hold LFG and gain exclusive access to our highest-performing quant vaults. These aren't just any strategies—they're the cream of the crop, reserved for token holders who are truly committed to the ecosystem."
  },
  {
    title: "Quant Agent Licensing",
    body: "Use LFG to unlock, customize, and deploy agents.",
    script: "Unlock powerful trading agents with LFG. Customize their strategies, deploy them across markets, and watch them work. The more you stake, the more sophisticated your agents become."
  },
  {
    title: "Orderbook Staking",
    body: "Stake to earn fees from execution flow.",
    script: "Stake your LFG tokens and earn a share of every trade executed on our orderbook. As the ecosystem grows, so do your rewards. It's passive income that scales with adoption."
  },
  {
    title: "Collateral & Borrowing",
    body: "Use LFG to borrow, lend, and lever your quant stack.",
    script: "Use LFG as collateral to borrow other assets, or lend your tokens to earn interest. Leverage your position, maximize your capital efficiency, and build your quant stack exactly how you want it."
  },
  {
    title: "Ecosystem Alignment",
    body: "A unified token powering users, quants, and liquidity.",
    script: "LFG creates perfect alignment across the entire ecosystem. Users, quants, and liquidity providers all benefit from the same token—creating a unified incentive structure that drives growth for everyone."
  },
  {
    title: "The Quant Layer of the Future",
    body: "LFG ties the entire on-chain quant economy together.",
    script: "LFG isn't just a token—it's the connective tissue of the entire on-chain quant economy. It ties together every component, every strategy, every participant. This is the foundation of decentralized quantitative finance."
  }
]

function VideoTwoPage() {
  return (
    <div className="page">
      <NavBar />
      <div className="page-content">
        <h1 className="page-title">Why the LFG Token Matters</h1>
        <div className="slider-section">
          <p className="slider-instruction">Use arrows or swipe to navigate</p>
          <CardSlider cards={video2Outline} />
        </div>
      </div>
    </div>
  )
}

export default VideoTwoPage

