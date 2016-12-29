import styled, { keyframes } from 'styled-components';

export const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding: 0.12rem;
`;

export const AuthItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const InputItem = styled.div`
  width: 80%;
  margin-left: 0.15rem;
`;

export const LabelItem = styled.p`
  width: 30%;
  height: 0.36rem;
  line-height: 0.36rem;
  text-align: right;
`;

export const AuthInput = styled.input`
  flex-grow: 1;
  width: 100%;
  color: #4B4B4B;
  margin-top: 0.15rem;
  background: rgba(255, 255, 255, 0.75);
  border: 0.01rem solid rgba(255, 255, 255, 0.35);
  border: 1px solid #CCC;
  height: 0.36rem;
  line-height: 0.36rem;
  text-indent: 0.1rem;
  border-radius: 2px;
  &:focus {
    background-color: #FFF;
    border-color: #2E94B9;
    transition: all 200ms;
  }
`;

export const InputError = styled.span`
  font-size: 0.12rem;
  position: relative;
  display: inline-block;
  width: 85%;
  text-indent: 0.15rem;
  color: #F45E6E;
  height: 0.14rem;
  line-height: 0.14rem;
  top: 0.05rem;
  text-align: left;
`;

export const BaseButton = styled.button`
  width: 1.25rem;
  height: 0.4rem;
  cursor: pointer;
  margin-top: 0.25rem;
  border-radius: 2px;
  color: #FFF;
  outline: none;
  background-color: #2E94B9;
  box-shadow: 0 1px 2px rgba(108, 108, 108, 0.24);
  transition: all 250ms;
  &:hover {
    background-color: #188db8;
  }
  &:active {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2),0 1px 4px rgba(0, 0, 0, 0.2);
  }
`;

const radioAni = keyframes`
  from {
    transform:scale(0);
  }
  to {
    transform:scale(1);
  }
`;

export const RadioInput = styled.input`
  width: 0.2rem;
  height: 0.2rem;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #ebf1f5;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.1rem;
  border: 1px solid #CCC;
  vertical-align: bottom;
  appearance: none;
  box-sizing: border-box;
  position: relative;
  &:active {
    border-color: #188db8;
    background: #ebebeb;
  }
  &:hover {
    border-color: #AAA;
  }
  &:checked {
    border: 2px solid #188db8;
  }
  &:checked::after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #FFF;
    animation: ${radioAni} 0.2s;
  }
`;

export const SimpleTextArea = styled.textarea`
  flex-grow: 1;
  width: 100%;
  color: #4B4B4B;
  margin-top: 0.15rem;
  background: rgba(255, 255, 255, 0.75);
  border: 0.01rem solid rgba(255, 255, 255, 0.35);
  border: 1px solid #CCC;
  height: 1rem;
  outline: none;
  resize: none;
  padding: 0.05rem 0.1rem;
  border-radius: 2px;
  transition: all 200ms;
  &:focus {
    background-color: #FFF;
    border-color: #2E94B9;
  }
`;

export const ImgUpload = styled.button`
  cursor: pointer;
  width: 100%;
  height: 1rem;
  color: #666;
  font-size: 0.25rem;
  text-align: center;
  line-height: 1rem;
  border-radius: 2px;
  background-color: #FFF;
  border: 1px dotted #CCC;
  transition: all 200ms;
  &:hover {
    color: #31424E
  }
`;
