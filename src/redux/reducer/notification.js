import { VIEW_NOTIFICATION_START, VIEW_NOTIFICATION_SUCCESS, VIEW_NOTIFICATION_ERROR} from '../types';

const notificationState = {
    notificationStart: false,
	notificationSuccess: null,
    notificationError: null,
};

const notificationReducer = (state = notificationState, { type, payload }) => {
	switch (type) {
		case VIEW_NOTIFICATION_START:
			return {
				...state,
				notificationStart: payload,
			};
        case VIEW_NOTIFICATION_SUCCESS:
            return {
                ...state,
                notificationSuccess: payload,
            };
        case VIEW_NOTIFICATION_ERROR:
            return {
                ...state,
                notificationError: payload,
            };
		default:
			return state;
	}
};

export default notificationReducer;