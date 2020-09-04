import { PAYMENT_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case PAYMENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
