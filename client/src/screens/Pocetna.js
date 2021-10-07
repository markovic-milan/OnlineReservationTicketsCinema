import React from 'react';
import Content from '../components/content/Content';


function Pocetna(props) {
    return (
        <div className="content-container">
            <Content filmovi={props.filmovi}/>
        </div>
    )
}

export default Pocetna;
