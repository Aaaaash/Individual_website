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
  Paper,
  PageJump,
  PageBtn,
  NoData,
  Nocomment,
  LoadTitlt,
  LoadAuth,
  LoadArticle,
} from './styledComponents';
import {
  selectCurrentArticle,
  selectRequesting,
  selectComment,
  selectComments,
  selectMetaData,
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
import BlogFooter from 'components/BlogFooter';

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

  getTime = (time) => {
    if (time) {
      const date = new Date(Number(time) * 1000);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    return false;
  };

  handleSubmitComment = () => {
    this.props.onCommentSubmit();
    // socket.emit('message', '客户端消息');
  }

  handleJumpPage = (title, id) => {
    browserHistory.push(`/article/${id}`);
    this.props.onCurrentArticleChange({ id, title });
    this.props.onFetchArticleContent();
    this.props.onFetchComments();
  }

  renderLoadingBackground = () =>
    <LoadingCon>
      <LoadTitlt />
      <LoadAuth />
      <LoadArticle />
    </LoadingCon>

  renderCommentsList = (list) => {
    if (list.length === 0) {
      return <Nocomment>暂无评论!</Nocomment>;
    }
    return (
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
              说：
            </ReviewAuth>
            <ReviewTime>{this.getTime(item.createAt)}</ReviewTime>
          </ReviewAuthTime>
          <AuthContent>{item.commentContent}</AuthContent>
        </ReviewItem>
      )
    );
  }

  render() {
    const {
      currentArticle,
      requesting,
      comment,
      onCommentsChange,
      comments,
      metaData,
    } = this.props;
    return (
      <ArticleContainer>
        {
          requesting ?
            this.renderLoadingBackground() :
            <Article>
              <Titlt>{currentArticle.title}</Titlt>
              <Label>
                <p>
                  <Author>
                    {currentArticle.author}
                  </Author>
                  <Text>发布于</Text>
                  <TimeLabel>{this.getTime(currentArticle.createAt)}</TimeLabel>
                </p>
                <div>
                  <Tag>{currentArticle.tags}</Tag>
                </div>
              </Label>
              <ArticleContent>
                <div
                  className={styles.output}
                  dangerouslySetInnerHTML={{ __html: marked(currentArticle.content) }}
                >
                </div>
              </ArticleContent>
            </Article>
        }
        <Paper>
          <PageJump>
            {metaData.prev === null ?
              <NoData>已经是第一篇</NoData> :
              <PageBtn
                onClick={() => this.handleJumpPage(metaData.prev.title, metaData.prev.id)}
              >
                上一篇：{metaData.prev.title}
              </PageBtn>}
          </PageJump>
          <PageJump>
            {metaData.next === null ?
              <NoData>已经是最后一篇</NoData> :
              <PageBtn
                onClick={() => this.handleJumpPage(metaData.next.title, metaData.next.id)}
              >
                下一篇：{metaData.next.title}
              </PageBtn>}
          </PageJump>
        </Paper>
        <ReviewCon>
          <ReviewTit>共{comments.length}条评论：</ReviewTit>
          {this.renderCommentsList(comments)}
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
        <BlogFooter />
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
  metaData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentArticle: selectCurrentArticle(),
  requesting: selectRequesting(),
  comment: selectComment(),
  comments: selectComments(),
  metaData: selectMetaData(),
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
