import styled, { keyframes } from 'styled-components';

const dropAni = keyframes`
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DropBox = styled.button`
  min-width: 1.25rem;
  height: 0.3rem;
  border-radius: 1px;
  background: linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #f5f8fa;
  box-shadow: 0 1px 1px 0 rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2);
  transition: 250ms;
  cursor: pointer;
  display: flex;
  padding: 0 0.1rem;
  justify-content: space-between;
  color: #4D4D4D;
  &:hover {
    color: #495664;
  }
`;

export const DropText = styled.p`
  line-height: 0.3rem;
`;

export const SvgIcon = styled.svg`
  width: 0.1rem;
  height: 0.3rem;
  fill: currentColor;
  overflow: hidden;
  box-sizing: content-box;
  transition: 200ms;
  transform: ${(props) => props.open ? 'rotate(0)' : 'rotate(-90deg)'};
`;

export const Item = styled.div`
  width: 100%;
  position: absolute;
  overflow: hidden;
  line-height: 0.3rem;
  background-color: #FFF;
  box-shadow: 0 1px 1px 0 rgba(16, 22, 26, 0.1), 0 1px 1px rgba(16, 22, 26, 0.2);
  border-radius: 0 0 1px 1px;
  animation: ${dropAni} 0.2s ease;
`;

export const DropItem = styled.p`
  cursor: pointer;
  padding: 0 0.1rem;
  &:hover {
    background-color: #2E94B9;
    color: #FFF;
  }
`;

export const Container = styled.div`
  position: relative;
`;
