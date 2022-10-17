import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/business";
import { useParams } from "react-router-dom";




const BusinessItemShow = () => {

    const dispatch = useDispatch();
    const businessId = useParams()
    const business = useSelector(getBusiness(businessId.id))
    console.log(business)

    useEffect(() => {
        dispatch(fetchBusiness(businessId.id))
    }, [businessId])

    return (
        <>  
            <SearchBar />
            <br />
            <h2>{business.name}</h2>
            <p> {business.rating} 4.0 </p>
            <p> {business.description} </p>


        </>
    );
};

export default BusinessItemShow;