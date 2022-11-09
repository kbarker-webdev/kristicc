import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import '../style/Header.css';

const pages = ['Home', 'Portfolio', 'Customize', 'Admin', 'Login'];

const Header = (props) => {
  const navigate = useNavigate();
  const user = props.user;

  const clickNavButton = (e) => {
    navigate('/' + e.target.innerText.toLowerCase())
  }

  const mouseEnter = (e) => {
    const video = document.getElementById('mp4logo');
    video.pause();
    video.currentTime = 100;
    video.load();
  }

  return (
    <div className='header-container'>
      <video className='logo' id='mp4logo' width="150" height="150" onMouseEnter={(e) => mouseEnter(e)} autoPlay muted>
        <source src='/img/logo.mp4' type="video/mp4" />
      </video>
      <br/><br/><br/><br/>

          {/* <li className='link' onClick={(e) => {clickNavButton(e)}}>Home</li> */}
          <li className='link' onClick={(e) => {clickNavButton(e)}}>Portfolio</li>
          <li className='link' onClick={(e) => {clickNavButton(e)}}>Customize</li>
          {user.token ?
            <li className='link' onClick={(e) => {clickNavButton(e)}}>Admin</li>
            : null
          }
          <li className='link' onClick={(e) => {clickNavButton(e)}}>Login</li>

    </div>
  );
};
export default Header;