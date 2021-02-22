import React from 'react';
import './OneCurrency.css'

const OneCurrency = (props) =>{

    let minCost = 0;

    function getRatesByNameandIndex(i){
        if(props.currencyName === 'RUB'&& props.secondCurrencyName==='CUPCAKE')
            return Math.abs(props.allMarkets[i].rates['RUB'].toFixed(2));

        if(props.currencyName === 'EUR'&& props.secondCurrencyName==='CUPCAKE')
            return Math.abs(props.allMarkets[i].rates['EUR'].toFixed(2));

        if(props.currencyName === 'USD'&& props.secondCurrencyName==='CUPCAKE')
            return Math.abs(props.allMarkets[i].rates['USD'].toFixed(2));

        if(props.currencyName === 'RUB'&& props.secondCurrencyName==='USD')
            return (Math.abs(props.allMarkets[i].rates['RUB'])/
                Math.abs(props.allMarkets[i].rates['USD'])).toFixed(2);

        if(props.currencyName === 'RUB'&& props.secondCurrencyName==='EUR')
            return (Math.abs(props.allMarkets[i].rates['RUB'])/
                Math.abs(props.allMarkets[i].rates['EUR'])).toFixed(2);

        if(props.currencyName === 'EUR' && props.secondCurrencyName==='USD')
            return (Math.abs(props.allMarkets[i].rates['EUR'])/
                Math.abs(props.allMarkets[i].rates['USD'])).toFixed(2);
    }

    function getMinCost(currency) {
        let currentMinCost = 999999;
        let i;
        for (i=0; i <  props.allMarkets.length; i++){
            if(Math.abs(getRatesByNameandIndex(i)) < currentMinCost)
                currentMinCost=getRatesByNameandIndex(i);
        }
        minCost = currentMinCost;
    }

    return(
        <tr>
            <td>{props.currencyName + '/' + props.secondCurrencyName}</td>
            {getMinCost(props.currencyName)}
            {props.allMarkets.map((market, i) => {
                if (minCost === getRatesByNameandIndex(i)) {
                    return <td
                        className='minimumCost'>{market ? getRatesByNameandIndex(i) : 'loading'}</td>
                } else {
                    return <td>{market ? getRatesByNameandIndex(i) : 'loading'}</td>
                }
            })}
        </tr>
    );
}

export default OneCurrency;
