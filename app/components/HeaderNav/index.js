import React, { Component } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

class HeaderNav extends Component {
  render() {
    return (
      <div className={classNames(styles.header_nav)}>
        <div className={classNames(styles.header_logo)}>
          <a className={classNames(styles.header_link)}>＜DBG.Web/＞</a>
        </div>
        <div className={classNames(styles.nav_bar)}>
          <ul>
            <li>大秀子</li>
            <li>sakura</li>
            <li>sakura</li>
            <li>sakura</li>
            <li>sakura</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default HeaderNav;
