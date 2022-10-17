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
    const reviewUser = useSelector(state => state)

    // Get user? Might need userReducer
    const dispatch = useDispatch();
    const businessParam = useParams()
    const [reviewBody, setReviewBody] = useState('')
    const business = useSelector(getBusiness(businessParam.id))
    const reviews = useSelector(getReviews)

    useEffect(() => {
        dispatch(fetchReviews())
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        // console.log(reviewUser)
        // selected reviewId goes in arg; event??
        dispatch(destroyReview())
    }

    const mappedReviews = reviews.map((review) => {
        if (parseInt(businessParam.id) === review.business_id) {
            
            return (
                <div>
                    <p review={review} key={review.id}> {review.body} {review.created_at}</p>
                    <button onClick={handleClick} > DELETE REVIEW </button> 
                </div>
            )
        }
    });

    useEffect(() => {
        dispatch(fetchBusiness(businessParam.id))
    }, [businessParam])

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewObject = {body: reviewBody, user_id: sessionUser.id, business_id: businessParam.id}
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