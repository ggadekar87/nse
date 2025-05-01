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
  useEffect(() => {
    GetAllStockSymbols();
  }, []);
  const GetAllStockSymbols = () => {
    setLoading(true);
    setSymbols(data);
    setLoading(false);
  };

  function searchGoogle(query) {
    //let base = "https://google.com/search?q=";
    let base = "https://tradingview.com/symbols/NSE-";
    window.open(base + query + "/", "_blank");
    // change current web page to search query
    // document.location.href = base + query + "/";
  }
  function searchScreener(query) {
    //let base = "https://google.com/search?q=";
    let base = "https://www.screener.in/company/";
    window.open(base + query + "/", "_blank");
    // change current web page to search query
    // document.location.href = base + query + "/";
  }
  function searchNSEIndia(query) {
    //let base = "https://google.com/search?q=";
    let base = "https://www.nseindia.com/get-quotes/equity?symbol=";
    window.open(base + query, "_blank");
    // change current web page to search query
    // document.location.href = base + query + "/";
  }

  const handleChange = (value) => {
    const result = symbols.filter((str) => str.startsWith(value.toUpperCase()));
    setSymbolsFL(result);
  };
  return (
    <>
      <ProgressBar />
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <p>
              <Button
                style={{ width: "100%" }}
                variant="danger"
                onClick={GetAllStockSymbols}
              >
                Load
              </Button>
              {loading ? (
                <p>
                  <span class="loader"></span>
                </p>
              ) : (
                <ul>
                  {symbols.map((data, index) => {
                    return (
                      <li key={index}>
                        <table className="tab1">
                          <tr>
                            <td>{data} </td>
                            <td>
                              <Button
                                variant="primary"
                                onClick={() => searchGoogle(data)}
                              >
                                chart
                              </Button>
                            </td>
                          </tr>
                        </table>
                      </li>
                    );
                  })}
                </ul>
              )}
            </p>
          </div>
          <div class="col-md-7">
            <p>
              <Form.Control
                type="text"
                onChange={(event) => handleChange(event.target.value)}
              />

              <ul>
                {symbolsFL.map((data, index) => {
                  return (
                    <li key={index}>
                      <table>
                        <tr>
                          <td>{data}</td>
                          <td>
                            <Button
                              variant="success"
                              onClick={() => searchGoogle(data)}
                            >
                              tradingview chart
                            </Button>
                          </td>
                          <td>
                            <Button
                              variant="info"
                              onClick={() => searchScreener(data)}
                            >
                              Screener
                            </Button>
                            /
                            <Button
                              variant="info"
                              onClick={() => searchNSEIndia(data)}
                            >
                              NSE
                            </Button>
                          </td>
                        </tr>
                      </table>
                    </li>
                  );
                })}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
