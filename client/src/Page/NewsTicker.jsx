import React from "react";
import Marquee from "react-fast-marquee";
import "../CSS/newsticker.css"; // Importing external CSS

const NewsTicker = () => {
  const news = [
    "🔥 Breaking: AI is taking over the world!",
    <span key="blog-button">
      📝 Stay updated with the latest news!
      <a
        href="https://trendtoken.blogspot.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-button"
      >
        Visit My Blog
      </a>
    </span>,
    <span key="blog-button">
      📝 Stay updated with the latest trends!
      <a
        href="https://t.me/trendTokend"
        target="_blank"
        rel="noopener noreferrer"
        className="blog-button"
      >
        Join Telegram
      </a>
    </span>
  ];

  return (
    <div className="news-ticker">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {news.map((item, index) => (
          <span key={index} className="news-item"> {item} &nbsp; | &nbsp;</span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsTicker;
