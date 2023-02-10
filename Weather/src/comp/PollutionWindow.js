import './PollutionWindow.css';

function PollutionWindow(r)
{
    let data = r.data;


    return <>
     
    <div className='pollutionWindow'>
        <h1>Pollution Statics</h1>
        <div><p>Carbon Mono-Oxide CO</p><p>{data.co}</p></div>
        <div><p>NH3</p><p>{data.nh3}</p></div>
        <div><p>NO</p><p>{data.no}</p></div>
        <div className={data.no2>200?"red":"green"}><p>Nitrogen Dioxide N02</p><p >{data.no2}</p></div>
        <div className={data.o3>180?"red":"green"}><p>Ozone O3</p><p >{data.o3}</p></div>
        <div><p>Sulphur Dioxide SO2</p><p>{data.so2}</p></div>
        <div><p>Particulates</p><p>{data.pm10}</p></div>
    </div>
    
    </>
}

export default PollutionWindow;