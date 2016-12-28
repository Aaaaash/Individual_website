import React, { Component } from 'react';

import {
  LoginContainer,
  AuthInput,
  InputError,
  BaseButton,
  AuthItem,
  InputItem,
  LabelItem,
  RadioInput,
} from './components';

class Register extends Component {
  render() {
    return (
      <LoginContainer>
        <AuthItem>
          <LabelItem>邮箱：</LabelItem>
          <InputItem>
            <AuthInput
              placeholder="please input your account"
            />
            <InputError>qqq</InputError>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>密码：</LabelItem>
          <InputItem>
            <AuthInput
              placeholder="please input your account"
            />
            <InputError>qqq</InputError>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>昵称：</LabelItem>
          <InputItem>
            <AuthInput
              placeholder="please input your account"
            />
            <InputError>qqq</InputError>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>性别：</LabelItem>
          <InputItem>
            <RadioInput type="radio" name="sex" value="man" />
            <RadioInput type="radio" name="sex" value="woman" />
          </InputItem>
        </AuthItem>
        <BaseButton>
          注册
        </BaseButton>
      </LoginContainer>
    );
  }
}

export default Register;
