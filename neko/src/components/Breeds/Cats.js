import React, { Component } from 'react';
import Cat from './Cat';

class Cats extends Component {

  render() {
    const cats = this.props.cats;
    // console.log(cats)
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
                      image={url}
                    />

                  </div>
                )
              }
            </div>
          ))
        }
      </div >
    )

  }
}


export default Cats