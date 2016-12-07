import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';
import QueueAnim from 'rc-queue-anim';

const transformOpen = keyframes`
  from {
    transform-origin: 80%;
    transform: translateX(30px) rotateY(-45deg);
    opacity: 0;
    display: none;
  }
  to {
    transform: translateX(0) rotateY(0);
    opacity: 1;
    display: block;
  }
`;

const Prompt = styled.div`
  width: 2.5rem;
  height: 0.6rem;
  border-radius: 4px;
  background-color: #FFF;
  position: absolute;
  right: 0.15rem;
  top: 0.15rem;
  padding: 0.15rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  transition: all 450ms;
  animation-fill-mode:forwards;
  animation: ${transformOpen} 0.25s;
`;

const Message = styled.p`
  font-size: 0.14rem;
  color: #0D0D0D;
  line-height: 0.3rem;
  text-align: left;
`;

class GlobalPrompt extends Component {
  state = {
    open: this.props.open,
    timeout: this.props.timeout,
    type: this.props.type,
    message: this.props.message,
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
        this.props.notificationCallback({ open: false });
      }, this.state.timeout);
    }
  }
  render() {
    return (
      <div>
        {this.state.open ?
          <Prompt type={this.state.type} open={this.state.open}>
            <Message>{this.state.message}</Message>
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
