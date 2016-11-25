import React, { Component } from 'react';
import showdown from 'showdown';
// import { markdown } from 'markdown';

import styles from './styles.css';

const converter = new showdown.Converter;

class CodePage extends Component {
  state = {
    content: '',
  }
  handleChangeInput = (e) => {
    const html = converter.makeHtml(e.target.value);
    this.setState({
      content: html,
    })
  }
  render() {
    return (
      <div>
        <textarea className={styles.input_container} onChange={this.handleChangeInput}>

        </textarea>
        <div className={styles.markdownbody} dangerouslySetInnerHTML={{ __html: this.state.content }}>
        </div>
      </div>
    );
  }
}

export default CodePage;
