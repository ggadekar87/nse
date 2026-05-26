import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const settlementDates = {
  Apr: "18 Apr",
  Jul: "03 Jul",
  Oct: "02 Oct",
  Jan: "02 Jan",
};

const settlementLabels = {
  Apr: "Q1",
  Jul: "Q2",
  Oct: "Q3",
  Jan: "Q4",
};

const quarterStarts = [0, 3, 6, 9];
const quarterEnds = [2, 5, 8, 11];

const ProgressBar = () => {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMonthIndex(new Date().getMonth());
    }, 1000 * 60 * 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="progress-bar-frame">
      <div className="progress-bar-container">
        {months.map((month, index) => {
          const isActive = index === currentMonthIndex;
          const isPassed = index < currentMonthIndex;
          const isQuarterStart = quarterStarts.includes(index);
          const isQuarterEnd = quarterEnds.includes(index);
          const settlementDate = settlementDates[month];
          const isSettlementMonth = Boolean(settlementDate);

          return (
            <div
              key={month}
              className={`month-box ${isPassed ? "passed" : ""} ${isActive ? "active" : ""} ${isQuarterStart ? "highlightedStart" : ""} ${isQuarterEnd ? "highlightedEnd" : ""} ${isSettlementMonth ? "settlement-month" : ""}`}
            >
              <span className="month-name">{month}</span>
              {settlementDate && (
                <span className="month-date">{settlementDate}</span>
              )}
              <span className="month-tag">
                {settlementDate ? settlementLabels[month] : isQuarterStart ? "Start" : isQuarterEnd ? "End" : ""}
              </span>
            </div>
          );
        })}
      </div>

      <div className="progress-legend">
        <div>
          <span className="legend-dot active-dot" /> Completed & current month
        </div>
        <div>
          <span className="legend-dot start-dot" /> Quarter start
        </div>
        <div>
          <span className="legend-dot end-dot" /> Quarter end
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
