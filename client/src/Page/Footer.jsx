import React from 'react';
import '../CSS/footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} TrendToken. All rights reserved.</p>
        <p className="footer-text">
          If you're interested in reading the latest trending blogs,  
          <a 
            href="https://trendtoken.blogspot.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-link"
          >
            visit my blog!
          </a>
        </p>
        <p className="footer-text">
          Get Updated With The Latest Trends,  
          <a 
            href="https://t.me/trendTokend" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="blog-link"
          >
            Join Telegram!
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footer;
