import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = () => {
     const  userData = JSON.parse(window.localStorage.getItem("user-data"));
const data  = userData ?? {};
  console.log(userData);
  console.log(userData);
    const [productData, setProductData] = useState({
        productName: '',
        productPrice: '',
        productLocation: '',
        productCategory: '',
        quantity:"",
        productImage: null
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProductData({ ...productData, productImage: file });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('productImage', productData.productImage);
        formData.append('productname', productData.productName);
        formData.append('price', productData.productPrice);
        formData.append('location', productData.productLocation);
        formData.append('category', productData.productCategory);
        formData.append('quantity', productData.quantity);
        formData.append('seller', userData._id);

        try {
            const response = await axios.post('https://virtual-restaurant-backend.onrender.com/api/products/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response.data);
            // Optionally, display a success message to the user
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
            // Optionally, display an error message to the user
            alert('Error adding product. Please try again.');
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Add Product</h2>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="productName">Product Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productName"
                                name="productName"
                                value={productData.productName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productPrice">Product Price ($)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="productPrice"
                                name="productPrice"
                                value={productData.productPrice}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="quantity">Product quantity ($)</label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                name="quantity"
                                value={productData.quantity}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productLocation">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productLocation"
                                name="productLocation"
                                value={productData.productLocation}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="productCategory">Category</label>
                            <select
                                className="form-control"
                                id="productCategory"
                                name="productCategory"
                                value={productData.productCategory}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                                {/* Add more options as needed */}
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Add Product</button>
                    </form>
                </div>
                <div className="col-lg-6">
                    <label htmlFor="productImage" className="d-block mt-3">Product Image</label>
                    <input
                        type="file"
                        id="productImage"
                        name="productImage"
                        className="d-none"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                    <button
                        className="btn btn-secondary btn-block"
                        onClick={() => document.getElementById('productImage').click()}
                    >
                        Choose Image
                    </button>
                    {productData.productImage && (
                        <img
                            src={URL.createObjectURL(productData.productImage)}
                            alt="Product Preview"
                            className="img-fluid mt-3"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddProduct;
