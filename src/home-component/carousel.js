import React from 'react';
import '../home-component/carousel.css';

function Carousel() {
    return (
        // Carousel Section
        <div id="carouselExampleIndicators" className="carousel slide mt-1" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner carousel-height">
                <div className="carousel-item active">
                    <img src="/assets/banner31.webp" className="d-block w-100 carousel-image" alt="Slide 1" />
                </div>
                <div className="carousel-item">
                    <img src="/assets/banner32.webp" className="d-block w-100 carousel-image" alt="Slide 2" />
                </div>
                <div className="carousel-item">
                    <img src="/assets/banner33.webp" className="d-block w-100 carousel-image" alt="Slide 3" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;
