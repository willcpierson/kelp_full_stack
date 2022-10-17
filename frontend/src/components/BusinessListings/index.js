import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import csrfFetch from "../../store/csrf";
import { fetchBusinesses, fetchSpecificBusinesses, getSpecificBusinesses, getBusinesses } from "../../store/businesses";
import { useDispatch } from "react-redux";
import BusinessListingsItem from "../BusinessListingItem";
import styles from './BusinessListings.module.css'
import SearchBar from "../SearchBar";


const BusinessListings = (props) => {
    const navigate = useNavigate()
    const businessType = props.type
    
    const dispatch = useDispatch()
    const businesses = useSelector(getSpecificBusinesses()) // Why does this not require an arg lol
    const [] = useState()
    // useEffect
        // On every render of page we fetch inputted items
    useEffect(() => {
        dispatch(fetchSpecificBusinesses(businessType))
    }, [props])

    const mappedBusinesses = businesses.map((business) => {
            return <BusinessListingsItem business={business} location={props.location} key={business.id} />
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