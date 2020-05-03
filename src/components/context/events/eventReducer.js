import {
  CREATE_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  SET_CURRENT_EVENT,
  CLEAR_CURRENT_EVENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };
    case EDIT_EVENT:
      return {
        ...state,
        events: state.events.map((event) =>
          event.id === action.payload.id ? action.payload : event
        ),
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter((event) => event.id !== action.payload),
      };
    case CLEAR_CURRENT_EVENT:
      return {
        ...state,
        current: null,
      };
    case SET_CURRENT_EVENT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};
