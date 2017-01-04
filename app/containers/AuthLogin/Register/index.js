import React, { Component, PropTypes } from 'react';

import {
  LoginContainer,
  AuthInput,
  InputError,
  BaseButton,
  AuthItem,
  InputItem,
  LabelItem,
  SimpleTextArea,
  ImgUpload,
} from './components';
import RadioGroup from 'components/RadioGroup';

class Register extends Component {
  state = {
    image: '',
  }
  resizeMe = (img) => {
    // 压缩的大小
    const MAXWIDTH = 200;
    const MAXHEIGHT = 200;

    const canvas = document.createElement('canvas');
    let width = img.width;
    let height = img.height;

    if (width > height) {
      if (width > MAXWIDTH) {
        height = Math.round(height *= MAXWIDTH / width);
        width = MAXWIDTH;
      }
    } else if (height > MAXHEIGHT) {
      width = Math.round(width *= MAXHEIGHT / height);
      height = MAXHEIGHT;
    }

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, width, height);
    // 压缩率
    return canvas.toDataURL('image/jpeg', 0.7);
  }

  handleImgFile = (ev) => {
    const file = ev.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const image = new Image();
      image.src = reader.result;
      image.onload = () => {
        const result = this.resizeMe(image);
        this.props.onChangeCallBack({ avatar: result });
      };
    };
  }

  render() {
    const {
      inputInfo,
      onChangeCallBack,
      onSubmitCallBack,
    } = this.props;
    return (
      <LoginContainer>
        <AuthItem>
          <LabelItem>邮箱：</LabelItem>
          <InputItem>
            <AuthInput
              placeholder="please input your account"
              value={inputInfo.email}
              onChange={(e) => onChangeCallBack({ email: e.target.value })}
            />
            <InputError>qqq</InputError>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>密码：</LabelItem>
          <InputItem>
            <AuthInput
              placeholder="please input your account"
              value={inputInfo.password}
              onChange={(e) => onChangeCallBack({ password: e.target.value })}
            />
            <InputError>qqq</InputError>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>确认密码：</LabelItem>
          <InputItem>
            <AuthInput
              placeholder="please input your account"
              value={inputInfo.repsd}
              onChange={(e) => onChangeCallBack({ repsd: e.target.value })}
            />
            <InputError>qqq</InputError>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>昵称：</LabelItem>
          <InputItem>
            <AuthInput
              placeholder="please input your account"
              value={inputInfo.nickname}
              onChange={(e) => onChangeCallBack({ nickname: e.target.value })}
            />
            <InputError>qqq</InputError>
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>性别：</LabelItem>
          <InputItem>
            <RadioGroup
              options={{
                name: 'sex',
                data: [
                  {
                    value: 'm',
                    label: 'nan',
                  },
                  {
                    value: 'f',
                    label: 'nv',
                  },
                ],
              }}
              changeCallBack={(val) => onChangeCallBack({ sex: val })}
            />
          </InputItem>
        </AuthItem>
        <AuthItem>
          <LabelItem>个人简介：</LabelItem>
          <InputItem>
            <SimpleTextArea
              value={inputInfo.bio}
              onChange={(e) => onChangeCallBack({ bio: e.target.value })}
            />
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
              onChange={this.handleImgFile}
            />
          </InputItem>
        </AuthItem>
        <BaseButton onClick={onSubmitCallBack}>
          注册
        </BaseButton>
      </LoginContainer>
    );
  }
}

Register.propTypes = {
  inputInfo: PropTypes.object,
  onChangeCallBack: PropTypes.func,
};

export default Register;
