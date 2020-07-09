import {
  LOGOUT,
  SIGN_IN_GOOGLE,
  SIGN_IN_FB,
  SIGN_IN_FAIL,
  SHOW_MODAL,
  CLOSE_MODAL,
  USER_LOADED,
  SHOW_ADD_TEMPLATE_MODAL,
  CLOSE_ADD_TEMPLATE_MODAL,
} from '../types';

export default (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        token: localStorage.getItem('token'),
        isSubscribed: localStorage.getItem('isSubscribed'),
        role: localStorage.getItem('role'),
        loading: false,
        user: action.payload,
        error: null,
      };

    case SIGN_IN_GOOGLE:
    case SIGN_IN_FB:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('isSubscribed', action.payload.isSubscribed);
      localStorage.setItem('role', action.payload.role);
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        auth_modal_visible: false,
        isSubscribed: action.payload.isSubscribed,
        role: action.payload.role,
        user: action.payload.user,
        token: action.payload.token,
      };

    case SHOW_MODAL:
      return {
        ...state,
        auth_modal_visible: true,
      };

    case SHOW_ADD_TEMPLATE_MODAL:
      return {
        ...state,
        isTemplateModalVisible: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        auth_modal_visible: false,
      };

    case CLOSE_ADD_TEMPLATE_MODAL:
      return {
        ...state,
        isTemplateModalVisible: false,
      };

    case SIGN_IN_FAIL:
      localStorage.removeItem('token');
      localStorage.removeItem('isSubscribed');
      localStorage.removeItem('role');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('isSubscribed');
      localStorage.removeItem('role');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
