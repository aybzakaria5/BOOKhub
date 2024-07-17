import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Style from './Navbar.module.css';
import { IconContext } from 'react-icons';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className={Style.navbar}>
          <div className={Style['menu-bars']}>
            <FaIcons.FaBars onClick={showSidebar} />
          </div>
        </div>
        
        <nav className={sidebar ? `${Style['nav-menu']} ${Style.active}` : Style['nav-menu']}>
          <ul className={Style['nav-menu-items']} onClick={showSidebar}>

            <li className={Style['navbar-toggle']}>
              <div className={Style['menu-bars']}>
                <AiIcons.AiOutlineClose style={{color:"white"}}/>
              </div>
            </li>
        
            <li className={Style['nav-text']}>
              <Link to='/admin' >
                <AiIcons.AiFillHome style={{color:"white"}} />
                <span>Home</span>
              </Link>
            </li>
            <li className={Style['nav-text']}>
              <Link to='#'>
                <FaIcons.FaFileAlt style={{color:"white"}}/>
                <span>Report</span>
              </Link>
            </li>
            <li className={Style['nav-text']}>
              <Link to='#'>
              <FaIcons.FaCartPlus style={{color:"white"}}/>
                <span>Products</span>
              </Link>
            </li>

          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
