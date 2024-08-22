import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

function Signup() {
    // State for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // State for loading indication
    const [error, setError] = useState(''); // State for error messages

    // Navigation hook
    const navigate = useNavigate();

    // Function to handle form submission
    const sendData = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        setLoading(true);
        setError(''); // Clear any previous errors

        try {
            const response = await axios.post('http://localhost:3000/User/signup', {
                username,
                email,
                password
            });
            console.log("Success", response.data);
            Toastify({
                text: "Sign In successful!",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#4CAF50",
                stopOnFocus: true
              }).showToast();
            // Redirect user after successful signup
            navigate('/dashboard');
        } catch (error) {
            console.error("There are some errors", error);
            setError('Signup failed. Please check your inputs and try again.'); // Set error message
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='superDivSignup'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card mt-5">
                            <div className="card-body">
                                <h3 className="card-title text-center">Sign Up</h3>
                                <form onSubmit={sendData}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                    </div>
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
                                    {error && <div className="alert alert-danger mt-2">{error}</div>} {/* Display error message */}
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block mt-2"
                                        disabled={loading} // Disable the button while loading
                                    >
                                        {loading ? 'Signing Up...' : 'Sign Up'}
                                    </button>
                                </form>
                                <p className="text-center mt-3">
                                    Already have an account? <Link to="/signin"><small style={{ cursor: "pointer" }}>Sign In</small></Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
