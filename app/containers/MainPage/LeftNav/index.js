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
            <img src="http://imgsrc.baidu.com/forum/pic/item/bad78583b5b4d7878c1029c9.jpg" />
          </a>
          <p className={styles.user_name}>Account<a href="/timeline" className={styles.count}>2blog</a></p>
          {/* <p>10篇</p> */}
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
