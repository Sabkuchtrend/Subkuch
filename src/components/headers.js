import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import '../App.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      {/*  Top Header */}
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-12 col-md-2 text-center">
              <Link className="navbar-brand" to="/">
                <img src="/assets/logo.png" style={{ width: '110px', padding: '5px' }} alt="Logo" />
              </Link>
            </div>

            {/* Search Bar */}
            <div className="col-12 col-md-8 text-center">
              <div className="row align-items-center">
                <div className="col-12 col-md-4 text-center">
                  <p className="callus">
                    <i className="bi bi-telephone-outbound mx-2"></i>
                    Call us free: 1900 868686
                  </p>
                </div>
                <div className="col-12 col-md-8 d-flex align-items-center justify-content-center">
                  <div className="dropdown">
                    <button
                      className="btn btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ borderRadius: '20px 0px 0px 20px', background: 'white', width: '160px' }}
                    >
                      All Categories
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><Link className="dropdown-item" to="#">Category 1</Link></li>
                      <li><Link className="dropdown-item" to="#">Category 2</Link></li>
                      <li><Link className="dropdown-item" to="#">Category 3</Link></li>
                    </ul>
                  </div>

                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Keywords to search..."
                      style={{ borderRadius: '0px' }}
                    />
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      style={{
                        borderRadius: '0px 20px 20px 0px',
                        backgroundColor: '#ff7f00',
                        border: 'none',
                        width: '67px',
                      }}
                    >
                      <i className="bi bi-search" style={{ color: 'white' }}></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Cart and Login */}
            <div className="col-8 col-md-2 d-flex justify-content-end align-items-center mt-3 mt-md-0">
              <Link className="nav-link me-3" to="/login">
                <i className="bi bi-person" style={{ fontSize: '1.5rem' }}></i>
              </Link>
              <Link className="nav-link me-3" to="/cart">
                <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}></i>
              </Link>
              <Link className="nav-link" to="/login">
                <i className="bi bi-heart" style={{ fontSize: '1.5rem' }}></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Below Menu Header */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary belowbar">
        <div className="container-fluid">
          <div className="dropdown mx-auto">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-list mx-1" style={{ fontSize: '1.2 rem' }}></i>
              Shop By Categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
              <li><Link className="dropdown-item" to="#">Category 1</Link></li>
              <li><Link className="dropdown-item" to="#">Category 2</Link></li>
              <li><Link className="dropdown-item" to="#">Category 3</Link></li>
            </ul>
          </div>

          {/* Mobile View Logo */}
          <div className="Mobileleftlogo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/logo.png" style={{ width: '110px', padding: '5px' }} alt="Logo" />
            </Link>
          </div>

          {/* Navbar Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Collapse */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/shop">Shop</Link></li>
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/track-order">Track Order</Link></li>
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/aboutUs">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/contact">Contact Us</Link></li>
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/faqs">FAQs</Link></li>
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/policies">Policies</Link></li>
              <li className="nav-item"><Link className="nav-link text-uppercase" to="/career">Career</Link></li>
            </ul>

            {/* New Arrivals and Flash Sale */}
            <Link className="nav-link text-uppercase mx-2" to="/new-arrivals" style={{ color: 'green' }}>New Arrivals</Link>
            <Link className="nav-link text-uppercase" to="/flash-sale" style={{ color: 'red' }}>
              <i className="bi bi-lightning-fill mx-1" style={{ fontSize: '1.2 rem' }}></i> Flash Sale
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
