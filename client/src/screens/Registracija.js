import React from 'react';
import { useState } from "react";
import axios from 'axios';
import './Registracija.css';

function Registracija() {

    const [userData, setUserData] = useState({
        ime: "",
        prezime: "",
        email: "",
        korisnicko_ime: "",
        lozinka: "",
        potvrdaLozinke: ""
    });

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/korisnici/', userData, axiosConfig)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            });
    }

    return (
        <div className="registration-form-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label for="name" className="form-label">Ime</label>
                    <input type="text" id="name" value={userData.ime} className="form-input text-input"
                        onChange={(e) => setUserData({ ...userData, ime: e.target.value })} required={true} />
                </div>
                <div className="form-field">
                    <label for="surname" className="form-label">Prezime</label>
                    <input type="text" id="surname" value={userData.prezime} className="form-input text-input"
                        onChange={(e) => setUserData({ ...userData, prezime: e.target.value })} required={true} />
                </div>
                <div className="form-field">
                    <label for="email" className="form-label">Email</label>
                    <input type="text" id="email" value={userData.email} className="form-input text-input"
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })} required={true} />
                </div>
                <br />
                <div className="form-field">
                    <label for="username" className="form-label">Korisničko ime</label>
                    <input type="text" id="username" value={userData.korisnicko_ime} className="form-input text-input"
                        onChange={(e) => setUserData({ ...userData, korisnicko_ime: e.target.value })} required={true} />
                </div>
                <div className="form-field">
                    <label for="password" className="form-label">Lozinka</label>
                    <input type="password" id="password" value={userData.lozinka} className="form-input text-input"
                        onChange={(e) => setUserData({ ...userData, lozinka: e.target.value })} required={true} />
                </div>
                <div className="form-field">
                    <label for="password" className="form-label">Potvrda lozinke</label>
                    <input type="password" id="passwordConfirm" value={userData.potvrdaLozinke} className="form-input text-input"
                        onChange={(e) => setUserData({ ...userData, potvrdaLozinke: e.target.value })} required={true} />
                </div>
                <input type="submit" name="Registracija" value="Registracija" className="form-input submit-button" />
            </form>
            <br />

        </div>
    )
}

export default Registracija
