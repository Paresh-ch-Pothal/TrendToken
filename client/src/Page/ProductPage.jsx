import React, { useEffect, useState } from 'react'
import '../CSS/productpage.css'
import { useParams } from 'react-router-dom'

const ProductPage = () => {

    const host = import.meta.env.VITE_API_URL || "http://localhost:5000";

    const [product, setProduct] = useState([])
    const { id } = useParams();

    const getWholeProduct = async () => {
        try {
            const response = await fetch(`${host}/product/getWholeProduct/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            const data = await response.json()
            console.log(data)
            setProduct(data.product)
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuyNow = (link) => {
        window.open(link, "_blank");
    };

    const handleCopyLink = (link) => {
        navigator.clipboard.writeText(link)
            .then(() => alert("Product link copied to clipboard!"))
            .catch(err => console.error("Failed to copy link:", err));
    };

    useEffect(() => {
        getWholeProduct()
    }, [])

    return (
        <div>
            <div className="product-container">
                <div className="product-image">
                    <img src={product.imgLink} alt={product.name} />
                </div>
                <div className="product-details">
                    <h2>{product.name}</h2>
                    <p className="description">{product.description}</p>
                    <div className="tags">
                        { product.tag && (product.tag.map((t, index) => (
                            <span key={index} className="tag">{t}</span>)
                        ))}
                    </div>
                    <div className="btn-group">
                        <button className="buy-btn" onClick={() => { handleBuyNow(product.buyLink) }}>Buy Now</button>
                        <button className="copy-btn" onClick={() => { handleCopyLink(product.buyLink) }}>Copy Link</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
