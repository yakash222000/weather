import './Header.css';
import venom from './venom.jpg';
import {Link} from 'react-router-dom';
import { useRef } from 'react';

function Header(props)
{
 let  homeIcon = useRef();
 let alerBox = useRef();
 let menu = useRef();

console.log(props);
  function checkURL()
  {
    if(window.location.pathname == '/')
    {
         alerBox.current.style.display = "inline";
         setTimeout(()=>{alerBox.current.style.display="none";} , 1500);
    }
  }

  const toggleMenu = () => {
      console.log(menu);
      menu.current.style.display = "flex";
  };

  const toggleMenuOff = () => {
    
   menu.current.style.display = "none";
  };
    return <> 
     <header>
        <div className='brand-placeholder'>
         {/* <img src={venom} alt="" /> */}
         <div className='developer'>
           Fore-Weather
          <span>by Deepanshu Kumar</span>
        </div>
        </div>

    <button className="navbar-burger bodyX" onClick={toggleMenu}></button>
    <nav className="menu" ref={menu} onClick={toggleMenuOff}>
      <a href="#" className='burger1'>Home</a>
      <a href="" className='burger2'>About</a>
      <a href="" className='burger3'>LinkedIN</a>
      <a href="" className='burger4'>Github</a>
      <a href="" className='burger5'>Instagram</a>
    </nav>
        </header>
     {(props.version=="M")?<div className='version'>Mobile Version</div>:""}
    </>;
}

export default Header;