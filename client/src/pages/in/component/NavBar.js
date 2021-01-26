import React from 'react'
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button'
import Logo from './Logo'
import '../css/NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const NavBar = () => {
    return (
        //=========================Bootstrap React =============================
        <Navbar bg='light' expand='lg'>
            <Navbar.Brand href='/in'>
                <Logo />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                    <Nav.Link href='/in/Career'>
                        <Button id='AppBar_menuButton' className='noHoverBg'>
                            Career
                        </Button>
                    </Nav.Link>
                    <Nav.Link href='/in/Study'>
                        <Button id='AppBar_menuButton' className='noHoverBg'>
                            Study
                        </Button>
                    </Nav.Link>
                    <Nav.Link href='/in/Column'>
                        <Button id='AppBar_menuButton' className='noHoverBg'>
                            Column
                        </Button>
                    </Nav.Link>
                    <Nav.Link href='/in/Search'>
                        <Button id='AppBar_menuButton' className='noHoverBg'>
                            Search
                        </Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar
