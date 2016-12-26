import styled, { keyframes } from 'styled-components';

export const ArticleItem = styled.li`
  padding-left: 0.25rem;
  cursor: pointer;
  height: 0.64rem;
  transition: all 250ms;
  position: relative;
  box-shadow: ${(props) => props.index === props.current ? '0 1px 0 #CCC inset;' : ''};
  background-color: ${(props) => props.index === props.current ? '#F7F8FA' : ''};
  &:hover {
    background-color: #F7F8FA;
    color: #323232;
  }
  &:active {
    box-shadow: 0 1px 0 #CCC inset;
  }
  > h4 {
    width: 85%;
    font-size: 0.16rem;
    margin: 0;
    line-height: 0.36rem;
    height: 0.36rem;
    color: #666;
    font-weight: normal;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > span {
    font-size: 0.12rem;
    color: #999;
    margin-right: 0.15rem;
  }
`;

const deleteAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const DeleteBtn = styled.button`
  width: 0.36rem;
  height: 0.36rem;
  right: 0.2rem;
  bottom: 0.05rem;
  font-size: 0.2rem;
  outline: none;
  cursor: pointer;
  position: absolute;
  color: #F45E6E;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  margin-left: 0.3rem;
  transition: all 200ms;
  &:active {
    
  }
  animation: ${deleteAni} 0.2s ease;
`;

export const NoData = styled.div`
  text-align: center;
  color: #999;
`;
