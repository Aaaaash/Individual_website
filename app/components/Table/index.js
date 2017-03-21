import React, { Component, PropTypes } from 'react';

import {
  TableCon, Thead, Tbody, Th,
} from './components';
import TableTd from 'components/TableTd';

class Table extends Component {
  state = {
    data: this.props.sourceData,
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.sourceData });
  }
  handlerSortData = (val, lat) => {
    const { data } = this.state;
    const result = data.sort((a, b) => val === 0 ? a[lat] - b[lat] : b[lat] - a[lat]);  // eslint-disable-line
    this.setState({ data: result });
  }
  handleFilterDada = (type, val, lat) => {
    const { data } = this.state;
    let result = [];
    if (parseInt(type, 10) === 0) result = data.filter((item) => item[lat] > val);
    if (parseInt(type, 10) === 1) result = data.filter((item) => item[lat] < val);
    if (parseInt(type, 10) === 2) result = data.filter((item) => item[lat] == val);
    this.setState({ data: result });
  }
  renderThead = (list) =>
    list.map((item, index) =>
      <TableTd
        key={index}
        iSorter={item.iSorter}
        letter={item.letter}
        filter={item.filter}
        handleFilterDada={item.filter ? this.handleFilterDada : function no() {}}
        handlerSortData={item.iSorter ? this.handlerSortData : function no() {}}
      >
        {item.title}
      </TableTd>
    )

  renderItem = (item, keys) => {
    const list = [];
    for (const i in keys) { // eslint-disable-line
      list.push(<span key={i}>{item[keys[i]]}</span>);
    }
    return list;
  }

  renderTable = (list) => {
    const keys = Object.keys(list[0]);
    const arr = list.map((item, index) =>
      <Th key={index}>
        {this.renderItem(item, keys)}
      </Th>
    );
    return arr;
  }

  render() {
    const { thead } = this.props;
    const { data } = this.state;
    return (
      <TableCon>
        <Thead>
          {this.renderThead(thead)}
        </Thead>
        <Tbody>
          {this.renderTable(data)}
        </Tbody>
      </TableCon>
    );
  }
}

Table.propTypes = {
  thead: PropTypes.array,
  sourceData: PropTypes.array,
  handlerSortData: PropTypes.func,
};

export default Table;
