import React, {Component} from 'react';

class Cats extends Component {
  render(){
    const cats = this.props.cats
    // console.log(cats)
    return(
      <div>
        {cats.map((cat) => {
          cat.breeds.forEach((breed) => {
            console.log(breed.name, breed.temperament, breed.description, breed.origin)
          })
          console.log(cat.url)
        })}
      </div>
    )
  }
};

export default Cats