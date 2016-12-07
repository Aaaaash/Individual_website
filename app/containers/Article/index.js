import React, { Component } from 'react';
import HyperDown from 'hyperdown';
import QueueAnim from 'rc-queue-anim';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import styles from './styles.css';
import { fetchAllArticle } from './actions';
import { selectArticleList } from './selector';

const parser = new HyperDown();

class Article extends Component {
  componentDidMount() {
    this.props.onFetchAllArticle();
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.search}>
            <input placeholder="search some?" />
          </div>
          <div className={styles.article_list}>
            <QueueAnim type="bottom">
            <div className={styles.article_item} key="a" >
              <h3 className={styles.title}>React设计思想</h3>
              <p className={styles.article_about}>
                <span className={styles.label}>React</span>
                <span className={styles.label}>javascript</span>
                <span className={styles.author}>Sakura</span>
                <span className={styles.create_time}>2016-12-04</span>
              </p>
              <div
                className={styles.markdownBody}
                // dangerouslySetInnerHTML={{ __html: data }}
              >
              </div>
            </div>
            <div className={styles.article_item} key="b" >
              <h3 className={styles.title}>React设计思想</h3>
              <p className={styles.article_about}>
                <span className={styles.label}>React</span>
                <span className={styles.label}>javascript</span>
                <span className={styles.author}>Sakura</span>
                <span className={styles.create_time}>2016-12-04</span>
              </p>
              <div
                className={styles.markdownBody}
                // dangerouslySetInnerHTML={{ __html: data }}
              >
              </div>
            </div>
            </QueueAnim>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  articleList: selectArticleList(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onFetchAllArticle: () => dispatch(fetchAllArticle()),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(Article);
