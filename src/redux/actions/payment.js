import api from '../../utils/api/apiRequest';
import { PAYMENT_SUCCESS, PAYMENT_START, PAYMENT_ERROR } from '../types';
import action from './action';

const order = {
"orderId": "b2fa1453-7595-4a1b-82c7-485b130f52f6",
"orderProducts": [
    {
        "orderId": "b2fa1453-7595-4a1b-82c7-485b130f52f6",
        "productId": "89f84661-d8e5-432d-9167-e7c4cdef456c",
        "name": "T-shirt",
        "images": [
            "https://m.media-amazon.com/images/I/6109kXAZ1XL._UX385_.jpg",
            "https://m.media-amazon.com/images/I/41QYSoOIv8L._AC_SR175,263_QL70_.jpg",
          ],
        "quantity": 2,
        "unitPrice": 5000
    },
]
}

export const payment = () => {
    return  (dispatch) => {
        dispatch(action(PAYMENT_START, true));
        api.post('/payment', {order
        },{
            headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            // 'Authorization': `Bearer ${token}`,
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