import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage, handlePageChange }) {
  return (
    <div className='footer'>
        <a href="https://github.com/isaacp5454"><img src="github.png" height="45px"></img></a>
        <a href="https://www.linkedin.com/in/isaac-park-560043163/"><img src="linkedin.png" height="50px"></img></a>
    </div>
  );
}

export default Footer;
