import React from 'react';
import '../CSS/about.css';

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About TrendToken</h1>
            <p className="about-text">
                Welcome to <strong>TrendToken</strong>, your one-stop destination for discovering trending products online. 
                We leverage affiliate marketing to bring you the best deals and recommendations from trusted platforms.
            </p>
            <p className="about-text">
                Our mission is to help users make informed purchasing decisions by curating high-quality products from various e-commerce websites. 
                Every product listed is carefully selected to ensure it meets our quality standards.
            </p>
            <p className="about-text">
                When you purchase through our links, we may earn a commission, which helps us continue to bring you the best deals and recommendations.
            </p>
            <h2 className="about-subtitle">Why Choose TrendToken?</h2>
            <ul className="about-list">
                <li className="about-list-item">🚀 Handpicked trending products</li>
                <li className="about-list-item">💰 Exclusive deals and discounts</li>
                <li className="about-list-item">🛍️ Seamless shopping experience</li>
                <li className="about-list-item">📢 Honest and unbiased recommendations</li>
            </ul>
            <p className="about-text">
                Thank you for choosing TrendToken. Happy Shopping! 🎉
            </p>
        </div>
    );
};

export default About;
