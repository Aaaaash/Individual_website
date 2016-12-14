import React, { Component } from 'react';

import {
  Footer,
  Parea,
  SvgIcon,
  Text,
} from './styledComponents';
import './iconfont.js';

class BlogFooter extends Component {
  render() {
    return (
      <Footer>
        <Parea>
          <SvgIcon>
            <use href="#icon-github"></use>
          </SvgIcon>
          <SvgIcon>
            <use href="#icon-zliconweibo01"></use>
          </SvgIcon>
          <SvgIcon>
            <use href="#icon-zhihu"></use>
          </SvgIcon>
        </Parea>
        <Parea>
          <Text>Power by React.</Text>
        </Parea>
      </Footer>
    );
  }
}

export default BlogFooter;
