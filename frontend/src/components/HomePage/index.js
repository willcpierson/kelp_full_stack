import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";
import { useState, useEffect } from 'react';

const HomePage = () => {

    const [background, setBackground] = useState(0);
    
    // useEffect(() => {

    // }, []);

    const carouselHomePage = () => {
        setInterval(
        if (background < 2) {
            setBackground(background + 1)
        } else {
            setBackground(0)
        });
    };

    return (
        <>
            <div id={styles.homePage1}> </div>
            <SearchBar id={styles.searchBar}/>
        </>
    );
};

export default HomePage