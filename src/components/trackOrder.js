import React, { useState } from 'react';
import './trackOrder.css'; // Importing custom CSS for styling

const TrackOrder = () => {
  const [searchType, setSearchType] = useState('orderId'); // Default search type is Order ID
  const [searchValue, setSearchValue] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();

    // Simulate fetching order status based on search value (Order ID or AWB)
    if (searchValue) {
      // Simulate fetching status from API or database (use actual API in real app)
      setOrderStatus({
        orderId: searchValue,
        status: 'Shipped',
        trackingNumber: '12345ABC',
        estimatedDelivery: '2025-03-15',
      });
    } else {
      alert('Please enter an Order ID or AWB.');
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="track-order-container">
      <h1>Track Status of Your Shipment</h1>
      <p>Search By:</p>
      
      <div className="search-options">
        <button 
          className={`search-btn ${searchType === 'orderId' ? 'active' : ''}`} 
          onClick={() => setSearchType('orderId')}
        >
          Order ID
        </button>
        <button 
          className={`search-btn ${searchType === 'awb' ? 'active' : ''}`} 
          onClick={() => setSearchType('awb')}
        >
          AWB
        </button>
      </div>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder={`Enter ${searchType === 'orderId' ? 'Order ID' : 'AWB'}`}
          value={searchValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>

      {orderStatus && (
        <div className="order-status">
          <h3>Order Status</h3>
          <p><strong>Order ID:</strong> {orderStatus.orderId}</p>
          <p><strong>Status:</strong> {orderStatus.status}</p>
          <p><strong>Tracking Number:</strong> {orderStatus.trackingNumber}</p>
          <p><strong>Estimated Delivery:</strong> {orderStatus.estimatedDelivery}</p>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
