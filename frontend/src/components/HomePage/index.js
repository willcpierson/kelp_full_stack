import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";
import { useState, useEffect } from 'react';

const HomePage = () => {

    const [background, setBackground] = useState(0);
    const [color, setColor] = useState();
    
    useEffect(() => {

    }, []);

    const carouselHomePage = () => {
            setBackground(background + 1);
            if (background === 1) {
                return (
                    <div id={styles.homePage1}> </div>
                );
            } else if (background === 2) {
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

    setInterval(carouselHomePage(), 2000)

    return (
        <>
            {setInterval(carouselHomePage(), 2000)}
            <SearchBar id={styles.searchBar}/>
        </>
    );
};

export default HomePage