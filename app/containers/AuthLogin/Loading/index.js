import React, { Component } from 'react';
import styles from './styles.css';
import classNames from 'classnames';

class Loading extends Component {
  render() {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}>
          <div className={styles.double_bounce1}></div>
          <div className={styles.double_bounce2}></div>
        </div>
      </div>
    );
  }
}

export default Loading;
