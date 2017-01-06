import React, { Component } from 'react';

import {
  Chcek,
  CheckItem,
  CheckIcon,
  CheckLabel,
} from './components';
import './iconfont.js';

class CheckBox extends Component {
  state = {
    checked: true,
  }
  render() {
    return (
      <Chcek onClick={() => this.setState({ checked: !this.state.checked })}>
        <CheckItem checked={this.state.checked} >
          {this.state.checked ?
            <CheckIcon>
              <use href="#icon-gou"></use>
            </CheckIcon> :
          null}
        </CheckItem>
        <CheckLabel>sakura</CheckLabel>
      </Chcek>
    );
  }
}

export default CheckBox;
