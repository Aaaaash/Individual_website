import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import LeftNav from './LeftNav';

class MainPage extends Component {  // eslint-disable-line
  render() {
    const { children } = this.props;
    return (
      <div style={{ width: '100%', height: '100%' }}>
        <LeftNav />
        {children}
      </div>
    );
  }
}

export default MainPage;
