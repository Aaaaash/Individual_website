import React, { Component } from 'react';

import {
  DialogContainer,
  DialogBox,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogBtn,
  WarnText,
  Layout,
} from './components';

class Dialog extends Component {
  render() {
    return (
      <DialogContainer>
        <Layout />
        <DialogBox>
          <DialogTitle>删除文章</DialogTitle>
          <DialogContent>
            确认删除文章
            <WarnText>React最佳实践</WarnText>
            ？这将会同时删除文章下的所有评论且不可恢复.
          </DialogContent>
          <DialogFooter>
            <DialogBtn>取消</DialogBtn>
            <DialogBtn warning>确定</DialogBtn>
          </DialogFooter>
        </DialogBox>
      </DialogContainer>
    );
  }
}

export default Dialog;
