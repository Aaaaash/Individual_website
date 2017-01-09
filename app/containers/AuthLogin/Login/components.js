import styled from 'styled-components';

export const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  padding: 0.12rem;
  text-align: center;
`;

export const AuthInput = styled.input`
  flex-grow: 1;
  width: 85%;
  color: #4B4B4B;
  margin-top: 0.15rem;
  background: rgba(255, 255, 255, 0.75);
  border: 0.01rem solid rgba(255, 255, 255, 0.35);
  border: 1px solid #CCC;
  height: 0.45rem;
  line-height: 0.45rem;
  text-indent: 0.15rem;
  border-radius: 2px;
  &:focus {
    background-color: #FFF;
    border-color: #2E94B9;
    transition: all 300ms;
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
  box-shadow: 0 1px 1px rgba(16, 22, 26, 0.1);
  transition: all 250ms;
  &:hover {
    background-color: #188db8;
  }
  &:active {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2),0 1px 4px rgba(0, 0, 0, 0.2);
  }
`;
