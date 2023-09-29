import StockCard from '../components/StockCard';


export default function StockContainer({ buyOrSell, stocks }) {


  return (
    <div>
      <h2>Stocks</h2>
      {
        stocks && stocks.map(stock => {
          return (
            <StockCard key={stock.price} stock={stock} buyOrSell={buyOrSell} />
          )
        })
      }
    </div>
  );
}
