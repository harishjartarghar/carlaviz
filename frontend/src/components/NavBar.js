import React from 'react';
import {Navbar,NavbarBrand,} from 'reactstrap';

const NavBar = (props) => {
 
  return (
    <div>
      <Navbar color="faded"  expand="md">
        <NavbarBrand  href="/"  className="brand">CARLA SIMULATOR</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;