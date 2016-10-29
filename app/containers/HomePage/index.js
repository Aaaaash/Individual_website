import React, { Component } from 'react';

import HeaderNav from 'components/HeaderNav';
import CarouselFigure from 'components/CarouselFigure';

class HomePage extends Component {
  render() {
    return (
      <div>
        <HeaderNav />
        <CarouselFigure />
      </div>
    );
  }
}

export default HomePage;
