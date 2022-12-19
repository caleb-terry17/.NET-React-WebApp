import React, { Component } from 'react';

export class Names extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        namesList: [],
    };
    this.addName = this.addName.bind(this);
  }

  addName() {
    this.setState({
      namesList: [...this.state.namesList, this.state.namesList.length],
    });
    console.log(this.state.namesList);
    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Names</h1>

        <button
            onClick={this.addName}
        >
            add name
        </button>        

        <h2>List of Names:</h2>
        {this.state.namesList.map((name, index) => <p key={index}>{name}</p>)}
      </div>
    );
  }
}