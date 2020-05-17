
const initialState = {
    session: !!sessionStorage.jwt
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_USER':
            return { ...state, session: action.payload }
        default:
            return state;
    }
}