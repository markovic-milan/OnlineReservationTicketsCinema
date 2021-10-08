import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router';
import { ToastContainer, toast, Slide } from "react-toastify";
import './Registracija.css';
import AuthService from '../services/auth';
import * as constants from "../constants/constants";
import * as messages from "../constants/messages";

function Registracija() {
    const history = useHistory();

    const [userData, setUserData] = useState({
        ime: "",
        prezime: "",
        email: "",
        korisnicko_ime: "",
        lozinka: "",
        potvrdaLozinke: ""
    });

    const [errors, setErrors] = useState({
        ime: "",
        prezime: "",
        email: "",
        korisnicko_ime: "",
        lozinka: "",
        potvrdaLozinke: ""
    });

    const toastConfig = {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: true
    };

    const validateData = () => {
        const newState = {};
        Object.keys(userData).forEach(key =>
            newState[key] = userData[key] ? "" : messages.FIELD_REUIRED
        );

        if (userData.email && !constants.EMAIL_REGEX.test(userData.email)) {
            newState.email = messages.EMAIL_INVALID;
        }

        if (userData.korisnicko_ime && userData.korisnicko_ime.length < constants.MIN_USERNAME_LENGTH) {
            newState.korisnicko_ime = messages.USERNAME_TOO_SHORT;
        }
        if (userData.lozinka && userData.lozinka.length < constants.MIN_PASSWORD_LENGTH) {
            newState.lozinka = messages.PASSWORD_TOO_SHORT;
        }

        if (!newState.lozinka && userData.potvrdaLozinke !== userData.lozinka) {
            newState.potvrdaLozinke = messages.PASSWORD_MISMATCH;
        } else if (!userData.potvrdaLozinke) {
            newState.potvrdaLozinke = messages.FIELD_REUIRED;
        } else {
            newState.potvrdaLozinke = "";
        }

        setErrors(newState);
        return !Object.values(newState).some(value => value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateData()) {
            try {
                const newUser = {
                    ime: userData.ime.trim(),
                    prezime: userData.prezime.trim(),
                    email: userData.email,
                    korisnicko_ime: userData.korisnicko_ime,
                    lozinka: userData.lozinka
                };
                const account = await AuthService.register(newUser);
                AuthService.setAccount(account.data);
                window.location.reload();
                history.push("/pocetna");
                toast.info(messages.REGISTRATION_SUCCESS, toastConfig);
            } catch (error) {
                toast.error(error.response?.data ?? messages.REGISTRATION_ERROR, toastConfig);
            }
        }
    }

    return (
        <div className="registration-form-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-field">
                        <label htmlFor="name" className="form-label">Ime</label>
                        <input type="text" id="name" value={userData.ime} className="form-input text-input"
                            maxLength="50"
                            onChange={(e) => setUserData({ ...userData, ime: e.target.value.trimStart() })} />
                        <span>{errors.ime}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="surname" className="form-label">Prezime</label>
                        <input type="text" id="surname" value={userData.prezime} className="form-input text-input"
                            maxLength="50"
                            onChange={(e) => setUserData({ ...userData, prezime: e.target.value.trimStart() })} />
                        <span>{errors.prezime}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-field">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" id="email" value={userData.email} className="form-input text-input"
                            maxLength="50"
                            onChange={(e) => setUserData({ ...userData, email: e.target.value.trim() })} />
                        <span>{errors.email}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="username" className="form-label">Korisničko ime</label>
                        <input type="text" id="username" value={userData.korisnicko_ime} className="form-input text-input"
                            maxLength="25"
                            onChange={(e) => setUserData({ ...userData, korisnicko_ime: e.target.value.trim() })} />
                        <span>{errors.korisnicko_ime}</span>
                    </div>
                </div>
                <div className="row">
                    <div className="form-field">
                        <label htmlFor="password" className="form-label">Lozinka</label>
                        <input type="password" id="password" value={userData.lozinka} className="form-input text-input"
                            onChange={(e) => setUserData({ ...userData, lozinka: e.target.value.trim() })} />
                        <span>{errors.lozinka}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label">Potvrda lozinke</label>
                        <input type="password" id="passwordConfirm" value={userData.potvrdaLozinke} className="form-input text-input"
                            onChange={(e) => setUserData({ ...userData, potvrdaLozinke: e.target.value.trim() })} />
                        <span>{errors.potvrdaLozinke}</span>
                    </div>
                </div>
                <br />
                <input type="submit" name="Registracija" value="Registracija" className="form-input submit-button" />
            </form>
            <br />
        </div>
    )
}

export default Registracija;
