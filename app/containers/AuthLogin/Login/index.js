import React, { Component, PropTypes } from 'react';

import {
  LoginContainer,
  AuthInput,
  InputError,
  BaseButton,
} from './components';

class Login extends Component {  // eslint-disable-line
  handleChangeAccount = (e) => {
    this.props.accountChangeFunc(e.target.value);
  }
  render() {
    const {
      authInfo,
      accountChangeFunc,
      passwordChangeFunc,
      submitBtnFunc,
    } = this.props;
    return (
      <LoginContainer>
        <AuthInput
          value={authInfo.account}
          placeholder="please input your account"
          onChange={this.handleChangeAccount}
        />
        <InputError></InputError>
        <AuthInput
          type="password"
          value={authInfo.password}
          placeholder="please input your password"
          onChange={(e) => passwordChangeFunc(e.target.value)}
        />
        <InputError></InputError>
        <BaseButton onClick={submitBtnFunc}>
          登录
        </BaseButton>
      </LoginContainer>
    );
  }
}

Login.propTypes = {
  authInfo: PropTypes.object,
  accountChangeFunc: PropTypes.func,
  passwordChangeFunc: PropTypes.func,
  submitBtnFunc: PropTypes.func,
};

export default Login;
