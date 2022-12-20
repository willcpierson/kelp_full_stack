import csrfFetch from "./csrf";

export const RECEIVE_FAVORITES = '/favorites/RECEIVE_FAVORITES'
export const RECEIVE_FAVORITE = '/favorites/RECEIVE_FAVORITE'
export const REMOVE_FAVORITE = '/favorites/REMOVE_FAVORITE'

export const receiveFavorites = (favorites) => {
    return {
        type: RECEIVE_FAVORITES,
        favorites
    };
};

export const receiveFavorite = (favorite) => {
    return {
        type: RECEIVE_FAVORITE,
        favorite
    }
}

export const removeFavorite = (favoriteId) => {
    return {
        type: REMOVE_FAVORITE,
        favoriteId
    }
}

export const getFavorites = ({favorites}) => favorites ? Object.values(favorites) : [];
export const getFavorite = (favoriteId) => ({favorites}) => favorites ? favorites[favoriteId] : null;

export const fetchFavorites = () => async dispatch => {
    console.log('catching all favorites...');
    const res = await csrfFetch('/api/favorites');
    const data = await res.json();
    dispatch(receiveFavorites(data.favorites));
};

export const createFavorite = (favorite) => async dispatch => {
    console.log('creating favorite...');
    const res = await csrfFetch('/api/favorites', {
        method: 'POST',
        body: JSON.stringify(favorite),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    dispatch(receiveFavorite(data)) // may need singular fetch here
};

export const destroyFavorite = (favoriteId) => async dispatch => {
    console.log('destroying favorite...');
    const res = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: 'DELETE'
    })
    dispatch(removeFavorite(favoriteId))
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
        case RECEIVE_FAVORITE:
            prevState[action.favorite.id] = action.favorite
            return prevState
        case REMOVE_FAVORITE:
            delete prevState[action.favoriteId]
            return prevState
        default:
            return prevState;
    };
};

export default favoritesReducer;