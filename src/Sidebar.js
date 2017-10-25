import React, { Component } from 'react';
import { render } from 'react-dom';
import { SavedPalettes } from './SavedPalettes';

 
export class Sidebar extends Component {
  constructor(props) {
    super(props);  
  }



  render() {
    return (
      <div>
        <p>Saved Palettes</p>
        <div id="sidebar-inside">
        <SavedPalettes
        log={this.props.log}
        saved={this.props.saved}
        squares={this.props.squares}
        update={this.props.update}/>
        </div>
      </div>
    );
  }
}

