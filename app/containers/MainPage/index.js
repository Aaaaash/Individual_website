import React, { Component, PropTypes } from 'react';
// import QueueAnim from 'rc-queue-anim';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import LeftNav from './LeftNav';
import {
  fetchAuthInfo,
} from './actions';
import { selectAuthInfo } from './selector';
import {
  MainPageContainer,
} from './styledComponents';

class MainPage extends Component {  // eslint-disable-line
  componentDidMount() {
    this.props.onFetchAuthInfo();
  }

  render() {
    const { children, authInfo } = this.props;
    return (
      <MainPageContainer>
        <LeftNav authInfo={authInfo} />
        {children}
      </MainPageContainer>
    );
  }
}

MainPage.propTypes = {
  authInfo: PropTypes.object,
  onFetchAuthInfo: PropTypes.func,
  children: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  authInfo: selectAuthInfo(),
});

function mapDispatchTpProps(dispatch) {
  return {
    onFetchAuthInfo: () => dispatch(fetchAuthInfo()),
  };
}

export default connect(mapStateToProps, mapDispatchTpProps)(MainPage);
