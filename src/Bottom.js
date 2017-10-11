console.log('bottom.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { SavePalette } from './SavePalette';
import { SavedPalettes } from './SavedPalettes';
 
export class Bottom extends Component {
  constructor(props) {
    super(props);  
    this.savePalette = this.savePalette.bind(this);
  }

  savePalette() {
    let squares = this.props.squares;
    alert(squares);
    let palette = {
      // name: name;
      squares: squares,
    };
  }

  render() {
    return (
      <div id="bottom">
        <SavePalette
        squares={this.props.squares}
        update={this.props.update} 
        />
        <SavedPalettes 
        squares={this.props.squares}
        update={this.props.update}/>
      </div>
    );
  }
}

