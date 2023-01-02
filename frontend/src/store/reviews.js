import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const receiveReviews = (reviews) => {
    return {
        type: RECEIVE_REVIEWS,
        reviews
    }
}

export const removeReview = (reviewId) => {
    return {
        type: REMOVE_REVIEW,
        reviewId
    }
}



export const getReview = (reviewId) => ({reviews}) => reviews ? reviews[reviewId] : null

export const getReviews = (businessId) => ({reviews}) => {
    if (businessId && reviews) {
        businessId = parseInt(businessId);
        const filteredReviews = Object.values(reviews).filter((review) => review.businessId === businessId);
        return filteredReviews;
    } else {
        return [];
    }
    // return reviews ? Object.values(reviews) : []
};


export const fetchReviews = () => async dispatch => { // Pass in the ID of the business
    const res = await csrfFetch(`/api/reviews`)
    const data = await res.json()
    dispatch(receiveReviews(data.reviews))
}

export const createReview = (review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    dispatch(receiveReview(data))
}

export const destroyReview = (reviewId) => async dispatch => {
    await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })
    dispatch(removeReview(reviewId))
}

export const updateReview = (review) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = res.json()
    dispatch(receiveReview(data))
}

const reviewReducer = (state = {}, action) => {
    let prevState = {...state}
    switch (action.type) {
        case RECEIVE_REVIEW:
            prevState[action.review.id] = action.review
            return prevState
        case RECEIVE_REVIEWS:
            return action.reviews
        case REMOVE_REVIEW:
            delete prevState[action.reviewId]
            return prevState
        default:
            return state
    }
}

export default reviewReducer