import React, { useReducer } from 'react';
import couponContext from './couponContext';
import couponReducer from './couponReducer';

const CouponState = (props) => {
  const initialState = {
    coupons: [],
    isLoading: false,
  };

  const [state] = useReducer(couponReducer, initialState);

  return (
    <couponContext.Provider
      value={{
        plans: state.coupons,
        isLoading: state.isLoading,
      }}
    >
      {props.children}
    </couponContext.Provider>
  );
};

export default CouponState;
