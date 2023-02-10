import {NavLink , Link} from 'react-router-dom';
import './nav.css';
function Nav()
{

    let activeClassName = "selected";
    return <nav>
    <NavLink to={'/'}  className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Current</NavLink>
    <NavLink to={'/pollution'}  className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }>Pollution</NavLink>
    {/* <Link to={'/'} classname={"selected"}>15 Days</Link> */}

   
    </nav>;
}

export default Nav;