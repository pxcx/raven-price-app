import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
//assets
import './css/AppCard.css'


class AppCard extends React.Component{
  state = {
    loading: true,
    input: '',
    value: 0
  }

  componentWillReceiveProps(nextProps){
    this.setState({loading: nextProps.loading});
  }

  input(e, changed){
    const input = changed.replace(/[^\d.]/g, '');
    const prices = this.props.datasource.map(record => {
      return record.usdPrice
    });
    const max = Math.max( ...prices );
    this.setState(Object.assign({}, this.state, {
      input: input,
      value: parseFloat(input)*parseFloat(max)
    }));

    console.log('VAL', 'TOTAL', this.state.value)
  }

  render(){
    const Prices = (this.state.loading) ? <div style={{textAlign:'center'}}><CircularProgress /></div> : this.props.datasource.map((record,i) => {
      return (<div key={i} className="PriceLine"><div className="ExchangeName">{record.exchange}</div> <div className="PriceBTC">{record.btcPrice.toFixed(8)} BTC</div> <div className="PriceUSD">$ {record.usdPrice.toFixed(3)}</div></div>)
    })

    const Ammount = (this.state.loading) ? null : <TextField hintText={"Ammount "+this.props.subtitle} fullWidth={true} value={this.state.input} onChange={this.input.bind(this)} style={{marginBottom: 20, textAlign: 'center'}} />

    const Position = (this.state.value > 0) ? <div className="Position">$ {this.state.value.toFixed(2)}</div> : null
    return(
      <Card className="Card">
        <CardHeader
          title={this.props.title}
          subtitle={this.props.subtitle}
          avatar={this.props.avatar}
        />
        <CardText style={{textAlign: 'left'}}>
          {Ammount}
          {Prices}
          {Position}
        </CardText>
      </Card>
    );
  }
}
export default AppCard;
