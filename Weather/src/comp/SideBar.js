import './SideBar.css'
import {Link} from 'react-router-dom';
import icon from './Assests/icon-home.svg';


function SideBar()
{

    return <>
    <div className="sidebar">
     <div className="logo">
    
     </div>
     <div className="icons">
        <img src={icon} alt="" srcset="" />
     </div>
    </div>
    </>;
}

export default SideBar;