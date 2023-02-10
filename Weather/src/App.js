import logo from './logo.svg';
import './App.css';
import SideBar from './comp/SideBar';
import WeatherPortal from './comp/WeatherPortal';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import ApiSaver from './comp/Context/provider';


function App() {

  
return <>
 <Router>
  <ApiSaver>
     <WeatherPortal></WeatherPortal>
  </ApiSaver>
 </Router>
</>

}

export default App;
