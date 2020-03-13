import React, { Component } from 'react';


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
                    <h1>{breed.name}</h1>
                    <h2>{breed.origin}</h2>
                    <h3>{breed.temperament}</h3>
                    <p>{breed.description}</p>
                    <a href={breed.wikipedia_url}>More details</a>
                  </div>
                )
              }
              <img src={url} width="480" height="320"></img>
            </div>
          ))
        }
      </div >
    )

  }
}


export default Cats