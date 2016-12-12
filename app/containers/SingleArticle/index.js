import React, { Component, PropTypes } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: (code) => hljs.highlightAuto(code).value,
});

import {
  ArticleContainer,
  Article,
  Titlt,
  Label,
  Tag,
  TimeLabel,
  Author,
  ArticleContent,
  Text,
} from './styledComponents';
import {
  selectCurrentArticle,
  selectRequesting,
} from './selector';
import {
  fetchArticleContent,
  changeCurrentArticle,
} from './actions';
import styles from './styles.css';

class SingleArticle extends Component {
  componentDidMount() {
    const id = this.props.params.articleID;
    this.props.onCurrentArticleChange({ id });
    this.props.onFetchArticleContent();
  }

  render() {
    const { currentArticle } = this.props;
    return (
      <ArticleContainer>
        <Article>
          <Titlt>{currentArticle.title}</Titlt>
          <Label>
            <p>
              <Author>
                {currentArticle.author}
              </Author>
              <Text>发布于</Text>
              <TimeLabel>{currentArticle.createAt}</TimeLabel>
            </p>
            <div>
              <Tag>{currentArticle.tags}</Tag>
              <Tag>JavaScript</Tag>
            </div>
          </Label>
          <ArticleContent>
            <div
              className={styles.output}
              dangerouslySetInnerHTML={{ __html: marked(currentArticle.content) }}
              >
            </div>
          </ArticleContent>
        </Article>
      </ArticleContainer>
    );
  }
}

SingleArticle.propTypes = {
  currentArticle: PropTypes.object,
  requesting: PropTypes.bool,
  onCurrentArticleChange: PropTypes.func,
  onFetchArticleContent: PropTypes.func,
  params: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  currentArticle: selectCurrentArticle(),
  requesting: selectRequesting(),
});

function mapDispatchToProps(dispatch) {
  return {
    onCurrentArticleChange: (val) => dispatch(changeCurrentArticle(val)),
    onFetchArticleContent: () => dispatch(fetchArticleContent()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SingleArticle);
