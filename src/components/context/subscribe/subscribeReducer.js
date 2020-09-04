import {
  CREATE_SUBSCRIPTION_PLAN,
  EDIT_SUBSCRIPTION_PLAN,
  DELETE_SUBSCRIPTION_PLAN,
  CLEAR_CURRENT_SUBSCRIPTION_PLAN,
  SET_CURRENT_SUBSCRIPTION_PLAN,
  GET_SUBSCRIPTION_PLANS,
  GET_SPECIFIC_SUBSCRIPTION_PLAN,
  SET_PLAN_LOADING,
  GET_UPDATED_PRICE,
  CLEAR_COUPON_ERROR,
  COUPON_ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_SUBSCRIPTION_PLANS:
      return {
        ...state,
        plans: action.payload,
        isLoading: false,
      };
    case SET_PLAN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SPECIFIC_SUBSCRIPTION_PLAN:
      return {
        ...state,
        isLoading: false,
        plan: action.payload,
        amount: action.payload.price,
      };
    case CREATE_SUBSCRIPTION_PLAN:
      return {
        ...state,
        plans: [...state.plans, action.payload],
      };
    case SET_CURRENT_SUBSCRIPTION_PLAN:
      return {
        ...state,
        current: action.payload,
      };
    case EDIT_SUBSCRIPTION_PLAN:
      return {
        ...state,
        plans: state.plans.map((plan) =>
          plan.id === action.payload.id ? action.payload : plan
        ),
      };
    case DELETE_SUBSCRIPTION_PLAN:
      return {
        ...state,
        plans: state.plans.filter((plan) => plan.id !== action.payload),
      };
    case CLEAR_CURRENT_SUBSCRIPTION_PLAN:
      return {
        ...state,
        current: null,
      };
    case GET_UPDATED_PRICE:
      return {
        ...state,
        amount: action.payload,
        isLoading: false,
      };
    case COUPON_ERROR:
      return {
        ...state,
        isLoading: false,
        couponError: 'Invalid coupon',
      };
    case CLEAR_COUPON_ERROR:
      return {
        ...state,
        couponError: null,
      };
    default:
      return state;
  }
};
