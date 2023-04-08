import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";
import HomePageBusinessPreview from '../HomePageBusinessPreview';
import Carousel from '../Carousel';

const HomePage = () => {

    return (
        <>
            <div id={styles.container}>
                <SearchBar id={styles.searchBar}/>
                <Carousel />
            </div>
            <h2 id={styles.nextReviewHeader}>Your Next Review Awaits</h2>
            <HomePageBusinessPreview />
        </>
    );
};

export default HomePage