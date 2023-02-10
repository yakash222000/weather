import './Pollution.css';
import {useContext} from 'react';
import Context from './Context/Context';
import { useEffect ,useState } from 'react';
import axios from 'axios';
import PollutionWindow from './PollutionWindow';
function Pollution()
{

    const [PollutionData , setData] = useState([]);

    let API = useContext(Context)

    let url = API.Api[0];

     useEffect(()=>{
       axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${url[0]}&lon=${url[1]}&appid=0d7dace9bc88448963f73ee11a0c24be`)
       .then((r)=>{
            //  console.log(r.data.list[0].components);
             setData(r.data.list[0].components)
       });
     },[])
     

    return <>
   {PollutionData.length!=0?<PollutionWindow data={PollutionData}></PollutionWindow>:"Please Wait..."}
    </>;
}

export default Pollution;
