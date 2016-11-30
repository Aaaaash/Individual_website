import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import styles from './styles.css';
import CanvasBg from './CanvasBg';

class AuthLogin extends Component {   // eslint-disable-line   react/prefer-stateless-function
  handleOpenMainPage = () => {
    browserHistory.push('/index');
  }
  render() {
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <CanvasBg />
        <QueueAnim type="bottom" className={styles.auth_cont}>
          <h3 key="ani1">Open source blog</h3>
          <div className={styles.auth_form}  key="ani2">
            <input className={styles.auth_input} placeholder="please input your account" />
            <span className={styles.error_input}>error</span>
            <input className={styles.auth_input} placeholder="please input your password" />
            <span className={styles.error_input}></span>
            <button
              onTouchTap={this.handleOpenMainPage}
              className={styles.login_btn}
            >
              Login
            </button>
          </div>
        </QueueAnim>
      </div>
    );
  }
}

export default AuthLogin;
