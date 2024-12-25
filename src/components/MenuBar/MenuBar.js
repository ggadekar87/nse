import "./MenuBar.css";
export default function MenuBar() {
  return (
    <>
      <ul className="menu">
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
            Exponetial Mov avd > 20 shprt trem
          </a>
        </li>
      </ul>
    </>
  );
}
