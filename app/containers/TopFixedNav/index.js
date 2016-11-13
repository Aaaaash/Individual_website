import React, { Component } from 'react';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';
import { browserHistory } from 'react-router';

import styles from './styles.css';
import logo from './logo.png';

class TopFixedNav extends Component {
  render() {
    return (
      <div key="nav" className={classNames(styles.left_nav_container)}>
        <div className={styles.nav_logo}>
          <img src={logo} className={styles.logo} />
        </div>
        <QueueAnim type="left" className={styles.nav_container} component="ul">
          <li key="demo1" onClick={() => browserHistory.push('/')}>首页</li>
          <li key="demo2" onClick={() => browserHistory.push('/code')}>代码</li>
          <li key="demo3" onClick={() => browserHistory.push('/photo')}>照片</li>
          <li key="demo4">about</li>
        </QueueAnim>
      </div>
    );
  }
}

export default TopFixedNav;
