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
            <HomePageBusinessPreview />
        </>
    );
};

export default HomePage