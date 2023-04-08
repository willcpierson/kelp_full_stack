import styles from './HomePageBusinessPreview.module.css'
import HomePageBusinessItem from "../HomePageBusinessItem";


const HomePageBusinessPreview = () => {


    return (
        <div id={styles.HomePageBusinessPreviewContainer}>
            <HomePageBusinessItem />
            <HomePageBusinessItem />
            <HomePageBusinessItem />
            <HomePageBusinessItem />
            <HomePageBusinessItem />
            <HomePageBusinessItem />
        </div>
    );
};

export default HomePageBusinessPreview;