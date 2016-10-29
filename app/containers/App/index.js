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
import { createStructuredSelector } from 'reselect';
import { userinfoRequest } from './actions';
import { connect } from 'react-redux';
import { selectLoggedIn, selectEmail } from './selectors';

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
    return (
      <div className={styles.container}>
        <Helmet
          titleTemplate="%s - 大秀子"
          defaultTitle="大秀子"
          meta={[
            { name: 'description', content: '大秀子和小秀子' },
          ]}
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
};

const mapStateToProps = createStructuredSelector({
  loggedIn: selectLoggedIn(),
  email: selectEmail(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestUserInfo: () => dispatch(userinfoRequest()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
