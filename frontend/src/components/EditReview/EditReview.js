import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateReview } from "../../store/reviews";

// onClick={(e) => dispatch(updateReview(review))} key={review.id}

const EditReview = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [reviewBody, setReviewBody] = useState(location.state.review.body)

    useEffect(() => {
        console.log(location)
    })

    return (
        <> 
            <p>Hello from Edit Review</p>
            <p>Business ID: {location.state.businessId}</p>
            <p>Review ID: {location.state.review.id}</p>
            <form action="">
                <input type="textarea" value={reviewBody} onChange={(e) => setReviewBody(e.target.value)}/>
                <input type="submit" value='Update Review' onClick={(e) => dispatch(updateReview(location.review))}/>
            </form>
        </>
    );
};

export default EditReview;