import React, { Component } from 'react';
import Header from './components/Header';
import MainContainer from './containers/MainContainer';
import './index.css'

// must run json-server --watch db.json --port 3001

export default function App() {
  return (
    <main>
      <Header />
      <MainContainer />
    </main>
  );
}









// Bonus
// Allow a user to sort the list of stocks by the company name alphabetically or by price in ascending order.

// Allow a user to filter stocks based on the type of the stock.

// Have Fun!