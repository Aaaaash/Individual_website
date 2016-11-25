import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { browserHistory } from 'react-router';

import styles from './styles.css';

class RightMenu extends Component {
  render() {
    return (
      <QueueAnim type="right">
        <div className={styles.menu_container}>
          <QueueAnim type={['bottom', 'top']}>
            <p
              key="item1"
              className={styles.menu_item}
              onClick={() => browserHistory.push('/')}
            >
            主页</p>
            <p
              key="item2"
              className={styles.menu_item}
              onClick={() => browserHistory.push('/code')}
            >
            代码</p>
            <p
              key="item3"
              className={styles.menu_item}
              onClick={() => browserHistory.push('/')}
            >
            照片</p>
            <p
              key="item4"
              className={styles.menu_item}
              onClick={() => browserHistory.push('/')}
            >
            关于</p>
          </QueueAnim>
        </div>
      </QueueAnim>
    );
  }
}

export default RightMenu;
