import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";
import axios from "axios"; // Import Axios for API calls

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import HomeIcon from '@mui/icons-material/Home';

export const SignupForm = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        role: "CUSTOMER", // Default role, can be changed to "SUPPLIER"
        phone: "",
    });

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:8085/auth/signup", userData, {
                headers: { "Content-Type": "application/json" }
            });

            alert(response.data.message);
            navigate("/home/login"); // Redirect to login after signup
        } catch (error) {
            alert("Signup failed! " + (error.response?.data?.message || error.message));
        }
    };

    return (
        <div>
            <HomeIcon sx={{ color: "white", mx: 2, my: 2, fontSize: "2rem" }} onClick={() => navigate("/home")} />

            <div className="container">
                <div className="header">
                    <div className="text">Sign Up</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    <div className='input'>
                        <PersonIcon sx={{ mx: 2 }} />
                        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                    </div>
                    <div className="input">
                        <EmailIcon sx={{ mx: 2 }} />
                        <input type="email" name="email" placeholder="Email Id" onChange={handleChange} />
                    </div>
                    <div className="input">
                        <LockIcon sx={{ mx: 2 }} />
                        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    <div className="input">
                        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
                    </div>
                    <div className="input">
                        <select name="role" onChange={handleChange}>
                            <option value="CUSTOMER">Customer</option>
                            <option value="SUPPLIER">Supplier</option>
                        </select>
                    </div>
                </div>
                <div className="submit-container">
                    <button className="submit" onClick={handleSubmit}>Sign Up</button>
                </div>
                <div className="signup-message">
                    Already have an account? <span onClick={() => navigate("/home/login")}>Login</span>
                </div>
            </div>
        </div>
    );
};