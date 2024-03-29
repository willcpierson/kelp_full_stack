import csrfFetch from "./csrf";

export const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES';
export const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS';

export const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    };
};

export const receiveBusiness = (business) => {
    return {
        type: RECEIVE_BUSINESS,
        business
    };
};

export const fetchBusinesses = () => async dispatch => {
    let res = await csrfFetch('/api/businesses');
    let data = await res.json();
    dispatch(receiveBusinesses(data.businesses));
};

export const fetchSpecificBusinesses = (businessType) => async dispatch => {
    let res = await csrfFetch(`/api/businesses/category/${businessType}`);
    let data = await res.json();
    dispatch(receiveBusinesses(data.businesses));
};

export const fetchBusiness = (businessId) => async dispatch => {
    let res = await csrfFetch(`/api/businesses/${businessId}`);
    let data = await res.json();
    dispatch(receiveBusiness(data));
};

export const getSpecificBusinesses = (type) => ( { businesses } ) => businesses ? Object.values(businesses) : [];

export const getBusinesses = ({ businesses }) => businesses ? Object.values(businesses) : [];

export const getBusiness = (businessId) => ({ businesses }) => businesses ? businesses[businessId] : null; 

export const getFavoriteBusinesses = (favoriteBusinessesIds) => ({ businesses }) => {
    if (businesses) {
      let favoriteBusinesses = [];
      favoriteBusinessesIds.forEach((businessId) => {
        if (businessId) {
            favoriteBusinesses.push(businesses[businessId]);
        };
      });
      return favoriteBusinesses;
    } else {
        return [];
    };
};

const businessReducer = (state = {}, action ) => {
    let prevState = {...state};
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            return {...prevState, [action.business.id]: action.business };
        default:
            return prevState;
    };
};

export default businessReducer;