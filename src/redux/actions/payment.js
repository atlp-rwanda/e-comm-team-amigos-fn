import api from '../../utils/api/apiRequest';
import { PAYMENT_SUCCESS, PAYMENT_START, PAYMENT_ERROR } from '../types';
import action from './action';

const order = {
"orderId": "5dfe12f3-f954-48a1-8b91-c9426eaf8720",
"orderProducts": [
    {
        "orderId": "5dfe12f3-f954-48a1-8b91-c9426eaf8720",
        "productId": "ec05a93c-2684-4bdd-b0d3-9939e7f54d72",
        "name": "T-shirt",
        "quantity": 1,
        "unitPrice": 5000
    }
]
}

export const payment = () => {
    return  (dispatch) => {
        dispatch(action(PAYMENT_START, true));
        api.post('/payment', {order
        },{
            headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
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