// import React, { useEffect, useState } from "react";
// import '../CSS/home.css'

// const Home = () => {

//   const host = "http://localhost:5000";

//   const [tags, setTags] = useState([])

//   const getTags = async () => {
//     try {
//       const response = await fetch(`${host}/product/getTags`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       })
//       const data = await response.json();
//       console.log(data)
//       setTags(data.tags)
//     } catch (error) {

//     }
//   }

//   const [recentProduct, setRecentProduct] = useState([])

//   const fetchProduct = async () => {
//     try {
//       const response = await fetch(`${host}/product/fetchProduct`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       })
//       const data = await response.json();
//       console.log(data)
//       setRecentProduct(data.product)
//     } catch (error) {

//     }
//   }

//   const handleBuyNow = (url) => {
//     try {
//       window.open(url, "_blank"); // Opens in a new tab
//     } catch (error) {
//       console.error("Error opening link:", error);
//     }
//   };

//   const handleCopyLink = (link) => {
//     navigator.clipboard.writeText(link)
//       .then(() => {
//         alert("Link copied to clipboard!");
//       })
//       .catch((err) => {
//         console.error("Failed to copy link:", err);
//       });
//   };



//   useEffect(() => {
//     getTags();
//     fetchProduct();
//   }, [])





//   return (
//     <div className="home-container">
//       {/* Header Section */}
//       <header className="header">
//         <h1>TrendtoKEN</h1>
//         <p>Discover the latest products in one place!</p>
//       </header>

//       {/* Categories & Search */}
//       <div className="filter-section">
//         <div className="categories">
//           <button
//             className={`category-btn active`}
//           >
//             All
//           </button>
//           {tags.map((tag, index) => (
//             <button
//               key={index}
//               className={`category-btn ${selectedCategory === tag ? "active" : ""}`}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//         <input
//           type="text"
//           placeholder="Search for products..."
//           className="search-bar"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//       </div>

//       {/* Products Section */}
//       <div className="products-container">
//         {recentProduct.length > 0 ? (
//           recentProduct.map((product) => (
//             <div key={product._id} className="product-card">
//               <img src={product.imgLink} alt={product.name} />
//               <h3>{product.name}</h3>
//               <div className="tag-btn">

//                 {product.tag.length > 0 &&
//                   product.tag.map((t, index) => (
//                     <button
//                       key={index}
//                       className={`category-btn-pr ${selectedCategory === t ? "active" : ""}`}
//                     >
//                       {t}
//                     </button>
//                   ))
//                 }
//               </div>
//               <p className="price">{product.description}</p>
//               <div className="btn-grp">
//                 <button className="buy-btn" onClick={() => handleBuyNow(product.buyLink)}>
//                   Buy Now
//                 </button>
//                 <button className="buy-btn" onClick={() => handleCopyLink(product.buyLink)}>Copy Link</button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-products">No products found.</p>
//         )}
//       </div>

//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import "../CSS/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const host = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const [tags, setTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [recentProduct, setRecentProduct] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getTags = async () => {
    try {
      const response = await fetch(`${host}/product/getTags`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setTags(data.tags);
    } catch (error) {
      console.error("Error fetching tags:", error);
    }
  };

  const fetchProduct = async () => {
    try {
      const response = await fetch(`${host}/product/fetchProduct`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setRecentProduct(data.product);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleBuyNow = (url) => {
    window.open(url, "_blank");
  };

  const handleCopyLink = (link) => {
    navigator.clipboard.writeText(link)
      .then(() => alert("Link copied to clipboard!"))
      .catch((err) => console.error("Failed to copy link:", err));
  };

  useEffect(() => {
    getTags();
    fetchProduct();
  }, []);

  // Filtering products based on category and search query
  const filteredProducts = recentProduct.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.tag.includes(selectedCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const navigate = useNavigate()
  const visitProductPage = (id) => {
    console.log(id)
    navigate(`/productPage/${id}`);
  };

  return (
    <>
      <div className="home-container">
        {/* Header Section */}
        <header className="header">
          <h1>TrendtoKEN</h1>
          <p>Discover the latest products in one place!</p>
        </header>

        {/* Categories & Search */}
        <div className="filter-section">
          <div className="categories">
            <button
              className={`category-btn ${selectedCategory === "All" ? "active" : ""}`}
              onClick={() => setSelectedCategory("All")}
            >
              All
            </button>
            {tags.map((tag, index) => (
              <button
                key={index}
                className={`category-btn ${selectedCategory === tag ? "active" : ""}`}
                onClick={() => setSelectedCategory(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          <input
            type="text"
            placeholder="Search for products..."
            className="search-bar"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Products Section */}
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product._id} className="product-card" >
                <img src={product.imgLink} alt={product.name} onClick={() => { visitProductPage(product._id) }} />
                <h3>{product.name}</h3>
                <div className="tag-btn">
                  {product.tag.map((t, index) => (
                    <button
                      key={index}
                      className={`category-btn-pr ${selectedCategory === t ? "active" : ""}`}
                      onClick={() => setSelectedCategory(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <p className="desc">{product.description.slice(0, 30)}...</p>

                <div className="btn-grp">
                  <button className="buy-btn" onClick={() => handleBuyNow(product.buyLink)}>
                    Buy Now
                  </button>
                  <button className="buy-btn" onClick={() => handleCopyLink(product.buyLink)}>
                    Copy Link
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>
      </div>
      
    </>
  );
};

export default Home;


