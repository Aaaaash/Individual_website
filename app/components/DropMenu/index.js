import React, { Component } from 'react';

import {
  DropBox,
  SvgIcon,
  DropText,
  Item,
  DropItem,
  Container,
} from './components';
import './iconfont.js';


class DropMenu extends Component {
  state = {
    open: false,
    value: 0,
    text: '',
  }
  componentDidMount() {
    const { options, value } = this.props;
    options.map((item, index) => {
      if (item.value === value) this.setState({ text: item.text });
    });
  }
  handleChangeValue = (val, text) => {
    this.setState({
      open: false,
      value: val,
      text,
    });
  }
  renderDropItem = (data) =>
    data.map((item, index) =>
      <DropItem
        key={index}
        value={item.value}
        onClick={() => this.handleChangeValue(item.value, item.text)}
      >
        {item.text}
      </DropItem>
    );

  render() {
    const { options } = this.props;
    return (
      <Container>
        <DropBox
          onClick={() => this.setState({ open: !this.state.open })}
        >
          <DropText>{this.state.text}</DropText>
          <SvgIcon
            open={this.state.open}
          >
            <use href="#icon-sanjiao"></use>
          </SvgIcon>
        </DropBox>
        {
          this.state.open ?
            <Item>
              {this.renderDropItem(options)}
            </Item> :
            null
        }
      </Container>
    );
  }
}

export default DropMenu;
