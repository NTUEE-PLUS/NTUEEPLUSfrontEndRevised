import React from 'react'
import Button from '@material-ui/core/Button'
import Logo from './Logo'
import '../css/NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = (props) => {
    const { hasNavDropdown, navDropdown, navButton, navBrand } = props
    const renderNavButton = navButton.map((nb) => (
        <Nav.Link href={nb.href} key={nb.buttonText}>
            <Button id='AppBar_menuButton' className='noHoverBg'>
                {nb.buttonText}
            </Button>
        </Nav.Link>
    ))
    const renderNav = hasNavDropdown ? (
        <Nav>
            <Button id='AppBar_menuButton' className='noHoverBg'>
                <NavDropdown title='ABOUT' id='basic-nav-dropdown'>
                    {navDropdown.map((nd) => (
                        <NavDropdown.Item href={nd.href} key={nd.buttonText}>
                            <Button id='AppBar_menuButton' className='noHoverBg'>
                                {nd.buttonText}
                            </Button>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </Button>
            {renderNavButton}
        </Nav>
    ) : (
        <Nav>{renderNavButton}</Nav>
    )
    return (
        //=========================Bootstrap React =============================
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href={navBrand}>
                <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                {renderNav}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar
