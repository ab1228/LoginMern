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