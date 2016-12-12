import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import Editor from '../Editor';
import {
  changeArticleInfo,
  pushArticle,
} from './actions';
import {
  selectAuthInfo,
  selectArticleInfo,
} from './selector';

class ArticleManage extends Component {
  render() {
    const { articleInfo, onArticleInfoChange, onArticlePush } = this.props;
    return (
      <div className={styles.admin}>
        <div className={styles.article_list} key="a">
          <h3>文章列表<button className={styles.add_new}>+</button></h3>
          <QueueAnim type="bottom" component="ul" className={styles.article_name}>
            <li key="a">
              <h4>React设计思想</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="b">
              <h4>React设计思想</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="c">
              <h4>React设计思想</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="d">
              <h4>React设计思想</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="e">
              <h4>React设计思想</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
          </QueueAnim>
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
};

const mapStateToProps = createStructuredSelector({
  authInfo: selectAuthInfo(),
  articleInfo: selectArticleInfo(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onArticleInfoChange: (val) => dispatch(changeArticleInfo(val)),
    onArticlePush: () => dispatch(pushArticle()),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(ArticleManage);
