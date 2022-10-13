import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import ProfileButton from "../ProfileButton";
import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";


const HomePage = () => {
    // If you ever encounter error with exact, doubleback here to li ele
    return (
        <>
            <SearchBar />
        </>
    );
};

export default HomePage