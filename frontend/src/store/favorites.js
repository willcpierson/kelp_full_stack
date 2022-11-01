import csrfFetch from "./csrf";

export const RECEIVE_FAVORITES = '/favorites/RECEIVE_FAVORITES'

export const receiveFavorites = (favorites) => {
    return {
        type: RECEIVE_FAVORITES,
        favorites
    };
};

export const getFavorites = ({favorites}) => favorites ? Object.values(favorites) : []

export const fetchFavorites = () => async dispatch => {
    console.log('catching all favorites...')
    const res = await csrfFetch('/api/reviews')
    const data = await res.json()
    dispatch(receiveFavorites(data.favorites))
}

const favoritesReducer = ( state = {}, action ) => {
    let prevState = {...state}
    switch (action.type) {
        case RECEIVE_FAVORITES:
            if (action.favorites) {
                return action.favorites
            } else {
                return prevState;
            };
        default:
            return prevState;
    };
};

export default favoritesReducer;