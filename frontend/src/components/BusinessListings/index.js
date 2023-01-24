import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSpecificBusinesses, getSpecificBusinesses } from "../../store/businesses";
import SearchBar from "../SearchBar";
import BusinessListingsItem from "../BusinessListingItem";
import styles from './BusinessListings.module.css'


const BusinessListings = () => {
    const { type } = useParams();
    const businessType = type ? type : 'all' 
    const dispatch = useDispatch()
    const businesses = useSelector(getSpecificBusinesses())

    useEffect(() => {
        dispatch(fetchSpecificBusinesses(businessType))
    }, [type])

    const mappedBusinesses = businesses.map((business) => {
            return <BusinessListingsItem business={business} key={business.id} />
    });

    return (
        <>
            <SearchBar id={styles.searchBar}/>
            <h1 id={styles.browsing}> Browsing New York, New York</h1>
            <h4 id={styles.allResults}>All Results</h4>
            <ol className={styles.mappedBusinesses}>
                {mappedBusinesses}
            </ol>
            <aside id={styles.googleMap}>
                <img src="" alt="" />
            </aside>
        </>
    );
};

export default BusinessListings