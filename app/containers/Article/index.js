import React, { Component, PropTypes } from 'react';
import QueueAnim from 'rc-queue-anim';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import styles from './styles.css';
import {
  fetchAllArticle,
  changeSearchTitle,
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
    this.props.onFetchAllArticle();
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

  renderLoading = () =>
    <div className={styles.loading_container}>
      <Loading />
    </div>

  renderArticleItem = (list) =>
    list.map((item, index) =>
      <div className={styles.article_item} key={index} >
        <h3><button className={styles.title}>{item.title}</button></h3>
        <p className={styles.article_about}>
          {/* <span className={styles.label}>React</span> */}
          <span className={styles.label}>{item.tags}</span>
          <span className={styles.author}>{item.author}</span>
          <span className={styles.create_time}>{this.getTime(item.createAt)}</span>
        </p>
        <p    // eslint-disable-line
          className={styles.markdownBody}
        >
        {`${item.content.replace(reg, '').substr(0, 200)}...`}
        </p>
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
    onFetchAllArticle: () => dispatch(fetchAllArticle()),
    onSearchTitleChange: (val) => dispatch(changeSearchTitle(val)),
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
