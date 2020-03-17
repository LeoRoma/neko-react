import React, { Component } from 'react';
import Cat from './Cat';

class Cats extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const image = this.props.cats.map((cat) => {
      return cat.url.toString()
    })
    const cats = this.props.cats;

    return (
      <div key={cats.id}>
        {
          cats.map(({ url, breeds }) => (
            <div>
              {
                breeds.map((breed) =>
                  <div>
                    <Cat
                      name={breed.name}
                      origin={breed.origin}
                      temperament={breed.temperament}
                      description={breed.description}
                      wikipediaUrl={breed.wikipedia_url}
                    />
                  
                  </div>
                )
              }
              <img src={url} width="480" height="320"></img>
            </div>
          ))
        }
        <Cat />
      </div >
    )

  }
}


export default Cats