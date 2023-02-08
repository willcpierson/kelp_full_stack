import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";
import { useState, useEffect } from 'react';

const HomePage = () => {

    const [background, setBackground] = useState(0);


    // NEAR COMPLETION OF CAROUSEL BELOW! Seems to get faster longer you sit on the page; negative feedback cycle?
    // useEffect(() => {
    //     setInterval(() => {
    //         if (background < 2) {
    //             setBackground((background + 1));
    //         } else {
    //             setBackground(0);
    //         };
    //     }, 5000)
    // }, [background]);

    const carouselHomePage = () => {
        console.log(background)
            if (background === 0) {
                return (
                    <div id={styles.homePage1}> </div>
                );
            } else if (background === 1) {
                return (
                    <div id={styles.homePage2}> </div>
                );
            } else if (background === 2) {
                return (
                    <div id={styles.homePage3}> </div>
                );
            };
    };

    return (
        <>
            {/* <div id={styles.homePage1}> </div> */}
            {carouselHomePage()}
            <SearchBar id={styles.searchBar}/>
        </>
    );
};

export default HomePage