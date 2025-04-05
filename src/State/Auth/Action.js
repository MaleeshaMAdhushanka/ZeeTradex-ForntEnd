//use axios library to fetching data form the API

import axios from "axios"
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";

//register method

//geting data from the Server
//resgiter eka post method ekak nisa

//send action to the store using dispatch
export const register =(userData) => async(dispatch) =>{

    dispatch({type:REGISTER_REQUEST});
    
    const baseUrl = "http://localhost:8080";

    try {
      const response = await axios.post(`${baseUrl}/signup`, userData);
      const user = response.data;
      console.log(user);

      //register sucess-since we have data

      dispatch({type:REGISTER_SUCCESS, payload:user.jwt})


    } catch (error) {
        dispatch({type:REGISTER_FAILURE, payload:error.response.data.message})
        console.error(error);
    }



}
//login method

export const login =(userData) => async(dispatch) =>{

    dispatch({type:LOGIN_REQUEST})
    
    const baseUrl = "http://localhost:8080/"

    try {
      const response = await axios.post(`${baseUrl}/auth/signin`, userData);
      const user = response.data;
      console.log(user);

      //register sucess-since we have data

      dispatch({type:LOGIN_SUCCESS, payload:user.jwt})


    } catch (error) {
        dispatch({type:LOGIN_FAILURE, payload:error.response.data.message})
        console.error(error);
    }



}

//get user data

export const getUser =(jwt) => async(dispatch) =>{

    dispatch({type:GET_USER_REQUEST})
    
    const baseUrl = "http://localhost:8080/"

    try {
      const response = await axios.get(`${baseUrl}/api/auth/users/profile`,{
        headers:{
            Authorization:`Bearer ${jwt}`
        }
      });
      const user = response.data;
      console.log(user);

      //register sucess-since we have data

      dispatch({type:GET_USER_SUCCESS, payload:user})


    } catch (error) {
        dispatch({type:GET_USER_FAILURE, payload:error.response.data.message})
        console.error(error);
    }



}


