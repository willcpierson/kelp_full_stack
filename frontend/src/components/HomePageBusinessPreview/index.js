import styles from './HomePageBusinessPreview.module.css'
import HomePageBusinessItem from "../HomePageBusinessItem";

const HomePageBusinessPreview = () => {
    console.log(styles);
    return (
        <>
        <div id={styles.HomePageBusinessPreviewContainer}>
            <h1 id={styles.checkOutTheseBusinesses}>Check out these businesses</h1>
           
        </div>
        <div id={styles.help}>
                <HomePageBusinessItem business={1} />
                <HomePageBusinessItem business={2} />
                <HomePageBusinessItem business={3} />
                <HomePageBusinessItem business={4} />
                <HomePageBusinessItem business={5} />
                <HomePageBusinessItem business={6} />
                <HomePageBusinessItem business={7} />
                <HomePageBusinessItem business={8} />
        </div>
        <div id={styles.junk}>
            <p>hello</p>
            <p>hello</p>
        </div>
    
        </>
    );
};

export default HomePageBusinessPreview;