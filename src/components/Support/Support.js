import "./Support.css"
const Support = () => {
    return <>
        <div className="Support">
            <div className="Support-content">
                <p><strong class="label info">Deploy : </strong> <span class="label success"> git bash - npm run deploy</span></p>
                <p>
                    <strong class="label info">Link : </strong>
                    <span class="label">
                        <ul>
                            <li>
                                <a target="_blank" rel="noreferrer"
                                    href="https://coindcx.com/trade/BTCINR">
                                    coindcx
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer"
                                    href="https://coin.zerodha.com/">
                                    Zerodha COIN
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer"
                                    href="https://www.tradingview.com/">
                                    tradingview
                                </a>
                            </li>
                            <li>
                                <a target="_blank" rel="noreferrer"
                                    href="https://www.screener.in/">
                                    screener
                                </a>
                            </li>
                        </ul>
                    </span>
                </p>
            </div>
        </div>
    </>
}
export default Support;