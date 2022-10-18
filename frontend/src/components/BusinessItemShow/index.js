import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/businesses";
import { createReview, fetchReviews, getReviews, destroyReview, getReview } from "../../store/reviews";
import * as sessionActions from '../../store/session'
import { useParams } from "react-router-dom";
import styles from './BusinessItemShow.module.css'




const BusinessItemShow = () => {

    const sessionUser = useSelector(state => state.session.user)

    // Get user? Might need userReducer
    const dispatch = useDispatch();
    const businessParam = useParams()
    const [reviewId, setReviewId] = useState('')
    const [reviewBody, setReviewBody] = useState('')
    const business = useSelector(getBusiness(businessParam.id))
    const reviews = useSelector(getReviews)

    useEffect(() => {
        dispatch(fetchReviews())
    }, [dispatch] )

    const mappedReviews = reviews.map((review) => {
        if (parseInt(businessParam.id) === review.business_id) {
            
            return (
                <div className={styles.singleReview}>
                    <p className={styles.reviewerName}>Demo Man</p>
                    <p className={styles.cityState}> New York, NY </p>
                    <br />
                    <p> Rating: 4/5 | {review.created_at} </p>
                    <br />
                    <p review={review} className={styles.paragraph}> {review.body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident molestiae quasi sequi at. Expedita consequatur vel ratione necessitatibus vitae commodi accusamus exercitationem cupiditate, sequi omnis accusantium, alias, excepturi sit?</p>
                    <button onClick={(e) => dispatch(destroyReview(review.id))} key={review.id}> DELETE REVIEW </button> 
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
            <form  onSubmit={handleSubmit}>
                <input className={styles.submitReview} type="textarea" value={reviewBody} onChange={(e) => setReviewBody(e.target.value)}/>
                <input className={styles.submitReviewForm} type="submit" value='Submit Review'/>
            </form>
            <div className={styles.reviews}>
                <h3 id={styles.reviewHeader}>Recommended Reviews</h3>
                {mappedReviews}
            </div>
            

        </>
    );
};

export default BusinessItemShow;