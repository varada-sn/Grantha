import React, { useState } from 'react';
import { Avatar, Badge, IconButton } from '@mui/material';
import { Person, ShoppingCart as ShoppingCartIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); // Mock authentication state

    return (
        <div className='px-5 z-50 py-4 bg-gradient-to-b from-[#000000] to-[#3533cd] lg:px-20 flex justify-between items-center shadow-lg'> 
            {/* Logo */}
            <div>
                <a href="/">
                    <img src="/logo_transparent.png" alt="Grantha Logo" className="h-12 w-auto drop-shadow-md" />
                </a>
            </div>

            {/* Right Section */}
            <div className='flex items-center space-x-6 lg:space-x-12'> 
                {/* Account Button */}
                <div>
                    {user ? (
                        <Avatar sx={{ bgcolor: "white", color: "#3533cd", cursor: "pointer" }}>U</Avatar>
                    ) : (
                        <IconButton onClick={() => navigate("/home/login")} className="hover:scale-110 transition">
                            <Person sx={{ fontSize: "2.2rem", color: 'white' }}/>
                        </IconButton>
                    )}
                </div>

                {/* Shopping Cart */}
                <div>
                    <Badge color="error" badgeContent={3} className="cursor-pointer hover:scale-110 transition">
                        <ShoppingCartIcon sx={{ color: "white", fontSize: "2.2rem" }} />
                    </Badge>
                </div>
            </div>
        </div>
    );
};