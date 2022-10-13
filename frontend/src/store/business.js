// Don't need BusinessReducer YET, until I want to ADD businesses (if applicable) // LIAR
//Simply add fetches for the moment
//Think about how searchParams will affect searches in the future;
import csrfFetch from "./csrf";

export const RECEIVE_BUSINESSES = 'businesses/RECEIVE_BUSINESSES'

export const receiveBusinesses = (businesses) => {
    return {
        type: RECEIVE_BUSINESSES,
        businesses
    }
}

export const fetchBusinesses = () => async dispatch => {
    console.log('hello catching businesses')
    let res = await csrfFetch('/api/businesses')
    let data = await res.json()
    console.log(data)
    
    dispatch(receiveBusinesses(data))
}

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