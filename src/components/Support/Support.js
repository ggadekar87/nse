import "./Support.css";

const Support = () => {
  return (
    <div className="support-page">
      <div className="support-card">
        <header className="support-header">
          <div>
            <p className="support-tag">Support & Deployment</p>
            <h1>Project Deployment Guide</h1>
          </div>
          <span className="support-badge">Production Ready</span>
        </header>

        <section className="support-section">
          <h2>Deployment Command</h2>
          <p className="support-text">
            Use the following command to publish the application from your local repository.
          </p>
          <div className="support-code">git bash - <strong>npm run deploy</strong></div>
        </section>

        <section className="support-section">
          <h2>Useful External Resources</h2>
          <p className="support-text">
            Quick access to frequently used trading and market research portals.
          </p>
          <ul className="support-links">
            <li>
              <a target="_blank" rel="noreferrer" href="https://coindcx.com/trade/BTCINR">
                CoinDCX Trading
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://coin.zerodha.com/">
                Zerodha Coin
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.tradingview.com/">
                TradingView
              </a>
            </li>
            <li>
              <a target="_blank" rel="noreferrer" href="https://www.screener.in/">
                Screener
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Support;
