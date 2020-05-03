import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import couponContext from './couponContext';
import couponReducer from './couponReducer';
import {
  CREATE_COUPON,
  EDIT_COUPON,
  DELETE_COUPON,
  CLEAR_CURRENT_COUPON,
  SET_CURRENT_COUPON,
} from '../types';

const CouponState = (props) => {
  const initialState = {
    coupons: [],
    isLoading: false,
    current: null,
  };

  const [state, dispatch] = useReducer(couponReducer, initialState);

  const createCoupon = (coupon) => {
    coupon.id = uuidv4();
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
