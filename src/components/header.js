// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Top Header */}
      <header className="bg-dark py-2 shadow-sm">
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo (Left side) */}
            <div className="col-4">
              <div className='leftlogo'>
                <Link className="navbar-brand" to="/">
                  <img src="/assets/logo.png" style={{ width: '110px', padding:'5px' }} alt="Logo" />
                </Link>
              </div>

            </div>

            {/* Search Bar (Center) */}
            <div className="col-8 text-center">

              <div className='row align-items-center'>
                <div className='col-4 text-cente'>
                  <p className='callus'>
                    <i class="bi bi-telephone-outbound mx-2"></i>
                    Call us free: 1900 868686</p>

                </div>
                {/* <div className='col-8'>
              <input
                type="text"
                className="form-control"
                placeholder="Search for products..."
                style={{ width: '100%', borderRadius:'20px' }}
              />
              </div> */}
                <div className="col-8 d-flex align-items-center">
                  {/* Left Side: Categories Dropdown */}
                  <div className="dropdown">
                    <button
                      className="btn btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{borderRadius: '20px 0px 0px 20px', background:'white', width:'170px'}}
                    >
                      All Categories
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <li><Link className="dropdown-item" to="#">Category 1</Link></li>
                      <li><Link className="dropdown-item" to="#">Category 2</Link></li>
                      <li><Link className="dropdown-item" to="#">Category 3</Link></li>
                    </ul>
                  </div>

                  {/* Search Bar */}
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Keywords to search..."
                      style={{ borderRadius: '0px' }}
                    />
                    {/* Magnifying Glass Icon Button */}
                    <button
                      className="btn btn-outline-danger"
                      type="button"
                      style={{
                        borderRadius: '0px 20px 20px 0px',
                        backgroundColor: '#ff7f00', // Orange color
                        border: 'none',
                        width:'67px'
                      }}
                    >
                      <i className="bi bi-search" style={{ color: 'white' }}></i>
                    </button>
                  </div>
                </div>


              </div>
            </div>

            {/* Cart and Login (Right side) */}
            <div className="col-2 d-flex justify-content-end align-items-center">
              {/* Login */}
              <Link className="nav-link me-3" to="/login">
                <i className="bi bi-person" style={{ fontSize: '1.5rem' }}></i>
                <span className="ms-2"></span>
              </Link>
              {/* Cart */}
              <Link className="nav-link me-3" to="/cart">
                <i className="bi bi-cart" style={{ fontSize: '1.5rem' }}></i>
                <span className="ms-2"></span>
              </Link>

              
              <Link className="nav-link" to="/login">
                <i className="bi bi-heart" style={{ fontSize: '1.5rem' }}></i>
                <span className="ms-2"></span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container-fluid">


          {/* Center Dropdown Menu */}
          <div className="dropdown mx-auto">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              id="dropdownMenu"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ><i className="bi bi-list mx-1" style={{ fontSize: '1.2 rem' }}></i>
              Shop By Categories
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
              <li><Link className="dropdown-item" to="#">Category 1</Link></li>
              <li><Link className="dropdown-item" to="#">Category 2</Link></li>
              <li><Link className="dropdown-item" to="#">Category 3</Link></li>
            </ul>
          </div>

          {/* Centered Menu Items */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/track-order">Track Order</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/aboutUs">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/contact">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/faqs">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/policies">Policies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/career">Career</Link>
              </li>
            </ul>
          </div>
          {/* Left Side - New Arrivals and Flash Sale */}
          <div className="d-flex me-auto">
            <Link className="nav-link text-uppercase mx-2" to="/new-arrivals" style={{ color: 'green' }}>New Arrivals</Link>
            <Link className="nav-link text-uppercase" to="/flash-sale" style={{ color: 'red' }}>
              <i className="bi bi-lightning-fill mx-1" style={{ fontSize: '1.2 rem' }}></i>
              Flash Sale</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
