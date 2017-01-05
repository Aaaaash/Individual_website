import styled, { keyframes } from 'styled-components';

const layoutAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const dialogAni = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const DialogContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10001;
  display: flex;
  align-items: center;
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  transition: all 250ms;
  background-color: rgba(0,0,0,0.5);
  animation: ${layoutAni} 0.25s ease;
  opacity: ${(props) => props.close ? 0 : ''};
`;

export const DialogBox = styled.div`
  width: 4rem;
  height: 2.2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background-color: #FFF;
  border: 1px solid #FFF;
  z-index: 2;
  transition: all 250ms;
  box-shadow: 0 1px 3px rgba(0, 37, 55, 0.5);
  animation: ${dialogAni} 0.25s ease;
  opacity: ${(props) => props.close ? 0 : ''};
  transform: ${(props) => props.close ? 'translateY(-40px)' : ''};
`;

export const DialogTitle = styled.p`
  font-size: 0.14rem;
  padding: 0.1rem 0.15rem;
  border-bottom: 1px solid #dddedf;
`;

export const DialogContent = styled.div`
  padding: 0.15rem;
  height: 100%;
  color: #5D5D5D;
`;

export const DialogFooter = styled.div`
  height: 0.65rem;
  padding: 0.15rem;
  text-align: right;
`;

export const DialogBtn = styled.button`
  border-radius: 2px;
  padding: 0.05rem 0.15rem;
  margin-left: 0.15rem;
  color: #FFF;
  cursor: pointer;
  background-color: ${(props) => props.warning ? '#f17b87' : '#2E94B9' };
  transition: all 250ms;
  &:hover {
    background-color: ${(props) => props.warning ? '#F45E6E' : '#188db8' };;
  }
  &:active {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2),0 1px 4px rgba(0, 0, 0, 0.2);
  }
`;

export const WarnText = styled.span`
  color: #F45E6E;
  padding: 0 0.05rem;
  font-weight: bold;
`;
