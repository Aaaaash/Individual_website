import React, { Component, PropTypes } from 'react';

import { Arrow, Filter, FilterItem, Button } from './components';
import RadioGroup from 'components/RadioGroup';

const options = {
  name: 'filter',
  data: [
    { label: '>', value: 0 },
    { label: '<', value: 1 },
    { label: '=', value: 2 },
  ],
};

class TableTd extends Component {
  state = {
    open: false,
    close: false,
    type: 0,
    val: 0,
  }
  handleClickFilter = () => {
    this.setState({ open: !this.state.open });
  }
  handleClickOk = () => {
    this.setState({ close: true });
    this.props.handleFilterDada(this.state.type, this.state.val, this.props.letter);
    setTimeout(() => {
      this.setState({ open: false, close: false });
    }, 250);
  }
  rendrSortArrow = () =>
    <Arrow>
      <i
        onClick={() => this.props.handlerSortData(0, this.props.letter)}
        className="fa fa-caret-up"
      >
      </i>
      <i
        onClick={() => this.props.handlerSortData(1, this.props.letter)}
        className="fa fa-caret-down"
      >
      </i>
    </Arrow>

  renderFilterIcon = () =>
    <Arrow>
      <i onClick={this.handleClickFilter} className="fa fa-filter">
      </i>
    </Arrow>

  renderFilterContainer = () =>
    <Filter close={this.state.close}>
      <FilterItem>
        <RadioGroup options={options} changeCallBack={(val) => this.setState({ type: val })} />
        <input type="text" onChange={(e) => this.setState({ val: e.target.value })} />
      </FilterItem>
      <FilterItem>
        <Button onClick={this.handleClickOk}>OK</Button>
        <Button>Reset</Button>
      </FilterItem>
    </Filter>

  render() {
    const { children, iSorter, filter } = this.props;
    return (
      <li>
        {!!this.state.open && this.renderFilterContainer()}
        {children}
        {!!iSorter && this.rendrSortArrow()}
        {!!filter && this.renderFilterIcon()}
      </li>
    );
  }
}

TableTd.defaultProps = {
  iSorter: false,
  filter: false,
  handlerSortData: () => {},
};

TableTd.propTypes = {
  letter: PropTypes.string,
  iSorter: PropTypes.bool,
  children: PropTypes.string,
  filter: PropTypes.bool,
  handleFilterDada: PropTypes.func,
  handlerSortData: PropTypes.func,
};

export default TableTd;
