import api from '../../utils/api/apiRequest';
import { PAYMENT_SUCCESS, PAYMENT_START, PAYMENT_ERROR } from '../types';
import action from './action';

const token = localStorage.getItem("token");

export const payment = (cartItems) => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const checkout = {
        "userId": userId,
        "cartItems": cartItems
        }
    return  (dispatch) => {
        dispatch(action(PAYMENT_START, true));
        api.post('/payment', {checkout
        },{
            headers: {
            'Authorization': `Bearer ${token}`,
            },
        })
            .then((response) => {
                dispatch(action(PAYMENT_SUCCESS, response))
                dispatch(action(PAYMENT_START, false));
            if (response.data.url) {
                window.location.href = response.data.url;
            }
            })
            .catch((error) => {
                dispatch(action(PAYMENT_ERROR, error));
                dispatch(action(PAYMENT_START, false));
            });
    }
}