import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateReview } from "../../store/reviews";
import { getBusiness } from "../../store/businesses";
import styles from './EditReview.module.css'

const EditReview = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [reviewBody, setReviewBody] = useState(location.state.review.body);
    const business = useSelector(getBusiness(location.state.businessId));

    useEffect(() => {
        // console.log(location) remove when done with page
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        location.state.review.body = reviewBody;
        dispatch(updateReview(location.state.review));
        // take user back to business page
        // will need to use portal
    }

    return (
        <> 
            <p id={styles.kelplogo}>Kelp</p>
            {/* add creation of portal to front page thru the logo onClick */}
            <form action="" onSubmit={handleSubmit}>
                <h2 id={styles.businessName} >{business.name}</h2>
                <br />
                <textarea rows="10" column="10" id={styles.updateTextBox} value={reviewBody} onChange={(e) => setReviewBody(e.target.value)}/>
                <br />
                <input id={styles.submitUpdatedReview} type="submit" value='Post Review'/>
            </form>
        </>
    );
};

export default EditReview;