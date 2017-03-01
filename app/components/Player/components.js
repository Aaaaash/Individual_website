import styled from 'styled-components';

export const PlayerContainer = styled.div`
  width: 1160px;
  position: relative;
  background-color: #F8F8F8;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 8px 24px rgba(16, 22, 26, 0.2);
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const Controller = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(0,0,0,0.3);
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const ConButton = styled.button`
  width: 30px;
  height: 30px;
  font-size: 20px;
  font-weight: light;
  cursor: pointer;
  color: #DDD;
  transition: 200ms;
  &:hover {
    color: #F5F5F5;
  }
`;

export const ProgressBar = styled.p`
  flex: 1;
  height: 10px;
  margin: 0 10px;
  background-color: #5A5A5A;
`;

export const VolButton = styled.button`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: #DDD;
  cursor: pointer;
  font-size: 16px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    color: #F5F5F5;
  }
`;
