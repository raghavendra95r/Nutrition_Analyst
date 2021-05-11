import React from 'react';
import mainlogo from './manilogo.png';
import './navbar.css';

const Navbar =() => {
    return(
        <div>
            <div className="container-fluid ">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom ">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span className="fs-1 b grow " ><img  src={mainlogo} width="50px" height="50px" alt="logo"/> Nutrition Analyst</span>
      </a>

     
    </header>
  </div>
        </div>
    )
}

export default Navbar;