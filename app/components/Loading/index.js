import React, { Component } from 'react';
import styles from './styles.css';
import QueueAnim from 'rc-queue-anim';

class Loading extends Component {
  render() {
    return (
      <QueueAnim type="scaleX">
        <div className={styles.loading} key="a">
          <div className={styles.spinner}>
            <div className={styles.double_bounce1}></div>
            <div className={styles.double_bounce2}></div>
          </div>
        </div>
      </QueueAnim>
    );
  }
}

export default Loading;
