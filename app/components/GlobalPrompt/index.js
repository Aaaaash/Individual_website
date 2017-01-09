import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

const transformOpen = keyframes`
  from {
    transform-origin: 80%;
    transform: translateX(30px);
    opacity: 0;
    display: none;
  }
  to {
    transform: translateX(0);
    opacity: 1;
    display: block;
  }
`;

const Prompt = styled.div`
  width: 2.5rem;
  min-height: 0.36rem;
  border-radius: 4px;
  background-color: #188db8;
  background-color: #188db8;
  position: fixed;
  right: 0.15rem;
  top: 0.15rem;
  padding: 0.15rem;
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.1), 0 2px 4px rgba(16, 22, 26, 0.2), 0 6px 14px rgba(16, 22, 26, 0.2);
  transition: all 250ms;
  animation-fill-mode:forwards;
  animation: ${transformOpen} 0.25s;
  z-index: 10000;
  transform: ${(props) => props.close ?
    'translateX(30px)' :
    ''};
  opacity: ${(props) => props.close ? 0 : ''};
`;

const Message = styled.p`
  font-size: 0.14rem;
  line-height: 0.2rem;
  text-align: left;
  color: #FFF;
`;

const CloseBtn = styled.button`
  width: 0.18rem;
  height: 0.18rem;
  font-size: 0.14rem;
  cursor: pointer;
  position: absolute;
  right: 0.05rem;
  top: 0.05rem;
  border-radius: 4px;
  color: #FFF;
  transition: 200ms;
  &:hover {
    background-color: rgba(255,255,255,0.2);
  }
`;


class GlobalPrompt extends Component {
  state = {
    open: this.props.open,
    timeout: this.props.timeout,
    type: this.props.type,
    message: this.props.message,
    close: false,
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.open,
      timeout: nextProps.timeout,
      type: nextProps.type,
      message: nextProps.message,
    });
    if (this.props.open !== nextProps.open) {
      setTimeout(() => {
        this.handleClosePrompt();
      }, this.state.timeout);
    }
  }

  handleClosePrompt = () => {
    this.setState({ close: true });
    setTimeout(() => {
      this.props.notificationCallback({ open: false });
      this.setState({ close: false });
    }, 250);
  }

  render() {
    return (
      <div>
        {this.state.open ?
          <Prompt type={this.state.type} close={this.state.close}>
            <Message><i className="fa fa-trash"></i>{this.state.message}</Message>
            <CloseBtn>X</CloseBtn>
          </Prompt> :
        null}
      </div>
    );
  }
}

GlobalPrompt.propTypes = {
  open: PropTypes.bool,
  notificationCallback: PropTypes.func,
  type: PropTypes.string,
  timeout: PropTypes.number,
  message: PropTypes.string,
};

export default GlobalPrompt;
