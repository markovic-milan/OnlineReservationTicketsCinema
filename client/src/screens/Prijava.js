import React, { useReducer } from 'react'
import { useState } from "react";
import { useHistory } from 'react-router';
import './Prijava.css';
import AuthService from '../services/auth';
import * as messages from "../constants/messages";


function Prijava() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [logInError, setLogInError] = useState(false);

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const history = useHistory();

    const validateData = () => {
        const newState = {
            username: username ? "" : messages.FIELD_REUIRED,
            password: password ? "" : messages.FIELD_REUIRED
        };

        setErrors(newState);
        return !newState.username && !newState.password;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateData()) {
            try {
                const account = await AuthService.logIn(username, password);
                AuthService.setAccount(account.data);
                history.push("/pocetna");
                window.location.reload();
            } catch (error) {
                setLogInError(true);
            }
        } else {
            setLogInError(false);
        }
    };

    return (
            <div className="login-form-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="username" className="form-label">Korisničko ime</label>
                        <input type="text" id="username" value={username} className="form-input text-input"
                            onChange={(e) => setUsername(e.target.value)} />
                        <span>{errors.username}</span>
                    </div>
                    <div className="form-field">
                        <label htmlFor="password" className="form-label">Lozinka</label>
                        <input type="password" id="password" value={password} className="form-input text-input"
                            onChange={(e) => setPassword(e.target.value)} />
                        <span>{errors.password}</span>
                    </div>
                    {logInError &&
                        <div className="error-message">
                            Pogrešna lozinka ili korisničko ime
                        </div>
                    }
                    <br />
                    <input type="submit" name="LogIn" value="Prijava" className="form-input login-button" />
                </form>
            </div>     
    )
}

export default Prijava
