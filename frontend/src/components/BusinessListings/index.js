import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import csrfFetch from "../../store/csrf";
import { fetchBusinesses, fetchSpecificBusinesses, getSpecificBusinesses, getBusinesses } from "../../store/business";
import { useDispatch } from "react-redux";
import BusinessListingsItem from "../BusinessListingItem";
import styles from './BusinessListings.module.css'


const BusinessListings = (props) => {

    const businessType = props.type
    
    const dispatch = useDispatch()
    const businesses = useSelector(getSpecificBusinesses()) // Why does this not require an arg
    console.log(businesses)
    const [] = useState()
    // useEffect
        // On every render of page we fetch inputted items
    useEffect(() => {
        dispatch(fetchSpecificBusinesses(businessType))

    }, [])

    const mappedBusinesses = businesses.map((business) => {
            return <BusinessListingsItem business={business} location={props.location} />
    });
        // will eventually become businessItems, passing in props
    return (
        <>
            <h1>Browsing {props.location} for {props.food}</h1>
            <h4>All Results</h4>
            <ol>
                {mappedBusinesses}
            </ol>
        </>
    );
};

export default BusinessListings