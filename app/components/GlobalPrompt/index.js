import React, { Component, PropTypes } from 'react';
import styled, { keyframes } from 'styled-components';

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
  min-height: 0.6rem;
  border-radius: 4px;
  background-color: #FFF;
  position: fixed;
  right: 0.15rem;
  top: 0.15rem;
  padding: 0.15rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
  transition: all 250ms;
  animation-fill-mode:forwards;
  animation: ${transformOpen} 0.25s;
  z-index: 10000;
  transform: ${(props) => props.close ?
    'translateX(30px) rotateY(-45deg)' :
    ''};
  opacity: ${(props) => props.close ? 0 : ''};
`;

const Message = styled.p`
  font-size: 0.14rem;
  line-height: 0.2rem;
  text-align: left;
  color: #31424E;
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
