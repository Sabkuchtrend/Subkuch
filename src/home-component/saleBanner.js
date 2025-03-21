import  '../home-component/salebanner.css'
import React from 'react';
const SaleBanner = ()=>{
    return(
        <div className="banner-container">
        <div className="banner-left">
          <div className="left-top">
            <img src="/assets/banner24.jpg" alt="Left  1" className="left-image" />
          </div>
          <div className="left-bottom">
            <img src="/assets/banner25.jpg" alt="Left  2" className="left-image" />
          </div>
        </div>
        <div className="banner-middle">
          <img src="/assets/banner26.jpg" alt="Main Banner " className="middle-image" />
        </div>
        <div className="banner-right">
          <div className="right-top">
            <img src="/assets/banner27.jpg" alt="Right  1" className="right-image" />
          </div>
          <div className="right-bottom">
            <img src="/assets/banner28.jpg" alt="Right 2" className="right-image" />
          </div>
        </div>
      </div>
    )
}
export default SaleBanner;