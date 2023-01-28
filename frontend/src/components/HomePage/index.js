import styles from './HomePage.module.css';
import SearchBar from "../SearchBar";


const HomePage = () => {

    return (
        <>
            <div id={styles.homePage}> </div>
            <SearchBar id={styles.searchBar}/>
        </>
    );
};

export default HomePage