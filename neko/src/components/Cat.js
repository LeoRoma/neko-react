import React, { Component } from 'react';
import {
  MDBRow,
  MDBCol,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";

class Cat extends Component {

  render() {
    const name = this.props.name;
    const origin = this.props.origin;
    const temperament = this.props.temperament;
    const description = this.props.description;
    const wikipediaUrl = this.props.wikipediaUrl;
    const image = this.props.image

    return (
      <div>
        <MDBView>
          <MDBContainer>
            <MDBRow>
              <MDBCol className="black-text text-center text-md-left mt-xl-5 mb-5">
                <MDBAnimation type="fadeInLeft" delay=".3s">
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
              <MDBCol md="5" xl="4" className="mt-xl-5">
                <MDBAnimation type="fadeInRight" delay=".3s">
                  <img
                    src={image}
                    alt=""
                    className="img-fluid"
                    width="480"
                    height="320"
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