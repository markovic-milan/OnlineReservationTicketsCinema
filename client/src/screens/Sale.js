import React from 'react'
import {useEffect, useState} from 'react';
import axios from 'axios';

function Sale() {
    
    const [sale,setSale] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/sale').then((resp)=>{
        setSale(resp.data);
    });
  },[])

    return (
        <div className="content-container">
            {sale}
        </div>
    )
}

export default Sale
