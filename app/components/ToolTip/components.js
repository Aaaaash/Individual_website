import styled, { keyframes } from 'styled-components';

export const Tip = styled.div`
  position: relative;
`;

const tipEnter = keyframes`
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TipText = styled.div`
  color: #E6E9ED;
  text-align: left;
  display: inline-block;
  white-space:nowrap;
  line-height: 0.25rem;
  font-size: 0.12rem;
  border-radius: 2px;
  padding: 0 0.1rem;
  position: absolute;
  background-color: #475053;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
  z-index: 1000;
  bottom: -0.3rem;
  left: 50%;
  transition: all 250ms;
  opacity: ${(props) => props.open ? 0 : ''};
  transform: ${(props) => props.open ? 'translateY(2px)' : ''};
  animation: ${tipEnter} 0.25s ease;
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    top: -0.05rem;
    left: 0.1rem;
    border-width:0 0.05rem 0.05rem;
    border-style:solid;
    border-color:transparent transparent #475053;
  }
`;
