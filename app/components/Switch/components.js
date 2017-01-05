import styled from 'styled-components';

export const SwitchBar = styled.p`
  width: 0.56rem;
  height: 0.3rem;
  background-color: #A5A5A5;
  border-radius: 0.15rem;
  padding: 0.02rem;
  cursor: pointer;
  transition: 250ms;
  background-color: ${(props) => props.open ? '#2E94B9' : '#A5A5A5'};
`;

export const Ball = styled.span`
  height: 0.26rem;
  width: 0.26rem;
  line-height: 0.3rem;
  display: inline-block;
  border-radius: 50%;
  background-color: #FFF;
  transition: 250ms ease-out;
  box-shadow: 0 2px 4px 0 rgba(16, 22, 26, 0.2);
  transform: ${(props) => props.open ? 'translateX(0.26rem)' : 'translateX(0)'};
`;
