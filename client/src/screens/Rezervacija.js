import './Rezervacija.css';
import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

function Rezervacija () {

    const initialValues = {
        creditCardNum:""
    };
    
    const [creditCardNum, setCreditCardNum] = useState("");
   

    return (
        
        <div className="sadrzaj-placanja"> Detalji placanja
                <div className="placanje-container">
                    <div className="detalji-placanja"> Unesite broj kreditne kartice</div>
                    <div className="creditCard-number">
                    <input type="text" id="creditCardNum" placeholder="(Primjer 012345678901)" value={creditCardNum} className="form-input text-input"
                            onChange={(e) => setCreditCardNum(e.target.value)} />
                        
                    </div>
                    <div className="num-of-seats">Broj rezervisanih mjesta:</div>
                    <div className="total-payment">Ukupno za platiti:</div>
                    <div className="pay-button">Plati</div>


                </div>
            </div>
    );

}


export default Rezervacija