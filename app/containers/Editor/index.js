import React, { Component } from 'react';
import HyperDown from 'hyperdown';

const parser = new HyperDown();
import styles from './styles.css';

class Editor extends Component {
  state = {
    html: '',
  }

  insertFixedFormat = (start, template) => {
    const cursorStart = this.markInput.selectionStart;
    const source = this.markInput.value;
    const insertTemplate = `${source}${template}`;
    this.markInput.value = insertTemplate;
    this.markInput.focus();
    this.markInput.selectionStart = cursorStart + start;
    this.markInput.selectionEnd = cursorStart + start;
    this.setState({ html: parser.makeHtml(insertTemplate) });
  }

  handleRenderHTML = (e) => {
    this.setState({ html: parser.makeHtml(e.target.value) });
  }

  render() {
    return (
      <div className={styles.editor}>
        <div className={styles.editor_title}>
          <input type="text" className={styles.editor_input} placeholder="Title" />
        </div>
        <div className={styles.article_tag}>
          <input type="text" className={styles.editor_input} placeholder="Tags" />
        </div>
        <div className={styles.editor_area}>
          <div className={styles.edirot_tool_bar}>
            <ul className={styles.input_btn}>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(2, '****')}>
                  <i className="fa fa-bold"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(2, ' __ ')}>
                  <i className="fa fa-italic"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(1, '[](www.link.com)')}>
                  <i className="fa fa-link"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(2, '> ')}>
                  <i className="fa fa-indent"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(4, '```\n \n```')}>
                  <i className="fa fa-code"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(4, '![alt](www.imagelink.com)')}>
                  <i className="fa fa-image"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(2, '- \n- ')}>
                  <i className="fa fa-list-ul"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(3, '1. \n2. \n3. ')}>
                  <i className="fa fa-list-ol"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn} onTouchTap={() => this.insertFixedFormat(3, '## ')}>
                  <i className="fa fa-header"></i>
                </button>
              </li>
            </ul>
            <ul className={styles.editor_btn}>
              <li>
                <button className={styles.edit_btn}>
                  <i className="fa fa-pencil"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn}>
                  <i className="fa fa-columns"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn}>
                  <i className="fa fa-eye"></i>
                </button>
              </li>
              <li>
                <button className={styles.edit_btn}>
                  <i className="fa fa-save"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.text_output}>
            <div className={styles.text_input}>
              <textarea
                className={styles.text}
                onChange={this.handleRenderHTML}
                ref={(ref) => this.markInput = ref}         // eslint-disable-line  no-return-assign
              >
              </textarea>
            </div>
            <div className={styles.output} dangerouslySetInnerHTML={{ __html: this.state.html }}>
            </div>
          </div>
        </div>
        <div className={styles.editor_footer}>
          <button className={styles.release}>发布</button>
        </div>
      </div>
    );
  }
}

export default Editor;
