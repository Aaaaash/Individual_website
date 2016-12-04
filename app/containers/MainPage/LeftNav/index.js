import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import { browserHistory } from 'react-router';

import styles from './styles.css';
import menu from './menu.png';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.animation = { height: '3rem', yoyo: true, duration: 250 };
  }
  state = {
    open: false,
  }
  render() {
    return (
      <div className={styles.left_nav}>
        <button
          className={styles.nav_btn}
          style={{ backgroundImage: `url(${menu})` }}
          onTouchTap={() => this.setState({ open: !this.state.open })}
        >
        </button>
        <div className={styles.auth_avatar}>
          <a className={styles.avatar} href="/">
            <img src="http://imgsrc.baidu.com/forum/pic/item/bad78583b5b4d7878c1029c9.jpg" />
          </a>
          <p className={styles.user_name}>Account</p>
          {/* <p>10篇</p> */}
        </div>
          {this.state.open ?
            <TweenOne
            className={styles.auth_nav_mob}
            animation={this.animation}
            component="ul"
            style={{ height: '0' }}
            >
              <li onTouchTap={() => browserHistory.push('/index')}>Index</li>
              <li onTouchTap={() => browserHistory.push('/timeline')}>TimeLine</li>
              <li>qwerty</li>
              <li>qwerty</li>
              <li>qwerty</li>
              <li onTouchTap={() => browserHistory.push('/admin')}>Blog</li>
            </TweenOne> :
          null}
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
