import React, { Component } from 'react';
import { render } from 'react-dom';


export class SavePalette extends Component {
  constructor(props) {
    super(props);  
    this.state = {value: ''};
    // this.createSquare = this.createSquare.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
    this.postData = this.postData.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  save(event) {
    if (this.state.value.length > 0 && this.props.squares.length > 0) {
      let paletteName = this.state.value;
      let squareArr = this.props.squares;
      // alert(paletteName + " " + squareArr);
      
      let toSave = {
        paletteName: paletteName,
        squareArr: squareArr
      };

      this.postData(toSave);

      alert(paletteName + " is saved to the database! :)");
      this.props.update({squares: []}); //clear board

      let saved = this.props.saved;
      saved.push(toSave);
      this.props.update({saved: saved});
    }
    this.state.value = '';
    event.preventDefault();
  }

  postData(obj) {
    // console.log("object to post " + obj);
    fetch('/savepalette', {
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(obj) });
  }

  render() {
    return (
      <div className="color-input">
        <form onSubmit={this.save}>
        <input type="text" value={this.state.value} onChange={this.handleChange} maxLength="19"/>
          <input type="submit" value="Save Palette"/>
        </form>
      </div>
    );
  }
}