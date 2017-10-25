console.log('colorinput.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class OnePalette extends Component {
  constructor(props) {
    super(props); 
    this.loadPalette = this.loadPalette.bind(this);
  }


  loadPalette(id) {
    console.log(id);
  }

  render() {
    let swatchArr = [];
    // console.log(this.props.saved);
    for (let x = 0; x < this.props.saved.length; x++) {
      // get colors in palette
      let swatchDiv = [];
      for (let y = 0; y < this.props.saved[x].square_arr.length; y++) {
        let color = this.props.saved[x].square_arr[y];
        swatchDiv.push(<div className="mini-swatch" style={{backgroundColor: color}}></div>);
      }
      // console.log(swatches);

      console.log("push");
      swatchArr.push(<div id={this.props.saved[x].palette_id} onClick={this.loadPalette} className="saved-palette">
      {this.props.saved[x].palette_name}
      <div className="color-swatches">
      {swatchDiv}
      </div>
      </div>);
    }

    return (
      <div>
      {swatchArr}
      </div>
      // <div className="saved-palette">
      //   <div id="color-swatches">
      //     </div>
      // </div>
    );
  }
}
