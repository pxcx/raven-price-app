import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '@/store';
import { RavenState } from '@/store/raven/types';
import { PigeonState } from '@/store/pigeon/types';
import * as RavenActions from '@/store/raven/actions';
import * as PigeonActions from '@/store/pigeon/actions';

import strings from '@/resources/strings';
import { Container, PriceRow, QuantityInput, BtnReload } from './styles';
import { MdCached } from 'react-icons/md';

interface OwnProps {
  coin: String;
}

export interface StateProps {
  RVN: RavenState;
  PGN: PigeonState;
}

export interface DispatchProps {
  loadRavenRequest(): void;
  loadPigeonRequest(): void;
}

type Props = StateProps & DispatchProps & OwnProps;

class PriceDisplay extends Component<Props> {
  state = {
    quantity: 1
  };

  componentDidMount() {
    this.loadRequest();
  }

  componentWillReceiveProps(newProps: Props) {
    if (newProps.coin !== this.props.coin) {
      newProps.coin === strings.coins.rvn.symbol
      ? this.props.loadRavenRequest()
      : this.props.loadPigeonRequest();
      this.setState({ quantity: 1 });
    }
  }

  loadRequest() {
    this.props.coin === strings.coins.rvn.symbol
    ? this.props.loadRavenRequest()
    : this.props.loadPigeonRequest();
  }

  handleQuantityChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ quantity: e.currentTarget.value });
  }

  handleQuantityBlur(e: React.FormEvent<HTMLInputElement>) {
    if (!e.currentTarget.value) {
      this.setState({ quantity: 1 });
    }
  }
  
  render() {
    const { quantity } = this.state;
    const { coins } = strings;
    const datasource = this.props.coin === coins.rvn.symbol 
      ? this.props.RVN
      : this.props.PGN;
    const symbol = this.props.coin === coins.rvn.symbol 
      ? coins.rvn.symbol
      : coins.pgn.symbol;
    const { data, loading, error } = datasource;
    const price = quantity > 0 ? data.toBTC * quantity : data.toBTC;
    
    return (
      <Container>
        { loading ? <PriceRow>{ strings.loadingText }</PriceRow> : null }
        { error ? 
          <PriceRow>
            { strings.errorText }
            <BtnReload onClick={this.loadRequest.bind(this)}>
              <MdCached className='react-icons' />Try Again!
            </BtnReload>
          </PriceRow> : null }
        { !error && !loading ? (
          <PriceRow>
            <QuantityInput
              value={quantity}
              onChange={this.handleQuantityChange.bind(this)}
              onBlur={this.handleQuantityBlur.bind(this)}
              placeholder={strings.intialValue} />
            { `${symbol} = ${price.toFixed(8)} ${coins.btc.symbol}` } 
            <BtnReload onClick={this.loadRequest.bind(this)}>
              <MdCached className='react-icons' />Refresh
            </BtnReload>
          </PriceRow>
        ) : null }
      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  RVN: state.raven,
  PGN: state.pigeon
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    loadRavenRequest: () => dispatch(RavenActions.loadRequest()),
    loadPigeonRequest: () => dispatch(PigeonActions.loadRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceDisplay);