import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import QueueAnim from 'rc-queue-anim';
import classNames from 'classnames';

import styles from './styles.css';
import CanvasBg from './CanvasBg';
import Loading from './Loading';
import {
  selectAuthBaseInfo,
  selectAuthError,
  selectLoading,
} from './selector';
import { changeAuthAccountInfo, authSendRequest } from './actions';

class AuthLogin extends Component {   // eslint-disable-line   react/prefer-stateless-function
  handleOpenMainPage = () => {
    this.props.onAuthRequest();
    setTimeout(() => {
      browserHistory.push('/index');
    }, 3000);
  }
  render() {
    const { loading } = this.props;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <CanvasBg />
        <QueueAnim type="bottom" className={styles.auth_ani}>
          {loading ? <Loading /> : null}
          <div
          className={classNames(styles.auth_cont, loading ? styles.loading : '')}
          key="a">
            <h3>Open source blog</h3>
            <div className={styles.auth_form}>
              <input className={styles.auth_input} placeholder="please input your account" />
              <span className={styles.error_input}></span>
              <input type="password" className={styles.auth_input} placeholder="please input your password" />
              <span className={styles.error_input}></span>
              <button
                onTouchTap={this.handleOpenMainPage}
                className={styles.login_btn}
              >
                登录
              </button>
            </div>
          </div>
        </QueueAnim>
      </div>
    );
  }
}

AuthLogin.propTypes = {
  authBaseInfo: PropTypes.object,
  authBaseError: PropTypes.object,
  loading: PropTypes.bool,
  onAuthBaseInfoChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authBaseInfo: selectAuthBaseInfo(),
  authBaseError: selectAuthError(),
  loading: selectLoading(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onAuthBaseInfoChange: (val) => dispatch(changeAuthAccountInfo(val)),
    onAuthRequest: () => dispatch(authSendRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(AuthLogin);
