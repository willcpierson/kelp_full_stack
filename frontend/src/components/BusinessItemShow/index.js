import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import SearchBar from "../SearchBar";
import { fetchBusiness, getBusiness, getSpecificBusinesses } from "../../store/businesses";
import { createReview, fetchReviews, getReviews, getReview, destroyReview,  updateReview } from "../../store/reviews";
import { fetchUsers, getUsers } from "../../store/users";
import * as sessionActions from '../../store/session'
import { useParams } from "react-router-dom";
import styles from './BusinessItemShow.module.css'




const BusinessItemShow = () => {

    const sessionUser = useSelector(state => state.session.user)
    const allUsers = useSelector(getUsers)
    const dispatch = useDispatch();
    const businessParam = useParams()
    const [reviewBody, setReviewBody] = useState('')
    const business = useSelector(getBusiness(businessParam.id))
    const reviews = useSelector(getReviews)

    useEffect(() => {
        if (!business) {
            dispatch(fetchBusiness(businessParam.id))
        }
    }, [businessParam.id])

    useEffect(() => {
        dispatch(fetchReviews())
        dispatch(fetchUsers())
    }, [dispatch] )

    if (!business) return null

    const mappedReviews = reviews.map((review) => {
        let reviewUserName = ''
        if (parseInt(businessParam.id) === review.business_id) {
            allUsers.forEach((user) => {
            console.log(review.business_id)
            if (user.id === review.user_id) {
                reviewUserName = (`${user.first_name} ${user.last_name}`)
            }
        })
        let deleteAndUpdateButtons = ''
        if (review.user_id === sessionUser.id) {
            deleteAndUpdateButtons = ( 
            <>
                <button onClick={(e) => dispatch(destroyReview(review.id))} key={review.id}> DELETE REVIEW </button>
                <button onClick={(e) => dispatch(updateReview(review))} key={review.id}> UPDATE REVIEW </button>
            </>
            )
        }

            return (
                <div className={styles.singleReview}>
                    <p className={styles.reviewerName}>{reviewUserName}</p>
                    <p className={styles.cityState}> New York, NY </p>
                    <br />
                    <p> Rating: 4/5 | {review.created_at} </p>
                    <br />
                    <p review={review} className={styles.paragraph}> {review.body} Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit provident molestiae quasi sequi at. Expedita consequatur vel ratione necessitatibus vitae commodi accusamus exercitationem cupiditate, sequi omnis accusantium, alias, excepturi sit?</p>
                    {deleteAndUpdateButtons}
                </div>
            )
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const reviewObject = {body: reviewBody, user_id: sessionUser.id, business_id: businessParam.id}
        dispatch(createReview(reviewObject))
        setReviewBody('')
    }  

    return (
        <>  
            <SearchBar />
            <div id={styles.businessImageHolder}>
                <img id={styles.businessImage} src={business.photoURL} alt=""/>
            </div>
            <br />
            <h2 id={styles.businessName}>{business.name}</h2>
            <p id={styles.businessRating}> {business.rating} 4.0 </p>
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