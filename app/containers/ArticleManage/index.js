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
        <QueueAnim type="right" style={{ width: '100%', height: '100%' }}>
          <div className={styles.article_editor} key="aa">
            <div className={styles.article_btn}>
              <div className={styles.article_title}>
                <input placeholder="请输入文章标题" />
              </div>
              <div className={styles.btn}>
                <button className={styles.save}>全屏模式</button>
                <button className={styles.save}>保存</button>
                <button className={styles.release}>发布</button>
              </div>
            </div>
            <div className={styles.editor}>
              <textarea className={styles.input} onChange={this.handleRenderHTML}>
              </textarea>
              <div    // eslint-disable-line
                className={styles.markdown}
                dangerouslySetInnerHTML={{ __html: this.state.HTML }}
              >
              </div>
            </div>
          </div>
        </QueueAnim>
      </div>
    );
  }
}

export default ArticleManage;
