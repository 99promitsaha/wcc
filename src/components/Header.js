import React from 'react';
import { Link } from 'react-router-dom';
import Telegram from '../components/images/telegram.svg'

const Header = () => {
  return (
    <header className="header">
      <nav className="navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="#program-details">Program Details</Link>
          </li>
          <li className="nav-item">
            <Link to="#mentors">Mentors</Link>
          </li>
          <li className="nav-item">
            <Link to="#faqs">FAQs</Link>
          </li>
        </ul>
      </nav>
      <h1 className="hero-title">Web3 Writers and <br></br> Creators Collective</h1>
      <a href="https://t.me/+OzllM_Vr2643ZmZl" target="_blank" rel="noopener noreferrer" className="community-link">
        <button className="join-button">
          <img src={Telegram} className="fa-icon" alt="Custom Icon" />
          Join our community {'>'}
        </button>
      </a>
    </header>
  );
}

export default Header;