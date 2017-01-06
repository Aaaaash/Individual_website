import styled, { keyframes } from 'styled-components';

export const Chcek = styled.p`
  height: 0.18rem;
  display: flex;
  align-items: center;
`;

export const CheckItem = styled.button`
  width: 0.18rem;
  height: 0.18rem;
  border-radius: 2px;
  border: 1px solid;
  border-color: rgba(16, 22, 26, 0.1) rgba(16, 22, 26, 0.1) rgba(16, 22, 26, 0.17) rgba(16, 22, 26, 0.1);
  background: ${(props) => props.checked ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #2E94B9' : 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #f5f8fa'};
  box-shadow: 0 1px 1px rgba(16, 22, 26, 0.1);
  outline: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.checked ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #188db8' : 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #F1F1F1'};
  }
`;

const checkAni = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const CheckIcon = styled.svg`
  width: 0.14rem;
  height: 0.14rem;
  fill: #FFF;
  overflow: hidden;
  box-sizing: content-box;
  animation: ${checkAni} 0.2s ease;
`;

export const CheckLabel = styled.span`
  margin-left: 0.1rem;
  height: 0.18rem;
  line-height: 0.18rem;
  cursor: pointer;
`;
