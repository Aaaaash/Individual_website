import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import HyperDown from 'hyperdown';
import styles from './styles.css';

const parser = new HyperDown();
import Editor from '../Editor';
class ArticleManage extends Component {
  state = {
    HTML: '',
  }
  handleRenderHTML = (e) => this.setState({ HTML: parser.makeHtml(e.target.value) });
  render() {
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
        <Editor />
      </div>
    );
  }
}

export default ArticleManage;
