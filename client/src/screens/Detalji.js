import React ,{ useState, useEffect } from 'react'
import MovieInfo from '../components/info/MovieInfo'

function Detalji(props) {

  const [idFilma, setIdFilma] = useState(-1);
  console.log("ID: " + idFilma);
  
  useEffect(() => {
     if(props.location.param === undefined){
       setIdFilma(window.sessionStorage.getItem("id"));
     }else{
       window.sessionStorage.setItem("id", props.location.param);
       setIdFilma(props.location.param)
     }
  }, []);

  const loaded = idFilma > -1;
  return (
        <div  className="content-container">
         {loaded?<MovieInfo movie={idFilma}/>:<span/>} 
        </div>
    )
}

export default Detalji
