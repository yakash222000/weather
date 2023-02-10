import Nav from "./Nav";
import axios from 'axios';
import {useEffect} from 'react';
import Hourly from "./Hourly";
import { Route, Routes } from "react-router-dom";
import Pollution from "./Pollution";


function Weather(r)
{
    const data = r.data;
    let weather = data.weather[0];
    return <>
     <Nav></Nav>
     <div className="titleOrigin">
        {data.name} , {data.sys.country}
     </div>  
     <div className="bodyW">
     
     <Routes>
       <Route path="/" index element={<>
    <div className="weatherWindow">
    <div className="weatherIcon">
       <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="" />
          <h2>{weather.main}</h2>
          <h4>{weather.description}</h4>
    </div>
    <div className="details">
     <p>Humidity    : {data.main.humidity} %</p>
     <p>Feels Like  : {data.main.feels_like}</p>
     <p>Ground-Level: {data.main.grnd_level}</p>
     <p>Pressure    : {data.main.pressure}</p>
     <p>Temprature  : {data.main.temp}</p>
     <p>Wind speed  : {data.wind.speed} at {data.wind.deg} Deg</p>
    </div>
    </div>
       </>}>

       </Route>
       <Route path="/pollution" element={<Pollution></Pollution>}></Route>
     </Routes>


   
   </div>
     
    </>;
}

export default Weather;