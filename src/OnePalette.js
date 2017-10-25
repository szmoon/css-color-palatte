console.log('colorinput.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
 
export class OnePalette extends Component {
  constructor(props) {
    super(props); 
    this.loadPalette = this.loadPalette.bind(this);
  }


  loadPalette() {
    console.log(id);
  }

  render() {
    let savedArr = this.props.saved
  
    //mini swatch display
      let swatchDiv = [];
      for (let y = 0; y < savedArr[x].square_arr.length; y++) {
        let color = savedArr[x].square_arr[y];
        swatchDiv.push(<div className="mini-swatch" style={{backgroundColor: color}}></div>);
      }

      // displayArr.push(<div id={savedArr[x].palette_id} onClick={this.loadPalette} className="saved-palette">
      
      
      // </div>);
    

    return (
      <div className="saved-palette">
        {savedArr[x].palette_name}
        <div className="color-swatches">
          {swatchDiv}
        </div>
      </div>
    );
  }
}
