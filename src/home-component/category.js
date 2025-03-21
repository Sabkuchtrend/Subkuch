import React, { useState,useEffect } from 'react';
import '../home-component/category.css';

const Category = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(8);

  const categories = [
    'Lighter', 'Clothes', 'Charger', 'Headphone', 'Sports',
    'Shoes', 'Jewellery', 'Accessories', 'Holi', 'Diwali'
  ];
// Update number of cards to show based on window width
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setCardsToShow(2); // For mobile screens, show 2 cards
    } else {
      setCardsToShow(8); // For larger screens, show 8 cards
    }
  };

  // Listen for window resize
  window.addEventListener('resize', handleResize);

  // Call once on component mount
  handleResize();

  // Cleanup listener on unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const handleNext = () => {
  if (startIndex + cardsToShow < categories.length) {
    setStartIndex(startIndex + cardsToShow);
  }
};

const handlePrev = () => {
  if (startIndex - cardsToShow >= 0) {
    setStartIndex(startIndex - cardsToShow);
  }
};
  return (
    // <div className="container-fluid mt-4">
    //   <div className="arrow d-flex justify-content-between">
    //     <i
    //       className="bi bi-arrow-left-short fs-3"
    //       onClick={handlePrev}
    //       style={{ cursor: 'pointer' }}
    //     ></i>
    //     <i
    //       className="bi bi-arrow-right-short fs-3"
    //       onClick={handleNext}
    //       style={{ cursor: 'pointer' }}
    //     ></i>
    //   </div>
    //         <div className="row">
    //       <div className="col-12 d-flex justify-content-start overflow-hidden">
    //         {categories.slice(startIndex, startIndex + cardsToShow).map((category, index) => (
    //           <div key={index} className="card passport-card mx-1">
    //             <img src="/assets/logo.png" className="card-img-top" alt={category} />
    //             <div className="card-body">
    //               <h5 className="card-title text-center">{category}</h5>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    // </div>
    <div className="container-fluid mt-4" >
    <div className="category-container" style={{marginTop:'40px',marginBottom:'40px'}}>
      {/* Left and Right Arrows */}
      <i
        className="bi bi-arrow-left-short fs-3 arrow-left"
        onClick={handlePrev}
      ></i>
      <i
        className="bi bi-arrow-right-short fs-3 arrow-right"
        onClick={handleNext}
      ></i>

      {/* Cards Row */}
      <div className="row">
        <div className="col-12 d-flex justify-content-start overflow-hidden">
          {categories.slice(startIndex, startIndex + cardsToShow).map((category, index) => (
            <div key={index} className="card passport-card mx-1">
              <img src="/assets/emoji.png" className="card-img-top" alt={category} />
              <div className="card-body">
                <h5 className="card-title text-center">{category}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Category;
