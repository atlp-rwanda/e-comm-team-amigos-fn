

import {LOGIN_FAIL, LOGIN_SUCCESS,LOGIN_START} from "../types";
import action from "./action";

export const login = (email,password) =>{
    return async (dispatch)=>{
      dispatch(action(LOGIN_START, true));
        try{
          const response = await fetch("https://e-comm-team-amigos-bn-project.onrender.com/user/login",{
           method: "POST",
           headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
           },
           body: JSON.stringify({
               email: email,
               password:password
           })
        });
        const result = await response.json();
            localStorage.setItem("token",result.token);
          dispatch(action(LOGIN_SUCCESS,result));
          dispatch(action(LOGIN_START, false));

          }catch(error){
            dispatch(action(LOGIN_FAIL,error.message));
            dispatch(action(LOGIN_START, false));
          }
    };
};