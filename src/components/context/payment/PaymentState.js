import React, { useReducer } from 'react';
import paymentContext from './paymentContext';
import paymentReducer from './paymentReducer';
import { PAYMENT_ERROR } from '../types';
import axiosInstance from '../../utils/axiosInstance';

const config = {
  headers: {
    'Content-type': 'application/json',
  },
};

const PaymentState = (props) => {
  const initialState = {
    paymentError: null,
  };

  const [state, dispatch] = useReducer(paymentReducer, initialState);

  const startPayment = async (payment_details) => {
    try {
      const res = await axiosInstance.post('api/payment', {
        razorpay_payment_id: payment_details.razorpay_payment_id,
        razorpay_order_id: payment_details.razorpay_order_id,
        razorpay_signature: payment_details.razorpay_signature,
      });
    } catch (err) {
      dispatch({ type: PAYMENT_ERROR, payload: 'PAYMENT FAIL' });
    }
  };

  const verifyPayment = async () => {
    try {
      const res = await axiosInstance.get('/api/payment', config);
    } catch (err) {
      dispatch({ type: PAYMENT_ERROR, payload: 'PAYMENT FAIL' });
    }
  };

  return (
    <paymentContext.Provider
      value={{ paymentError: state.paymentError, startPayment, verifyPayment }}
    >
      {props.children}
    </paymentContext.Provider>
  );
};

export default PaymentState;
