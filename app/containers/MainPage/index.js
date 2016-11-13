import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { List } from 'immutable';
import { drop } from 'lodash';
import Spin from 'antd/lib/spin';

import styles from './styles.css';
import {
  fetchMovieList,
} from './actions';
import {
  selectrMovieList,
  selectRequesting,
  selectError,
} from './selectors';

class MainPage extends Component {

  componentDidMount() {
    this.props.onFetchMovieList();
  }

  render() {
    const { requesting, movieList, error } = this.props;
    return (
      <div className={styles.main}>
        {
          requesting ?
          <Spin size="large" /> :
          <QueueAnim
            type={['right', 'left']}
            ease={['easeOutQuart', 'easeInOutQuart']}
          >
            <p>{error}</p>
          </QueueAnim>
        }
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  movieList: selectrMovieList(),
  requesting: selectRequesting(),
  error: selectError(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchMovieList: () => dispatch(fetchMovieList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
