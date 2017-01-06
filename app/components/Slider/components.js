import styled from 'styled-components';

export const SliderBox = styled.div`
  min-width: 2rem;
  position: relative;
`;

export const SliderBar = styled.div`
  width: 100%;
  height: 0.064rem;
  border-radius: 0.032rem;
  overflow: hidden;
  position: absolute;
  background: rgba(92, 112, 128, 0.2);
`;

export const SliderFullBar = styled.p`
  width: ${(props) => `${props.progress}%`};
  height: 0.064rem;
  background: #2E94B9;
`;

export const Slide = styled.span`
  width: 0.18rem;
  height: 0.18rem;
  display: inline-block;
  border-radius: 4px;
  border: 1px solid;
  border-color: rgba(16, 22, 26, 0.1) rgba(16, 22, 26, 0.1) rgba(16, 22, 26, 0.17) rgba(16, 22, 26, 0.1);
  background: ${(props) => props.checked ? 'linear-gradient(to bottom, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #2E94B9' : 'linear-gradient(to bottom, #ffffff, rgba(255, 255, 255, 0)) left no-repeat, center no-repeat #f5f8fa'};
  box-shadow: 0 1px 1px rgba(16, 22, 26, 0.1);
  outline: none;
`;

export const DragBar = styled.button`
  display: flex;
  position: absolute;
  top: -0.058rem;
  left: ${(props) => props.progress === 0 ? '-0.09rem' : `calc(${props.progress}% - 0.09rem)`};
  justify-content: center;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
`;

export const TipNum = styled.span`
  min-width: 0.16rem;
  height: 0.16rem;
  font-size: 0.12rem;
  position: relative;
  line-height: 0.16rem;
  color: #FFF;
  margin-top: 0.02rem;
  text-align: center;
  padding: 0 0.04rem;
  border-radius: 2px;
  display: inline-block;
  background-color: #475053;
  transition: 250ms;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
`;
