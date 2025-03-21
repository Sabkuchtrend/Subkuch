import  '../home-component/card.css'
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Cards = () => {
  const cardData = [
    {
      title: "Latest Blog",
      image: "./assets/item-6.jpg",
      description: "Stay updated with the latest news and trends. Explore our latest blogs on various topics.",
      buttonText: "Read More"
    },
    {
      title: "Testimonial",
      image: "/assets/testme.png",
      description: "Our clients love our services! Read what they say about us and their experience.",
      buttonText: "View Testimonials"
    },
    {
      title: "About Us",
      image: "/assets/about-v6.jpg",
      description: "Learn more about our company, our mission, and the values that drive us.",
      buttonText: "Discover More"
    },
    {
      title: "Our Location",
      image: "/assets/location.jpg",
      description: "Find out where we are located and how you can visit us easily.",
      buttonText: "Get Directions"
    }
  ];

  return (
    <div className="container-fluid " style={{marginTop:'90px' ,marginBottom:'90px', background:'white', padding:'20px'}}>
      <div className="row" style={{ marginTop:'30px'}}>
        {cardData.map((card, index) => (
          <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
            <Card className="h-100">
              <Card.Body className="d-flex flex-column">
                <Card.Title as="h1" className="text-center">{card.title}</Card.Title>
                <Card.Img variant="top" src={card.image} className="img-fluid mb-3" />
                <Card.Text className="flex-grow-1">{card.description}</Card.Text>
                <Button variant="primary" className="mt-auto align-self-center">{card.buttonText}</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
