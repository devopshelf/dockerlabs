import React from 'react'
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

export default () => {
  const headerStyle = {
      margin:"10px 0"
  }  

  const brandStyle = {
      fontSize:"30px"
  }
  return (
    <Navbar color="light" style={headerStyle}  light expand="md">
        <NavbarBrand style={brandStyle} href="/">Dexter's <span style={{"color":"#077cbc"}}>Docker</span> Lab</NavbarBrand>
        <Nav navbar>
            <NavItem>
            <NavLink target="blank" href="https://github.com/devopshelf/docker-cheatsheet/blob/master/README.md">Cheatsheet</NavLink>
            </NavItem>
            <NavItem>
            <NavLink target="blank" href="https://github.com/devopshelf/dockerfile-examples">Examples</NavLink>
            </NavItem>
            <NavItem>
            <NavLink target="blank" href="https://github.com/devopshelf">
              <i style={{"color":"#077cbc"}} className="fab fa-github"></i>
            </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
  )
}
