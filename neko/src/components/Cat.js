import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";

import './Cat.css'

class Cat extends Component {

  render() {
    const name = this.props.name;
    const origin = this.props.origin;
    const temperament = this.props.temperament;
    const description = this.props.description;
    const wikipediaUrl = this.props.wikipediaUrl;
    const image = this.props.image
    console.log(name)
    return (
      <div>
        <MDBView>
          <MDBContainer className="border border-dark">
            <MDBRow>
              <MDBCol className="black-text text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation>
                  <h1 className="h1-responsive font-weight-bold mt-sm-5">
                    {name}
                  </h1>
                  <hr className="hr-light" />
                  <h2>
                    {origin}
                  </h2>
                  <h6 className="mb-10">
                    {temperament}
                  </h6>
                  <p>
                    {description}
                  </p>
                  <p><a href={wikipediaUrl}>More Details</a></p>
                </MDBAnimation>
              </MDBCol>
              <MDBCol md="24" xl="5" className="mt-xl-5 mb-5">
                <MDBAnimation>
                  <img
                    src={image}
                    alt=""
                    className="card-img-top img-fluid mx-auto d-block"
                    width="620"
                    height="700"
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    )
  }
};

export default Cat;