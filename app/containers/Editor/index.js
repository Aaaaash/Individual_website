import React, { Component, PropTypes } from 'react';
import HyperDown from 'hyperdown';
import classNames from 'classnames';

const parser = new HyperDown();
import styles from './styles.css';

class Editor extends Component {
  state = {
    HTML: '',
    editMode: 0,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articleInfo.content !== this.props.articleInfo.content) {
      this.setState({
        HTML: parser.makeHtml(nextProps.articleInfo.content),
      });
    }
  }

  insertFixedFormat = (start, template) => {
    const cursorStart = this.markInput.selectionStart;
    const source = this.markInput.value;
    const insertTemplate = `${source}${template}`;
    this.props.onArticleInfoChange({ content: insertTemplate });
    this.markInput.focus();
    this.markInput.selectionStart = cursorStart + start;
    this.markInput.selectionEnd = cursorStart + start;
    this.setState({ HTML: parser.makeHtml(insertTemplate) });
  }

  handleChangeEditMode = (mode) => this.setState({ editMode: mode });

  handleTabsKeyDown = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
    }
  }

  insertTabs = (str, flg, sn) => {
    let newstr = '';
    for (let i = 0, v = str.length; i < v; i += sn) {
      const tmp = str.substring(i, i + sn);
      newstr += tmp + flg;
    }
    return newstr;
  }

  render() {
    const { articleInfo, onArticlePush } = this.props;
    return (
      <div className={styles.editor}>
        <div className={styles.editor_title}>
          <input
            type="text"
            className={styles.editor_input}
            placeholder="Title"
            value={articleInfo.title}
            onChange={(e) => this.props.onArticleInfoChange({ title: e.target.value })}
          />
        </div>
        <div className={styles.article_tag}>
          <input
            type="text"
            className={styles.editor_input}
            placeholder="Tags"
            value={articleInfo.tags}
            onChange={(e) => this.props.onArticleInfoChange({ tags: e.target.value })}
          />
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
                <button
                  className={classNames(styles.edit_btn, this.state.editMode === 1 ? styles.active_btn : '')}
                  onTouchTap={() => this.handleChangeEditMode(1)}
                >
                  <i className="fa fa-pencil"></i>
                </button>
              </li>
              <li>
                <button
                  className={classNames(styles.edit_btn, this.state.editMode === 0 ? styles.active_btn : '')}
                  onTouchTap={() => this.handleChangeEditMode(0)}
                >
                  <i className="fa fa-columns"></i>
                </button>
              </li>
              <li>
                <button
                  className={classNames(styles.edit_btn, this.state.editMode === 2 ? styles.active_btn : '')}
                  onTouchTap={() => this.handleChangeEditMode(2)}
                >
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
            <div
              className={classNames(
                styles.text_input,
                this.state.editMode === 1 ? styles.text_mode : '',
                this.state.editMode === 2 ? styles.noShow : ''
              )}
            >
              <textarea
                className={styles.text}
                onChange={(e) => this.props.onArticleInfoChange({ content: e.target.value })}
                onKeyDown={this.handleTabsKeyDown}
                value={articleInfo.content}
                ref={(ref) => this.markInput = ref}         // eslint-disable-line  no-return-assign
              >
              </textarea>
            </div>
            <div
              className={classNames(
                styles.output,
                this.state.editMode === 1 ? styles.noShowOutPut : '',
                this.state.editMode === 2 ? styles.out_mode : ''
              )}
              dangerouslySetInnerHTML={{ __html: this.state.HTML }}
            >
            </div>
          </div>
        </div>
        <div className={styles.editor_footer}>
          <button
            className={styles.release}
            onTouchTap={onArticlePush}
          >
            发布
          </button>
        </div>
      </div>
    );
  }
}

Editor.propTypes = {
  onArticleInfoChange: PropTypes.func,
  articleInfo: PropTypes.object,
  onArticlePush: PropTypes.func,
};

export default Editor;
