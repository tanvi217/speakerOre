import { SHOW_FILTER_DRAWER, CLOSE_FILTER_DRAWER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SHOW_FILTER_DRAWER:
      return {
        ...state,
        isDrawerVisible: true,
      };

    case CLOSE_FILTER_DRAWER:
      return {
        ...state,
        isDrawerVisible: false,
      };

    default:
      return state;
  }
};
