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
        token: action.payload.getIdToken(),
        loading: false,
        user: action.payload,
        error: null,
      };
    case SIGN_IN_GOOGLE:
    case SIGN_IN_FB:
      // localStorage.setItem('token', action.payload.credential.idToken);
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.credential.idToken,
        loading: false,
        user: action.payload.user,
        error: null,
        auth_modal_visible: false,
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
      // localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      // localStorage.removeItem('token');
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
