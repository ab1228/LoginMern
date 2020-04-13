import axios from 'axios';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from './types';

import { returnErrors } from './errorsAction';

/// CHECK TOKEN & LOAD USER
export const loadUser = () => (dispatch, getSate) => {
    //USER LOADING
    dispatch({ type: USER_LOADING });



    axios.get('/api/auth/user', tokenConfig(getSate))
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });


};
/// REGISTER USER

export const register = ({ name, email, password }) => dispatch => {

    //HEADERS
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    /// REQUEST BODY
    const body = JSON.stringify({ name, email, password });
    console.log(body);

    axios.post('/api/users', body, config).then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'));
            dispatch({
                type: REGISTER_FAIL,

            })
        });
};