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
  SimpleTextArea,
  ImgUpload,
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
          <LabelItem>确认密码：</LabelItem>
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
            <label htmlFor="radioA">
            男
              <RadioInput type="radio" id="radioA" name="sex" value="man" />
            </label>
            <label htmlFor="radioB">
            女
              <RadioInput type="radio" id="radioB" name="sex" value="woman" />
            </label>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>个人简介：</LabelItem>
          <InputItem>
            <SimpleTextArea />
          </InputItem>
        </AuthItem>
        <AuthItem style={{ marginTop: '0.15rem' }}>
          <LabelItem>头像：</LabelItem>
          <InputItem>
            <ImgUpload
              onClick={() => this.upload.click()}
              title="点击选择图片"
            >
              <i className="fa fa-upload" aria-hidden="true"></i>
            </ImgUpload>
            <input
              type="file"
              ref={(ref) => this.upload = ref}    // eslint-disable-line     no-return-assign
              style={{ display: 'none' }}
            />
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
