import styled from 'styled-components';

export const MainPageContainer = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    flex-direction: column;
  }
`;
