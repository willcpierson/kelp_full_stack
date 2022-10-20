import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './ProfileButton.css'

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
        <button id="profile-button" onClick={openMenu}>
          <img src="https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_40x40_v2.yji-1b8b3dd9a1cc11cda816.png" alt="profile-picture"/>
        </button>
        
        {showMenu && (
          <ul className="profile-dropdown">
            <li className="profileListItem">
              <svg className="dropDownMenuIcon">
                <path d="M12 1a11 11 0 1011 11A11.012 11.012 0 0012 1zm0 2a8.985 8.985 0 017.791 13.485 14.142 14.142 0 00-3.056-1.47 5.286 5.286 0 00.622-2.452V10.57a5.357 5.357 0 10-10.714 0v1.993a5.29 5.29 0 00.62 2.45 14.125 14.125 0 00-3.054 1.474A8.985 8.985 0 0112 3zm-3.357 9.563V10.57a3.357 3.357 0 016.714 0v1.993a3.358 3.358 0 11-6.714 0zM12 21a8.968 8.968 0 01-6.604-2.906 12.19 12.19 0 013.227-1.406 5.241 5.241 0 006.758-.003c1.137.31 2.223.785 3.224 1.408A8.969 8.969 0 0112 21z"></path>
              </svg>
              About Me
            </li>
            <li className="profileListItem">
              <svg className="dropDownMenuIcon">
                <path d="M18.061 12.777a13.339 13.339 0 00-2.96-1.44 5.123 5.123 0 00.744-2.632v-1.95a5.181 5.181 0 10-10.364 0v1.95c.005.931.263 1.844.748 2.64a13.34 13.34 0 00-4.097 2.26 3.016 3.016 0 000 4.636 13.512 13.512 0 008.531 3.004c1.005 0 2.007-.109 2.988-.326a1 1 0 10-.433-1.953 11.74 11.74 0 01-9.82-2.274 1.018 1.018 0 010-1.538A11.358 11.358 0 017.74 12.98a5.153 5.153 0 005.852-.007c1.198.307 2.34.807 3.377 1.481a1 1 0 101.092-1.676zM7.481 8.705v-1.95a3.182 3.182 0 016.364 0v1.95a3.182 3.182 0 01-6.364 0zm14.473 9.222h-1.5v-1.5a1 1 0 10-2 0v1.5h-1.5a1 1 0 100 2h1.5v1.5a1 1 0 002 0v-1.5h1.5a1 1 0 000-2z"></path>
              </svg>
              Find Friends
            </li>
            <li className="profileListItem"> 
              <svg className="dropDownMenuIcon">
                <path d="M12 16.5a4.5 4.5 0 114.5-4.5 4.51 4.51 0 01-4.5 4.5zm0-7a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM13.18 23h-2.36a2 2 0 01-2-1.61l-.1-.49a.49.49 0 00-.3-.36.49.49 0 00-.47.05l-.41.27a2 2 0 01-2.52-.25l-1.63-1.67a2 2 0 01-.25-2.52l.27-.42a.49.49 0 000-.47.49.49 0 00-.37-.3l-.48-.1a2 2 0 01-1.61-2v-2.31a2 2 0 011.61-2l.49-.1a.49.49 0 00.36-.3.49.49 0 000-.47l-.27-.41a2 2 0 01.25-2.52l1.67-1.63a2 2 0 012.52-.25l.42.27a.49.49 0 00.47 0 .49.49 0 00.3-.37l.1-.48a2 2 0 012-1.61h2.36a2 2 0 012 1.61l.1.49a.49.49 0 00.3.36.49.49 0 00.47 0l.41-.27a2 2 0 012.52.25l1.67 1.67a2 2 0 01.25 2.52l-.36.42a.49.49 0 00-.05.47.49.49 0 00.37.3l.48.1a2 2 0 011.61 2v2.36a2 2 0 01-1.61 2l-.49.1a.49.49 0 00-.36.3.49.49 0 00.05.47l.27.41a2 2 0 01-.25 2.52l-1.67 1.67a2 2 0 01-2.52.25l-.42-.36a.49.49 0 00-.47-.05.49.49 0 00-.3.37l-.1.48A2 2 0 0113.18 23zm-4.91-4.5c.342 0 .682.064 1 .19a2.49 2.49 0 011.49 1.82l.1.49h2.36l.1-.49c.16-.818.72-1.5 1.49-1.82a2.52 2.52 0 012.35.23l.41.28 1.67-1.67-.28-.41a2.52 2.52 0 01-.23-2.35 2.49 2.49 0 011.82-1.49l.49-.1v-2.36l-.49-.1a2.49 2.49 0 01-1.82-1.49 2.52 2.52 0 01.23-2.35l.28-.41-1.71-1.67-.41.28a2.52 2.52 0 01-2.35.23 2.49 2.49 0 01-1.49-1.82l-.1-.49h-2.36l-.1.49a2.49 2.49 0 01-1.49 1.82 2.52 2.52 0 01-2.35-.23l-.41-.28L4.8 6.47l.28.41a2.52 2.52 0 01.23 2.35 2.49 2.49 0 01-1.82 1.49l-.49.1v2.36l.49.1c.818.16 1.5.72 1.82 1.49a2.52 2.52 0 01-.23 2.35l-.28.41 1.67 1.67.41-.28a2.49 2.49 0 011.39-.42z"></path>
              </svg>
              Account Settings
            </li>
            <li className="profileListItem" onClick={logout}> 
              <svg className="dropDownMenuIcon">
              <path d="M15 2a1 1 0 110 2H4v16h11a1 1 0 110 2H3a1 1 0 01-1-1V3a1 1 0 011-1h12zm1.09 4.72a1 1 0 011.41 0L22 11.3a1 1 0 010 1.4l-4.59 4.58a1 1 0 01-1.41.02 1 1 0 010-1.42L18.87 13H7a1 1 0 110-2h11.87l-2.78-2.86a1 1 0 010-1.42z"></path>
              </svg>
              Log Out
            </li>
          </ul>
        )}
      </>
    );
  }
  
  export default ProfileButton;