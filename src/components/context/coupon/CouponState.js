import React, { useReducer } from 'react';
import couponContext from './couponContext';
import couponReducer from './couponReducer';
import {
  GET_ALL_COUPONS,
  EDIT_COUPON,
  DELETE_COUPON,
  CLEAR_CURRENT_COUPON,
  SET_CURRENT_COUPON,
  COUPON_LOADING,
  CREATE_COUPON_FAIL,
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
    couponCreationError: null,
  };

  const [state, dispatch] = useReducer(couponReducer, initialState);

  const setLoading = () => {
    dispatch({ type: COUPON_LOADING });
  };

  const getCoupons = async () => {
    try {
      setLoading();
      const response = await axios.get('api/subscription/coupon', config);
      dispatch({ type: GET_ALL_COUPONS, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const createCoupon = async (coupon) => {
    try {
      const formData = {
        coupon: {
          name: coupon['coupon-name'],
          code: coupon['coupon-code'],
          count: coupon['coupon-count'],
          end_date: coupon['end-date'],
          percentage: coupon['percentage-value'],
          price: coupon['amount-value'],
        },
        plans: coupon['coupon-plans'],
      };
      await axios.post('api/subscription/setcoupon', formData, config);
    } catch (err) {
      console.log(err);
      dispatch({ type: CREATE_COUPON_FAIL, payload: 'Coupon creation failed' });
    }
  };

  const deleteCoupon = (id) => {
    dispatch({ type: DELETE_COUPON, payload: id });
  };

  const editCoupon = async (coupon) => {
    try {
      await axios.put(`api/subscription/coupon/${coupon.id}`, coupon, config);
      dispatch({ type: EDIT_COUPON, payload: coupon });
    } catch (err) {
      console.log(err);
    }
  };

  const toggleCouponVisibility = async (id) => {
    try {
      await axios.put(`/api/subscription/coupon/toggle/${id}`);
    } catch (err) {
      console.log(err);
    }
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
        couponCreationError: state.couponCreationError,
        getCoupons,
        createCoupon,
        deleteCoupon,
        editCoupon,
        clearCurrent,
        setCurrent,
        toggleCouponVisibility,
      }}
    >
      {props.children}
    </couponContext.Provider>
  );
};

export default CouponState;
