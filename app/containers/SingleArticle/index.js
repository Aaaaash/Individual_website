import React, { Component } from 'react';

import bg from './road.jpg';

import {
  ArticleContainer,
  Article,
  Titlt,
  Label,
  Tag,
  Tags,
  TimeLabel,
  Author,
  ArticleContent,
} from './styledComponents';

class SingleArticle extends Component {
  render() {
    return (
      <ArticleContainer>
        <Article bg={bg}>
          <Titlt>测试标题</Titlt>
          <Label>
            <Author>
              Sakura
              <TimeLabel>2016-12-07</TimeLabel>
            </Author>
            <Tags>
              <Tag>React</Tag>
              <Tag>JavaScript</Tag>
            </Tags>
          </Label>
          <ArticleContent>
            
          </ArticleContent>
        </Article>
      </ArticleContainer>
    );
  }
}

export default SingleArticle;
