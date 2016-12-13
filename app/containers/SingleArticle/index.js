import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import { browserHistory } from 'react-router';
import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: (code) => hljs.highlightAuto(code).value,
});

import {
  ArticleContainer,
  Article,
  Titlt,
  Label,
  Tag,
  TimeLabel,
  Author,
  ArticleContent,
  Text,
  ReviewCon,
  LoadingCon,
  ReviewItem,
  ReviewTit,
  ReviewAuth,
  AuthContent,
  ReviewAuthTime,
  ReviewTime,
  EnterComment,
  CommentArea,
  SubmitBtn,
  InputBox,
  SingleInput,
  LinkUrl,
} from './styledComponents';
import {
  selectCurrentArticle,
  selectRequesting,
  selectComment,
  selectComments,
} from './selector';
import {
  fetchArticleContent,
  changeCurrentArticle,
  changeCommentInfo,
  submitComment,
  fetchCommentsList,
} from './actions';
import Loading from 'components/Loading';
import styles from './styles.css';
// const socket = io.connect('http://192.168.1.135:8000/');
// socket.on('3q', function(msg) {
//   console.log(msg);
// });

class SingleArticle extends Component {
  componentDidMount() {
    const id = this.props.params.articleID;
    this.props.onCurrentArticleChange({ id });
    this.props.onFetchArticleContent();
    this.props.onFetchComments();
  }

  handleSubmitComment = () => {
    this.props.onCommentSubmit();
    // socket.emit('message', '客户端消息');
  }

  renderCommentsList = (list) =>
    list.map((item, index) =>
      <ReviewItem key={index}>
        <ReviewAuthTime>
          <ReviewAuth title={item.nickname}>
            <LinkUrl
              target="_Blank"
              href={item.personalWebsite}
            >
              {item.nickname}
            </LinkUrl>
          </ReviewAuth>
          <ReviewTime>{item.createAt}</ReviewTime>
        </ReviewAuthTime>
        <AuthContent>{item.commentContent}</AuthContent>
      </ReviewItem>
    );
  render() {
    const {
      currentArticle,
      requesting,
      comment,
      onCommentsChange,
      comments,
    } = this.props;
    return (
      <ArticleContainer>
        <Article>
          <Titlt>{currentArticle.title}</Titlt>
          <Label>
            <p>
              <Author>
                {currentArticle.author}
              </Author>
              <Text>发布于</Text>
              <TimeLabel>{currentArticle.createAt}</TimeLabel>
            </p>
            <div>
              <Tag>JavaScript</Tag>
            </div>
          </Label>
          {requesting ?
            <LoadingCon>
              <Loading />
            </LoadingCon> :
            <ArticleContent>
              <div
                className={styles.output}
                dangerouslySetInnerHTML={{ __html: marked(currentArticle.content) }}
                >
              </div>
            </ArticleContent>
          }
        </Article>
        <ReviewCon>
          <ReviewTit>共{comments.length}条评论：</ReviewTit>
          <QueueAnim type="bottom">
            {this.renderCommentsList(comments)}
          </QueueAnim>
          <EnterComment>
            <InputBox>
              <SingleInput
                type="text"
                placeholder="NickName"
                value={comment.nickname}
                onChange={(e) => onCommentsChange({ nickname: e.target.value })}
                />
              <SingleInput
                type="text"
                placeholder="Github"
                value={comment.personalWebsite}
                onChange={(e) => onCommentsChange({ personalWebsite: e.target.value })}
                />
            </InputBox>
            <CommentArea
              placeholder="Post your opinion"
              value={comment.commentContent}
              onChange={(e) => onCommentsChange({ commentContent: e.target.value })}
              />
            <SubmitBtn
              onClick={this.handleSubmitComment}
              >
              提交评论
            </SubmitBtn>
          </EnterComment>
        </ReviewCon>
      </ArticleContainer>
    );
  }
}

SingleArticle.propTypes = {
  currentArticle: PropTypes.object,
  requesting: PropTypes.bool,
  onCurrentArticleChange: PropTypes.func,
  onFetchArticleContent: PropTypes.func,
  params: PropTypes.object,
  onCommentsChange: PropTypes.func,
  comment: PropTypes.object,
  onCommentSubmit: PropTypes.func,
  onFetchComments: PropTypes.func,
  comments: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  currentArticle: selectCurrentArticle(),
  requesting: selectRequesting(),
  comment: selectComment(),
  comments: selectComments(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCurrentArticleChange: (val) => dispatch(changeCurrentArticle(val)),
    onFetchArticleContent: () => dispatch(fetchArticleContent()),
    onCommentsChange: (val) => dispatch(changeCommentInfo(val)),
    onCommentSubmit: () => dispatch(submitComment()),
    onFetchComments: () => dispatch(fetchCommentsList()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);
