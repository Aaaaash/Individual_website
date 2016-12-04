import React, { Component } from 'react';
import HyperDown from 'hyperdown';
import QueueAnim from 'rc-queue-anim';

import styles from './styles.css';
const parser = new HyperDown();
const data = parser.makeHtml("[原文](https://github.com/react-guide/react-basic/blob/master/README.md)\n\u003e 译者序：本文是 React 核心开发者、有 React API 终结者之称的 Sebastian Markbåge 撰写，阐述了他设计 React 的初衷。阅读此文，你能站在更高的高度思考 React 的过去、现在和未来。原文地址：https://github.com/reactjs/react-basic\n\n我写此文是想正式地阐述我心中 React 的[心智模型](http://baike.baidu.com/view/2333986.htm)。目的是解释为什么我们会这样设计 React，同时你也可以根据这些论点反推出 React。\n\n不可否认，此文中的部分论据或前提尚存争议，而且部分示例的设计可能存在 bug 或疏忽。这只是正式确定它的最初阶段。如果你有更好的完善它的想法可以随时提交 pull request。本文不会介绍框架细节中的奇技淫巧，相信这样能提纲挈领，让你看清 React 由简单到复杂的设计过程。\n\nReact.js 的真实实现中充满了具体问题的解决方案，渐进式的解法，算法优化，历史遗留代码，debug 工具以及其他一些可以让它真的具有高可用性的内容。这些代码可能并不稳定，因为未来浏览器的变化和功能权重的变化随时面临改变。所以具体的代码很难彻底解释清楚。\n\n我偏向于选择一种我能完全 hold 住的简洁的心智模型来作介绍。\n\n## 变换（Transformation）\n\n设计 React 的核心前提是认为 UI 只是把数据通过映射关系变换成另一种形式的数据。同样的输入必会有同样的输出。这恰好就是纯函数。\n\n```js\nfunction NameBox(name) {\n  return { fontWeight: 'bold', labelContent: name };\n}\n```\n\n```\n'Sebastian Markbåge' -\u003e\n{ fontWeight: 'bold', labelContent: 'Sebastian Markbåge' };\n```");

class Article extends Component {
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
                dangerouslySetInnerHTML={{ __html: data }}
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
                dangerouslySetInnerHTML={{ __html: data }}
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

export default Article;
