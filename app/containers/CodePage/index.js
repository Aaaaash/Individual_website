import React, { Component } from 'react';
import showdown from 'showdown';
<<<<<<< HEAD
// import { markdown } from 'markdown';
=======
import { markdown } from 'markdown';
>>>>>>> 2b416719d127c8ef42cdf6920f508b9ade790d48

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
