import React from 'react';
import Content from '../components/content/Content';


function Pocetna(props) {
    return (
        <div className="content-container">
           <Content filmovi={props.data}/>
        </div>
    )
}

export default Pocetna;
