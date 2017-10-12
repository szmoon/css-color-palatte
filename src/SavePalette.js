import React, { Component } from 'react';
import { render } from 'react-dom';
// const express = require('express');
// const pg = require('pg');
// const uri = 'postgres://toast:sits@localhost/csscolorpalette';


export class SavePalette extends Component {
  constructor(props) {
    super(props);  
    this.state = {value: ''};
    // this.createSquare = this.createSquare.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.save = this.save.bind(this);
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

      // SEND TO DATABASE HERE
      alert(paletteName + " is saved to the database! :)");
      this.props.update({squares: []});

      // database connection 
      

     



    }
    this.state.value = '';
    event.preventDefault();
  }

  render() {
    return (
      <div className="color-input">
        <form onSubmit={this.save}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Save Palette"/>
        </form>
      </div>
    );
  }
}