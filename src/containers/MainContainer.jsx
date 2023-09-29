import { useState, useEffect } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from '../components/SearchBar';
// import { stockList } from '../data.js'

export default function MainContainer() {
  const [masterStocks, setMasterStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [sort, setSort] = useState(null);

async function fetchStocks() {
  try {
    const res = await fetch("http://localhost:3001/stocks");
    const data = await res.json();
    setStocks(data);
    setMasterStocks(data);
  } catch (error) {
    console.log("ERROR: ", error);
  }
}


  useEffect(() => {
    fetchStocks();
  }, []);

  function buyOrSell(newStock, action) {
    if (action === 'sell') {
      console.log('SELLING');
      const newPortfolio = myStocks.filter((stock) => stock.name !== newStock.name);
      setMyStocks(newPortfolio);
    } else if (action === 'buy') {
      console.log('BUYING');
      if (myStocks.includes(newStock)) return;
      setMyStocks([...myStocks, newStock]);
    }
  }

  function handleSort(method) {
    setSort(method);
    setStocks(
      stocks.sort(function (a, b) {
        if (a[method] < b[method]) {
          return method === 'name' ? -1 : 1;
        }
        if (a[method] > b[method]) {
          return method === 'name' ? 1 : -1;
        }
        return 0;
      })
    );
  }

  function handleFilter(evt) {
    if (evt.target.value === 'All') {
      return setStocks(masterStocks);
    }
    const filteredStocks = masterStocks.filter((stock) => stock.type === evt.target.value);
    setStocks(filteredStocks);
  }

  return (
    <div>
      <SearchBar handleFilter={handleFilter} handleSort={handleSort} sort={sort} />
      <div className="row">
        <div className="col-1">{}</div>
        <div className="col-5">
          <StockContainer buyOrSell={buyOrSell} stocks={stocks} />
        </div>
        <div className="col-5">
          <PortfolioContainer buyOrSell={buyOrSell} myStocks={myStocks} />
        </div>
        <div className="col-1">{}</div>
      </div>
    </div>
  );
}