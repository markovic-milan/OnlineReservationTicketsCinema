import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Content from '../components/content/Content';


function Pocetna() {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return (
            <div className="content-container">
                <Content/>
          </div>
        )
    } else {
        return (
            <div className="content-container">Niste prijavljeni</div>
        )
    }
}

export default Pocetna
