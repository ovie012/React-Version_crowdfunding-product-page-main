import React from 'react'

function Header() {
  return (
    <header>
        <img src="/logo.svg" alt="logo" />
        <nav className='nav'>
            <h4>About</h4>
            <h4>Discover</h4>
            <h4>Get Started</h4>
        </nav>
    </header>
  )
}

export default Header;