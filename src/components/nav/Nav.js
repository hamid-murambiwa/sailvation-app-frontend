import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import {
  FaTwitter, FaFacebook, FaVimeo, FaInstagram, FaPinterest,
} from 'react-icons/fa';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/core.css';
import img from '../../styles/logo.png';
import hamburger from '../../styles/menu.png';

function Nav() {
  const updateStorage = () => {
    localStorage.setItem('cruiseId', 0);
  };

  return (
    <>
      <Fade left>
        <div className="nav-con">
          <div className="logo-con">
            <img src={img} alt="Sailvation logo" className="logo" />
          </div>
          <div className="links-con">
            <Link to="/" className="nav-cruise">Cruises</Link>
            <Link to="/reservations" className="nav-cruise">Reservations</Link>
            <Link to="/cruises/reservation" onClick={updateStorage} className="nav-cruise">Make a reservation</Link>
            <Link to="/login" className="nav-cruise">Login</Link>
            <Link to="/signup" className="nav-cruise">Sign Up</Link>
          </div>
          <section>
            <div className="icons">
              <FaTwitter style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
              <FaFacebook style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
              <FaVimeo style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
              <FaInstagram style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
              <FaPinterest style={{ color: 'black', fontSize: '1rem', margin: '6px' }} />
            </div>
            <div className="pub">
              <p>
                &copy;
                {' '}
                {new Date().getFullYear()}
                {' '}
                Sailvation Cruises.
              </p>
            </div>
          </section>
        </div>
      </Fade>
      <div className="mobile-nav">
        <Menu
          className="menu-icon"
          menuButton={(
            <MenuButton className="menu-icon">
              <Fade left>
                <img src={hamburger} className="hamburger-icon" alt="hamburger icon" />
              </Fade>
            </MenuButton>
            )}
        >
          <MenuItem><Link to="/" className="mobile-nav-cruise">Cruises</Link></MenuItem>
          <MenuItem><Link to="/reservations" className="mobile-nav-cruise">Reservations</Link></MenuItem>
          <MenuItem><Link to="/cruises/reservation" onClick={updateStorage} className="mobile-nav-cruise">Make a reservation</Link></MenuItem>
          <MenuItem><Link to="/login" className="mobile-nav-cruise">Login</Link></MenuItem>
          <MenuItem><Link to="/signup" className="mobile-nav-cruise l">Sign Up</Link></MenuItem>
        </Menu>
        <div className="logo-con">
          <img src={img} alt="Sailvation logo" className="logo" />
        </div>
      </div>
    </>
  );
}

export default Nav;
