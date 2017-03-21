import React, { Component } from 'react';

import Switch from 'components/Switch';
import DropMenu from 'components/DropMenu';
import RadioGroup from 'components/RadioGroup';
import ChcekBox from 'components/CheckBox';
import Slider from 'components/Slider';
import Player from 'components/Player';
import Table from 'components/Table';

const maps = [
  { title: '余额', iSorter: true, letter: 'amount', filter: true },
  { title: '支出', iSorter: true, letter: 'pay_amount', filter: true },
  { title: '税额', letter: 'his', filter: true },
  { title: '啥玩意', letter: 'state' },
  { title: '时间', letter: 'time' },
  { title: '其他', letter: 'tallage' },
];

class Demo extends Component {
  state = {
    data: [
      { amount: 1125, pay_amount: -123, his: 0, state: 3, time: 1489634255, tallage: 0 },
      { amount: 1138, pay_amount: -13, his: 0, state: 3, time: 1489634256, tallage: 0 },
      { amount: 1170, pay_amount: -32, his: 0, state: 3, time: 1489634256, tallage: 0 },
      { amount: 1182, pay_amount: -12, his: 0, state: 3, time: 1489634257, tallage: 0 },
      { amount: 1194, pay_amount: -12, his: 0, state: 3, time: 1489634257, tallage: 0 },
      { amount: 3325, pay_amount: -2131, his: 0, state: 3, time: 1489634258, tallage: 0 },
      { amount: 3557, pay_amount: -232, his: 0, state: 3, time: 1489634258, tallage: 0 },
      { amount: 4770, pay_amount: -1213, his: 0, state: 3, time: 1489634259, tallage: 0 },
      { amount: 6082, pay_amount: -1312, his: 0, state: 3, time: 1489634260, tallage: 0 },
      { amount: 6214, pay_amount: -132, his: 0, state: 3, time: 1489634260, tallage: 0 },
      { amount: 9337, pay_amount: -3123, his: 0, state: 3, time: 1489634261, tallage: 0 },
      { amount: 10569, pay_amount: -1232, his: 0, state: 3, time: 1489634261, tallage: 0 },
      { amount: 10592, pay_amount: -23, his: 0, state: 3, time: 1489634262, tallage: 0 },
      { amount: 10937, pay_amount: -345, his: 0, state: 3, time: 1489634262, tallage: 0 },
      { amount: 10937, pay_amount: -321, his: 0, state: 3, time: 1489568559, tallage: 0 },
    ],
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          paddingTop: 100,
          flexDirection: 'column',
        }}
      >
        <Table
          thead={maps}
          sourceData={this.state.data}
        />
      </div>
    );
  }
}

export default Demo;
