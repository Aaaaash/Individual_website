import React, { Component } from 'react';
import TopFixedNav from 'containers/TopFixedNav';
import 'antd/dist/antd.min.css';

class HomePage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <TopFixedNav />
        <div style={{ padding: '35px', marginLeft: '85px' }}>
          {children}
        </div>
      </div>
    );
  }
}

export default HomePage;
