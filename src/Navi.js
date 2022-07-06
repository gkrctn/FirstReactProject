import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap'
import CartSummary from './CartSummary';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <Navbar
          color="light"
          light expand="md"
        >
          <NavbarBrand href="/">
            Northwind App
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="me-auto"
              navbar
            >
              <NavItem>
                <NavLink to="form1">
                  Form Demo 1
                </NavLink>
              </NavItem>
              <NavItem>
                <Link href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </Link>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}  />
            </Nav>
            <NavbarText>
              Simple Text
            </NavbarText>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}