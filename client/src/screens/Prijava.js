import React from 'react'
import { useState } from "react";
import axios from 'axios';
import './Prijava.css';


function Prijava() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/korisnici/login', {
            korisnicko_ime: username,
            lozinka: password
        }, axiosConfig)
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res));
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });
    }

    return (
        <div className="login-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label for="username" className="form-label">Korisničko ime</label>
                    <input type="text" id="username" value={username} className="form-input text-input"
                        onChange={(e) => setUsername(e.target.value)} required={true} />
                </div>
                <div className="form-field">
                    <label for="password" className="form-label">Lozinka</label>
                    <input type="password" id="password" value={password} className="form-input text-input"
                        onChange={(e) => setPassword(e.target.value)} required={true} />
                </div>
                <br />
                <input type="submit" name="LogIn" value="Log In" className="form-input submit-button" />
            </form>
        </div>






    )
}

export default Prijava
