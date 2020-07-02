import React, { Component } from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import PriceDisplay from './components/PriceDisplay';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header />
        <PriceDisplay />
      </React.Fragment>
    );
  }
}

export default App;
