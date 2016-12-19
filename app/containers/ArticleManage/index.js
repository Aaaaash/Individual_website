import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Editor from '../Editor';
import {
  changeArticleInfo,
  pushArticle,
  fetchAllArticle,
} from './actions';
import {
  selectAuthInfo,
  selectArticleInfo,
  selectArticleList,
  selectRequesting,
} from './selector';
import './iconfont.js';
import Loading from 'components/Loading';

class ArticleManage extends Component {
  componentDidMount() {
    // if (this.props.articleList.size === 0) this.props.onFetchAllArticle();
  }

  renderLoading = () =>
    <div className={styles.loading_container}>
      <Loading />
    </div>

  renderArticleList = (list) =>
    list.map((item, index) =>
      <li key={index}>
        <h4>{item.title}</h4>
        <span>{item.createAt}</span>
        <span>2343</span>
      </li>
    );

  render() {
    const {
      articleInfo,
      onArticleInfoChange,
      onArticlePush,
      articleList,
      requesting,
    } = this.props;
    return (
      <div className={styles.admin}>
        <div className={styles.article_list} key="a">
          <h3>文章列表
            <button className={styles.add_new}>
              新建
            </button>
          </h3>
          <ul className={styles.article_name}>
            {requesting
              ? this.renderLoading()
              : this.renderArticleList(articleList)}
          </ul>
        </div>
        <div className={styles.preview}>

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
};

const mapStateToProps = createStructuredSelector({
  authInfo: selectAuthInfo(),
  articleInfo: selectArticleInfo(),
  articleList: selectArticleList(),
  requesting: selectRequesting(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onArticleInfoChange: (val) => dispatch(changeArticleInfo(val)),
    onArticlePush: () => dispatch(pushArticle()),
    onFetchAllArticle: () => dispatch(fetchAllArticle()),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(ArticleManage);
