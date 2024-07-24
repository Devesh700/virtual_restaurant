import React, { useState } from 'react';

const OrderModal = ({ onClose, onSubmit,id }) => {
    const [address, setAddress] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleSubmit = () => {
        // Validation can be added here if needed
        onSubmit({ address, quantity,id });
    };

    return (
        <div className="bg-white z-3 modal-overlay d-flex justify-content-center align-items-center position-absolute top-50 start-50 translate-middle p-4">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Place Order</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                name='address'
                            />
                            <input
                                hidden
                                type="text"
                                id="pid"
                                value={id.pid}
                                name='pid'
                            />
                            <input
                                hidden
                                type="text"
                                id="uid"
                                value={id.uid}
                                name='uid'
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="quantity" className="form-label">Quantity:</label>
                            <input
                                type="number"
                                className="form-control"
                                id="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                name='quantity'
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;
