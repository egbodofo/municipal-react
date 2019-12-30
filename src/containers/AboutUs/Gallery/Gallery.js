import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
} from 'mdbreact';
import styled from 'styled-components';

const Axe = styled.h1`
  text-shadow: 2px 2px 2px black, 0 0 0.5em blue, 0 0 0.1em blue;
  color: gold;
  font: 4em Georgia, serif;
  font-weight: bold;
`;

const Gallery = () => {
  return (
    <MDBContainer fluid className="mt-2">
      <Axe className="text-center">Welcome to our Gallery</Axe>
      <MDBRow>
        <MDBCol className="text-center col-sm-6 col-md-3">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="http://bit.ly/2PMjtW6"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-sm-6 col-md-6">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="http://bit.ly/372aZQi"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-sm-12 col-md-3">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="http://bit.ly/2PMjtW6"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>{' '}
      <MDBRow>
        <MDBCol className="text-center col-sm-4 col-md-6">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="http://bit.ly/39ePgqu"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-sm-8 col-md-6">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="http://bit.ly/35VyWcc"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>{' '}
      <MDBRow>
        <MDBCol className="text-center col-sm-12 col-md-3">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="http://bit.ly/39ePgqu"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-sm-6 col-md-6">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="http://bit.ly/35VyWcc"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-sm-6 col-md-3">
          <MDBCard className="m-1">
            <MDBCardBody>
              <MDBCardImage
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                waves
              />
              <MDBBtn href="/galleryshow">View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>{' '}
    </MDBContainer>
  );
};

export default Gallery;
