import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import styles from './styles.css';

class LeftNav extends Component {
  render() {
    return (
      <div className={styles.left_nav}>
        <div className={styles.auth_avatar}>
          <a className={styles.avatar}>
            <img src='http://i1.s2.dpfile.com/pc/8034d5820594534b15f121ec6aacaed5(700x700)/thumb.jpg' />
          </a>
          <p className={styles.user_name}>Account</p>
        </div>
        <QueueAnim component="ul" type="bottom" className={styles.auth_nav}>
          <li key="a"></li>
          <li key="b"></li>
          <li key="c"></li>
          <li key="d"></li>
          <li key="e"></li>
          <li key="f"></li>
        </QueueAnim>
      </div>
    );
  }
}

export default LeftNav;
