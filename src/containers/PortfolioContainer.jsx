import StockCard from '../components/StockCard';

export default function PortfolioContainer({ myStocks, buyOrSell }) {
  return (
    <div>
      <h2>My Portfolio - ${myStocks.reduce((acc, stock) => (acc += stock.price), 0)}</h2>
      {myStocks.map((stock) => {
        return <StockCard key={stock.price} stock={stock} myStocks={myStocks} buyOrSell={buyOrSell} />;
      })}
    </div>
  );
}
