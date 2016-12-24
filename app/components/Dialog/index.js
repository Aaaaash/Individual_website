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
    const { articleTitle, changeDialogState } = this.props;
    return (
      <DialogContainer>
        <Layout />
        <DialogBox>
          <DialogTitle>删除文章</DialogTitle>
          <DialogContent>
            确认删除
            <WarnText>{articleTitle}</WarnText>
            ？这将会同时删除文章下的所有评论且不可恢复
          </DialogContent>
          <DialogFooter>
            <DialogBtn onClick={() => changeDialogState(false)} >取消</DialogBtn>
            <DialogBtn warning>确定</DialogBtn>
          </DialogFooter>
        </DialogBox>
      </DialogContainer>
    );
  }
}

export default Dialog;
