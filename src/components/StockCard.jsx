import React from 'react'

export default function StockCard({ stock, buyOrSell, myStocks }) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">${stock.price}</p>
        </div>
        {
          myStocks && myStocks.includes(stock) ?
          <button onClick={() => buyOrSell(stock, "sell")}>SELL</button>
          :
          <button onClick={() => buyOrSell(stock, "buy")}>BUY</button>
        }
    </div>
  );
}
