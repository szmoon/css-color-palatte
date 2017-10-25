console.log('colorinput.js loaded!');
import React, { Component } from 'react';
import { render } from 'react-dom';
import { OnePalette } from './OnePalette';
 
export class SavedPalettes extends Component {
  constructor(props) {
    super(props); 
    // this.loadPalette = this.loadPalette.bind(this);
  }

  componentWillMount() {
    fetch('/savedpalettes')
      .then(response => response.json())
      .then(data => this.props.update({ saved: data }));
  }

  // loadPalette(id) {
  //   console.log(id);
  // }

  render() {
    let savedArr = this.props.saved
    let displayArr = [];
    
    for (let x = 0; x < savedArr.length; x++) {
      
     displayArr.push(
     <OnePalette 
     id={savedArr[x].palette_id} 
     name={savedArr[x].palette_name}
     squareArr={savedArr[x].square_arr}
     onClick={this.loadPalette} 
     className="saved-palette"
     update={this.props.update} 
     />);
      // let swatchDiv = [];
      // for (let y = 0; y < savedArr[x].square_arr.length; y++) {
      //   let color = savedArr[x].square_arr[y];
      //   swatchDiv.push(<div className="mini-swatch" style={{backgroundColor: color}}></div>);
      // }

      // displayArr.push(<div id={savedArr[x].palette_id} onClick={this.loadPalette} className="saved-palette">
      // {savedArr[x].palette_name}
      // <div className="color-swatches">
      // {swatchDiv}
      // </div>
      // </div>);
    }

    return (
      <div>
      {displayArr}
      </div>
      // <div className="saved-palette">
      //   <div id="color-swatches">
      //     </div>
      // </div>
    );
  }
}
