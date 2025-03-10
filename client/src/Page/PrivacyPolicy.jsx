import React from 'react';
import '../CSS/privacy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-container">
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-text">
                At <strong>TrendToken</strong>, we value your privacy and are committed to protecting your personal information.
            </p>

            <h2 className="privacy-subtitle">Information We Collect</h2>
            <p className="privacy-text">
                We do not collect personal data directly. However, when you visit our website, third-party affiliates may track certain data such as:
            </p>
            <ul className="privacy-list">
                <li className="privacy-list-item">🔹 Clicks on affiliate links</li>
                <li className="privacy-list-item">🔹 Purchase history through our links</li>
                <li className="privacy-list-item">🔹 Anonymous site analytics (Google Analytics, etc.)</li>
            </ul>

            <h2 className="privacy-subtitle">How We Use Your Information</h2>
            <p className="privacy-text">
                Any data collected by our partners is used to improve product recommendations and track affiliate performance. 
                We do not sell or share your personal data with third parties.
            </p>

            <h2 className="privacy-subtitle">Cookies and Tracking</h2>
            <p className="privacy-text">
                We use cookies to enhance your browsing experience. You can disable cookies in your browser settings if you prefer.
            </p>

            <h2 className="privacy-subtitle">Third-Party Links</h2>
            <p className="privacy-text">
                Our website contains links to third-party sites. We are not responsible for their privacy policies, so please review them before making a purchase.
            </p>

            <h2 className="privacy-subtitle">Changes to This Policy</h2>
            <p className="privacy-text">
                We may update this policy occasionally. Any changes will be reflected on this page.
            </p>
        </div>
    );
};

export default PrivacyPolicy;
