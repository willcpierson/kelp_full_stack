import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/businesses";
import { createReview, fetchReviews, getReviews } from "../../store/reviews";
import { useParams } from "react-router-dom";




const BusinessItemShow = () => {


    // Get user? Might need userReducer
    const dispatch = useDispatch();
    const businessId = useParams()
    const [reviewBody, setReviewBody] = useState('')
    const business = useSelector(getBusiness(businessId.id))
    const reviews = useSelector(getReviews)
    console.log(business)

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])

    const mappedReviews = reviews.map((review) => {
        return <p review={review} key={review.id}> {review.body} {review.created_at}</p>
    });

    useEffect(() => {
        dispatch(fetchBusiness(businessId.id))
    }, [businessId])

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewObject = {body: reviewBody, user_id: 1, business_id: 1}
        dispatch(createReview(reviewObject))
        setReviewBody('')
    }  

    return (
        <>  
            <SearchBar />
            <br />
            <h2>{business.name}</h2>
            <p> {business.rating} 4.0 </p>
            <p> {business.description} </p>
            <br />
            <form onSubmit={handleSubmit}>
                <input type="textarea" value={reviewBody} onChange={(e) => setReviewBody(e.target.value)}/>
            </form>

            <h3>Reviews</h3>
            {mappedReviews}
            

        </>
    );
};

export default BusinessItemShow;