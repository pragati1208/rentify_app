import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [firstname, setfname] = useState('');
    const [lastname, setlname] = useState('');  
    const [email, sete] = useState('');  
    const [phoneNo, setp] = useState('');  
    const [user, setuser] = useState('');  
    const [pass, setpass] = useState('');  

    const handleApi = () => {
        console.log({ firstname, lastname, email, phoneNo, user, pass });
        const url = 'http://localhost:4000/signup';
        const data = { firstname, lastname, email, phoneNo, user, pass };
        axios.post(url, data)
            .then((res) => {
                console.log(res.data);
                if (res.data.message) {
                    alert(res.data.message);
                }
            })
            .catch((err) => {
                console.log(err);
                alert('SERVER ERROR');
            });
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'flex-end', // Align the form to the right side
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url('bg3.avif')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '0 50px', // Add padding to create space between form and edge
    };

    const formContainerStyle = {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
        width: '300px',
        backdropFilter: 'blur(25px)',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '10px', // Change margin from top-bottom to bottom only
        borderRadius: '5px',
        border: '1px solid #ccc',
        boxSizing: 'border-box', // Ensure padding doesn't add to width
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundImage: `url(${require('./bg3.avif')})`, // Corrected background image syntax
        backgroundSize: 'cover', // Ensure the background image covers the entire button
        color: 'white',
        cursor: 'pointer',
    };

    const linkStyle = {
        display: 'block',
        marginTop: '10px',
        textAlign: 'center',
        color: '#007bff',
        textDecoration: 'none',
    };

    return (
        <div style={containerStyle}>
            <div style={formContainerStyle}>
                <h2 style={{ textAlign: 'center' }}>Sign Up</h2>
                <form onSubmit={(e) => { e.preventDefault(); handleApi(); }}>
                    <div>
                        <label>FIRSTNAME</label>
                        <input type="text" value={firstname} onChange={(e) => setfname(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label>LASTNAME</label>
                        <input type="text" value={lastname} onChange={(e) => setlname(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label>EMAIL</label>
                        <input type="text" value={email} onChange={(e) => sete(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label>PHONENUMBER</label>
                        <input type="text" value={phoneNo} onChange={(e) => setp(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label>USERNAME</label>
                        <input type="text" value={user} onChange={(e) => setuser(e.target.value)} style={inputStyle} />
                    </div>
                    <div>
                        <label>PASSWORD</label>
                        <input type="password" value={pass} onChange={(e) => setpass(e.target.value)} style={inputStyle} />
                    </div>
                    <button type="submit" style={buttonStyle}>SIGNUP</button>
                </form>
                <Link to="/login" style={linkStyle}>LOGIN</Link>
            </div>
        </div>
    );
}

export default Signup;
