import styled from 'styled-components';

const full = '100%';
const borderRadius = '2px';
const whiteColor = '#FFF';
const boxShadow = '0 1px 3px rgba(0, 37, 55, 0.05)';
const smMargin = '0.15rem';
const bgMargin = '0.25rem';
const mainColor = '#2E94B9';
const secondColor = '#F45E6E';

export const ArticleContainer = styled.div`
  width: ${full};
  position: relative;
  margin-left: 0.6rem;
  flex-grow: 1;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    margin-top: 0.64rem;
    margin-left: 0;
  }
`;

export const Article = styled.div`
  width: 50%;
  margin: ${bgMargin} auto;
  border-radius: ${borderRadius};
  background-color: ${whiteColor};
  border: 1px solid ${whiteColor};
  box-shadow: ${boxShadow};
  padding: ${bgMargin};
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: ${full};
    margin: 0 auto;
  };
  @media only screen and (min-device-width : 1366px) and (max-device-width : 1600px) {
    width: 65%;
  };
`;

export const Titlt = styled.p`
  font-size: 0.2rem;
  text-indent: ${smMargin};
  border-left: 4px solid ${secondColor};
`;

export const Label = styled.div`
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
`;

export const Author = styled.span`
  font-size: 0.14rem;
  color: #3A3A3A;
  margin-right: ${smMargin};
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    text-decoration: underline;
    color: ${secondColor};
  }
`;

export const Text = styled.span`
  font-size: 0.14rem;
  color: #3A3A3A;
  margin-left: 0.1rem;
`;

export const Tag = styled.span`
  font-size: 0.14rem;
  margin-right: ${smMargin};
  border: 1px solid ${secondColor};
  padding: 0.02rem 0.1rem;
  cursor: pointer;
  border-radius: 1rem;
  transition: all 200ms;
  &:hover {
    background-color: ${secondColor};
    color: ${whiteColor};
  }
`;

export const TimeLabel = styled.span`
  margin-left: 0.1rem;
  height: 0.36rem;
  line-height: 0.36rem;
  font-size: 0.14rem;
  color: #B4B4B4;
`;

export const ArticleContent = styled.div`
  width: ${full};
  height: ${full};
  position: relative;
  margin-top: ${bgMargin};
`;

export const LoadingCon = styled.div`
  width: 50%;
  margin: ${bgMargin} auto;
  border-radius: ${borderRadius};
  background-color: ${whiteColor};
  border: 1px solid ${whiteColor};
  box-shadow: ${boxShadow};
  padding: ${bgMargin};
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: ${full};
    margin: 0 auto;
  };
  @media only screen and (min-device-width : 1366px) and (max-device-width : 1600px) {
    width: 65%;
  };
`;

export const LoadTitlt = styled.p`
  width: ${(props) => props.width};
  height: 0.2rem;
  margin-top: 0.15rem;
  background-color: rgb(241, 241, 241);
`;

export const ReviewCon = styled.div`
  width: 50%;
  margin: .25rem auto;
  padding: ${bgMargin};
  border: 1px solid ${whiteColor};
  box-shadow: ${boxShadow};
  background-color: ${whiteColor};
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: ${full};
    margin-top: ${bgMargin};
  }
  @media only screen and (min-device-width : 1366px) and (max-device-width : 1600px) {
    width: 65%;
  };
`;

export const ReviewTit = styled.p`
  width: ${full};
  height: 0.36rem;
  line-height: 0.36rem;
  color: #5A5A5A;
  border-bottom: 1px solid #E6E9ED;
`;

export const ReviewList = styled.div`

`;

export const ReviewItem = styled.div`
  width: ${full};
  display: flex;
  margin-top: 0.1rem;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    flex-direction: column;
  }
`;

export const ReviewAuthTime = styled.div`
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const ReviewAuth = styled.p`
  color: #5A5A5A;
  width: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: 2.25rem;
  }
`;

export const LinkUrl = styled.a`
  color: ${secondColor};
  cursor: pointer;
  text-decoration: none;
  padding: 0 0.05rem;
  &:hover {
    text-decoration: underline;
  }
`;

export const ReviewTime = styled.p`
  font-size: 12px;
  color: #B4B4B4;
  margin-left: 0.05rem;
`;

export const AuthContent = styled.p`
  margin-left: ${smMargin};
  font-size: 0.12rem;
  color: #757575;
  line-height: 0.24rem;
  justify-content: space-between;
`;

export const EnterComment = styled.div`
  width: ${full};
  margin-top: ${smMargin};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const InputBox = styled.p`
  width: ${full};
  margin: ${smMargin} 0;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const SingleInput = styled.input`
  width: 48%;
  height: 0.36rem;
  line-height: 0.36rem;
  outline: none;
  padding: 0 0.08rem;
  border-radius: ${borderRadius};
  border: 1px solid #E6E9ED;
  transition: all 350ms;
  &:focus {
    border-color: ${mainColor};
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: ${full};
    height: 0.45rem;
    line-height: 0.45rem;
    margin-bottom: ${smMargin};
  }
`;

export const CommentArea = styled.textarea`
  width: ${full};
  height: 1.25rem;
  resize: none;
  outline: none;
  padding: ${smMargin};
  color: #4D4D4D;
  font-size: 0.12rem;
  line-height: ${bgMargin};
  border-radius: ${borderRadius};
  border: 1px solid #E6E9ED;
  transition: all 350ms;
  &:focus {
    border-color: ${mainColor};
  }
`;

export const SubmitBtn = styled.button`
  width: 0.75rem;
  height: 0.36rem;
  line-height: 0.36rem;
  margin-top: ${smMargin};
  border-radius: ${borderRadius};
  color: ${whiteColor};
  outline: none;
  cursor: pointer;
  background-color: ${mainColor};
  box-shadow: 0 1px 2px rgba(108, 108, 108, 0.24);
  transition: all 200ms;
  &:hover {
    background-color: #188db8;
  }
  &:active {
    box-shadow: 0 2px 4px rgba(108, 108, 108, 0.24);
  }
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: 1rem;
    height: 0.45rem;
    line-height: 0.45rem;
  }
`;

export const Paper = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: ${full};
    display: block;
    padding-left: 0.45rem;
    margin-top: ${bgMargin};
  }
  @media only screen and (min-device-width : 1366px) and (max-device-width : 1600px) {
    width: 65%;
  };
`;
export const PageJump = styled.div`
  width: 50%;
  height: 0.65rem;
  line-height: 0.65rem;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    width: ${full};
    height: 0.36rem;
    line-height: 0.36rem;
  }
`;

export const PageBtn = styled.button`
  width: ${full};
  height: ${full};
  font-size: 0.16rem;
  color: #757575
  cursor: pointer;
  text-align: left;
  outline: none;
  transition: all 300ms;
  &:hover {
    color: ${mainColor};
  }
  &:active {
    color: ${mainColor};
  }
`;

export const NoData = styled.p`
  width: ${full};
  height: ${full};
  text-align: center;
  font-size: 0.16rem;
  color: #CCC;
  @media only screen and (min-device-width : 320px) and (max-device-width : 736px) {
    text-align: left;
  }
`;

export const Nocomment = styled.p`
  width: ${full};
  height: 0.64rem;
  line-height: 0.64rem;
  font-zie: 0.16rem;
  color: #757575;
  text-align: center;
`;
