import axios from 'axios';
import * as constants from "../constants/constants";


const baseConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
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

    setAccount: (account) => localStorage.setItem(constants.ACCOUNT_KEY, JSON.stringify(account)),

    logOut: async () => {
        localStorage.clear();
    },

    getUser: () => {
        const account = JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY));
        return account ? account.user : null;
    },

    authConfig: () => {
        console.log( JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY)))
        const accessToken = JSON.parse(localStorage.getItem(constants.ACCOUNT_KEY))?.accessToken;
        return {
            headers: {
                ...baseConfig.headers,
                'x-access-token': accessToken
            }
        };
    }
};

export default AuthService;