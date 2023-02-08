import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";
import { useState, useEffect } from 'react';

const HomePage = () => {

    const [background, setBackground] = useState(0);
    const [color, setColor] = useState();
    

    const carouselHomePage = () => {
            if (background === 1) {
                setBackground(background + 1);
                return (
                    <div id={styles.homePage1}> </div>
                );
            } else if (background === 2) {
                setBackground(background + 1);
                return (
                    <div id={styles.homePage2}> </div>
                );
            } else {
                setBackground(0)
                return (
                    <div id={styles.homePage3}> </div>
                );
            };
    };

    return (
        <>
            {/* {setInterval(carouselHomePage(), 2000)} */}
            <div id={styles.homePage1}> </div>
            <SearchBar id={styles.searchBar}/>
        </>
    );
};

export default HomePage