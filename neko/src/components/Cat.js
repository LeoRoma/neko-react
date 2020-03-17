import React, {Component} from 'react';

class Cat extends Component{
  render() {
    const name = this.props.name
    return(
      <div>
        {name}
      </div>
    )
  }
};

export default Cat;