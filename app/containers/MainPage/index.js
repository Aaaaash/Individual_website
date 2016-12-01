import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class MainPage extends Component {  // eslint-disable-line
  render() {
    return (
      <div>
        <button onTouchTap={() => browserHistory.push('/')}>zhuye</button>
      </div>
    );
  }
}

export default MainPage;
