import {
  CREATE_COUPON,
  EDIT_COUPON,
  DELETE_COUPON,
  CLEAR_CURRENT_COUPON,
  SET_CURRENT_COUPON,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_COUPON:
      return {
        ...state,
        coupons: [...state.coupons, action.payload],
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
    default:
      return state;
  }
};
