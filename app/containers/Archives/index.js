import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import {
  fetchArchivesList,
} from './actions';
import {
  selectArchivesList,
} from './selector';
import {
  ArchiveCon,
  ArchivesList,
  TimeLabel,
} from './components';

class Archives extends Component {
  componentDidMount() {
    this.props.onFetchArchives();
  }

  renderArchivesList = (list) =>
    list.map((item, index) =>
      <p key={index}>
        <TimeLabel>{item.createAt}————</TimeLabel>
        <span>{item.title}</span>
      </p>
    )

  render() {
    const {
      archivesList,
    } = this.props;
    return (
      <ArchiveCon>
        <ArchivesList>
          <h4>2016</h4>
          {this.renderArchivesList(archivesList)}
        </ArchivesList>
      </ArchiveCon>
    );
  }
}

Archives.propTypes = {
  archivesList: PropTypes.array,
  onFetchArchives: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  archivesList: selectArchivesList(),
});

function mapDispatchToProps(dispatch) {
  return {
    onFetchArchives: () => dispatch(fetchArchivesList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives);

