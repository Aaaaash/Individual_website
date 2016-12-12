import styled from 'styled-components';

export const ArticleContainer = styled.div`
  margin-left: 1.25rem;
  margin-right: 0.5rem;
  flex-grow: 1;
`;

export const Article = styled.div`
  width: 50%;
  margin: 0.25rem auto;
  border-radius: 2px;
  background-color: #FFF;
  box-shadow: 0 1px 2px rgba(108, 108, 108, 0.24);
  padding: 0.25rem;
`;

export const Titlt = styled.p`
  font-size: 0.25rem;
  text-indent: 0.15rem;
  border-left: 4px solid #F45E6E;
`;

export const Label = styled.div`
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

export const Author = styled.span`
  font-size: 16px;
  color: #3A3A3A;
  margin-right: 0.15rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #F45E6E;
    transition: all 300ms;
  }
`;

export const Text = styled.span`
  font-size: 14px;
  color: #3A3A3A;
  margin-left: 0.1rem;
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
  margin-left: 0.1rem;
  font-size: 14px;
  color: #B4B4B4;
  font-style: italic;
`;

export const ArticleContent = styled.div`

`
