import React, { Component } from 'react';
import { Container, SubContainer, Logo, AppTitle, NavArrow, NavContainer } from './styles';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';

import strings from '@/resources/strings';
import images from '@/resources/images';

interface OwnProps {
  coin: String;
  changeCoinInContext(coin: String): void;
}

type Props = OwnProps;

class Header extends Component<Props> {
  render() {
    const { coins } = strings;
    const { coin, changeCoinInContext } = this.props;
    return (
      <Container>
        <NavContainer>
        {
          coin === coins.rvn.symbol ? null : 
          <NavArrow onClick={() => changeCoinInContext(coins.rvn.symbol)}>
            <MdKeyboardArrowLeft size={30} />{coins.rvn.symbol}
          </NavArrow>
        }
        </NavContainer>
        <SubContainer>
          <Logo src={coin === coins.rvn.symbol ? images.rvnLogo : images.pgnLogo} />
          <AppTitle>
            {coin === coins.rvn.symbol ? coins.rvn.name : coins.pgn.name}
          </AppTitle>
        </SubContainer>
        <NavContainer>
        {
          coin === strings.pgn ? null :
          <NavArrow onClick={() => changeCoinInContext(coins.pgn.symbol)}>
            <MdKeyboardArrowRight size={30} />{strings.pgn}
          </NavArrow>
        }
        </NavContainer>
      </Container>
    );
  }
}

export default Header;