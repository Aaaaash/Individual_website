import styled from 'styled-components';

export const ArticleContainer = styled.div`
  margin-left: 1.25rem;
  margin-right: 0.5rem;
  flex-grow: 1;
`;

export const Article = styled.div`
  width: 55%;
  margin: 0.25rem auto;
  border-radius: 2px;
  height: 5.25rem;
  padding: 0.25rem;
`;

export const Titlt = styled.p`
  font-size: 0.25rem;
  text-indent: 0.15rem;
  border-left: 4px solid #F45E6E;
`;

export const Label = styled.p`
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

export const Author = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #3A3A3A;
  margin-right: 0.15rem;
`;

export const Tags = styled.span`

`;

export const Tag = styled.span`
  font-size: 14px;
  margin-right: 0.15rem;
  border: 1px solid #F45E6E;
  padding: 0.02rem 0.1rem;
  cursor: pointer;
  border-radius: 1rem;
  &:hover {
    background-color: #F45E6E;
    color: #FFF;
    transition: all 200ms;
  }
`;

export const TimeLabel = styled.span`
  margin-left: 0.25rem;
  font-weight: normal;
  font-size: 14px;
  color: #B4B4B4;
  font-style: italic;
`;

export const ArticleContent = styled.div`

`
