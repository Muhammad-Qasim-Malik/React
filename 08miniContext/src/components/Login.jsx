import React from "react";
import { useContext } from "react";
import { useState } from "react";
import Usercontext from "../context/Usercontext";

export default function Login(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {setUser} = useContext(Usercontext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div>
            <h2>Login</h2>
            <input 
                type="text" 
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                placeholder="Username" 
                style={{
                    width: '50%',
                    maxWidth: '400px',
                    padding: '10px',
                    margin: '10px 0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease'
                }}
            />
            <input 
                type="password" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Password" 
                style={{
                    width: '50%',
                    maxWidth: '400px',
                    padding: '10px',
                    margin: '10px 0',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    fontSize: '16px',
                    transition: 'border-color 0.3s ease'
                }}
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}