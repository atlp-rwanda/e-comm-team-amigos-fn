import {
  EDIT_USER_PROFILE_ERROR,
  EDIT_USER_PROFILE_START,
  EDIT_USER_PROFILE_SUCCESS,
  VIEW_USER_PROFILE_START,
  VIEW_USER_PROFILE_SUCCESS,
} from "../types";


export const viewUserProfile = () => {
  const authToken = localStorage.getItem("token");
  return async (dispatch) => {
    dispatch({
      type: VIEW_USER_PROFILE_START,
      payload: true,
    });
    const apiUrl = 'https://e-comm-team-amigos-bn-project.onrender.com/user/profile'; 
  fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json', 
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Request failed.');
      }
      return response.json();
    })
    .then(data => {
      dispatch({
             type: VIEW_USER_PROFILE_SUCCESS,
              payload: data.profile,
          });
    })
    .catch(error => {
      console.error(error);
    });
  };
};

export const editUserProfile = (updatedProfile) => {

const authToken = localStorage.getItem("token");
return async (dispatch) => {
  dispatch({
    type: EDIT_USER_PROFILE_START,
    payload: true,
  });
  const apiUrl = 'https://e-comm-team-amigos-bn-project.onrender.com/user/updateMe'; 
  try {
    const response = await fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(updatedProfile),
    });
    if (!response.ok) {
      throw new Error('Request failed.');
    }

    const data = await response.json();
    if (response.status === 200) {
      dispatch({
        type: EDIT_USER_PROFILE_SUCCESS,
        payload: data,
      });
      dispatch({
        type: EDIT_USER_PROFILE_START,
        payload: true,
      });
      dispatch({
        type: EDIT_USER_PROFILE_START,
        payload: false,
      });
    }
  } catch (error) {
    dispatch({
      type: EDIT_USER_PROFILE_ERROR,
      payload: error.message,
    });
  }
};
};