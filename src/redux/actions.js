import sessionApi from '../API/sessionApi';

export function loginSuccess() {
    return { type: 'LOGIN_USER' }
}

export const userLoginFetch = user => {
    console.log(user);
    return dispatch => {
        return sessionApi.login(user).then(response => {
            sessionStorage.setItem('jwt', response.jwt);
            dispatch(loginSuccess());
        }).catch(error => {
            throw (error);
        });
    }
}