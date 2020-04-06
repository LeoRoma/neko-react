import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";


const Carousel = ({ catsImg }) => {
  const styles = ({
    stretch: {
      width: 50,
      height: 350,
      resizeMode: 'stretch',
    },
  });
  
  console.log(catsImg.length)
  return (
    <div>
      <MDBContainer className="carousel-container">
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner className="carousel-inner">
            {catsImg.map((catImg, index) => (
              <MDBCarouselItem className="container-img" itemId={index}>
                <MDBView className="thumbnail">
                  <img
                    style={styles.stretch}
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
    </div>
  );
}

export default Carousel;