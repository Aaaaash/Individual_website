import React, { Component } from 'react';

import styles from './styles.css';
import init from './canvas.js';

class CanvasBg extends Component {   // eslint-disable-line
  componentDidMount() {
    init();
  }
  render() {
    return (
      <div className={styles.canvas_con}>
        <canvas id="Mycanvas" style={{ width: '100%', height: '100%', position: 'fixed' }}></canvas>
      </div>
    );
  }
}

export default CanvasBg;
