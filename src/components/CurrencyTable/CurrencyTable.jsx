import React, {useEffect, useState} from 'react';
import axios from "axios";
import OneCurrency from '../OneCurrency/OneCurrency'
import './CurrencyTable.css'

const CurrencyTable = () =>{
    const [allMarkets, setAllMarkets] = useState([]);

    useEffect(async () => {
        const result1 = await getMarketData("/api/v1/first");
        const result2 = await getMarketData("/api/v1/second");
        const result3 = await getMarketData("/api/v1/third");

        const markets = [];
        markets.push(result1);
        markets.push(result2);
        markets.push(result3);

        setAllMarkets(markets);
    }, [allMarkets]);

    async function getMarketData(url) {
        return await axios.get(url).then((response) => response.data)
    }

    return (
        <div>
            <h1>Currency exchange</h1>
            <table>
                <thead>
                <tr>
                    <th>Pair name/market</th>
                    <th>First</th>
                    <th>Second</th>
                    <th>Third</th>
                </tr>
                </thead>
                <tbody>
                <OneCurrency allMarkets={allMarkets} currencyName={'RUB'} secondCurrencyName={'CUPCAKE'}/>
                <OneCurrency allMarkets={allMarkets} currencyName={'USD'} secondCurrencyName={'CUPCAKE'}/>
                <OneCurrency allMarkets={allMarkets} currencyName={'EUR'} secondCurrencyName={'CUPCAKE'}/>
                <OneCurrency allMarkets={allMarkets} currencyName={'RUB'} secondCurrencyName={'USD'}/>
                <OneCurrency allMarkets={allMarkets} currencyName={'RUB'} secondCurrencyName={'EUR'}/>
                <OneCurrency allMarkets={allMarkets} currencyName={'EUR'} secondCurrencyName={'USD'}/>
                </tbody>
            </table>
        </div>
    );
}

export default CurrencyTable
