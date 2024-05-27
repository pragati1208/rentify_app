import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Importing CSS file for styling

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    const handleBuyerClick = () => {
        navigate('/buyer page');
    };

    const handleSellerClick = () => {
        navigate('/seller page');
    };

    return (
        <>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
            <div className="home-container">
                <h2>Welcome to Rentify</h2>
                <div className="button-group">
                    <button className="role-btn" onClick={handleBuyerClick}>I am a Buyer</button>
                    <button className="role-btn" onClick={handleSellerClick}>I am a Seller</button>
                </div>
            </div>
        </>
    );
}

export default Home;
