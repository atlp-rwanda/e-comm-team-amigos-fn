import { PAYMENT_SUCCESS, PAYMENT_ERROR, PAYMENT_START} from "../types";

const paymentState = {
    paymentStart: false,
	onPaymentSuccess: null,
    paymentError: null,
};

const paymentReducer = (state = paymentState, { type, payload }) => {
	switch (type) {
		case PAYMENT_START:
			return {
				...state,
				paymentStart: payload,
			};
        case PAYMENT_SUCCESS:
            return {
                ...state,
                onPaymentSuccess: payload,
            };
        case PAYMENT_ERROR:
            return {
                ...state,
                paymentError: payload,
            };
		default:
			return state;
	}
};

export default paymentReducer;