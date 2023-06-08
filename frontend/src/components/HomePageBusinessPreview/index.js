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
            {/* {mappedBusinesses} */}
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
            <h4></h4>
        </div>
    );
};

export default HomePageBusinessPreview;