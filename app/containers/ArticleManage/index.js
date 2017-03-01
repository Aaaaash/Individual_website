import React, { Component, PropTypes } from 'react';
import styles from './styles.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { is } from 'immutable';

import Editor from '../Editor';
import {
  changeArticleInfo, pushArticle, fetchPrivateArticle,
  changeHightlightCurrent, fetchEditedArticle,
  deleteArticle, changeDialogDelete,
} from './actions';
import {
  selectAuthInfo, selectArticleInfo, selectPrivateArticle,
  selectHighlight, selectDeleteRequest, selectDialogState,
} from './selector';
import './iconfont.js';
import Loading from 'components/Loading';
import Dialog from 'components/Dialog';
import {
  ArticleItem,
  DeleteBtn,
  NoData,
} from './components';

class ArticleManage extends Component {
  state = {
    open: false,
  }
  componentDidMount() {
    this.props.onFetchAllArticle();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.props === nextProps || is(this.props, nextProps)) ||
      !(this.state === nextState || is(this.state, nextState));
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

  handleDeleteArticle = (ev) => {
    ev.stopPropagation();
    this.props.onDialogStateChange(true);
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
        {this.props.highlight === item._id ?
          <DeleteBtn onClick={this.handleDeleteArticle}>
            <i className="fa fa-trash"></i>
          </DeleteBtn> :
          null}

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
      dialogState,
      onDeleteArticle,
      onDialogStateChange,
      deleteRequest,
    } = this.props;
    return (
      <div className={styles.admin}>
        <Dialog
          changeDialogState={onDialogStateChange}
          dialogState={dialogState}
          articleTitle={articleInfo.title}
          submitCallBack={onDeleteArticle}
          requesting={deleteRequest}
        />
        <div className={styles.article_list}>
          <h3>文章列表
            <button
              className={styles.add_new}
              onTouchTap={this.handleCreateNewArticle}
            >
              新建
            </button>
          </h3>
          <ul className={styles.article_name}>
            {articleList.length === 0 ?
              <NoData><i className="fa fa-exclamation-circle"></i> 暂无数据</NoData> :
              this.renderArticleList(articleList)}
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
  onDeleteArticle: PropTypes.func,
  onDialogStateChange: PropTypes.func,
  dialogState: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  authInfo: selectAuthInfo(),
  articleInfo: selectArticleInfo(),
  articleList: selectPrivateArticle(),
  highlight: selectHighlight(),
  dialogState: selectDialogState(),
  deleteRequest: selectDeleteRequest(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onArticleInfoChange: (val) => dispatch(changeArticleInfo(val)),
    onArticlePush: () => dispatch(pushArticle()),
    onFetchAllArticle: () => dispatch(fetchPrivateArticle()),
    onChangeCurrent: (val) => dispatch(changeHightlightCurrent(val)),
    onFetchEditedArticle: () => dispatch(fetchEditedArticle()),
    onDeleteArticle: () => dispatch(deleteArticle()),
    onDialogStateChange: (val) => dispatch(changeDialogDelete(val)),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(ArticleManage);
