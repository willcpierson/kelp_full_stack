import { receiveBusiness } from "./businesses";
import csrfFetch from "./csrf";

export const RECEIVE_USERS = 'users/RECEIVE_USERS'
export const RECEIVE_USER = 'users/RECEIVE_USER'

export const receiveUsers = (users) => {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export const receiveUser = (user) => {
    return {
        type: RECEIVE_USER,
        user
    }
}

export const getUsers = ({users}) => users ? Object.values(users) : []

export const getUser = (userId) => ({users}) => users ? users[userId] : null

export const fetchUsers = () => async dispatch => {
    const res = await csrfFetch(`/api/users`)
    const data = await res.json()
    dispatch(receiveUsers(data.users))
}

export const fetchUser = (userId) => async dispatch => {
    const res = await csrfFetch(`/api/users/${userId}`)
    const data = await res.json()
    dispatch(receiveUser(data))
}

const usersReducer = (state = {}, action) => {
    let prevState = {...state}
    switch (action.type) {
        case RECEIVE_USERS:
            return action.users
        case RECEIVE_USER:
            prevState[action.user.id] = action.user // CURRENTLY EDITS USERS, DONT USE
            return prevState
        default:
            return state
    }
}

export default usersReducer