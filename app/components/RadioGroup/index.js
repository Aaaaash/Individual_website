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
      <label htmlFor={`radio${index}`} key={index}>
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

  render() {
    const { options } = this.props;
    return (
      <div>
        {this.renderRadioGroup(options)}
      </div>
    );
  }
}

RadioGroup.propTypes = {
  options: PropTypes.object,
  changeCallBack: PropTypes.func,
};

export default RadioGroup;
