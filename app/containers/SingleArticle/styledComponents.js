import styled from 'styled-components';

export const ArticleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex-grow: 1;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    margin: 0;
  }
`;

export const Article = styled.div`
  width: 50%;
  margin: 0.25rem auto;
  border-radius: 2px;
  background-color: #FFF;
  box-shadow: 0 1px 2px rgba(108, 108, 108, 0.24);
  padding: 0.25rem;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: 100%;
    margin: 0 auto;
  }
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
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 0.25rem;
`;

export const LoadingCon = styled.div`
  width: 50%;
  height: 250px;
  margin: 0.25rem auto;
  position: relative;
`;

export const ReviewCon = styled.div`
  width: 50%;
  margin: 0 auto;
  padding: 0 0.25rem;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: 100%;
    margin-top: 0.25rem;
  }
`;

export const ReviewTit = styled.p`
  width: 100%;
  height: 0.36rem;
  line-height: 0.36rem;
  color: #5A5A5A;
  border-bottom: 1px solid #E6E9ED;
`;

export const ReviewItem = styled.div`
  width: 100%;
  display: flex;
  margin-top: 0.15rem;
`;

export const ReviewAuthTime = styled.div`
  
`;

export const ReviewAuth = styled.p`
  color: #F45E6E;
  width: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ReviewTime = styled.p`
  font-size: 12px;
  color: #B4B4B4;
  font-style: italic;
`;

export const AuthContent = styled.p`
  margin-left: 0.15rem;
  font-size: 0.12rem;
  color: #757575;
  line-height: 0.24rem;
`;

export const EnterComment = styled.div`
  width: 100%;
  height: 1.25rem;
  margin-top: 0.25rem;
`;

export const CommentArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  outline: none;
  padding: 0.15rem;
  color: #4D4D4D;
  font-size: 0.12rem;
  line-height: 0.25rem;
  border-radius: 2px;
  border: 1px solid #E6E9ED;
  &:focus {
    border-color: #00BAD2;
    transition: all 350ms;
  }
`;
