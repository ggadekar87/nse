
import { useState } from "react";
import { MARKET_STATUS_URL } from "./constant";
const NseStock = () => {
    const [data, setData] = useState();
    const getMarketStatus = () => {
        fetch(MARKET_STATUS_URL, {
            transformResponse: function (data) {
                console.log(JSON.parse(data).NormalMktStatus)
                setData(JSON.parse(data).NormalMktStatus)
            }
        });
    }
    return <>
        NSE data
        <button onClick={getMarketStatus}>Click</button>
        {data}
    </>
}

export default NseStock;