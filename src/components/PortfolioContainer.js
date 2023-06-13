import React, { useState } from 'react';
import NavTabs from './NavTabs';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import './something.css'

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div class="container text-center">
      <div class="row">
        <div class="col-1" >
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {/* We are passing the currentPage from state and the function to update it */}

        {/* Here we are calling the renderPage method which will return a component  */}
        <div id="content-wrapper" class=" col d-flex flex-column" >
          {renderPage()}
        </div>

        <Footer/>
      </div>


    </div>
  );
}
