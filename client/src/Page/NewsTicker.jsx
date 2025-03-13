import React from "react";
import Marquee from "react-fast-marquee";
import "../CSS/newsticker.css"; // Importing external CSS

const NewsTicker = () => {
  const news = [
    "🔥 Breaking: AI is taking over the world!",
    "📢 New JavaScript framework released!",
    "🚀 SpaceX launches another rocket successfully!",
    "💡 TechTip: Learn React for modern web development!",
    "📊 Bitcoin hits a new all-time high!",
    <span key="blog-button">
      📝 Stay updated with the latest trends!  
      <a 
        href="https://trendtoken.blogspot.com/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="blog-button"
      >
        Visit My Blog
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
