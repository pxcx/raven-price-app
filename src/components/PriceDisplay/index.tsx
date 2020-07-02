import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { RavenState, RavenPrice, emptyRavenPrice } from '../../store/raven/types';
import * as RavenActions from '../../store/raven/actions';
import { Container, PriceRow, QuantityInput, BtnReload } from './styles';
import { MdCached } from 'react-icons/md';

import strings from '../../resources/strings';

export interface StateProps {
  raven: RavenState;
}

export interface DispatchProps {
  loadRequest(): void;
  loadSuccess(data: RavenPrice): void;
  loadFailure(): void;
}

type Props = StateProps & DispatchProps;

class PriceDisplay extends Component<Props> {
  componentDidMount() {
    this.handleTryAgainButton();
  }

  handleTryAgainButton() {
    const {loadRequest, loadSuccess, loadFailure} = this.props;
    loadRequest();
    setTimeout(()=> {
      if(Math.random() > 0.5) {
        loadSuccess(emptyRavenPrice);
      } else {
        loadFailure();
      }
    }, 2000);
  }

  render() {
    const {loading, error} = this.props.raven;
    return (
      <Container>
        { loading ? <PriceRow>{ strings.loadingText }</PriceRow> : null }
        { error ? 
          <PriceRow>
            { strings.errorText }
            <BtnReload onClick={this.handleTryAgainButton.bind(this)}>
              <MdCached className='react-icons' />Try Again!
            </BtnReload>
          </PriceRow> : null }
        { !error && !loading ? (
          <PriceRow>
            <QuantityInput placeholder={strings.intialValue} />
            {strings.rvn} = 100 {strings.btc}
            <BtnReload onClick={this.handleTryAgainButton.bind(this)}>
              <MdCached className='react-icons' />Refresh
            </BtnReload>
          </PriceRow>
        ) : null }
      </Container>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => ({
  raven: state.raven
});

const mapDispatchToProps = (dispatch: Dispatch) => 
  bindActionCreators(RavenActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PriceDisplay);