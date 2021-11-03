import axios from 'axios';
import * as constants from "../constants/constants";


const baseConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
};


const authConfig = () => {
    const accessToken = JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY))?.accessToken;
    return {
        headers: {
            ...baseConfig.headers,
            'x-access-token': accessToken
        }
    };
};

const getUser = () => {
    const account = JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY));
    return account ? account.korisnik : null;
};

const AuthService = {
    logIn: async (username, password) => {
        return await axios.post(`${constants.BASE_URL}/korisnici/auth/login`, {
            korisnicko_ime: username,
            lozinka: password
        }, baseConfig);
    },

    register: async (userData) => {
        return await axios.post(`${constants.BASE_URL}/korisnici/`, userData, baseConfig);
    },

    deleteAccount: async () => {
        await axios.delete(`${constants.BASE_URL}/korisnici/${getUser().id}`, authConfig());
        localStorage.clear();
    },

    changePassword: async (oldPassword, newPassword) => {
        await axios.put(`${constants.BASE_URL}/korisnici/promjena-lozinke/${getUser().id}`, {lozinka: newPassword, staraLozinka: oldPassword}, authConfig());
    },

    setAccount: (account) => localStorage.setItem(constants.ACCOUNT_KEY, JSON.stringify(account)),

    logOut: async () => {
        localStorage.clear();
    }
};

export default AuthService;