import React from 'react';
import '../home-component/hotdeal.css'
const HotDeals = () => {
    const products = [
        { id: 1, name: 'Battery Power', image: '/assets/ult2.jpg' , price:'45', stars:4 },
        { id: 2, name: 'Bubble Gun Shots', image: '/assets/bubblegun.jpg',price:'55',stars:4},
        { id: 3, name: 'Mobile Dust Guard', image: '/assets/dust3.jpg',price:'75',stars:5 },
        { id: 4, name: 'Summer Portable Fan', image: '/assets/neckfan.webp',price:'15',stars:3 },
        { id: 5, name: 'Battery Power', image: '/assets/ult2.jpg',price:'25',stars:4 },
    ];

    return (
        <div className="hotdeal-container">
            <div className="hotdeal-content">
                <div className="hotdeal-left">
                    <h2 className="hotdeal-title">Hot Deals</h2>
                    <p className="hotdeal-description">
                        Don't miss out on these amazing offers. Check out the best products with unbeatable prices.
                    </p>
                    <button className="view-all-btn">View All</button>
                </div>
                <div className="hotdeal-right">
                    {products.map((product) => (

                        <div className="product-card" key={product.id}>
                            <div className='hotimage'>
                                <img src={product.image} alt={product.name} className="product-image" />
                                <div className="product-icons">
                                    <button className="cart-icon">🛒</button>
                                    <button className="buy-icon">💵</button>
                                </div>
                            </div>
                            
                            <div className="product-details">
                                <h5 className="battery-info">
                                    <small>{product.name}</small>
                                </h5>

                                <div className="stars-info" style={{color:'#ffc826'}}>
                                    {/* <strong>Rating: </strong> */}
                                    {/* Render stars based on product.stars */}
                                    {[...Array(5)].map((_, index) => (
                                        <span key={index} className={index < product.stars ? 'filled-star' : 'empty-star'}>
                                            ★
                                        </span>
                                    ))}
                                    {/* <span>{product.stars}</span> */}
                                </div>

                                <p className="product-price" style={{color:'#FF6D33'}}>
                                    <strong>Price: </strong>${product.price}
                                </p>
                            </div>

                        </div>

                    ))}
                </div>
            </div>
        </div>
    )
}
export default HotDeals;