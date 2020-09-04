import React, { useReducer } from 'react';
import axios from 'axios';
import SubscribeContext from './subscribeContext';
import subscribeReducer from './subscribeReducer';
import {
  CREATE_SUBSCRIPTION_PLAN,
  EDIT_SUBSCRIPTION_PLAN,
  DELETE_SUBSCRIPTION_PLAN,
  CLEAR_CURRENT_SUBSCRIPTION_PLAN,
  SET_CURRENT_SUBSCRIPTION_PLAN,
  GET_SUBSCRIPTION_PLANS,
  GET_SPECIFIC_SUBSCRIPTION_PLAN,
  SET_PLAN_LOADING,
  COUPON_ERROR,
  GET_UPDATED_PRICE,
  CLEAR_COUPON_ERROR,
} from '../types';

const config = {
  headers: {
    'Content-type': 'application/json',
  },
};

const SubscribeState = (props) => {
  const initialState = {
    plans: [],
    plan: null,
    isLoading: false,
    current: null,
    amount: null,
    couponError: null,
  };

  const [state, dispatch] = useReducer(subscribeReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_PLAN_LOADING });
  };

  const getSubscriptionPlans = async () => {
    try {
      setLoading();
      const res = await axios.get('/api/subscription', config);
      dispatch({ type: GET_SUBSCRIPTION_PLANS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const getSubscriptionPlan = async (id) => {
    try {
      setLoading();
      const res = await axios.get(`/api/subscription/${id}`, config);
      dispatch({ type: GET_SPECIFIC_SUBSCRIPTION_PLAN, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const createSubscriptionPlan = async (plan) => {
    try {
      console.log(plan);
      const res = await axios.post('/api/subscription', plan, config);
      console.log(res);
      dispatch({ type: CREATE_SUBSCRIPTION_PLAN, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  const getUpdatedPrice = async (id, coupon) => {
    try {
      setLoading();
      clearCouponError();
      const res = await axios.get(
        `/api/subscription/price/?plan=${id}&coupon_code=${coupon}`
      );
      dispatch({ type: GET_UPDATED_PRICE, payload: res.data.price });
    } catch (err) {
      console.log(err);
      dispatch({ type: COUPON_ERROR });
    }
  };

  const clearCouponError = () => {
    dispatch({ type: CLEAR_COUPON_ERROR });
  };

  const deleteSubscriptionPlan = (id) => {
    dispatch({ type: DELETE_SUBSCRIPTION_PLAN, payload: id });
  };

  const editSubscriptionPlan = (subscription) => {
    dispatch({ type: EDIT_SUBSCRIPTION_PLAN, payload: subscription });
  };

  const setCurrent = (subscription) => {
    dispatch({ type: SET_CURRENT_SUBSCRIPTION_PLAN, payload: subscription });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_SUBSCRIPTION_PLAN });
  };

  return (
    <SubscribeContext.Provider
      value={{
        plans: state.plans,
        isLoading: state.isLoading,
        plan: state.plan,
        current: state.current,
        amount: state.amount,
        couponError: state.couponError,
        getSubscriptionPlans,
        getSubscriptionPlan,
        createSubscriptionPlan,
        deleteSubscriptionPlan,
        editSubscriptionPlan,
        setCurrent,
        clearCurrent,
        getUpdatedPrice,
      }}
    >
      {props.children}
    </SubscribeContext.Provider>
  );
};

export default SubscribeState;
