import "./MenuBar.css";
import { Outlet, Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <>
      <ul className="menu">
        <li>
          <div class="dropdown">
            <span>Menu</span>
            <div class="dropdown-content">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Support">Admin</Link>
                </li>
                <li>
                  <Link to="/nse-stock">NSE Stock</Link>
                </li>

              </ul>
            </div>
          </div>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://kite.zerodha.com/dashboard"
          >
            zerodha
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.screener.in/screens/1829391/rsc40/"
          >
            RSC less 40
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.screener.in/screens/1878291/rsi40-new/"
          >
            RSI 40 CAP
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://chartink.com/screener/swing-ema-less-then-200"
          >
            EMA less 200
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tradingview.com/"
          >
            Exponetial Mov avd 20 shprt trem
          </a>
        </li>
      </ul>
    </>
  );
}
