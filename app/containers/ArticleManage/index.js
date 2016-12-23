import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Editor from '../Editor';
import {
  changeArticleInfo,
  pushArticle,
  fetchPrivateArticle,
  changeHightlightCurrent,
  fetchEditedArticle,
} from './actions';
import {
  selectAuthInfo,
  selectArticleInfo,
  selectPrivateArticle,
  selectHighlight,
} from './selector';
import './iconfont.js';
import Loading from 'components/Loading';
import {
  ArticleItem,
} from './components';

class ArticleManage extends Component {
  componentDidMount() {
    this.props.onFetchAllArticle();
  }

  handleChangeCurrent = (id) => {
    this.props.onChangeCurrent(id);
    this.props.onFetchEditedArticle();
  }

  handleCreateNewArticle = () => {
    this.props.onArticleInfoChange({
      title: '无标题',
      content: '',
      tags: '',
      published: false,
    });
    this.props.onChangeCurrent('');
  }

  renderArticleList = (list) =>
    list.map((item, index) =>
      <ArticleItem
        key={index}
        index={item._id}
        current={this.props.highlight}
        onClick={() => this.handleChangeCurrent(item._id)}
      >
        <h4 title={item.title}>{item.title}</h4>
        <span>{item.createAt}</span>
        <span>2343</span>
      </ArticleItem>
    );

  renderLoading = () =>
    <div className={styles.loading_container}>
      <Loading />
    </div>

  render() {
    const {
      articleInfo,
      onArticleInfoChange,
      onArticlePush,
      articleList,
    } = this.props;
    return (
      <div className={styles.admin}>
        <div className={styles.article_list} key="a">
          <h3>文章列表
            <button
              className={styles.add_new}
              onTouchTap={this.handleCreateNewArticle}
            >
              新建
            </button>
          </h3>
          <ul className={styles.article_name}>
            {this.renderArticleList(articleList)}
          </ul>
        </div>
        <Editor
          articleInfo={articleInfo}
          onArticleInfoChange={onArticleInfoChange}
          onArticlePush={onArticlePush}
        />
      </div>
    );
  }
}

ArticleManage.propTypes = {
  authInfo: PropTypes.object,
  articleInfo: PropTypes.object,
  onArticleInfoChange: PropTypes.func,
  onArticlePush: PropTypes.func,
  articleList: PropTypes.array,
  requesting: PropTypes.bool,
  onFetchAllArticle: PropTypes.func,
  highlight: PropTypes.string,
  onChangeCurrent: PropTypes.func,
  onFetchEditedArticle: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  authInfo: selectAuthInfo(),
  articleInfo: selectArticleInfo(),
  articleList: selectPrivateArticle(),
  highlight: selectHighlight(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onArticleInfoChange: (val) => dispatch(changeArticleInfo(val)),
    onArticlePush: () => dispatch(pushArticle()),
    onFetchAllArticle: () => dispatch(fetchPrivateArticle()),
    onChangeCurrent: (val) => dispatch(changeHightlightCurrent(val)),
    onFetchEditedArticle: () => dispatch(fetchEditedArticle()),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(ArticleManage);
