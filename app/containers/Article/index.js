import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { Tag } from './styledComponents.js';
import styles from './styles.css';
import {
  changeSearchTitle,
  fetchAllArticle,
} from './actions';
import {
  selectArticleList,
  selectRequesting,
  selectSearchTitle,
} from './selector';
import Loading from 'components/Loading';

const reg = /[\\\`\*\_\[\]\#\+\-\!\>]/g;

class Article extends Component {
  componentDidMount() {
  }

  getTime = (time) => {
    if (time) {
      const date = new Date(Number(time) * 1000);
      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }
    return false;
  };

  handleSearchTitle = (ev) => {
    if (ev.keyCode === 108 || ev.keyCode === 13) {
      this.props.onFetchAllArticle();
    }
  }

  handleArticleDetail = (id) => {
    browserHistory.push(`/article/${id}`);
  }

  renderLoading = () =>
    <div className={styles.loading_container}>
      <Loading />
    </div>

  renderArticleItem = (list) =>
    list.map((item, index) =>
      <div className={styles.article_item} key={index} >
        <h3>
          <button
            className={styles.title}
            onTouchTap={() => this.handleArticleDetail(item._id)}
          >
            {item.title}
          </button>
        </h3>
        <p className={styles.article_about}>
          <Tag>{item.tags}</Tag>
          <span className={styles.author}>{item.author}</span>
          <span className={styles.create_time}>{this.getTime(item.createAt)}</span>
        </p>
        <p    // eslint-disable-line
          className={styles.markdownBody}
          onClick={() => browserHistory.push(`/article/${item._id}`)}
          title={`${item.content.replace(reg, '').substr(0, 100)}...`}
        >
          {`${item.content.replace(reg, '').substr(0, 500)}...`}
        </p>
        <div className={styles.foot_tool}>
          <a
            className={styles.more}
            href={`/article/${item._id}`} target="_Blank"
          >
            查看更多
          </a>
          <p>
            <button className={styles.thumbs_btn}>
              <i className="fa fa-thumbs-o-up"></i>
            </button>
            123
            <button className={styles.thumbs_btn}>
              <i className="fa fa-share-alt"></i>
            </button>
          </p>
        </div>
      </div>
    );

  render() {
    const {
      articleList,
      requesting,
      searchTitle,
      onSearchTitleChange,
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.search}>
            <input
              value={searchTitle}
              placeholder="search some?"
              onChange={(e) => onSearchTitleChange(e.target.value)}
              onKeyDown={this.handleSearchTitle}
            />
          </div>
          {
            requesting ?
              this.renderLoading() :
              <QueueAnim type="bottom" className={styles.article_list}>
                {this.renderArticleItem(articleList)}
              </QueueAnim>
          }
          <div className={styles.article_footer}>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  articleList: selectArticleList(),
  requesting: selectRequesting(),
  searchTitle: selectSearchTitle(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onSearchTitleChange: (val) => dispatch(changeSearchTitle(val)),
    onFetchAllArticle: () => dispatch(fetchAllArticle()),
  };
}

Article.propTypes = {
  articleList: PropTypes.array,
  requesting: PropTypes.bool,
  onFetchAllArticle: PropTypes.func,
  onSearchTitleChange: PropTypes.func,
  searchTitle: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchTpProps)(Article);
