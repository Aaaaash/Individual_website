import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

import styles from './styles.css';

class MenuBtn extends Component {
  state = {
    color: '#F7F8FA',
    isClose: false,
  }

  handleChangeClick = () => {
    this.setState({
      color: '#CCC',
      isClose: !this.state.isClose,
    });
    this.props.onTouchTap();
  }

  render() {
    return (
      <button
        className={styles.btn_container}
        onTouchTap={this.handleChangeClick}
      >
        <span
          className={classNames(styles.menu_line, this.state.isClose ? styles.one_close : null)}
          style={{
            backgroundColor: this.state.color,
          }}
        >
        </span>
        <span
          className={classNames(styles.menu_line, this.state.isClose ? styles.two_close : null)}
          style={{
            backgroundColor: this.state.color,
          }}
        >
        </span>
        <span
          className={classNames(styles.menu_line, this.state.isClose ? styles.thr_close : null)}
          style={{
            backgroundColor: this.state.color,
          }}
        >
        </span>
      </button>
    );
  }
}

MenuBtn.propTypes = {
  onTouchTap: PropTypes.func,
};

export default MenuBtn;
