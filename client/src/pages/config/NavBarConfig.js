const IN_CONFIG = {
    navButton : [
        { href: '/in/Career', buttonText: 'Career' },
        { href: '/in/Study', buttonText: 'Study' },
        { href: '/in/Column', buttonText: 'Column' },
        { href: '/in/Search', buttonText: 'Search' },
    ],
    hasNavDropdown: false,
    navBrand: '/in',
}

const OUT_CONFIG = {
    navDropdown : [
        { href: '/About', buttonText: 'About'},
        { href: '/History', buttonText: 'History' },
        { href: '/Team', buttonText: 'Team' },
    ],
    navButton : [
        { href: '/Contact', buttonText: 'Contact' },
        { href: '/Support', buttonText: 'Support' },
        { href: '/Login', buttonText: 'Login' },
    ],
    navBrand: '/',
    hasNavDropdown: true,
}

export { OUT_CONFIG, IN_CONFIG }