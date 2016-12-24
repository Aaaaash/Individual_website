import styled from 'styled-components';

export const ArticleItem = styled.li`
  padding-left: 0.25rem;
  cursor: pointer;
  height: 0.64rem;
  transition: all 250ms;
  position: relative;
  box-shadow: ${(props) => props.index === props.current ? '1px 1px 1px #CCC inset' : ''};
  background-color: ${(props) => props.index === props.current ? '#F7F8FA' : ''};
  &:hover {
    background-color: #F7F8FA;
    color: #323232;
  }
  &:active {
    box-shadow: 1px 1px 1px #CCC inset;
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

export const DeleteBtn = styled.button`
  width: 0.36rem;
  height: 0.36rem;
  right: 0.2rem;
  top: 0.2rem;
  font-size: 0.2rem;
  outline: none;
  cursor: pointer;
  position: absolute;
  color: #666;
  margin-left: 0.3rem;
  transition: all 200ms;
  &:hover {
    color: #333;
  }
  &:active {
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  }
`;
