import React, { Component, PropTypes } from 'react';
import HyperDown from 'hyperdown';
import QueueAnim from 'rc-queue-anim';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import styles from './styles.css';
import { fetchAllArticle } from './actions';
import { selectArticleList, selectRequesting } from './selector';
import Loading from 'components/Loading';
const parser = new HyperDown();

class Article extends Component {
  componentDidMount() {
    this.props.onFetchAllArticle();
  }

  renderLoading = () =>
    <Loading />

  renderArticleItem = (list) =>
    list.map((item, index) =>
      <div className={styles.article_item} key={index} >
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.article_about}>
          {/* <span className={styles.label}>React</span> */}
          <span className={styles.label}>{item.tags}</span>
          <span className={styles.author}>{item.author}</span>
          <span className={styles.create_time}>{item.createAt}</span>
        </p>
        <div    // eslint-disable-line
          className={styles.markdownBody}
          dangerouslySetInnerHTML={{ __html: parser.makeHtml(item.content) }}
        >
        </div>
      </div>
    );
  render() {
    const { articleList, requesting } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.search}>
            <input placeholder="search some?" />
          </div>
          <QueueAnim type="bottom" className={styles.article_list}>
            {requesting ? this.renderLoading() : this.renderArticleItem(articleList)}
          </QueueAnim>
          <div className={styles.article_footer}>
            test
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  articleList: selectArticleList(),
  requesting: selectRequesting(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onFetchAllArticle: () => dispatch(fetchAllArticle()),
  };
}

Article.propTypes = {
  articleList: PropTypes.array,
  requesting: PropTypes.bool,
  onFetchAllArticle: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchTpProps)(Article);
