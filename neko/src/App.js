import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      catsImages: []
    }
  };

  componentDidMount() {
    this.getCats()
    this.getCatsImages()
  };

  getCats() {
    fetch("https://api.thecatapi.com/v1/breeds?1b5970e3-2ecc-4bb9-9d75-d8a644120226")
      .then(response => response.json())
      .then(result => this.setState({ cats: result }))
      .then(result => console.log(this.state.cats))
      .catch(err => console.log(err));
  };

  getCatsImages() {
    fetch("https://api.thecatapi.com/v1/images/search?breed_id=aege")
      .then(response => response.json())
      .then(result => this.setState({ catsImages: result }))
      .then(result => console.log(this.state.catsImages))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Home
          cats={this.state.catsImages}
        />
        {/* <Cats
          cats={this.state.cats}
          catsImages={this.state.catsImages} /> */}
      </div>
    );
  };
};

export default App;