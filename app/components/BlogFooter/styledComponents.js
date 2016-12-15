import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.15rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Parea = styled.p`
  width: 100%;
  height: 0.36rem;
  margin-top: 0.15rem;
  line-height: 0.36rem;
  display: flex;
  justify-content: center;
`;

export const SvgIcon = styled.svg`
  width: 0.25rem;
  height: 0.25rem;
  margin: 0 0.15rem;
  cursor: pointer;
  vertical-align: -0.15rem;
  fill: currentColor;
  overflow: hidden;
  color: #4D4D4D;
  font-weight: bold;
  border-radius: 50%;
  border: 1px solid #CCC;
  padding: 0.05rem;
  box-sizing: content-box;
  &:hover {
    color: #E7E9ED;
    background-color: #4D4D4D;
    transition: all 300ms;
  }
`;

export const Text = styled.span`
  color: #4D4D4D;
  font-size: 0.12rem;
`;
