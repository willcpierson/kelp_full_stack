import { useEffect } from "react";
import { useLocation } from "react-router-dom";


const EditReview = (props) => {

    const location = useLocation();

    useEffect(() => {
        console.log(location)
    })

    return (
        <> 
            <p>Hello from Edit Review</p>
            <p>Business ID: {location.state.businessId}</p>
            <p>Review ID: {location.state.reviewId}</p>
            <input type="textarea" placeholder="Updated review goes here"/>
        </>
    );
};

export default EditReview;