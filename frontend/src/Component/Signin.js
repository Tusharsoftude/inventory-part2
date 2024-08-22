import React, { useState } from 'react';
import axios from 'axios';
import "../App.css"; // Ensure this file exists and is correctly styled
import { Link, useNavigate } from 'react-router-dom';
import { useData } from '../Context/user.context'; // Ensure this import path is correct
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';


function Signin() {
    // State for form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { setEmail: setContextEmail } = useData();
    const navigate = useNavigate();

    // Function to handle form submission
    const sendData = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:3000/User/signin', {
                email,
                password
            });
            console.log("Success", response.data);
      
            console.log(response.data.UserID);
            
          localStorage.setItem('userId',JSON.stringify(response.data.UserID))
            setContextEmail(email);
           

            // Redirect to dashboard or another page upon success
            navigate('/dashboard');
        } catch (error) {
            console.error("Error signing in", error);
            // Handle error case, show message to user
            alert("Failed to sign in. Please check your credentials and try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='superDivSignup d-flex justify-content-center align-items-center vh-100'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 rounded border bg-light p-3 ">
                        <div className="card mt-5">
                            <div className="card-body ">
                                <h3 className="card-title text-center ">Sign In</h3>
                                <form onSubmit={sendData}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mt-2"
                                        disabled={loading} // Disable the button while loading
                                    >
                                        {loading ? 'Signing In...' : 'Sign In'}
                                    </button>
                                </form>
                                <p className="text-center mt-3">
                                    Don't have an account? <Link to="/signup"><small style={{ cursor: "pointer" }}>Sign Up</small></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;
