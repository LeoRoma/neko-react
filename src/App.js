import React, { Component } from 'react';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/Home'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      categories: [],
      cats: [],
      catsImg: [],
      images: []
    }
  };

  componentDidMount() {
    this.getCats()
    this.getBreed()
    this.getCategory()
  };

  getCats() {
    fetch("https://api.thecatapi.com/v1/breeds?f16ad962-557b-4deb-b7ab-626cc52a45f9")
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
  };

  getBreedImg(breed) {
    let changeBreed = breed
    fetch(`https://api.thecatapi.com/v1/images/search?limit=8&page=8&breed_id=${changeBreed}`)
      .then(response => response.json())
      .then(result => this.setState({ catsImg: result }))
      .then(result => console.log(this.state.catsImg))
      .catch(err => console.log(err));
  };

  getImages(selector, imageId, type) {
    let changeSelector = selector;
    let changeImageId = imageId;
    let changeType = type;
    fetch(`https://api.thecatapi.com/v1/images/search?limit=45&page=45&mime_types=${changeType}&${changeSelector}_ids=${changeImageId}`)
      .then(response => response.json())
      .then(result => this.setState({ images: result }))
      .then(result => console.log(this.state.images))
      .catch(err => console.log(err));
  };

  render() {
    
    return (
      <div className="App">
        <Home
          breeds={this.state.breeds}
          categories={this.state.categories}
          cats={this.state.cats}
          catsImg={this.state.catsImg}
          getImages={this.getImages.bind(this)}
          getBreed={this.getBreed.bind(this)}
          getBreedImg={this.getBreedImg.bind(this)}
          images={this.state.images}
        />
      </div>
    );
  };
};

export default App;
