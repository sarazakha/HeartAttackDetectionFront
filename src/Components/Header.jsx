import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar style={{ backgroundColor: "Black" }} expand="lg">
                    <NavbarBrand style={{ color: "white" }}> Heart Attack Detection</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

export default Header;