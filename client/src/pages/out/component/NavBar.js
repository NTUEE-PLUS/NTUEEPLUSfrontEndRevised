import React from 'react'
import Nav from '../../component/NavBar'

const navDropdown = [
    { href: '/About', buttonText: 'About'},
    { href: '/History', buttonText: 'History' },
    { href: '/Team', buttonText: 'Team' },
]

const navButton = [
    { href: '/Contact', buttonText: 'Contact' },
    { href: '/Support', buttonText: 'Support' },
    { href: '/Login', buttonText: 'Login' },
]

const NavBar = () => {
    return (
        <Nav 
            hasNavDropdown={true}
            navDropdown={navDropdown}
            navButton={navButton}
            navBrand='/'
        />
    )
}
export default NavBar
