import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Importing CSS file for styling
import axios from 'axios';

function Login() {
    const [user, setUser] = useState('');  
    const [pass, setPass] = useState('');
    const navigate = useNavigate(); // Get the navigate function

    const handleApi = () => {
        console.log({ user, pass });
        
        const url = 'http://localhost:4000/login'; // Change the URL to login endpoint
        const data = { user, pass };
        
        axios.post(url, data)
            .then((res) => {
                console.log(res.data);
                if (res.data.message === 'Login Success') { // Check if login is successful
                    alert('Login Successful');
                    navigate('/'); // Navigate to home page
                } else {
                    alert('Invalid username or password');
                }
            })
            .catch((err) => {
                console.log(err);
                alert('SERVER ERROR');
            });
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Welcome to Rentify</h2>
                <div className="form-group">
                    <label>USERNAME</label>
                    <input 
                        type="text" 
                        value={user}
                        onChange={(e) => setUser(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label>PASSWORD</label>
                    <input 
                        type="password" 
                        value={pass}
                        onChange={(e) => setPass(e.target.value)} 
                    />
                </div>
                <button className="login-btn" onClick={handleApi}>LOGIN</button> 
                {/* Call handleApi function on button click */}
                <Link to="/signup" className="signup-link">SIGNUP</Link>
            </div>
        </div>
    );
}

export default Login;
