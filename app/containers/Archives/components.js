import styled from 'styled-components';

export const ArchiveCon = styled.div`
  margin-left: 1.65rem;
  margin-right: 0.5rem;
  padding-top: 0.25rem;
  flex-grow: 1;
`;

export const ArchivesList = styled.div`
  width: 50%;
  border-radius: 2px;
  min-height: 1rem;
  margin: 0 auto;
  background-color: #FFF;
  border: 1px solid #FFF;
  padding: 0.25rem;
  box-shadow: 0 1px 3px rgba(0, 37, 55, 0.05);
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: auto;
    margin-left: 0.05rem;
    margin-right: 0.05rem;
  }
  @media only screen and (min-device-width : 1366px) and (max-device-width: 1600px) {
    width: 65%;
  }
}
`;

export const TimeLabel = styled.span`
  color: #F45E6E;
`;
