import React, { Component } from 'react';
import Cat from './Cat';


class Cats extends Component {

  render() {
    const cats = this.props.cats;
  
    return (
      <div>
        {
          cats.map(({ url, breeds }) => (
            <div>
              {
                breeds.map((breed) =>
                  <div key={breed.id}>
                    <Cat
                      name={breed.name}
                      origin={breed.origin}
                      temperament={breed.temperament}
                      description={breed.description}
                      lifeSpan={breed.life_span}
                      wikipediaUrl={breed.wikipedia_url}
                      image={url}
                      catsImg={this.props.catsImg}
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