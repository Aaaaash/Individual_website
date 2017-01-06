import React, { Component } from 'react';

import {
  Chcek,
  CheckItem,
  CheckIcon,
} from './components';
import './iconfont.js';

class CheckBox extends Component {
  state = {
    checked: true,
  }
  render() {
    return (
      <Chcek>
        <CheckItem
          checked={this.state.checked}
          onClick={() => this.setState({ checked: !this.state.checked })}
        >
          {this.state.checked ?
            <CheckIcon>
              <use href="#icon-gou"></use>
            </CheckIcon> :
          null}
        </CheckItem>
      </Chcek>
    );
  }
}

export default CheckBox;
