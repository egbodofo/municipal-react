import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBContainer, MDBCardBody } from 'mdbreact';
// import styled from 'styled-components';

// const Cont = styled.div`
//   minwidth: 200em;
// `;

const GalleryShow = () => {
  return (
    <MDBContainer className="mt-2 text-center">
      <MDBRow>
        <MDBCol>
          <MDBCard className="m-2">
            <MDBCardBody>
              <img
                itemprop="image"
                data-original="IMAGE URL"
                align="left"
                className="w-50 p-2"
                alt="municipal"
                src="http://bit.ly/372aZQi"
              />
              <p className="pt-4">
                Space, the final frontier. These are the voyages of the Starship
                Enterprise. Its five-year mission: to explore strange new
                worlds, to seek out new life and new civilizations, to boldly go
                where no man has gone before. Many say exploration is part of
                our destiny, but it’s actually our duty to future generations
                and their quest to ensure the survival of the human species
              </p>
              <hr></hr>

              <p>
                Date: <span>23-12-2019</span>
              </p>

              <div>
                <a className="btn btn-success" href="/gallery">
                  Back to Gallery
                </a>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default GalleryShow;
