import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import styles from './styles.css';

class CodePage extends Component {

  render() {
    return (
      <QueueAnim
        type={['right', 'left']}
        ease={['easeOutQuart', 'easeInOutQuart']}
      >
      <div className={styles.code_container} key="code1" >
        <p>this is code page</p>
      </div>
      </QueueAnim>
    )
  }
}

export default CodePage;
