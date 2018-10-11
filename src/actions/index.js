import types from './types';
import axios from 'axios';


export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            // console.log('Sign Up Response:', resp);
            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGN_UP
            })

        } catch (error) {
            // console.log('Sign Up Error:', error.message)
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating account'
            })
        }
    }
}

//User Sign Up Info: {email: "mia@test.com", password: "mia", confirmPassword: "mia"}

export const signIn = userInfo => async dispatch => {
    try {
        const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo);
        // console.log('Sign In Response:', resp);
        localStorage.setItem('token', resp.data.token);

        dispatch({
            type: types.SIGN_IN
        })

    } catch (error) {
        // console.log('Sign In Error:', error.message)
        dispatch({
            type: types.SIGN_IN_ERROR,
            error: 'Invalid Email and/or Password'
        })
    }
}

export const signOut = () => {
    localStorage.removeItem('token');
    return {
        type: types.SIGN_OUT
    };
}