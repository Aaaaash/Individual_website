import styled from 'styled-components';

export const Arrow = styled.span`
  display: flex;
  margin-left: 5px;
  flex-direction: column;
  justify-content: center;
  & > i {
    line-height: 10px;
    cursor: pointer;
    color: #A5A5A5;
    transition: 250ms;
    &:hover {
      color: #4B4B4B;
    }
  }
`;
