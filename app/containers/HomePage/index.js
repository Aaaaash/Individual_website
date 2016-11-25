import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Icon from 'antd/lib/icon';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { changeMenuState } from './actions';
import { selectMenuOpen } from './selector';
import RightMenu from 'components/RightMenu';
import styles from './styles.css';
import menuImg from './menu.png';

class HomePage extends Component {
  state = {
    hover: false,
  }

  handleChangeMenuState = () => {
    this.props.onMenuStateChange(!this.props.menuOpen);
  }

  render() {
    const {
      menuOpen,
      children,
      onMenuStateChange
    } = this.props;
    return (
      <div className={styles.app_container}>
        <button className={styles.menu_btn}
          onClick={this.handleChangeMenuState}
        >
          <span
            style={{
              backgroundImage: `url(${menuImg})`
            }}
          >
          </span>
        </button>
        {menuOpen ? <RightMenu /> : null}
        <div className={styles.home_container}>
          {children}
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  menuOpen: PropTypes.bool,
  onMenuStateChange: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  menuOpen: selectMenuOpen(),
});

function mapDispatchToProps (dispatch) {
  return {
    onMenuStateChange: (val) => dispatch(changeMenuState(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
