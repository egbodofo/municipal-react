import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBFormInline,
} from 'mdbreact';

export const Navigation = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MDBNavbar id="Navigation" dark expand="md">
      <MDBNavbarBrand>
        <MDBNavLink to="/">
          <strong className="white-text">Ire-Akari Estate</strong>
        </MDBNavLink>
      </MDBNavbarBrand>
      <MDBNavbarToggler onClick={toggleCollapse} />
      <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        <MDBNavbarNav>
          {/* {isAuthenticated ? userLinks : guestLinks} */}

          <MDBNavItem>
            <MDBFormInline waves>
              <div className="md-form my-0">
                <input
                  className="form-control mr-sm-2"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </MDBFormInline>
          </MDBNavItem>

          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">Government</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/executives">Executives</MDBDropdownItem>
                <MDBDropdownItem href="#!">Agendas</MDBDropdownItem>
                <MDBDropdownItem href="#!">Minutes</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">About us</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="/history">
                  History & maps
                </MDBDropdownItem>
                <MDBDropdownItem href="#!">News & Updates</MDBDropdownItem>
                <MDBDropdownItem href="/gallery">Gallery</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>

          <MDBNavItem>
            <MDBDropdown>
              <MDBDropdownToggle nav caret>
                <span className="mr-2">Estate Service</span>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem href="#!">Emergency</MDBDropdownItem>
                <MDBDropdownItem href="#!">Stickers & permits</MDBDropdownItem>
                <MDBDropdownItem href="#!">Business & adverts</MDBDropdownItem>
                <MDBDropdownItem href="#!">Online Payments</MDBDropdownItem>
                <MDBDropdownItem href="#!">Projects</MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBCollapse>
    </MDBNavbar>
  );
};

export default Navigation;
