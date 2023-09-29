import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './containers/StockContainer';
import PortfolioContainer from './containers/PortfolioContainer';
import './index.css'

export default function App() {
  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
          <StockContainer />
        </div>
        <div className="col-6">
          <PortfolioContainer />
        </div>
      </div>
    </main>
  );
}




// Update the provided <PortfolioContainer> component to render each stock that the user has bought using the provided <StockCard> component.

// Update the <StockCard> component to render a [BUY] button if rendered by the <StockContainer> component, or a [SELL] button if rendered by the <PortfolioContainer>. Hint: You will need to pass an additional prop to the <StockCard> component - then a ternary expression will be a great option to render the correct button.

// If the user clicks a stock's [BUY] button, that stock should be added to the user's portfolio only if that stock does not already exist in the portfolio.

// Update the <PortfolioContainer> component to compute and render the total value of the stocks in the portfolio.

// If the user clicks a stock's [SELL] button, that stock should be removed from the user's portfolio.

// Bonus
// Allow a user to sort the list of stocks by the company name alphabetically or by price in ascending order.

// Allow a user to filter stocks based on the type of the stock.

// Have Fun!