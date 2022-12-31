// IMPORTS //
import React from 'react';
import { useState } from 'react';
import {
    Navbar,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


// CODE TO CREATE THE HEADER START //
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Navbar sticky='top' expand='md'>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)}/>
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <Nav></Nav>
                        <Nav className='ms-auto' navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/about'>
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/services'>
                                    Services
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/portfolio/0'>
                                    Portfolio
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/contact'>
                                    Contact
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Nav>
                </Collapse>
        </Navbar>
    );
};
// HEADER CODE END //

// EXPORT STATEMENT //
export default Header;