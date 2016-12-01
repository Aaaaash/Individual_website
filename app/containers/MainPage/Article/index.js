import React, { Component } from 'react';

import styles from './styles.css';

class Article extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.article}>
          <h3>test title</h3>
        </div>
      </div>
    );
  }
}

export default Article;
