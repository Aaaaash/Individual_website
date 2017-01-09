/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Helmet from 'react-helmet';
import classNames from 'classnames';
import { createStructuredSelector } from 'reselect';
import { userinfoRequest, showGlobalPrompt } from './actions';
import { connect } from 'react-redux';
import { selectLoggedIn, selectEmail, selectPromptConfig } from './selectors';

import GlobalPrompt from 'components/GlobalPrompt';
import styles from './styles.css';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (this.props.loggedIn) {
      this.props.requestUserInfo();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn && nextProps.email.length === 0) {
      this.props.requestUserInfo();
    }
  }

  render() {
    const { changePromptConfig, globalPrompt } = this.props;
    const config = globalPrompt.toJS();
    return (
      <div className={classNames(styles.container)}>
        <Helmet
          titleTemplate="%s - BLOG"
          defaultTitle="BLOG"
          meta={[
            { name: 'description', content: '' },
          ]}
        />
        <GlobalPrompt
          notificationCallback={changePromptConfig}
          open={config.open}
          timeout={config.timeout}
          type={config.type}
          message={config.message}
        />
        {React.Children.toArray(this.props.children)}
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
  requestUserInfo: React.PropTypes.func,
  loggedIn: React.PropTypes.bool,
  email: React.PropTypes.string,
  globalPrompt: React.PropTypes.object,
  changePromptConfig: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
  email: selectEmail(),
  globalPrompt: selectPromptConfig(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestUserInfo: () => dispatch(userinfoRequest()),
    changePromptConfig: (val) => dispatch(showGlobalPrompt(val)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
