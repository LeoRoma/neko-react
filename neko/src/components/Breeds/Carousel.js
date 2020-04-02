import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";


const Carousel = ({ catsImg }) => {
  const styles = ({
    // container: {
    //   paddingTop: 50,
    // },
    stretch: {
      width: 50,
      height: 350,
      resizeMode: 'stretch',
    },
  });
  // const catsImgLength = catsImg.length
  // console.log(catsImg)

  return (
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
  );
}

export default Carousel;