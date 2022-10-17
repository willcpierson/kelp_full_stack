import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/businesses";
import { createReview, fetchReviews, getReviews, destroyReview, getReview } from "../../store/reviews";
import * as sessionActions from '../../store/session'
import { useParams } from "react-router-dom";




const BusinessItemShow = () => {

    const sessionUser = useSelector(state => state.session.user)
    // const reviewUser = useSelector(state => state.users.firstName)

    // Get user? Might need userReducer
    const dispatch = useDispatch();
    const businessId = useParams()
    const [reviewBody, setReviewBody] = useState('')
    const business = useSelector(getBusiness(businessId.id))
    const reviews = useSelector(getReviews)

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(destroyReview(12))
    }

    const mappedReviews = reviews.map((review) => {
        if (parseInt(businessId.id) === review.business_id) {
            
            return (
                <div>
                    <p review={review} key={review.id}> {review.body} {review.created_at}</p>
                    <button onClick={handleClick} > DELETE REVIEW </button> 
                </div>
            )
        }
    });

    useEffect(() => {
        dispatch(fetchBusiness(businessId.id))
    }, [businessId])

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewObject = {body: reviewBody, user_id: sessionUser.id, business_id: businessId.id}
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