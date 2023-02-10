import './hourly.css';
import {useEffect} from 'react';
import axios from 'axios';

function Hourly(pp)
{  
    console.log(pp);
   
    let x = pp.con.coord;
    let url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${x.lon}&lon=${x.lat}&appid=0d7dace9bc88448963f73ee11a0c24be`;
    axios.get(url)
    .then((e)=>{console.log(e)});
    return <>
     
    </>;
}

export default Hourly;