import React, { Component } from 'react';
import classNames from 'classnames';
import { Carousel  } from 'antd';
import 'antd/dist/antd.css';

import styles from './styles.css';

class CarouselFigure extends Component {
  render() {
    return (
        <Carousel className={classNames(styles.carousel_container)} autoplay pauseOnHover >
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        </Carousel>
    )
  }
}

export default CarouselFigure;
