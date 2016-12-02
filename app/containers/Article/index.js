import React, { Component } from 'react';
import HyperDown from 'hyperdown';

import styles from './styles.css';
const parser = new HyperDown();

class Article extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.article}>
          <div className={styles.search}>
            <input placeholder="search some?" />
          </div>
          <div className={styles.article_list}>
            <div className={styles.article_item} >
              <div
                className={styles.markdownBody}
                // dangerouslySetInnerHTML={{ __html: this.state.html }}
              >
                null
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
