import React, { Component, PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import { browserHistory } from 'react-router';

import MenuBtn from 'components/MenuBtn';
import styles from './styles.css';

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.animation = { height: '2rem', yoyo: true, duration: 200 };
  }
  state = {
    open: false,
  }
  handleChangeNavActive = (val, route) => {
    this.props.onNavActiveChange(val);
    browserHistory.push(`/${route}`);
  }

  render() {
    const { authInfo, navActive, authLogout } = this.props;
    return (
      <div className={styles.left_nav}>
        <MenuBtn onTouchTap={() => this.setState({ open: !this.state.open })} />
        <div className={styles.auth_avatar}>
          <a className={styles.avatar} href="/">
            <img src={authInfo.avatar} alt={authInfo.avatar} />
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
              <li onTouchTap={() => browserHistory.push('/')}>
                <i className="fa fa-home"></i>
                <span className={styles.label}>Index</span>
              </li>
              <li onTouchTap={() => browserHistory.push('/archives')}>
                <i className="fa fa-reorder"></i>
                <span className={styles.label}>archives</span>
              </li>
              <li onTouchTap={authLogout}>
                <i className="fa fa-sign-out"></i>
                <span className={styles.label}>退出</span>
              </li>
            </TweenOne> :
          null}
        <ul className={styles.auth_nav}>
          <li
            title="主页"
            className={navActive === 0 ? styles.active : ''}
            onTouchTap={() => this.handleChangeNavActive(0, '')}
          >
            <i className="fa fa-home"></i>
          </li>
          <li
            title="文章管理"
            className={navActive === 2 ? styles.active : ''}
            onTouchTap={() => this.handleChangeNavActive(2, 'admin')}
          >
            <i className="fa fa-gears"></i>
          </li>
          <li
            title="归档"
            className={navActive === 3 ? styles.active : ''}
            onTouchTap={() => this.handleChangeNavActive(3, 'archives')}
          >
            <i className="fa fa-reorder"></i>
          </li>
          <li
            title="退出"
            className={styles.logout}
            onTouchTap={authLogout}
          >
            <i className="fa fa-sign-out"></i>
          </li>
        </ul>
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
