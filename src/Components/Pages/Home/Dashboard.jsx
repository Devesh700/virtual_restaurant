import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Food from "../Profile/Foods"
import OrderModal from './OrderModal';
import FoodCard from '../../Utilities/FoodCard';
import { CustomerDataHandler } from '../Profile';
const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [locations,setlocation]=useState([]);
    const [categories,setcategories]=useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [locationFilter, setLocationFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [sortBy, setSortBy] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
      const [showModal, setShowModal] = useState(false);
      let token=window.localStorage.getItem("auth-token");
      let _id=window.localStorage.getItem("_id");
    const [id,setid]=useState({pid:"",uid:_id,sid:""});

    const handlePlaceOrder = (prod) => {
        console.log(products)
        setid((id)=>{return {...id,pid:prod._id,sid:prod.seller}})
        setShowModal(true)
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleSubmitOrder = async(orderData) => {
        // Handle submitting the order data
        alert(JSON.stringify(orderData))
        try{
            let res=await fetch("https://virtual-restaurant-backend.onrender.com/api/orders/placeorder",{
                method:"POST",
                body:JSON.stringify(orderData),
                headers:{
                    "Content-Type":"application/json"
                }
            })
            res=await res.json();
            console.log(res);
            alert(JSON.stringify(res.data))
            window.localStorage.setItem("user-data",JSON.stringify(res.data));
        }
        catch(err){
            console.error(err);
        }
        setShowModal(false);
    };

    useEffect(() => {
        fetchProducts();
        let location=new Set(products.map((item,index)=>item.location))
        location= [...location]
        setlocation(location);
        let category=new Set(products.map((item,index)=>item.category))
        category= [...category]
        setcategories(category);
        // console.log(location);
    }, [products]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://virtual-restaurant-backend.onrender.com/api/products');
            setProducts(response.data.data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setProducts(Food)
        }
    };

    useEffect(() => {
        applyFilters();
    }, [products, locationFilter, categoryFilter, sortBy, searchTerm]);

    const applyFilters = () => {
        let filtered = products;

        if (locationFilter) {
            filtered = filtered.filter(product => product.location === locationFilter);
        }

        if (categoryFilter) {
            filtered = filtered.filter(product => product.category === categoryFilter);
        }

        if (sortBy === 'priceAsc') {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'priceDesc') {
            filtered.sort((a, b) => b.price - a.price);
        }

        if (searchTerm) {
            filtered = filtered.filter(product => product.productname.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        setFilteredProducts(filtered);
    };

    return (
        <div className="container ">
            {showModal && (
                <OrderModal onClose={handleCloseModal} onSubmit={handleSubmitOrder} id={id}/>
            )}
            <h1 className="my-4">Dashboard</h1>
            <div className="row">
                <div className="col-md-12">
                    <div className="mb-3 d-md-none">
                        <input
                            type="text"
                            placeholder="Search by name"
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="form-control"
                        />
                    </div>
                </div>
                <div className="col-md-3">
                    <h5>Filters</h5>
                    <div className="mb-3">
                        <label>Location:</label>
                        <select
                            value={locationFilter}
                            onChange={e => setLocationFilter(e.target.value)}
                            className="form-select"
                        >
                            <option value="">All Locations</option>
                            {locations.map((item,index)=><option value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Category:</label>
                        <select
                            value={categoryFilter}
                            onChange={e => setCategoryFilter(e.target.value)}
                            className="form-select"
                        >
                            <option value="">All Categories</option>
                            {categories.map((item,index)=><option value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label>Sort By:</label>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                            className="form-select"
                        >
                            <option value="">None</option>
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                        </select>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-12 d-none d-md-block">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    placeholder="Search by name"
                                    value={searchTerm}
                                    onChange={e => setSearchTerm(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {filteredProducts.map(product => (
                            // <FoodCard name={product.productname} price={product.price} image={product.image} available={product.avaialable} location={product.location} quantity={product.quantity} />
                            <div className="col" key={product.id}>
                                <div className="card custom-card-width">
                                    <img src={product.image} className="custom-card-img" alt={product.productname} />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.productname}</h5>
                                        <p className="card-text">Price: ${product.price}</p>
                                        <p className="card-text">Location: {product.location}</p>
                                        <p className="card-text">Category: {product.category}</p>
                                    </div>
                                    <button className='btn btn-success'
                                    onClick={()=>{token?handlePlaceOrder(product):alert("please log in to pplace your order")}}>
                                        place order
                                    </button>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
