import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const RECEIVE_REVIEWS = 'reviews/RECEIVE_REVIEWS'

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

export const getReviews = ({reviews}) => reviews ? Object.values(reviews) : []

export const fetchReviews = () => async dispatch => { // Pass in the ID of the business
    const res = await csrfFetch(`/api/reviews`)
    const data = await res.json()
    dispatch(receiveReviews(data))
}

export const createReview = (review) => async dispatch => { // Needs user_id and business_id
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



const reviewReducer = (state = {}, action) => {
    let prevState = {...state}
    switch (action.type) {
        case RECEIVE_REVIEW:
            prevState[action.review.id] = action.review
            return prevState
        case RECEIVE_REVIEWS:
            return action.reviews // Need to specify the business its on
        default:
            return state
    }
}

export default reviewReducer