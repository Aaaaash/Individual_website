import React, { Component } from 'react';

import {
  SwitchBar,
  Ball,
} from './components';

class Switch extends Component {
  state = {
    open: true,
  }
  render() {
    return (
      <SwitchBar
        onClick={() => this.setState({ open: !this.state.open })}
        open={this.state.open}
      >
        <Ball
          open={this.state.open}
        />
      </SwitchBar>
    );
  }
}

export default Switch;
