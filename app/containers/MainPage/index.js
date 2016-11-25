import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { Parallax } from 'rc-scroll-anim';

import MainContent from './MainContent';
import styles from './styles.css';
import bgImg from './bg.jpg';

class MainPage extends Component {
  render() {
    return (
      <QueueAnim type="top">
        <div
          key="ani1"
          className={styles.main_container}
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <h3 className={styles.main_tit}>
            <a>I look forward to the future.</a>
          </h3>
        </div>
        <MainContent />
      </QueueAnim>
    );
  }
}

export default MainPage;
