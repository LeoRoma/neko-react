import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";


const Carousel = ({ catsImg }) => {

  // const catsImgLength = catsImg.length
  console.log("carousel", catsImg.length)

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          {catsImg.map((catImg, index) => (
            <MDBCarouselItem itemId={index}>
              <MDBView>
                <img
                  className="d-block w-100"
                  src={catImg.url}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Carousel;