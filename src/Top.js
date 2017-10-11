import React, { Component } from 'react';
import { render } from 'react-dom';
import { ColorInput } from './ColorInput';
import { ClearPalette } from './ClearPalette';
 
export class Top extends Component {
  constructor(props) {
    super(props);  
  }

  render() {
    return (
      <div id="top">
        <ColorInput 
        squares={this.props.squares}
        update={this.props.update}
        />
        <ClearPalette 
        squares={this.props.squares}
        update={this.props.update}
        />
      </div>
    );
  }
}

