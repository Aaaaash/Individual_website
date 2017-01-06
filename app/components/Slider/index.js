import React, { Component } from 'react';

import {
  SliderBox,
  SliderBar,
  SliderFullBar,
  Slide,
  TipNum,
  DragBar,
} from './components';

class Slider extends Component {
  state = {
    progress: 0,
    down: false,
  }
  componentDidMount() {
    document.addEventListener('mouseup', () => {
      this.handleMouseUp();
    });
  }
  handleClickButton = () => {
    this.setState({ progress: this.state.progress + 1 });
  }
  handleMouseDown = () => {
    this.setState({ down: true });
    document.addEventListener('mousemove', (ev) =>
      this.state.down ? this.handleMouseMove(ev) : ''
    );
  }
  handleMouseMove = (ev) => {
    const x = ev.clientX;
    const referX = this.slider.offsetLeft;
    const width = this.slider.offsetWidth;
    this.setState({ progress: parseInt(((x - referX) / width) * 100, 10) }, () => {
      if (this.state.progress < 0) this.setState({ progress: 0 });
      if (this.state.progress > 100) this.setState({ progress: 100 });
    });
  }
  handleMouseUp = () => {
    this.setState({ down: false });
  }

  render() {
    return (
      <SliderBox innerRef={(ref) => { this.slider = ref; }}>
        <SliderBar
          onMouseMove={this.state.down ? this.handleMouseMove : ''}
          onMouseUp={this.handleMouseUp}
        >
          <SliderFullBar progress={this.state.progress} />
        </SliderBar>
        <DragBar
          progress={this.state.progress}
          onMouseDown={this.handleMouseDown}
          onDragEnd={this.handleMouseUp}
        >
          <Slide />
          <TipNum>{this.state.progress}</TipNum>
        </DragBar>
        <button
          style={{
            width: 50,
            height: 35,
            marginTop: 50,
          }}
          onClick={this.handleClickButton}
        >
          dian
        </button>
      </SliderBox>
    );
  }
}

export default Slider;
