import React, { Component } from 'react';

export class Names extends Component {
  constructor(props) {
    super(props);
    this.state = { namesList: [] };
  }

  addName(name) {
    this.setState({
      namesList: this.state.namesList.push(name)
    });
  }

  render() {
    return (
      <div>
        <h1>Names</h1>

        {this.state.namesList.map((name) => <p>{name}</p>)}
      </div>
    );
  }
}