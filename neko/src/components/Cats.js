import React, { Component } from 'react';
import Cat from './Cat';

class Cats extends Component {

  render() {
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
                      image={url}
                    />
                  
                  </div>
                )
              }
              {/* <Cat 
              image={url}
              /> */}
            </div>
          ))
        }
      </div >
    )

  }
}


export default Cats