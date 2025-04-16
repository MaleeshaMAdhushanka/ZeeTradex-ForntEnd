import api from '@/config/api';
import * as types from './ActionType';

export const getUserWatchlist = (jwt) => async (dispatch) => {
   dispatch({ type: types.GET_USER_WATCHLIST_REQUEST});

   try {
        const response = await api.get('/api/watchlist/user', {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
            
        dispatch({
             type: types.GET_USER_WATCHLIST_SUCCESS,
             payload: response.data,
        });
      console.log("get user watchlist", response.data);
   } catch (error) {
    console.log("get user watchlist error", error);
    dispatch({
        type: types.GET_USER_WATCHLIST_FAILURE,
        payload: error.message,
    });
    
   }

};

export const addItemToWatchlist = ({coinId, jwt}) => async (dispatch) => {
    dispatch({ type: types.ADD_COIN_TO_WATCHLIST_REQUEST});

    try {
        const response = await api.patch(`/api/watchlist/add/coin/${coinId }`,{}, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });

        dispatch({
            type: types.ADD_COIN_TO_WATCHLIST_SUCCESS,
            payload: response.data,
        });

         console.log("add item to watchlist", response.data);

    } catch (error) {
        console.log(" error", error.response.data);
        dispatch({
            type: types.ADD_COIN_TO_WATCHLIST_FAILURE,
            payload: error.message,
        });
    }
};