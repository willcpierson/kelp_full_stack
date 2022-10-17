import csrfFetch from "./csrf";

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'

export const receiveReview = (review) => {
    return {
        type: RECEIVE_REVIEW,
        review
    }
}

export const getReviews = ({reviews}) => reviews ? Object.values(reviews) : []

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



const reviewReducer = (state = {}, action) => {
    let prevState = {...state}
    switch (action.type) {
        case RECEIVE_REVIEW:
            prevState[action.review.id] = action.review
            return prevState
        default:
            return state
    }
}

export default reviewReducer