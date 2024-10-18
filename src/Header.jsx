import React from 'react'

function Header({  scrollToTop, headerControl, headerControlText, headerController }) {
  return (
    <header>
        <img src="/logo.svg" alt="logo" />
        <nav className='nav'>
          <h4>About</h4>
          <h4>Discover</h4>
          <h4>Get Started</h4>
        </nav>
        <div className={headerControl ? 'dark-nav' : ''}>
          <img className='mobile-nav-click' onClick={() => {headerController(); scrollToTop(0);}} src={`/icon-${headerControlText}.svg`} alt="menu control" />
          <nav className={`mobile-nav ${headerControl ? 'active' : ''}`}>
            <h4>About</h4>
            <h4>Discover</h4>
            <h4>Get Started</h4>
          </nav>
        </div>
    </header>
  )
}

export default Header;



// import React, { useContext } from 'react';
// import { AppContext } from './AppContext';

// function Header() {
//   const { scrollToTop, headerControl, headerControlText, headerController } = useContext(AppContext);

//   return (
//     <header>
//       <img src="/logo.svg" alt="logo" />
//       <nav className="nav">
//         <h4>About</h4>
//         <h4>Discover</h4>
//         <h4>Get Started</h4>
//       </nav>
//       <div className={headerControl ? 'dark-nav' : ''}>
//         <img
//           className="mobile-nav-click"
//           onClick={() => {
//             headerController();
//             scrollToTop(0);
//           }}
//           src={`/icon-${headerControlText}.svg`}
//           alt="menu control"
//         />
//         <nav className={`mobile-nav ${headerControl ? 'active' : ''}`}>
//           <h4>About</h4>
//           <h4>Discover</h4>
//           <h4>Get Started</h4>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;
