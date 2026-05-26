import "./MenuBar.css";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <nav className="menubar">
      <div className="menu-inner">
        <div className="brand">
          <Link to="/">NSE Stock Hub</Link>
        </div>

        <ul className="menu-list">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.screener.in/screens/1829391/rsc40/"
            >
              RSI Less 40
            </a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Support">Admin</Link>
          </li>
          <li>
            <Link to="/nse-stock">Quarter</Link>
          </li>
          <li>
            <a
              href="https://www.tradingview.com/chart/k8LKHbnY/?symbol=BSE%3ASENSEX"
              target="_blank"
              rel="noreferrer"
            >
              Sensex
            </a>
          </li>
          <li>
            <a
              href="https://www.tradingview.com/chart/k8LKHbnY/?symbol=NASDAQ%3ANDX"
              target="_blank"
              rel="noreferrer"
            >
              NASDAQ
            </a>
          </li>
          <li>
            <a
              href="https://www.tradingview.com/chart/k8LKHbnY/?symbol=NSEIX%3ANIFTY1%21"
              target="_blank"
              rel="noreferrer"
            >
              Gift Nifty
            </a>
          </li>
          <li className="dropdown">
            <button type="button" className="dropdown-toggle">
              Screens
            </button>
            <div className="dropdown-content">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://kite.zerodha.com/dashboard"
              >
                Zerodha
              </a>
           
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.screener.in/screens/1878291/rsi40-new/"
              >
                RSI 40 Cap
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://chartink.com/screener/swing-ema-less-then-200"
              >
                EMA Less 200
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.screener.in/screens/2741103/rsi-60/"
              >
                RSI Greater 50
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.screener.in/screens/2737233/pricevolumn/"
              >
                Price Volume
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
