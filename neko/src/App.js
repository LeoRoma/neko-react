import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      breed: '',
      categories: [],
      cats: []
    }
  };

  componentDidMount() {
    this.getCats()
    this.getBreed()
    this.getCategories()
  };

  getCats() {
    fetch("https://api.thecatapi.com/v1/breeds?1b5970e3-2ecc-4bb9-9d75-d8a644120226")
      .then(response => response.json())
      .then(result => this.setState({ breeds: result }))
      .then(result => console.log(this.state.breeds))
      .catch(err => console.log(err));
  };


  getBreed(breed) {
    let changeBreed = breed
    fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${changeBreed}`)
      .then(response => response.json())
      .then(result => this.setState({ cats: result }))
      .then(result => console.log(this.state.cats))
      .catch(err => console.log(err));
    // window.location.reload(false);
  }

  getCategories() {
    fetch(`https://api.thecatapi.com/v1/images/search?limit=9&page=9&category_ids=1`)
      .then(response => response.json())
      .then(result => this.setState({ categories: result }))
      .then(result => console.log(this.state.categories))
      .catch(err => console.log(err));
  }
  render() {

    return (
      <div className="App">
        <Home
          cats={this.state.cats}
          getBreed={this.getBreed.bind(this)}
          breeds={this.state.breeds}
          categories={this.state.categories}
        />
      </div>
    );
  };
};

export default App;