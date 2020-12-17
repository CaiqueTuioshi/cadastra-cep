import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

type Props = {};

const HomePage: React.FC<Props> = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <Container className='home themed-container'>
      <Navbar color='light' light>
        <NavbarBrand href='/' className='mr-auto'>
          Trade Technology
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href='/ceps/novo'>Adicionar CEP</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/ceps'>Listar CEPs</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Container>
  );
};

export default HomePage;
