import React, { Component } from "react";
import Cat from "./Cat";

class Cats extends Component {
  render() {
    const cats = this.props.cats;
    console.log("this.props.cats", this.props.cats);
    return (
      <div className="cats-container">
        {cats?.map(({ url, cat }) => (
          <div key={cat?.id}>
            <Cat
              // name={breed.name}
              // origin={breed.origin}
              // temperament={breed.temperament}
              // description={breed.description}
              // lifeSpan={breed.life_span}
              wikipediaUrl={cat?.url}
              catsImg={this.props.catsImg}
            />
          </div>
        ))}
      </div>
    );
  }
}

export default Cats;
