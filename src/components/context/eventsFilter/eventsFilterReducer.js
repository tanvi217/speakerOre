import {
  SHOW_FILTER_DRAWER,
  CLOSE_FILTER_DRAWER,
  FILTER_EVENTS,
} from '../types';

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

    case FILTER_EVENTS:
      return {
        ...state,
        filteredEvents: action.payload,
      };

    default:
      return state;
  }
};
