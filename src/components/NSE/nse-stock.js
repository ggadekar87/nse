
import { useState } from "react";
import { MARKET_STATUS_URL } from "./constant";
import "./nse-stock.css";

const settlementSchedule = [
  {
    quarter: "Quarter 1 (April-June)",
    date: "2026-04-18",
    description: "Funds are settled on April 18, 2026.",
  },
  {
    quarter: "Quarter 2 (July-September)",
    date: "2026-07-03",
    description: "Funds are settled on July 3, 2026.",
  },
  {
    quarter: "Quarter 3 (October-December)",
    date: "2026-10-02",
    description: "Funds are settled on October 2, 2026.",
  },
  {
    quarter: "Quarter 4 (January-March)",
    date: "2027-01-02",
    description: "Funds are settled in early January 2027 (e.g. January 2, 2027).",
  },
];

const today = new Date();
const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());

const getScheduleMetadata = () => {
  return settlementSchedule.map((item) => {
    const target = new Date(item.date);
    const timeDiff = target.getTime() - todayStart.getTime();
    const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    return {
      ...item,
      target,
      remainingDays,
      passed: remainingDays < 0,
      today: remainingDays === 0,
      label:
        remainingDays < 0
          ? "Passed"
          : remainingDays === 0
          ? "Today"
          : `${remainingDays} day${remainingDays === 1 ? "" : "s"} remaining`,
    };
  });
};

const NseStock = () => {
  const [marketStatus, setMarketStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [iframeBlocked, setIframeBlocked] = useState(false);

  const scheduleItems = getScheduleMetadata();
  const nextIndex = scheduleItems.findIndex((item) => !item.passed);

  const getMarketStatus = () => {
    setLoading(true);
    setError(null);

    fetch(MARKET_STATUS_URL)
      .then((response) => response.json())
      .then((result) => {
        setMarketStatus(result?.NormalMktStatus || "Unknown");
      })
      .catch((err) => {
        setError("Unable to load market status.");
        console.error(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="nse-stock-page">
      <div className="nse-stock-hero">
        <div>
          <p className="eyebrow">Settlement Schedule</p>
          <h1>NSE Fund Settlement Dates</h1>
          <p className="hero-copy">
            Track the remaining 2026 settlement dates for each quarter. Passed
            dates are marked in red, and the next upcoming settlement is highlighted.
          </p>
        </div>

        <div className="status-panel">
          <h2>Market Status</h2>
          <p className="status-copy">
            Fetch the latest normal market session status from NSE.
          </p>
          <button className="status-button" onClick={getMarketStatus}>
            {loading ? "Loading..." : "Fetch Market Status"}
          </button>
          <div className="status-value">
            {error ? <span className="status-error">{error}</span> : marketStatus || "No data yet"}
          </div>
        </div>
      </div>

      <div className="schedule-grid">
        {scheduleItems.map((item, index) => (
          <article
            key={item.date}
            className={`schedule-card ${item.passed ? "passed" : ""} ${index === nextIndex ? "next-upcoming" : ""}`}
          >
            <div className="schedule-card-header">
              <span className="schedule-quarter">{item.quarter}</span>
              <span className="schedule-label">{item.date}</span>
            </div>
            <p className="schedule-date">{item.description}</p>
            <div className="schedule-footer">
              <span className="schedule-status">{item.label}</span>
              <span className="schedule-due">Settlement date: {item.date}</span>
            </div>
          </article>
        ))}
      </div>

      <section className="iframe-panel">
        <div className="iframe-header">
          <h2>Live TradingView Chart</h2>
          <p className="iframe-copy">
            Embedded view of the Sensex chart. If the chart does not render, open it in a new tab.
          </p>
        </div>
        <div className="iframe-wrapper">
          {!iframeBlocked ? (
            <iframe
              title="TradingView SENSEX Chart"
              src="https://www.tradingview.com/chart/k8LKHbnY/?symbol=BSE%3ASENSEX"
              loading="lazy"
              allowFullScreen
              onError={() => setIframeBlocked(true)}
              onLoad={() => setIframeBlocked(false)}
            />
          ) : (
            <div className="iframe-fallback">
              <p>TradingView blocked this page from loading in an iframe.</p>
              <p>Please use the link below to open the chart directly.</p>
            </div>
          )}
        </div>
        <div className="iframe-footer">
          <a
            href="https://www.tradingview.com/chart/k8LKHbnY/?symbol=BSE%3ASENSEX"
            target="_blank"
            rel="noreferrer"
          >
            Open chart in TradingView
          </a>
        </div>
      </section>
    </div>
  );
};

export default NseStock;
