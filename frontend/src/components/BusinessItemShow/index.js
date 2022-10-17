import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/businesses";
import { createReview, fetchReviews, getReviews } from "../../store/reviews";
import { useParams } from "react-router-dom";




const BusinessItemShow = () => {

    const dispatch = useDispatch();
    const businessId = useParams()
    const [newReview, setNewReview] = useState('')
    const business = useSelector(getBusiness(businessId.id))
    const reviews = useSelector(getReviews)
    console.log(business)

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])

    const mappedReviews = reviews.map((review) => {
        return <p review={review} key={review.id}> {review.body}</p>
});

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
            <br />
            <form>
                <input type="textarea" />
            </form>

            <h3>Reviews</h3>
            {mappedReviews}
            

        </>
    );
};

export default BusinessItemShow;