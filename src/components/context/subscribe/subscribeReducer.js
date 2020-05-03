import {
  CREATE_SUBSCRIPTION_PLAN,
  EDIT_SUBSCRIPTION_PLAN,
  DELETE_SUBSCRIPTION_PLAN,
  CLEAR_CURRENT_SUBSCRIPTION_PLAN,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_SUBSCRIPTION_PLAN:
      return {
        ...state,
        plans: [...state.plans, action.payload],
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
    default:
      return state;
  }
};
