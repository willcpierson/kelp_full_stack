import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";
import { useState, useEffect } from 'react';
import Carousel from '../Carousel';

const HomePage = () => {

    return (
        <>
            <div id={styles.container}>
                <SearchBar id={styles.searchBar}/>
                <Carousel />
            </div>
            <h2 id={styles.nextReviewHeader}>Your Next Review Awaits</h2>
        </>
    );
};

export default HomePage