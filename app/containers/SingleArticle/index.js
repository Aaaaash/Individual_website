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
  Text,
} from './styledComponents';

class SingleArticle extends Component {
  render() {
    return (
      <ArticleContainer>
        <Article bg={bg}>
          <Titlt>测试标题</Titlt>
          <Label>
            <div>
              <Author>
                Sakura
              </Author>
              <Text>发布于</Text>
              <TimeLabel>2016-12-07</TimeLabel>
            </div>
            <div>
              <Tag>React</Tag>
              <Tag>JavaScript</Tag>
            </div>
          </Label>
          <ArticleContent>

          </ArticleContent>
        </Article>
      </ArticleContainer>
    );
  }
}

export default SingleArticle;
