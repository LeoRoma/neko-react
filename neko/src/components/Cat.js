import React, {Component} from 'react';

class Cat extends Component{
  render(){
    const name = this.props.name;
    const description = this.props.description;
    const origin = this.props.origin;
    const temperament = this.props.temperament
    return(
      <div>
        <h1>{name}</h1>
        <h2>{origin}</h2>
        <h3>{temperament}</h3>
        <p>{description}</p>
      </div>
    )
  }
};

export default Cat;