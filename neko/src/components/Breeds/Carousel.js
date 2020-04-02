
import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";
  import GridListTile from '@material-ui/core/GridListTile';

const CarouselPage = ({ catsImg }) => {
  catsImg.forEach((cat, index) => {console.log(cat, index)})
 
  return (
    <MDBContainer>
      {/* <MDBCarousel
        activeItem={1}
        length={catsImg.length}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={catImg}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel> */}
      {catsImg.map(tile => (
        <GridListTile key={tile.id} className="thumbnail">
          <img src={tile.url} alt="nekos" />
        </GridListTile>
      ))}
    </MDBContainer>
  );
}

export default CarouselPage;