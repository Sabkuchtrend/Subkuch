import '../home-component/explore.css'

const Explore = () => {
    return (
        <div>
            {/* Explore Section */}
            <div className="container mt-5">
                <h2 className="text-center mb-4">Explore the Latest Highlights in Trends</h2>
                <div className="row d-flex align-items-center">
                    {/* Image Section */}
                    <div className="col-md-6">
                        <img src="/assets/dust6.jpg" alt="Trends" className="img-fluid rounded-3 shadow-lg" />
                    </div>

                    {/* Description Section */}
                    <div className="col-md-6">
                        <div className="p-4">
                            <h3>Discover New Arrivals</h3>
                            <p>
                                Stay ahead of the trends with our latest collection of stylish products. Explore
                                the newest arrivals in fashion, accessories, and much more. Get inspired and shop
                                the latest styles with discounts up to 60% off!
                            </p>
                            <button className="btn btn-primary">Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Explore;