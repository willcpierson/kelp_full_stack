import styles from './HomePageBusinessPreview.module.css'
import HomePageBusinessItem from "../HomePageBusinessItem";
import { getBusinesses } from '../../store/businesses';
import { useSelector } from 'react-redux';

const HomePageBusinessPreview = () => {

    // const businesses = useSelector(getBusinesses())

    // const mappedBusinesses = businesses.map((business) => {
    //     return <HomePageBusinessItem business={business} key={business.id} />
    // });


    return (
        <div id={styles.HomePageBusinessPreviewContainer}>
            <h1 id={styles.checkOutTheseBusinesses}>Check out these businesses</h1>
            <div id={styles.grid}>
                {/* {Note that CSS changes to this div are not reflective yet, ask help from tech coach} */}
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
                <HomePageBusinessItem />
            </div>
            {/* {mappedBusinesses} */}
        </div>
    );
};

export default HomePageBusinessPreview;