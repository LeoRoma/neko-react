import React, { Component } from 'react';
import Cat from './Cat';

class Cats extends Component {
  constructor(props) {
    super(props);

  };
  render() {
    const image = this.props.cats.map((cat) =>{
      return cat.url.toString()
    })
    const cats = this.props.cats.map((cat) => {
      console.log(cat.breeds)
    })
    // cats.map((cat)=>{
    //   console.log(cat.name)
    // })
    return(
      <div>
        <img src={image} width="480" height="320"></img>
      </div>
    )
  }
};

export default Cats