import React, { Component } from 'react';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  };

  componentDidMount() {
    console.log(this.state.items);
    fetch("https://api.thecatapi.com/v1/categories?1b5970e3-2ecc-4bb9-9d75-d8a644120226")
      .then(response => response.json())
      .then(result => this.setState({ cats: result }))
      .then(result => console.log(this.state.cats))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        Hello Cat
      </div>
    );
  };
};

export default App;
