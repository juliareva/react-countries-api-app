import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import "./Navbar.styled.css"
import { useNavigate } from 'react-router-dom';

 

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav>
        <h1 onClick={() => {
        navigate("/"); window.location.reload(false)}}>Where in the world?</h1>
        {/* <div className='theme'>
            <i>{<FontAwesomeIcon icon={faMoon}/>}</i>
            <p>Dark mode</p>
        </div> */}
    </nav>
  )
}
