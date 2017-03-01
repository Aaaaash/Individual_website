import React, { Component } from 'react';

import {
  PlayerContainer, Video,
  Controller, ConButton,
  ProgressBar, VolButton,
} from './components';

class Player extends Component {
  state = {
    play: false,
  }
  componentDidMount() {
  }
  handleContextMenu = (e) => {
    e.preventDefault();
  }
  handleControllerChange = (ev) => {
    this.setState({ play: !this.state.play }, () => {
      if (this.state.play) this.video.play();
      if (!this.state.play) this.video.pause();
    });
  }
  render() {
    return (
      <PlayerContainer>
        <Video
          src="http://video.clip.easub.com/vod-out/hd/6d30815a-c7bd-4266-89c5-5ab497ca9a45.mp4"
          onContextMenu={this.handleContextMenu}
          innerRef={(ref) => this.video = ref}
        />
        <Controller>
          <ConButton
            onClick={this.handleControllerChange}
          >
            <i className="fa fa-play"></i>
          </ConButton>
          <ProgressBar />
          <VolButton>
            <i className="fa fa-volume-up"></i>
          </VolButton>
          <VolButton>
            <i className="fa fa-expand"></i>
          </VolButton>
        </Controller>
      </PlayerContainer>
    );
  }
}
export default Player;
