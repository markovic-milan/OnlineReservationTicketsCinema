import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Content from '../components/content/Content';


function Pocetna() {
<<<<<<< HEAD
    return (
        <div className="content-container">
            <Content/>
      </div>
    )
=======
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
>>>>>>> 6b25768e51c574744ca22ecfbf82f43e65de3dc4
}

export default Pocetna
