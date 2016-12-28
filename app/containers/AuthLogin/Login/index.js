import React, { Component } from 'react';

import {
  LoginContainer,
  AuthInput,
  InputError,
  BaseButton,
} from './components';

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <AuthInput
          placeholder="please input your account"
        />
        <InputError></InputError>
        <AuthInput
          type="password"
          placeholder="please input your password"
        />
        <InputError></InputError>
        <BaseButton>
          登录
        </BaseButton>
      </LoginContainer>
    );
  }
}

export default Login;
