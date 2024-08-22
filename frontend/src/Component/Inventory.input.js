import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Inventory = () => {
    const [name, setItemName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(''); // Start as empty string
    const [price, setPrice] = useState(''); // Start as empty string
    const [category, setCategory] = useState('');

    const sendData = async (e) => {
        e.preventDefault();

        // Convert quantity and price to numbers
        const formattedQuantity = parseInt(quantity, 10);
        const formattedPrice = parseFloat(price);

        // Validate data types
        if (isNaN(formattedQuantity) || isNaN(formattedPrice)) {
            console.error('Quantity or Price is invalid.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/item/Saveitem', {
                name,
                description,
                quantity: formattedQuantity,
                price: formattedPrice,
                category
            });
            console.log("Success", response.data);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
    }
    const handleCancleButton=()=>{
        window.location.reload();
    }

    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center mb-4">
                    <h1>Inventory Entries</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-10 col-sm-12">
                        <div className="p-4 border rounded bg-light">
                            <div className="mb-3">
                                <label htmlFor="itemName" className="form-label">Item Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="itemName" 
                                    placeholder="Enter the item name" 
                                    value={name}
                                    onChange={(e) => setItemName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    className="form-control" 
                                    id="description" 
                                    rows="3" 
                                    placeholder="Enter the description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="price" 
                                    placeholder="Enter the price" 
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    step="0.01" // Allows decimal values
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Category</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="category" 
                                    placeholder="Enter the Category" 
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="quantity" 
                                    placeholder="Enter the quantity" 
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    step="1" // Ensures whole numbers
                                />
                            </div>
                            <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-outline-primary" onClick={sendData}>Submit</button>
                                <button type="button" className="btn btn-outline-danger" onClick={handleCancleButton}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Inventory;
