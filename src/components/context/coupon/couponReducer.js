import {
  GET_ALL_COUPONS,
  CREATE_COUPON,
  EDIT_COUPON,
  DELETE_COUPON,
  CLEAR_CURRENT_COUPON,
  SET_CURRENT_COUPON,
  COUPON_LOADING,
  CREATE_COUPON_FAIL,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ALL_COUPONS:
      return {
        ...state,
        coupons: action.payload,
        isLoading: false,
      };
    case CREATE_COUPON:
      return {
        ...state,
        coupons: [...state.coupons, action.payload],
        couponCreationError: null,
      };
    case CREATE_COUPON_FAIL:
      return {
        ...state,
        couponCreationError: action.payload,
      };
    case EDIT_COUPON:
      return {
        ...state,
        coupons: state.coupons.map((coupon) =>
          coupon.id === action.payload.id ? action.payload : coupon
        ),
      };
    case DELETE_COUPON:
      return {
        ...state,
        coupons: state.coupons.filter((coupon) => coupon.id !== action.payload),
      };
    case CLEAR_CURRENT_COUPON:
      return {
        ...state,
        current: null,
      };
    case SET_CURRENT_COUPON:
      return {
        ...state,
        current: action.payload,
      };
    case COUPON_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
