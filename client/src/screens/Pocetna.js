import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Content from '../components/content/Content';

function Pocetna() {
    console.log("POCETNA");
    return (
        <div className="content-container">
            <Content/>
      </div>
    )
}

export default Pocetna
