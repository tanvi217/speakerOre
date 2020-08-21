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
  GET_SPECIFIC_EVENT,
  SET_LOADING,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_MY_EVENTS:
      return {
        ...state,
        isLoading: false,
        myEvents: action.payload,
      };

    case GET_ALL_EVENTS:
      return {
        ...state,
        isLoading: false,
        events: action.payload,
      };

    case GET_SPECIFIC_EVENT:
      return {
        ...state,
        event: action.payload,
        isLoading: false,
      };

    case GET_BOOKMARKED_EVENTS:
      return {
        ...state,
        isLoading: false,
        bookmarkedEvents: action.payload,
      };

    case CREATE_EVENT:
      return {
        ...state,
        events: [...state.events, action.payload],
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
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
        currentEventId: null,
      };

    case SET_CURRENT_EVENT:
      return {
        ...state,
        current: action.payload,
        currentEventId: action.payload.id,
        isLoading: false,
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
