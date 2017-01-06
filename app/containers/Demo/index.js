import React, { Component } from 'react';

import Switch from 'components/Switch';
import DropMenu from 'components/DropMenu';

const options = [
  {
    value: 0,
    text: '测试数据',
  },
  {
    value: 1,
    text: '测试2',
  },
  {
    value: 2,
    text: '测试3',
  },
];

class Demo extends Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          flexDirection: 'column',
        }}
      >
        <Switch />
        <DropMenu
          options={options}
          value={2}
        />
      </div>
    );
  }
}

export default Demo;
