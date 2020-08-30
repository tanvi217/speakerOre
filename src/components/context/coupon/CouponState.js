import React, { useReducer } from 'react';
import couponContext from './couponContext';
import couponReducer from './couponReducer';
import {
  GET_ALL_COUPONS,
  CREATE_COUPON,
  EDIT_COUPON,
  DELETE_COUPON,
  CLEAR_CURRENT_COUPON,
  SET_CURRENT_COUPON,
  COUPON_LOADING,
} from '../types';
import axios from 'axios';

const config = {
  headers: {
    'Content-type': 'application/json',
  },
};

const CouponState = (props) => {
  const initialState = {
    coupons: [],
    isLoading: false,
    current: null,
  };

  const [state, dispatch] = useReducer(couponReducer, initialState);

  const setLoading = () => {
    dispatch({ type: COUPON_LOADING });
  };

  const getCoupons = async () => {
    setLoading();
    const response = await axios.get('api/subscription/coupon', config);
    console.log(response.data);
    dispatch({ type: GET_ALL_COUPONS, payload: response.data });
  };

  const createCoupon = (coupon) => {
    dispatch({ type: CREATE_COUPON, payload: coupon });
  };

  const deleteCoupon = (id) => {
    dispatch({ type: DELETE_COUPON, payload: id });
  };

  const editCoupon = (coupon) => {
    dispatch({ type: EDIT_COUPON, payload: coupon });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_COUPON });
  };

  const setCurrent = (coupon) => {
    dispatch({ type: SET_CURRENT_COUPON, payload: coupon });
  };

  return (
    <couponContext.Provider
      value={{
        coupons: state.coupons,
        isLoading: state.isLoading,
        current: state.current,
        getCoupons,
        createCoupon,
        deleteCoupon,
        editCoupon,
        clearCurrent,
        setCurrent,
      }}
    >
      {props.children}
    </couponContext.Provider>
  );
};

export default CouponState;
