// Don't need BusinessReducer YET, until I want to ADD businesses (if applicable) // LIAR
//Simply add fetches for the moment
//Think about how searchParams will affect searches in the future;
import { json } from "react-router-dom";
import csrfFetch from "./csrf";

export const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES'
export const RECEIVE_BUSINESS = 'businesses/RECEIVE_BUSINESS'

export const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

export const receiveBusiness = (businessId) => {
    return {
        type: RECEIVE_BUSINESS,
        businessId
    };
};

export const fetchBusinesses = () => async dispatch => {
    console.log('hello catching businesses')
    let res = await csrfFetch('/api/businesses')
    let data = await res.json()
    console.log(data)
    
    dispatch(receiveBusinesses(data))
}

export const fetchSpecificBusinesses = (businessType) => async dispatch => {
    let res = await csrfFetch(`/api/businesses/category/${businessType}`) // ADD QUERY HERE (food key is true?)
    let data = await res.json()
    dispatch(receiveBusinesses(data))
}

export const fetchBusiness = (businessId) => async dispatch => {
    let res = await csrfFetch(`/api/businesses/${businessId}`)
    let data = await res.json()
    dispatch(receiveBusiness(data))
}

export const getSpecificBusinesses = (type) => ( { business } ) => business ? Object.values(business) : []

export const getBusinesses = ({ business }) => business ? Object.values(business) : []

const businessReducer = (state = {}, action ) => {
    console.log('reducer here!')
    let prevState = {...state}
    switch (action.type) {
        case RECEIVE_BUSINESSES:
            console.log('reducer hits!')
            console.log(action.businesses)
            console.log(state)
            return action.businesses
        default:
            return state
    }
} 

export default businessReducer