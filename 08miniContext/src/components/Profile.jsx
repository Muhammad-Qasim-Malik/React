import React, { useState, useContext } from "react";
import UserContext from "../context/Usercontext"; 

export default function Profile() {
    const { user } = useContext(UserContext); 
    if (!user) return <div style={{
        marginTop: '20px'
    }}>Please Login</div>;
    return <div style={{
        marginTop: '20px'
    }}>Welcome {user.username} and your password is({user.username})</div>;
}
