import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import { browserHistory } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import styles from './styles.css';
import {
  changeAuthAccountInfo,
} from './actions';
import {
  selectAuthBaseInfo,
  selectAuthError,
  selectLoading,
} from './selector';

class AuthLogin extends Component {   // eslint-disable-line   react/prefer-stateless-function
  handleChangeAccount = (e) => this.props.onAuthBaseInfoChange({ account: e.target.value });

  handleChangePassword = (e) => this.props.onAuthBaseInfoChange({ password: e.target.value });

  handleToMainPage = (e) => browserHistory.push('/index');

  render() {
    const { authBaseInfo, authBaseError } = this.props;
    return (
      <QueueAnim
        type="bottom"
        animConfig={{ opacity: [1, 0], translateY: [-30, 0] }}
        duration={450}
      >
        <canvas id="Mycanvas" style={{ position: 'fixed', top: 0}}></canvas>
        <Helmet title="Login" />
        <div
          key="ani1"
          className={styles.auth_cont}
        >
          <h3>Open source blog</h3>
          <div className={styles.auth_form}>
            <input
              type="text"
              value={authBaseInfo.account}
              className={styles.auth_input}
              placeholder="please input your account"
              onChange={this.handleChangeAccount}
            />
            <span className={styles.error_input}>{authBaseError.accountErr}</span>
            <input
              type="password"
              value={authBaseInfo.password}
              className={styles.auth_input}
              placeholder="please input your password"
              onChange={this.handleChangePassword}
            />
            <span className={styles.error_input}>{authBaseError.passwordErr}</span>
            <button
              className={styles.login_btn}
              onClick={this.handleToMainPage}
            >
              Login
            </button>
          </div>
        </div>
      </QueueAnim>
    );
  }
}

AuthLogin.propTypes = {
  authBaseInfo: PropTypes.object,
  authBaseError: PropTypes.object,
  loading: PropTypes.bool,
  onAuthBaseInfoChange: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  authBaseInfo: selectAuthBaseInfo(),
  authBaseError: selectAuthError(),
  loading: selectLoading(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onAuthBaseInfoChange: (val) => dispatch(changeAuthAccountInfo(val)),
  }
}

export default connect(mapStateToProps, mapDispatchTpProps)(AuthLogin);
