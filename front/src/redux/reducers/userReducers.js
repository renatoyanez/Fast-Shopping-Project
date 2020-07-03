import { FETCH_USER, USER_LOGOUT } from '../utils/constants'

const initialState = {
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER: 
            return Object.assign({}, state, { user: action.user })
        case USER_LOGOUT:
            return Object.assign({}, state, { user: {} }); 
        default:
            return state;
    }
}