import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import csrfFetch from "../../store/csrf";
import { fetchBusinesses, fetchSpecificBusinesses, getSpecificBusinesses, getBusinesses } from "../../store/businesses";
import { useDispatch } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import BusinessListingsItem from "../BusinessListingItem";
import styles from './BusinessListings.module.css'
import SearchBar from "../SearchBar";


const BusinessListings = () => {
    const navigate = useNavigate()
    const { type } = useParams();
    const businessType = type ? type : 'all' 
    const dispatch = useDispatch()
    const businesses = useSelector(getSpecificBusinesses())
    // useEffect
        // On every render of page we fetch inputted items
    useEffect(() => {
        console.log(businesses)
        dispatch(fetchSpecificBusinesses(businessType))
    }, [type])

    const mappedBusinesses = businesses.map((business) => {
            return <BusinessListingsItem business={business} key={business.id} />
    });
        // will eventually become businessItems, passing in props
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