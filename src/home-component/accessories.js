import React from 'react';
import '../home-component/accessories.css'; // Optional custom styles

const Accessories = () => {
    return (
        <div className="container-fluid" style={{marginTop:'40px'}}>
            {/* Card Section Above the Title */}
            <div className="card p-3 mt-4">
                <div className="d-flex align-items-center">
                    {/* Left Section - Image */}
                    <div className="image-section me-4">
                        <img
                            className="mark-lazy"
                            src="https://magento2.magentech.com/themes/sm_future/pub/media/wysiwyg/icon-image/wedding-dress.png"
                            alt="Fashion & Accessories"
                            width="50"
                            height="50"
                        />
                    </div>
                    {/* Right Section - Title */}
                    <div className="title-section">
                        <strong className="h5 text-dark">Shop Accessories</strong>
                    </div>
                </div>
            </div>

            <div className="container-fluid text-center bg-white " style={{ borderRadius: '8px', marginTop: '12px' }}>
                <div className="row">
                    <div className="col-4 mb-2 leftimage">
                        <img src='./assets/banner29.jpg' style={{ width: 'auto' }}></img>
                    </div>
                    <div className="col-sm-8 p-3 productSet">
                        <div>
                            <div className="row">
                                <div className="col right1">
                                    <img
                                        src="/assets/ult2.jpg"
                                        alt="Product 1"
                                        className="product-imag img-fluid"

                                    />
                                    <div className="product-details">
                                        <h5 className="product-name">Product Name</h5>


                                        <div className="stars-info" style={{ color: '#ffc826' }}>
                                            {/* <strong>Rating: </strong> */}
                                            {/* Render stars based on product.stars */}
                                            {[...Array(5)].map((_, index) => (
                                                <span key={index} className={index < 5 ? 'filled-star' : 'empty-star'}>
                                                    ★
                                                </span>
                                            ))}
                                            {/* <span>{product.stars}</span> */}
                                        </div>
                                        <p className="product-price">$45</p>
                                    </div>
                                </div>
                                <div className="col right2">
                                    <img
                                        src="/assets/ult2.jpg"
                                        alt="Product 1"
                                        className="product-imag img-fluid"

                                    />
                                    <div className="product-details">
                                        <h5 className="product-name">Product Name</h5>
                                        {[...Array(5)].map((_, index) => (
                                                <span key={index} className={index < 5 ? 'filled-star' : 'empty-star'}>
                                                    ★
                                                </span>
                                            ))}
                                        <p className="product-price">$45</p>
                                    </div>
                                </div>
                                <div className="col right3">
                                    <img
                                        src="/assets/ult2.jpg"
                                        alt="Product 1"
                                        className="product-imag img-fluid"

                                    />
                                    <div className="product-details">
                                        <h5 className="product-name">Product Name</h5>
                                        {[...Array(5)].map((_, index) => (
                                                <span key={index} className={index < 5 ? 'filled-star' : 'empty-star'}>
                                                    ★
                                                </span>
                                            ))}
                                        <p className="product-price">$45</p>
                                    </div>
                                </div>
                                <div className="col right3">
                                    <img
                                        src="/assets/ult2.jpg"
                                        alt="Product 1"
                                        className="product-imag img-fluid"

                                    />
                                    <div className="product-details">
                                        <h5 className="product-name">Product Name</h5>
                                        {[...Array(5)].map((_, index) => (
                                                <span key={index} className={index < 5 ? 'filled-star' : 'empty-star'}>
                                                    ★
                                                </span>
                                            ))}
                                        <p className="product-price">$45</p>
                                    </div>
                                </div>
                                <div className="col right3">
                                    <img
                                        src="/assets/ult2.jpg"
                                        alt="Product 1"
                                        className="product-imag img-fluid"

                                    />
                                    <div className="product-details">
                                        <h5 className="product-name">Product Name</h5>
                                        {[...Array(5)].map((_, index) => (
                                                <span key={index} className={index < 5 ? 'filled-star' : 'empty-star'}>
                                                    ★
                                                </span>
                                            ))}
                                        <p className="product-price">$45</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Accessories;
