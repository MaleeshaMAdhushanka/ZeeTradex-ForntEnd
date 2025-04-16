import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGIN_REQUEST, GET_USER_REQUEST, LOGIN_FAILURE, GET_USER_FAILURE, LOGIN_SUCCESS, GET_USER_SUCCESS, LOGOUT } from "./ActionType";

const initialState = {

    loading:false,
    error:null,
    jwt:null,
    user:null,

};
//that meand it is fetch data from the api
const  authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:  
        case GET_USER_REQUEST: 
            return{...state, loading:true, error:null};
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:      
            return{...state, loading:false, error:null, jwt:action.payload};
            
        case GET_USER_SUCCESS:
            return{...state, user:action.payload, loading:false, error:null};     
        
        case REGISTER_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:     
            return{...state, loading:false, error:action.payload, user:null, jwt:null};
        
        case LOGOUT: 
            return initialState;

        default:
           return state;
    }

};
export default authReducer;