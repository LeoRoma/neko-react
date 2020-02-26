import React, { Component } from 'react';

class Cats extends Component {
  render() {
    return (
      <div>
        {this.props.cats.map((cat) =>
          <div>
            <div>
              <h5>{cat.name}</h5>
            </div>
          </div>
        )}
      </div>
    )
  };
};

export default Cats;