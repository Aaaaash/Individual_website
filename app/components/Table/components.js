import styled from 'styled-components';

export const TableCon = styled.div`
  width: 90%;
  background-color: #FFF;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);
`;

export const Thead = styled.ul`
  height: 60px;
  line-height: 60px;
  font-size: 14px;
  display: flex;
  padding: 0 25px;
  background-color: #F7F7F7;
  & > li {
    list-style: none;
    flex: 1;
    display: flex;
  }
`;

export const Tbody = styled.ul`
  padding: 0 25px;
`;

export const Th = styled.li`
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  list-style: none;
  border-top: 1px solid #E9E9E9;
  transition: 250ms;
  cursor: pointer;
  & > span {
    flex: 1;
  }
  &:hover {
    background-color: #F7F7F7;
  }
`;

