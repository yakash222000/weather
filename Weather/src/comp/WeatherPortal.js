import './WeatherPortal.css';
import { useRef, useState, useContext } from 'react';
import axios from 'axios';
import Context from './Context/Context';
import Weather from './Weather';
import Hourly from './Hourly';
import Pollution from "./Pollution";
import Wait from './Wait';
import Header from './Header';
import Footer from './Footer';

import { Route, Routes } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
function WeatherPortal() {
   let pin_code = useRef();
   let place = useRef();

   let PollutionApi = useContext(Context);

   const [weatherData, setWeatherData] = useState({});

   let weatherStatus = false;

   function Enter(e) {

      if (e.key == 'Enter' || e == 1) {
         let zip = pin_code.current.value;
         let num = Number(zip);
         console.log(num, typeof (num));
         place.current.value = "";
         let url = `https://api.openweathermap.org/geo/1.0/zip?zip=${zip},IN&appid=0d7dace9bc88448963f73ee11a0c24be`;
         axios.get(url)
            .then((r) => {
               RenderWeather(r.data.lat, r.data.lon, r.data.name);

            })
            .catch((e) => { alert(e) });
      }
   }

   function Loc(e) {
      if (e.key == 'Enter' || e == 1) {
         let location = place.current.value;
         pin_code.current.value = "";
         let url = `https://api.openweathermap.org/geo/1.0/direct?q=${location},IN&appid=0d7dace9bc88448963f73ee11a0c24be`;
         axios.get(url)
            .then((r) => {
               if (r.status == 404) {
                  console.log("error");
               }
               else {
                  RenderWeather(r.data[0].lat, r.data[0].lon, r.data[0].name);
               }

               if (r.data.length == 0) {
                  alert("No Location found  , Try Using PIN CODE");
               }
            })
            .catch((e) => { alert(e) });
      }
   }
   //RenderWeather;

   function RenderWeather(lat, long, nameDis) {
      let longArray = [lat, long, nameDis];

      let urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=0d7dace9bc88448963f73ee11a0c24be`;
      axios.get(urlCurrent)
         .then((response) => {
            console.log(response);
            setWeatherData(response.data);
            weatherStatus = true;
            PollutionApi.setApi(longArray);
         });
   }
   return <>

      <Header></Header>
      <div className="searchBox">
         <div className="input">
            <label htmlFor="">Enter PinCode</label>
            <input type="text" onKeyPress={Enter} ref={pin_code} />
         </div>
         <button className='searchButton' onClick={() => Enter(1)}>Search</button>
         <div className="input">
            <label htmlFor="">Enter Location Name</label>
            <input type="text" onKeyPress={Loc} ref={place} />
         </div>


         <button className='searchButton' onClick={() => Loc(1)}>Search</button>


      </div>
      
      {Object.keys(weatherData).length ? <Weather data={weatherData} /> : <Wait></Wait>}

      <Footer></Footer>


   </>;
}

export default WeatherPortal;