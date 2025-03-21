import React, { useState } from 'react';
import './faq.css'; // Importing custom CSS for styling

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What products do you sell on SABKUCHTREND.IN?',
      answer: 'We offer a diverse range of products spanning categories such as electronics, fashion, home decor, beauty, and more. Explore our website to discover our extensive collection.',
    },
    {
      question: 'How can I place an order?',
      answer: 'Placing an order is simple! Navigate our website, select your desired products, and proceed through the checkout process. No account creation is required as Guest Checkout, or you can create an account for faster login and purchasing.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept various payment methods, including credit/debit cards, net banking, and Cash on Delivery (COD) for your convenience. Rest assured, our payment processes are secure and reliable.',
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you will receive a tracking number via email. Track your order using this number on our "Track Your Order" page. For further assistance, reach out to our support team.',
    },
    {
      question: 'How long will it take to receive a tracking number?',
      answer: 'We have a next-day dispatch policy, so all orders are allocated tracking numbers within 24 hours. You will receive the tracking number on your email address. You can also contact us for tracking information.',
    },
    {
      question: 'Will I receive a confirmation number when I place my order?',
      answer: 'Yes, all customers will receive a confirmation email after placing their orders instantly. If you don’t receive one within 12 hours, please contact us.',
    },
    {
      question: 'What is Your Return and Refund Policy?',
      answer: 'We offer a hassle-free 5-day return window. If you are unsatisfied with your purchase, you can request a return, and upon approval, receive a full refund. Detailed information is available in our Return and Refund Policy.',
    },
    {
      question: 'How do I cancel my order?',
      answer: 'Orders can be cancelled within 24 hours of placement. Contact our customer support team or email sabkuchtrend@gmail.com. Once an order is shipped, it cannot be cancelled.',
    },
    {
      question: 'Who can I contact if I have a problem with my order?',
      answer: 'All inquiries can be forwarded to sabkuchtrend@gmail.com, and you can also WhatsApp us at 9582389745.',
    },
    {
      question: 'Can I change my shipping address after placing an order?',
      answer: 'We are sorry, but once an order is confirmed, we cannot change the shipping address. Please double-check your address during checkout.',
    },
    {
      question: 'Do you offer Cash on Delivery (COD)?',
      answer: 'Yes, we do! You can choose Cash on Delivery as a payment method during checkout. Enjoy the convenience of paying for your order upon delivery.',
    },
    {
      question: 'Is shipping free?',
      answer: 'Yes, we offer free shipping on some orders delivered within India.',
    },
    {
      question: 'Why should I create an account on SABKUCHTREND.IN?',
      answer: 'No account creation is necessary. We provide a seamless shopping experience without the need for accounts. Your order updates, including tracking numbers, will be sent to your email. We suggest creating an account to speed up your purchase and receive regular updates about Gift Cards and Discounts.',
    },
    {
      question: 'Do you have a physical store where I can make purchases?',
      answer: 'We operate online, and our store is located in Delhi. All purchases can be made through our website for a convenient and efficient shopping experience. For bulk orders, you can contact customer support and email us at sabkuchtrend@gmail.com.',
    }
  ];

  return (
    <div className="faq-container">
        <img src='./assets/logo.png' style={{width:'100px'}}></img>
      <h1>Frequently Asked Questions</h1>
      

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div 
              className="faq-question" 
              onClick={() => toggleAnswer(index)}
            >
              <h5>{faq.question}</h5>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <p style={{color:'red'}}>Here are a few of the frequently asked questions. To provide you with the best customer experience, your feedback is greatly encouraged. If you have any questions,
         please send us an email at <a href="mailto:sabkuchtrend@gmail.com">sabkuchtrend@gmail.com</a></p>
    </div>
  );
};

export default FAQs;
