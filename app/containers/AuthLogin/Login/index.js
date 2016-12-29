import React, { Component } from 'react';

import {
  LoginContainer,
  AuthInput,
  InputError,
  BaseButton,
} from './components';

class Login extends Component {  // eslint-disable-line
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
          onChange={(e) => accountChangeFunc(e.target.value)}
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

export default Login;
