import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { browserHistory } from 'react-router';

import styles from './styles.css';

class LeftNav extends Component {
  render() {
    return (
      <div className={styles.left_nav}>
        <div className={styles.auth_avatar}>
          <a className={styles.avatar} href="/">
            <img src="http://i1.s2.dpfile.com/pc/8034d5820594534b15f121ec6aacaed5(700x700)/thumb.jpg" />
          </a>
          <p className={styles.user_name}>Account</p>
        </div>
        <QueueAnim component="ul" type="bottom" className={styles.auth_nav}>
          <li key="a" onTouchTap={() => browserHistory.push('/index')}>Index</li>
          <li key="b" onTouchTap={() => browserHistory.push('/timeline')}>TimeLine</li>
          <li key="c">qwerty</li>
          <li key="d">qwerty</li>
          <li key="e">qwerty</li>
          <li key="f" onTouchTap={() => browserHistory.push('/admin')}>Blog</li>
        </QueueAnim>
      </div>
    );
  }
}

export default LeftNav;
