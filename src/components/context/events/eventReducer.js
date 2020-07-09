import {
  CREATE_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  SET_CURRENT_EVENT,
  CLEAR_CURRENT_EVENT,
  SHOW_CHANGE_MODAL,
  CLOSE_CHANGE_MODAL,
  GET_ALL_EVENTS,
  GET_MY_EVENTS,
  GET_BOOKMARKED_EVENTS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MY_EVENTS:
      return {
        ...state,
        myEvents: action.payload,
      };

    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case GET_BOOKMARKED_EVENTS:
      return {
        ...state,
        bookmarkedEvents: action.payload,
      };

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
    case SHOW_CHANGE_MODAL:
      return {
        ...state,
        isVisible: true,
      };
    case CLOSE_CHANGE_MODAL:
      return {
        ...state,
        isVisible: false,
      };
    default:
      return state;
  }
};
