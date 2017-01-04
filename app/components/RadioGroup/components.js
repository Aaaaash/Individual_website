import styled, { keyframes } from 'styled-components';

const radioAni = keyframes`
  from {
    transform:scale(0);
  }
  to {
    transform:scale(1);
  }
`;
export const Radio = styled.input`
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
