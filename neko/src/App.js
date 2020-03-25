import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
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
      categoriesImg: [],
      cats: []
    }
  };

  componentDidMount() {
    this.getCats()
    this.getBreed()
    this.getCategory()
    this.getCategoriesImg()
  };

  getCats() {
    fetch("https://api.thecatapi.com/v1/breeds?1b5970e3-2ecc-4bb9-9d75-d8a644120226")
      .then(response => response.json())
      .then(result => this.setState({ breeds: result }))
      .then(result => console.log(this.state.breeds))
      .catch(err => console.log(err));
  };

  getCategory() {
    fetch("https://api.thecatapi.com/v1/categories")
      .then(response => response.json())
      .then(result => this.setState({ categories: result }))
      // .then(result => console.log(this.state.categories))
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

  getBreedImg(breed) {
    let changeBreed = breed
    fetch(`https://api.thecatapi.com/v1/images/search?limit=9&page=9&breed_id=${changeBreed}`)
      .then(response => response.json())
      .then(result => this.setState({ cats: result }))
      .then(result => console.log(this.state.cats))
      .catch(err => console.log(err));
    // window.location.reload(false);
  }

  getCategoriesImg(category, format) {
    let changeCategory = category
    let changeFormat = format
    console.log("cat ", changeCategory, "format ", changeFormat)
    fetch(`https://api.thecatapi.com/v1/images/search?limit=18&page=18&category_ids=${changeCategory}&mime_types=${changeFormat}`)
      .then(response => response.json())
      .then(result => this.setState({ categoriesImg: result }))
      .then(result => console.log(this.state.categoriesImg))
      .catch(err => console.log(err));
  }
  render() {

    return (
      <div className="App">
        <Home
          breeds={this.state.breeds}
          categories={this.state.categories}
          categoriesImg={this.state.categoriesImg}
          cats={this.state.cats}
          getBreed={this.getBreed.bind(this)}
          getBreedImg={this.getBreedImg.bind(this)}
          getCategoriesImg={this.getCategoriesImg.bind(this)}
        />
      </div>
    );
  };
};

export default App;