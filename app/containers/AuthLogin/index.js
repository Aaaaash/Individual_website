import React, { Component } from 'react';

import styles from './styles.css';

class AuthLogin extends Component {   // eslint-disable-line   react/prefer-stateless-function
  render() {
    return (
      <div className={styles.auth_cont}>
        <h3>Open source blog</h3>
        <div className={styles.auth_form}>
          <input className={styles.auth_input} placeholder="please input your account" />
          <span className={styles.error_input}></span>
          <input className={styles.auth_input} placeholder="please input your password" />
          <span className={styles.error_input}></span>
          <button className={styles.login_btn}>Login</button>
        </div>
      </div>
    );
  }
}

export default AuthLogin;
