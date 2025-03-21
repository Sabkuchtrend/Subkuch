// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contactus';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/aboutUs';
import FAQs from './components/faq';
import TrackOrder from './components/trackOrder';
import ProfileLogin from './components/profile_login';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/headers';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Header /> */}
      <div className='container-fluid'>
      <Navbar/>
      <Routes>
        {/* <Route exact path="/" component={Home} /> */}
        <Route path="/" element={<Home />} /> 
        <Route path="/shop" element={<Home />} /> 
        <Route path="/offers" element={<Home />} /> 
        <Route path="/contact" element={<Contact/>} /> 
        <Route path='/aboutUs' element={<AboutUs/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/track-order' element={<TrackOrder/>}/>
        <Route path='/login' element={<ProfileLogin/>}/>
        <Route path='/cart' element={<ShoppingCart/>}/>
        {/* <Route path="/shop" render={() => <div>Shop Page</div>} />
        <Route path="/offers" render={() => <div>Offers Page</div>} />
        <Route path="/contact" render={() => <div>Contact Page</div>} /> */}
      </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
