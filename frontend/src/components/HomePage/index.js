import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import ProfileButton from "../ProfileButton";
import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";


const HomePage = () => {

    return (
        <>
            <div id={styles.homePage}>
               
            </div>
            <SearchBar id={styles.searchBar}/>
        </>
    );
};

export default HomePage