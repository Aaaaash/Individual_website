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
          <li key="a">SomeSome</li>
          <li key="b">SomeSome</li>
          <li key="c">SomeSome</li>
          <li key="d">SomeSome</li>
          <li key="e">SomeSome</li>
          <li key="f">SomeSome</li>
        </QueueAnim>
      </div>
    );
  }
}

export default LeftNav;
