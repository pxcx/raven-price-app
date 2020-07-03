import React, { Component } from 'react';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import PriceDisplay from './components/PriceDisplay';

interface OwnProps {};

type Props = OwnProps;

class App extends Component<Props> {
  state = {
    contextCoin: 'PGN'
  }
  
  changeCoinInContext(coin: String) : void {
    this.setState({ contextCoin: coin });
  }

  render() {
    const { contextCoin } = this.state;
    return (
      <React.Fragment>
        <GlobalStyle />
        <Header coin={contextCoin} changeCoinInContext={this.changeCoinInContext.bind(this)} />
        <PriceDisplay coin={contextCoin} />
      </React.Fragment>
    );
  }
}

export default App;
