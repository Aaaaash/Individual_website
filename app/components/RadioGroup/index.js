import React, { Component, PropTypes } from 'react';

import {
  Radio,
} from './components';

class RadioGroup extends Component {
  handleChangeRadio = (ev) => {
    this.props.changeCallBack(ev.target.value);
  }
  renderRadioGroup = (map) =>
    map.data.map((item, index) =>
      <label
        htmlFor={`radio${index}`}
        key={index}
        style={{
          verticalAlign: 'middle',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {item.label}
        <Radio
          type="radio"
          id={`radio${index}`}
          name={map.name}
          value={item.value}
          onChange={this.handleChangeRadio}
        />
      </label>
    );

// options: {
//   name: 'name',
//   data: [
//     value: 0,
//     label: '>',
//   ],
// }
  render() {
    const { options } = this.props;
    return (
      <p style={{ display: 'flex' }}>
        {this.renderRadioGroup(options)}
      </p>
    );
  }
}

RadioGroup.propTypes = {
  options: PropTypes.object,
  changeCallBack: PropTypes.func,
};

export default RadioGroup;
