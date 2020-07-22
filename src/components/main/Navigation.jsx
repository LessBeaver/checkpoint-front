import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/accueil">Accueil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/mes-voyages">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/a-propos">A Propos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recherce">Recherche</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Leslie Rouzier</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
