import React from 'react';
import { useState } from "react";
import { useHistory } from 'react-router';
import * as messages from "../constants/messages";
import { ToastContainer, toast, Slide } from "react-toastify";
import './Kupovina.css';



function Kupovina (){


    const history = useHistory();
    let ukupnaCijena;
    let brojSjedista;

    const [purchaseError, setPurchaseError] = useState(false);

    const [Data, setPurchaseData] = useState({
        cardNumber="",
    });

    const [errors, setErrors] = useState({
        cardNumber="",
    });

    const validateData = () => { /*provjera da li je dobar broj kreditne kartice*/
        const newState = {
            cardNumber: cardNumber ? "" : messages.CARD_NUMBER_INVALID
        };

        setErrors(newState);
        return !newState.cardNumber;
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateData()) {
            try {

                    /*uraditi ????*/

            }catch (error) {
                setPurchaseError(true);
            }
        } else {
            setPurchaseError(false);
        }
    };


    return (  /*za upis broja kreditne kartice*/
        
            <div className="purchase-form-container">
                <form className="purchase-form" onSubmit={handleSubmit}>
                    <div className="purchase-field">
                        <label htmlFor="cardNumber" className="form-label">Broj kreditne kartice</label>
                        <input type="text" id="cardNumber" value={cardNumber} className="form-input text-input"
                            onChange={(e) => setPurchaseData(e.target.value)} />

                        <span>{errors.cardNumber}</span>
                    </div>


                    <div className= "brojSjedista-container"> 
                        <div className= "brojSjedistaText"> Broj sjedista </div>
                        
                        <div className= "brojSjedistaNumber"   >           </div>   
                    </div>

                    <div className="ukupnaCijena-container">
                    <div className= "ukupnaCijenaText"> Ukupna cijena </div>
                       
                        <div className= "ukupnaCijenaNumber"   >           </div>
                    </div>

                    {purchaseError &&
                        <div class="error-message">
                            Broj kartice nije ispravan.
                        </div>
                    }
                    <br />
                    <input type="submit"  value="Izvrsi kupovinu" className="form-input purchase-button" />
                </form>
            </div>     
        
)
}

export default Kupovina;