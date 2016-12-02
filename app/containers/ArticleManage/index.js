import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import HyperDown from 'hyperdown';

import styles from './styles.css';

const parser = new HyperDown();

class ArticleManage extends Component {
  state = {
    HTML: '',
  }
  handleRenderHTML = (e) => this.setState({ HTML: parser.makeHtml(e.target.value) });
  render() {
    return (
      <div className={styles.admin}>
        <div className={styles.article_list} key="a">
          <h3>Article List.<button className={styles.add_new}>+</button></h3>
          <QueueAnim type="left" component="ul" className={styles.article_name}>
            <li key="a">
              <h4>test title 1</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="b">
              <h4>test title 1</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="c">
              <h4>test title 1</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="d">
              <h4>test title 1</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
            <li key="e">
              <h4>test title 1</h4>
              <span>2016-12-2</span>
              <span>2343</span>
            </li>
          </QueueAnim>
        </div>
        <div className={styles.article_editor}>
          <div className={styles.article_btn}>
            <div className={styles.article_title}>
              <input placeholder="TITLE" />
            </div>
            <div className={styles.btn}>
              <button className={styles.save}>SAVE</button>
              <button className={styles.release}>RELEASE</button>
            </div>
          </div>
          <div className={styles.editor}>
            <textarea className={styles.input} onChange={this.handleRenderHTML}>
            </textarea>
            <div    // eslint-disable-line
              className={styles.output_mark}
              dangerouslySetInnerHTML={{ __html: this.state.HTML }}
            >
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default ArticleManage;
