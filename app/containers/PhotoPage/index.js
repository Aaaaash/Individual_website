import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import styles from './styles.css';

class PhotoPage extends Component {
  render() {
    return (
      <QueueAnim
        type={['right', 'left']}
        ease={['easeOutQuart', 'easeInOutQuart']}
      >
        <div key="photo1">
          this is photo page!
        </div>
      </QueueAnim>
    );
  }
}

export default PhotoPage;
