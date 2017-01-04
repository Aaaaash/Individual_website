import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';

import styles from './styles.css';
import CanvasBg from './CanvasBg';
import Loading from 'components/Loading';
import Login from './Login';
import Register from './Register';
import {
  selectAuthBaseInfo,
  selectAuthError,
  selectLoading,
  selectRegisterInto,
} from './selector';
import {
  changeAuthAccountInfo,
  authSendRequest,
  changeRegisterInfo,
} from './actions';

class AuthLogin extends Component {   // eslint-disable-line   react/prefer-stateless-function
  handleOpenMainPage = () => {
    this.props.onAuthRequest();
  }
  handleChangeAuthAccount = (val) => this.props.onAuthBaseInfoChange({ account: val });

  handleChangeAuthPassword = (val) => this.props.onAuthBaseInfoChange({ password: val });

  render() {
    const {
      loading,
      authBaseInfo,
      authRegisterInfo,
      onRegisterChange,
    } = this.props;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <QueueAnim type="bottom" className={styles.auth_ani}>
          {loading ? <Loading /> : null}
          <div className={styles.auth_cont} key="a">
            <h3>登录</h3>
            <p style={{ textAlign: 'center' }}>还没有账号？<a>点击注册</a></p>
            <Login
              authInfo={authBaseInfo}
              accountChangeFunc={this.handleChangeAuthAccount}
              passwordChangeFunc={this.handleChangeAuthPassword}
              submitBtnFunc={this.handleOpenMainPage}
            />
            <Register
              inputInfo={authRegisterInfo}
              onChangeCallBack={onRegisterChange}
            />
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
  onAuthRequest: PropTypes.func,
  onAuthBaseInfoChange: PropTypes.func,
  authRegisterInfo: PropTypes.object,
  onRegisterChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authBaseInfo: selectAuthBaseInfo(),
  authBaseError: selectAuthError(),
  loading: selectLoading(),
  authRegisterInfo: selectRegisterInto(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onAuthBaseInfoChange: (val) => dispatch(changeAuthAccountInfo(val)),
    onAuthRequest: () => dispatch(authSendRequest()),
    onRegisterChange: (val) => dispatch(changeRegisterInfo(val)),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(AuthLogin);
