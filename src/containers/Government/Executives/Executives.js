import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact';
import styled from 'styled-components';

const Axe = styled.h1`
  text-shadow: 2px 2px 2px black, 0 0 0.6em blue, 0 0 0.1em blue;
  color: gold;
  font: 4em Georgia, serif;
  font-weight: bold;
`;

const Executives = () => {
  return (
    // <div className="my-2 mx-2">
    <MDBContainer fluid className="mt-2">
      <Axe className="text-center">Estate Executives</Axe>
      <MDBRow>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            className="my-2"
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/2ZCmdZm"
                alt=""
                waves
                className="rounded-circle pt-2 img-fluid"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Ajani Oke</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">Chairman</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            className="my-2"
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/37rIaNl"
                alt=""
                className="rounded-circle pt-2"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Marie Odewale</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">Vice-Chairman</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            className="my-2"
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/35fVJyh"
                alt=""
                className="rounded-circle pt-2"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Kunle Kaka</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">General Secretary</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            className="my-2"
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/2F3s9RR"
                alt=""
                className="rounded-circle pt-2"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Sarah Kuku</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">Treasurer</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>{' '}
      <MDBRow>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            className="my-2"
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/35aUsZ8"
                alt=""
                className="rounded-circle pt-2"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Kani Suru</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">P.R.O</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            className="my-2"
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/2ZE71en"
                alt=""
                className="rounded-circle pt-2"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Dele Smart</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">Financial Secretary</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            className="my-2"
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/36c5MWi"
                alt=""
                className="rounded-circle pt-2"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Tosin Lawani</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">Chief Security</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol className="text-center col-xm-12 col-sm-6 col-md-4 col-lg-3">
          <MDBCard
            style={{
              minHeight: '352px',
            }}
          >
            <p className="mx-auto white">
              <img
                style={{ maxHeight: '10rem' }}
                src="http://bit.ly/2Q94Mwk"
                alt=""
                className="rounded-circle pt-2"
              />
            </p>
            <MDBCardBody>
              <h4 className="font-weight-bold mb-3">Mary Thompson</h4>
              <p className="font-weight-bold blue-text">
                <a href="/executiveshow">Cheif Whip</a>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>{' '}
    </MDBContainer>
    // </div>
  );
};

export default Executives;
