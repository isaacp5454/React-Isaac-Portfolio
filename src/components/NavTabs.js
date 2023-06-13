import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs   navbar-nav bg-gradient-primary sidebar sidebar-dark accordion">
      <li className={currentPage === 'About' ? 'nav-item active' : 'nav-item'}>
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="nav-link"
        >
          About
        </a>
      </li>
      <li className={currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}>
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className='nav-link'
        >
          Portfolio
        </a>
      </li>
      <li className={currentPage === 'Resume' ? 'nav-item active' : 'nav-item'}>
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="nav-link"
        >
          Resume
        </a>
      </li>
      <li className={currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}>
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className="nav-link"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
