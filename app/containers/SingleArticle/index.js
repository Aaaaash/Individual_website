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
} from './styledComponents';
import {
  selectCurrentArticle,
  selectRequesting,
  selectComments,
} from './selector';
import {
  fetchArticleContent,
  changeCurrentArticle,
  changeCommentInfo,
  submitComment,
} from './actions';
import Loading from 'components/Loading';
import styles from './styles.css';
const socket = io.connect('http://192.168.1.135:8000/');
socket.on('3q', function(msg) {
  console.log(msg);
});

class SingleArticle extends Component {
  componentDidMount() {
    const id = this.props.params.articleID;
    this.props.onCurrentArticleChange({ id });
    this.props.onFetchArticleContent();
  }

  handleSubmitComment = () => {
    this.props.onCommentSubmit();
    socket.emit('message', '客户端消息');
  }
  render() {
    const {
      currentArticle,
      requesting,
      comments,
      onCommentsChange,
      onCommentSubmit,
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
          <ReviewTit>共40条评论：</ReviewTit>
          <QueueAnim type="bottom">
            <ReviewItem key="a">
              <ReviewAuthTime>
                <ReviewAuth title="Misaka mikoto">Misaka mikoto:</ReviewAuth>
                <ReviewTime>2016-12-07</ReviewTime>
              </ReviewAuthTime>
              <AuthContent>上面这个例子中，我们先拿到了评论列表这个组件的一些基本数据。在应用程序一开始，创建了一个CommentBox组件，它包含一个用div标签包裹着的ul无序列表，而ul中的li则单独提取出来作为一个子组件被创建，也就是下面的CommentItem。而在父组件中并没有直接引用子组件，而是循环将数据绑定后再插入到ul中上面这个例子中，我们先拿到了评论列表这个组件的一些基本数据。在应用程序一开始，创建了一个CommentBox组件，它包含一个用div标签包裹着的ul无序列表，而ul中的li则单独提取出来作为一个子组件被创建，也就是下面的CommentItem。而在父组件中并没有直接引用子组件，而是循环将数据绑定后再插入到ul中</AuthContent>
            </ReviewItem>
          </QueueAnim>
          <EnterComment>
            <InputBox>
              <SingleInput
                type="text"
                placeholder="NickName"
                value={comments.nickname}
                onChange={(e) => onCommentsChange({ nickname: e.target.value })}
              />
              <SingleInput
                type="text"
                placeholder="Github"
                value={comments.personalWebsite}
                onChange={(e) => onCommentsChange({ personalWebsite: e.target.value })}
              />
            </InputBox>
            <CommentArea
              placeholder="Post your opinion"
              value={comments.commentContent}
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
  comments: PropTypes.object,
  onCommentSubmit: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  currentArticle: selectCurrentArticle(),
  requesting: selectRequesting(),
  comments: selectComments(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCurrentArticleChange: (val) => dispatch(changeCurrentArticle(val)),
    onFetchArticleContent: () => dispatch(fetchArticleContent()),
    onCommentsChange: (val) => dispatch(changeCommentInfo(val)),
    onCommentSubmit: () => dispatch(submitComment()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);
