import React from 'react'

function Banner() {
  return (
    <>
        <div className="banner">
            <img className='desktop-banner' src="/image-hero-desktop.jpg" alt="banner" />
            <img className='mobile-banner' src="/image-hero-mobile.jpg" alt="banner" />
        </div>
    </>
  )
}

export default Banner