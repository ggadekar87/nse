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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Support">Admin</Link>
          </li>
          <li>
            <Link to="/nse-stock">NSE Stock</Link>
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
                href="https://www.screener.in/screens/1829391/rsc40/"
              >
                RSI less 40
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.screener.in/screens/1878291/rsi40-new/"
              >
                RSI 40 CAP
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://chartink.com/screener/swing-ema-less-then-200"
              >
                EMA less 200
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.screener.in/screens/2741103/rsi-60/"
              >
                RSI greater 50
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.screener.in/screens/2737233/pricevolumn/"
              >
                Price volume
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
