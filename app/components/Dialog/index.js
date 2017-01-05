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
  state = {
    close: false,
  }

  componentDidMount() {
    const body = document.body;
    body.addEventListener('keydown', (ev) => {
      if (ev.keyCode === 27) {
        this.setState({ close: true });
        setTimeout(() => {
          this.props.changeDialogState(false);
          this.setState({ close: false });
        }, 250);
      }
    });
  }

  handleCloseModel = () => {
    this.setState({ close: true });
    setTimeout(() => {
      this.props.changeDialogState(false);
      this.setState({ close: false });
    }, 250);
  }

  render() {
    const {
      articleTitle,
      submitCallBack,
      requesting,
      dialogState,
    } = this.props;
    return (
      <div>
        {
          dialogState ?
            <DialogContainer>
              <Layout close={this.state.close} />
              <DialogBox
                onClick={this.handleSelfClick}
                close={this.state.close}
              >
                <DialogTitle>删除文章</DialogTitle>
                <DialogContent>
                  确认删除
                  <WarnText>{articleTitle}</WarnText>
                  ？这将会同时删除文章下的所有评论且不可恢复
                </DialogContent>
                <DialogFooter>
                  <DialogBtn
                    onClick={this.handleCloseModel}
                  >
                  取消
                  </DialogBtn>
                  <DialogBtn
                    warning
                    onClick={submitCallBack}
                  >
                    {requesting ?
                      <i style={{ fontSize: '0.12rem', marginRight: '0.04rem' }} className="fa fa-spinner fa-pulse"></i>
                      : '' }
                    确定
                  </DialogBtn>
                </DialogFooter>
              </DialogBox>
            </DialogContainer> : null
        }
      </div>
    );
  }
}

Dialog.propTypes = {
  articleTitle: PropTypes.string,
  changeDialogState: PropTypes.func,
  submitCallBack: PropTypes.func,
  requesting: PropTypes.bool,
  dialogState: PropTypes.bool,
};

export default Dialog;
