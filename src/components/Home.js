import { useState, useEffect } from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import data from "../Stock.json";
import ProgressBar from "./Excel/ProgressBar";
export default function Home() {
  const [symbols, setSymbols] = useState([]);
  const [loading, setLoading] = useState(false);
  const [symbolsFL, setSymbolsFL] = useState([]);
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  useEffect(() => {
    GetAllStockSymbols();
  }, []);

  const GetAllStockSymbols = () => {
    setLoading(true);
    setSymbols(data);
    setSymbolsFL([]);
    setSelectedSymbol(null);
    setLoading(false);
  };

  const selectSymbol = (query) => setSelectedSymbol(query);

  function searchGoogle(query) {
    selectSymbol(query);
    const base = "https://tradingview.com/symbols/NSE-";
    window.open(base + query + "/", "_blank");
  }
  function searchScreener(query) {
    selectSymbol(query);
    const base = "https://www.screener.in/company/";
    window.open(base + query + "/", "_blank");
  }
  function searchNSEIndia(query) {
    selectSymbol(query);
    const base = "https://www.nseindia.com/get-quotes/equity?symbol=";
    window.open(base + query, "_blank");
  }

  const handleChange = (value) => {
    const result = symbols.filter((str) => str.startsWith(value.toUpperCase()));
    setSymbolsFL(result);
    setSelectedSymbol(null);
  };

  return (
    <>
      <ProgressBar />
      <div className="home-container">
        <div className="home-grid">
          <section className="panel stock-panel">
            <div className="panel-heading">
              <Button
                style={{ width: "100%" }}
                variant="danger"
                onClick={GetAllStockSymbols}
              >
                Load All Symbols
              </Button>
            </div>
            {loading ? (
              <div className="loading-state">
                <span className="loader"></span>
                <span>Loading symbols...</span>
              </div>
            ) : (
              <ul className="listScroll stock-list">
                {symbols.map((data, index) => {
                  return (
                    <li key={index} className="stock-item">
                      <div className="stock-item-row">
                        <button
                          className="buttonLink"
                          onClick={() => handleChange(data)}
                        >
                          {data}
                        </button>
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => searchGoogle(data)}
                        >
                          chart
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section className="panel results-panel">
            <div className="panel-heading">
              <h2>Search Results</h2>
            </div>
            <Form.Control
              type="text"
              className="inputBox"
              placeholder="Type symbol prefix to filter"
              onChange={(event) => handleChange(event.target.value)}
            />

            <ul className="search-results">
              {symbolsFL.map((data, index) => {
                const isSelected = selectedSymbol === data;
                return (
                  <li
                    key={index}
                    className={isSelected ? "search-result-item selected" : "search-result-item"}
                  >
                    <div className="search-data">
                      <div className="search-symbol">{data}</div>
                      <div className="search-actions">
                        <Button
                          className="SearchBtn"
                          variant="success"
                          onClick={() => searchGoogle(data)}
                        >
                          TradingView
                        </Button>
                        <Button
                          className="SearchBtn"
                          variant="info"
                          onClick={() => searchScreener(data)}
                        >
                          Screener
                        </Button>
                        <Button
                          className="SearchBtn"
                          variant="secondary"
                          onClick={() => searchNSEIndia(data)}
                        >
                          NSE
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
