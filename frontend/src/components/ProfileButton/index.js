import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

// Potentially make this its own folder, might follow SearchBar

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    
    const openMenu = (e) => {
      if (showMenu) return;
      e.preventDefault();
      setShowMenu(true);
    };
    
    useEffect(() => {
      if (!showMenu) return;
  
      const closeMenu = (e) => {
        e.preventDefault();
        setShowMenu(false);
      };
  
      document.addEventListener('click', closeMenu);
    
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);
  
    const logout = (e) => {
      e.preventDefault();
      dispatch(sessionActions.logoutUser());
    };
  

    // user.firstName not pulling anything; I think it's because it's not included in the sessionUser; pull from DB? ANSWER: jbuilder! add to extract
    return (
      <>
        <button id="profile-button" onClick={openMenu}>Profile
          <i className="fa-solid fa-user-circle" />
        </button>
        
        {showMenu && (
          <ul className="profile-dropdown">
            <li>{`${user.firstName} ${user.lastName}`}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        )}
      </>
    );
  }
  
  export default ProfileButton;