import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import styles from './styles.css';

class TimeLine extends Component {
  render() {
    return (
      <section className={styles.timeline}>
        <QueueAnim type="bottom" className={styles.timeline_con}>
          <div className={styles.line_item} key="a">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="fa">
                Learn React.
              </div>
            </QueueAnim>
          </div>
          <div className={styles.line_item} key="b">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="fb">
                Learn React.
              </div>
            </QueueAnim>
          </div>
          <div className={styles.line_item} key="c">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="fc">
                Learn React.
              </div>
            </QueueAnim>
          </div>
          <div className={styles.line_item} key="d">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="fd">
                Learn React.
              </div>
            </QueueAnim>
          </div>
          <div className={styles.line_item} key="e">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="fe">
                Learn React.
              </div>
            </QueueAnim>
          </div>
          <div className={styles.line_item} key="f">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="ff">
                Learn React.
              </div>
            </QueueAnim>
          </div>
          <div className={styles.line_item} key="g">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="fg">
                Learn React.
              </div>
            </QueueAnim>
          </div>
          <div className={styles.line_item} key="h">
            <div className={styles.line_auth}>
              <p>Sakura</p>
              2016-12-3 13:04:18
            </div>
            <QueueAnim animConfig={{ rotateY: [0, 45] }}>
              <div className={styles.line_content} key="fh">
                Learn React.
              </div>
            </QueueAnim>
          </div>
        </QueueAnim>
      </section>
    );
  }
}


export default TimeLine;
