import React, { Component, PropTypes } from 'react';
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
  handleChangeNavActive = (val, route) => {
    this.props.onNavActiveChange(val);
    browserHistory.push(`/${route}`);
  }

  render() {
    const { authInfo, navActive } = this.props;
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
            <img src={authInfo.avatar} />
          </a>
          <p className={styles.user_name}>{authInfo.name}</p>
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
              <li onTouchTap={() => browserHistory.push('/admin')}>Blog</li>
            </TweenOne> :
          null}
        <QueueAnim component="ul" type="bottom" className={styles.auth_nav}>
          <li
            key="a"
            className={navActive === 0 ? styles.active : ''}
            onTouchTap={() => this.handleChangeNavActive(0, '')}
          >
            Index
          </li>
          <li
            key="b"
            className={navActive === 1 ? styles.active : ''}
            onTouchTap={() => this.handleChangeNavActive(1, 'timeline')}
          >
            TimeLine
          </li>
          <li
            key="c"
            className={navActive === 2 ? styles.active : ''}
            onTouchTap={() => this.handleChangeNavActive(2, 'admin')}
          >
            Blog
          </li>
        </QueueAnim>
      </div>
    );
  }
}

LeftNav.propTypes = {
  authInfo: PropTypes.object,
  navActive: PropTypes.number,
  onNavActiveChange: PropTypes.func,
};

export default LeftNav;
