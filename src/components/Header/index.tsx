import React, { Component } from 'react';
import { Container, Logo, AppTitle } from './styles';

import strings from '../../resources/strings';
import images from '../../resources/images';

class Header extends Component {
  render() {
    return (
      <Container>
        <Logo src={images.rvnLogo} />
        <AppTitle>{strings.appName}</AppTitle>
      </Container>
    );
  }
}

export default Header;