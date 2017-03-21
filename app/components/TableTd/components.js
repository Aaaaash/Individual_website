import styled, { keyframes } from 'styled-components';

const ani = keyframes`
  from {
    opacity: 0;
    transform: scaleY(0);
  }
  to {
    opacity: 1;
    transform: scaleY(1);
  }
`;

export const Arrow = styled.span`
  display: flex;
  margin: 0 5px;
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

export const Filter = styled.div`
  width: 250px;
  z-index: 100;
  top: 10px;
  padding: 10px 0;
  border-radius: 2px;
  position: absolute;
  font-size: 13px;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFF;
  opacity: ${(props) => props.close ? 0 : ''};
  transform: ${(props) => props.close ? 'scaleY(0)' : ''};
  transition: 250ms;
  transform-origin: left top 0;
  animation: ${ani} 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 37, 55, 0.3);
`;

export const FilterItem = styled.div`
  display: flex;
  height: 25px;
  margin: 5px 0;
  width: 100%;
  line-height: 25px;
  padding: 0 10px;
  justify-content: space-around;
  & > span {
    display: inline-block;
    min-width: 50px;
    text-align: center;
  }
  & > input {
    width: 80px;
    border: 1px solid #CCC;
    text-indent: 8px;
    transition: 250ms;
    border-radius: 2px;
    &:focus {
      border-color: #FF004F;
    }
  }
`;

export const Button = styled.button`
  width: 50px;
  height: 25px;
  line-height: 25px;
  border-radius: 2px;
  transition: 250ms;
  cursor: pointer;
  border: 1px solid #35A3E3;
  &:hover {
    background-color: #35A3E3;
  }
`;
