import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import LeftNav from './LeftNav';
import Article from './Article';

class MainPage extends Component {  // eslint-disable-line
  render() {
    return (
      <div>
        <LeftNav />
        <Article />
      </div>
    );
  }
}

export default MainPage;
