import React, { Component, PropTypes } from 'react';

import { Arrow } from './components';

class TableTd extends Component {
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

  render() {
    const { children, iSorter } = this.props;
    return (
      <li>
        {children}
        {!!iSorter && this.rendrSortArrow()}
      </li>
    );
  }
}

TableTd.defaultProps = {
  iSorter: false,
  handlerSortData: () => {},
};

TableTd.propTypes = {
  letter: PropTypes.string,
  iSorter: PropTypes.bool,
  children: PropTypes.string,
  handlerSortData: PropTypes.func,
};

export default TableTd;
