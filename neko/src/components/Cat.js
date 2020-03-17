import React, {Component} from 'react';

class Cat extends Component{
  render() {
    const name = this.props.name;
    const origin = this.props.origin;
    const temperament = this.props.temperament;
    const description = this.props.description;
    const wikipediaUrl = this.props.wikipediaUrl;
    return(
      <div>
        {name}
        {origin}
        {temperament}
        {description}
        {wikipediaUrl}
      </div>
    )
  }
};

export default Cat;