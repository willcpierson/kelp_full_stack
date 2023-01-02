import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateReview } from "../../store/reviews";

// onClick={(e) => dispatch(updateReview(review))} key={review.id}

const EditReview = (props) => {
    const dispatch = useDispatch();
    const location = useLocation();
    const [reviewBody, setReviewBody] = useState(location.state.review.body);
    useEffect(() => {
        console.log(location)
    }, []);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        location.state.review.body = reviewBody;
        dispatch(updateReview(location.state.review));
    }

    return (
        <> 
            <p>Hello from Edit Review</p>
            <form action="" onSubmit={handleSubmit}>
                <input type="textarea" value={reviewBody} onChange={(e) => setReviewBody(e.target.value)}/>
                <input type="submit" value='Update Review'/>
            </form>
        </>
    );
};

export default EditReview;