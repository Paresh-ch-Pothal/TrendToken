import React, { useState } from "react";
import "../CSS/createpage.css";

const CreateProduct = () => {

    const host = import.meta.env.VITE_API_URL || "http://localhost:5000/";

    const [formData, setFormData] = useState({
        name: "",
        tag: "",
        imgLink: "",
        buyLink: "",
        description: "",
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage("");

        // Format tags as an array
        const formattedTags = formData.tag.split(",").map((t) => t.trim());

        try {
            const response = await fetch(`${host}/product/postitem`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    tag: formattedTags,
                }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage("Product added successfully!");
                setFormData({ name: "", tag: "", imgLink: "", buyLink: "", description: "" });
            } else {
                setMessage("Failed to add product.");
            }
        } catch (error) {
            console.error(error);
            setMessage("Some internal issue is present.");
        }

        setLoading(false);
    };

    return (
        <div className="create-product-container">
            <h2>Add a New Product</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Product Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="tag"
                    placeholder="Tags (comma separated)"
                    value={formData.tag}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="imgLink"
                    placeholder="Image URL"
                    value={formData.imgLink}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="buyLink"
                    placeholder="Buy Link"
                    value={formData.buyLink}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Product Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit" disabled={loading}>
                    {loading ? "Adding..." : "Add Product"}
                </button>
            </form>
        </div>
    );
};

export default CreateProduct;
