
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
import GridListTile from '@material-ui/core/GridListTile';

const CarouselPage = ({ catsImg }) => {

  const catsImgLength = catsImg.length

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={catsImgLength}
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
      {/* {catsImg.map(tile => (
        <GridListTile key={tile.id} className="thumbnail">
          <img src={tile.url} alt="nekos" />
        </GridListTile>
      ))} */}
    </MDBContainer>
  );
}

export default CarouselPage;