import api from '@/config/api';
import * as types from './ActionType';
//get user wallet 
export const getUserWallet = (jwt) => async (dispatch) => {
    dispatch({ type: types.GET_USER_WALLET_REQUEST });

    //ape endpoint eka
    try {
     const response = await api.get("/api/wallet",{
        headers: {
            Authorization: `Bearer ${jwt}`,
       },
    });

    dispatch({ type: types.GET_USER_WALLET_SUCCESS, payload: response.data});
    console.log("user wallet", response.data);

    } catch (error) {
        console.log(error);
        dispatch({ type: types.GET_USER_WALLET_FAILURE, payload: error.message});
    }

  
};

//get wallet transaction
export const getWalletTransaction = ({jwt}) => async (dispatch) => {

    dispatch({ type: types.GET_WALLET_TRANSACTION_REQUEST});

    try {
    const response  = await api.get("/api/transaction", {
        headers: {
            Authorization: `Bearer ${jwt}`,
        },
    });
    dispatch({type: types.GET_WALLET_TRANSACTION_SUCCESS, payload: response.data});
     console.log(response.data);
    } catch (error) {
        console.log(error);
        dispatch({type: types.GET_WALLET_TRANSACTION_FAILURE, payload: error.message});
    }
};

//depo money
//after making payment  this method will get invoked
export const depositMoney = ({jwt, orderId, paymentId, navigate}) => async (dispatch) => {
    dispatch({type: types.DEPOSIT_MONEY_REQUEST});

      console.log("----",orderId, paymentId)
    try {
         const response = await api.put("/api/wallet/deposit", null,{
          params: {
           orderId: orderId,
           paymentId: paymentId,
           
          },
          headers : {
            Authorization: `Bearer ${jwt}`,
          },

         });
         dispatch({type: types.DEPOSIT_MONEY_SUCCESS, payload: response.data,

         });
         navigate("/wallet")
         console.log(response.data);

    } catch (error) {
        console.log(error);
        dispatch({type: types.DEPOSIT_MONEY_FAILURE, payload: error.message,

        });

    }
};

//creating payment link and redirect to  that payment link and make the paymenet
export const paymentHandler = ({jwt, amount, paymentMethod}) => async (dispatch) => {
   dispatch({ type: types.DEPOSIT_MONEY_REQUEST});
   
   try {
    const response = await api.post(
        `/api/payment/${paymentMethod}/amount/${amount}`,
        null,
        {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },

        }
    );
     window.location.href = response.data.payment_url;
    //  dispatch({ type: types.DEPOSIT_MONEY_SUCCESS, payload: response.data});

   } catch (error) {
    console.log(error);
    dispatch({ type: types.DEPOSIT_MONEY_FAILURE, payload: error.message});
   }
};

export const transferMoney =({jwt, walletId, reqData}) => async (dispatch) => {
    dispatch({type: types.TRANSFER_MONEY_REQUEST});

    try {
        const response = await api.put(
            `/api/wallet/${walletId}/transfer`,
            reqData,
            {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            }
        );
        dispatch({type: types.TRANSFER_MONEY_SUCCESS, payload: response.data});

        console.log("transfer money sent",response.data);
    }catch(error){
      dispatch({type: types.TRANSFER_MONEY_FAILURE, payload: error.message});
    }
};