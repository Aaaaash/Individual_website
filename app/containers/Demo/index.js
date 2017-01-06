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
    text: '测试dada大大',
  },
  {
    value: 3,
    text: '测试达大厦',
  },
  {
    value: 4,
    text: '测试我去',
  },
  {
    value: 5,
    text: '测试反攻倒算',
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
