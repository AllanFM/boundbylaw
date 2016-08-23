import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

export default class Header extends React.Component{
    render(){
        return (
          <Navbar>
            <Nav>
              <LinkContainer to="/">
                <NavItem eventKey={1} href="#">Home</NavItem>
              </LinkContainer>
              <LinkContainer to="videos">
                <NavItem eventKey={2} href="#">Videos</NavItem>
              </LinkContainer>
              <LinkContainer to="music">
                <NavItem eventKey={3} href="#">Music</NavItem>
              </LinkContainer>
              <LinkContainer to="tour">
                <NavItem eventKey={4} href="#">Tour</NavItem>
              </LinkContainer>
              <LinkContainer to="contact">
                <NavItem eventKey={5} href="#">Contact</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar>

        )
    }
}
