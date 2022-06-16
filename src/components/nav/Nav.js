import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav.css';
import {
  FaTwitter, FaFacebook, FaVimeo, FaInstagram, FaPinterest,
} from 'react-icons/fa';
import img from '../../styles/logo.png';

function Nav() {
  const updateStorage = () => {
    localStorage.setItem('cruiseId', 0);
  };
  return (
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
  );
}

export default Nav;
