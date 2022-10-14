import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/business";
import { useParams } from "react-router-dom";




const BusinessItemShow = () => {

    const dispatch = useDispatch();
    const businessId = useParams()
    console.log(businessId)
    console.log('HELP')
    const business = useSelector(getBusiness(businessId.id))
    console.log(business)

    useEffect(() => {
        dispatch(fetchBusiness(businessId.id))
    }, [businessId])

    return (
        <>  
            <SearchBar />
            <h4>Here is the Item!</h4>
            <p>{business.name}</p>
        </>
    );
};

export default BusinessItemShow;