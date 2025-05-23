import api from '@/config/api';
import * as types from './ActionType';

export const getAssetById = ({assetId, jwt}) => async (dispatch) => {
   dispatch({ type: types.GET_ASSET_REQUEST});

   try {
     const response = await api.get(`/api/asset/${assetId}`, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
     });

     dispatch({
       type: types.GET_ASSET_SUCCESS,
       payload: response.data,
     });
     console.log("get asset by id", response.data);
   } catch (error) {
      dispatch({
        type: types.GET_ASSET_FAILURE,
        payload: error.message,
      });
   }

};

export const getAssetDetails = ({ coinId, jwt}) => async (dispatch) => {
    dispatch({ type: types.GET_ASSET_DETAILS_REQUEST});

    try {
        const response = await api.get(`/api/asset/coins/${coinId}/user`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
         },
        });
        dispatch({
            type: types.GET_ASSET_DETAILS_SUCCESS,
            payload: response.data,
        });
        console.log("asset details ----", response.data);
    } catch (error) {
        console.log("asset details -----", error);
        dispatch({
            type: types.GET_ASSET_DETAILS_FAILURE,
            payload: error.message,
        });
    }
};


export const getUserAssets = ({jwt}) => async (dispatch) => {
    dispatch({ type: types.GET_USER_ASSETS_REQUEST});

    try {
        const response = await api.get("/api/asset", {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        dispatch({
            type: types.GET_USER_ASSETS_SUCCESS,
            payload: response.data,
        });
        console.log("user assets----", response.data);
    } catch (error) {
        console.log("user assets -----", error.response?.data);
        dispatch({
            type: types.GET_USER_ASSETS_FAILURE,
            error: error.message,
        });
    }
};