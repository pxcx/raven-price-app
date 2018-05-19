import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import AppCard from './AppCard.js'
//assets
import './css/App.css';
import RavenIcon from './images/raven.png'
import PigeonIcon from './images/pigeon.png'

class App extends Component {
  state = {
    loading: true,
    rvn: [],
    pgn: [],
    btcPrice: 0,
  }

  constructor(props){
    super(props);

    this.update = this.update.bind(this);
  }

  componentDidMount(){
    this.update();
  }

  update(){
    this.setState({loading: true});
    fetch('http://api.holdrvn.tk/prices/').then(response => response.json()).then(json => {
      const newState = {
        loading: false,
        btcPrice: json.data.btcPrice,
        pgn: json.data.pgn,
        rvn: json.data.rvn,
      }
      this.setState(Object.assign({},this.state,newState));
      console.log('updated...')
    }).catch(error => {
      console.log('error',error);
    })
  }

  render() {
    return (
      <div className="App">
        <AppBar title="RVN & PGN Prices" iconElementLeft={<span></span>} />
        <div className="Content">
          <AppCard avatar={RavenIcon} title="Ravencoin" subtitle="RVN" datasource={this.state.rvn} loading={this.state.loading} />
          <AppCard avatar={PigeonIcon} title="Pigeoncoin" subtitle="PGN" datasource={this.state.pgn} loading={this.state.loading} />
          <FlatButton label="Atualizar" onClick={this.update} />
        </div>
      </div>
    );
  }
}

export default App;
