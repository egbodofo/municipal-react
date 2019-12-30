import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdbreact';
import styled from 'styled-components';

const Axe = styled.div`
  text-shadow: 2px 2px 2px black, 0 0 0.5em blue, 0 0 0.1em blue;
  color: white;
  font: 1.5em Georgia, serif;
  background-image: url('http://bit.ly/2ZczaZQ');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 2em;
`;

const Axee = styled.div`
  color: black;
  font: 1.5em Georgia;
  padding-bottom: 2em;
  padding-top: 2em;
  text-align: justify;
`;

const Axeee = styled.h2`
  color: black;
  font: 2em Georgia;
`;

const Home = () => {
  return (
    <>
      <div>
        <div>
          <MDBJumbotron fluid>
            <MDBContainer>
              <h2 className="display-4">Ire-Akari Estate</h2>
              <p className="lead">
                A community filled with wonderful people who live in unity!
              </p>
            </MDBContainer>
          </MDBJumbotron>
        </div>
        <MDBCarousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          className="z-depth-1 w-100 p-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="http://bit.ly/2sWJUzy"
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>

        <Axe>
          <h1 className="text-center">Welcome to Ire-Akari Estate</h1>
          <h5 className="px-5 text-left">
            The town of Ire-akari was formed in 1855, becoming the first town in
            Oconto County. It included all the land in Township 27 North from
            the bay of Green Bay to the west side of the county (which at the
            time included the present day towns of Abrams and Morgan). At the
            time of incorporation it had three unincorporated communities
            developing. The settlement of Ire-akari being the largest, Oak
            Orchard and Brookside, the crossroad community that is now centrally
            located within the reduced boundaries of the county. The town took
            its name from the Menominee Indian name for the river “Paissacue”,
            along which the largest community was developing. The unincorporated
            village of Ire-akari developed in the area of the original
            waterwheel powered mill site (including a grist mill) built in 1827
            approximately 1 mile from the mouth of the river. It was the first
            sustained commercial sawmill in the Michigan territory (which
            included everything west of the great lakes to the Pacific Ocean).
            Between 1850 and 1852 a new mill site was developed at the mouth of
            the river, around which the community developed. Oak Orchard
            developed where a stopping off spot for travelers was built, and
            commercial fishing in the area circa 1847 was started. This location
            also had the Treaty Tree where early settlers negotiated with the
            Indians. Brookside developed at the intersection of two Indian
            trails, one running north/south (now CTH J) and the other east/west
            (presently Brookside Road)
            <a className="text-blue" href="/history">
              {' '}
              ...read more
            </a>
          </h5>
        </Axe>

        <MDBRow>
          <MDBCol>
            <Axee className="px-5">
              <Axeee>From the desk of the Chairman</Axeee>
              <img
                itemprop="image"
                data-original="IMAGE URL"
                align="right"
                className="w-50 p-2"
                alt="municipal"
                src="http://bit.ly/2ZfwIlj"
              />
              <p>
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to boldly go
                where no man has gone before. Many say exploration is part of
                our destiny, but it’s actually our duty to future generations
                and their quest to ensure the survival of the human species.
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to boldly go
                where no man has gone before. Many say exploration is part of
                our destiny, but it’s actually our duty to future generations
                and their quest to ensure the survival of the human species.
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to boldly go
                where no man has gone before. Many say exploration is part of
                our destiny, but it’s actually our duty to future generations
                and their quest to ensure the survival of the human species.
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to boldly go
                where no man has gone before. Many say exploration is part of
                our destiny, but it’s actually our duty to future generations
                and their quest to ensure the survival of the human species.
              </p>
            </Axee>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
};

export default Home;
