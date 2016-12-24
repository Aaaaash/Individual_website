import React, { Component, PropTypes } from 'react';

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
  componentDidMount() {
    const body = document.body;
    body.addEventListener('keydown', (ev) => {
      if(ev.keyCode === 27) {
        this.props.changeDialogState(false);
      }
    });
  }

  render() {
    const { articleTitle, changeDialogState, submitCallBack } = this.props;
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
            <DialogBtn
              onClick={() => changeDialogState(false)}
            >
            取消
            </DialogBtn>
            <DialogBtn
              warning
              onClick={submitCallBack}
            >
            确定
            </DialogBtn>
          </DialogFooter>
        </DialogBox>
      </DialogContainer>
    );
  }
}

Dialog.propTypes = {
  articleTitle: PropTypes.string,
  changeDialogState: PropTypes.func,
  submitCallBack: PropTypes.func,
};

export default Dialog;
