import React, { useReducer } from 'react';
import axios from 'axios';
import authContext from './authContext';
import authReducer from './authReducer';
import firebase from 'firebase';
import {
  SIGN_IN_FB,
  SIGN_IN_GOOGLE,
  LOGOUT,
  SIGN_IN_FAIL,
  SHOW_MODAL,
  USER_LOADED,
  CLOSE_MODAL,
  SHOW_ADD_TEMPLATE_MODAL,
  CLOSE_ADD_TEMPLATE_MODAL,
} from '../types';
import setAuthToken from '../../utils/setAuthToken';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: 'speakerore-e254d.firebaseapp.com',
  });
}

var provider_google = new firebase.auth.GoogleAuthProvider();
var provider_fb = new firebase.auth.FacebookAuthProvider();

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    isSubscribed: false,
    loading: false,
    user: null,
    error: null,
    role: null,
    auth_modal_visible: false,
    isTemplateModalVisible: false,
    messageTemplates: [
      {
        subject: 'Enquiry about the event',
        body: 'Would like to get the details of the event',
      },
      {
        subject: 'Interested in delivering a talk at the event',
        body: 'Would like to deliver a talk at the event',
      },
    ],
    defaultMessageTemplate: {
      subject: 'Enquiry about the event',
      body: 'Would like to get the details of the event',
    },
    subscription_start_time: '',
    subscription_end_time: '',
    paymentTransaction: [],
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };

  const loadUser = () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        dispatch({ type: USER_LOADED, payload: user });
      }
    });
  };

  const show_modal = () => {
    dispatch({ type: SHOW_MODAL });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const showAddTemplateModal = () => {
    dispatch({ type: SHOW_ADD_TEMPLATE_MODAL });
  };

  const closeAddTemplateModal = () => {
    dispatch({ type: CLOSE_ADD_TEMPLATE_MODAL });
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({ type: LOGOUT });
  };

  const signinGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider_google)
      .then(async function (result) {
        const userCredentials = {
          provider: 'GOOGLE',
          email: result.user.email,
          name: result.user.displayName,
          idToken: result.credential.idToken,
          phone: result.credential.phoneNumber,
        };
        const response = await axios.post(
          '/api/auth/login',
          userCredentials,
          config
        );
        response.data['user'] = result.user;
        console.log(response.data.isSubscribed);
        dispatch({ type: SIGN_IN_GOOGLE, payload: response.data });
      })
      .catch(function (error) {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // var email = error.email;
        // var credential = error.credential;
        dispatch({
          type: SIGN_IN_FAIL,
          payload: error,
        });
      });
  };

  const signinFb = () => {
    firebase
      .auth()
      .signInWithPopup(provider_fb)
      .then(async function (result) {
        console.log(result);
        // Validate with API - no idToken field with fb
        const userCredentials = {
          provider: 'FACEBOOK',
          email: result.user.email,
          name: result.user.displayName,
          idToken: result.credential.idToken,
          phone: result.credential.phoneNumber,
        };
        const response = await axios.post(
          '/api/auth/login',
          userCredentials,
          config
        );
        response.data['user'] = result.user;
        dispatch({ type: SIGN_IN_FB, payload: response.data });
      })
      .catch(function (error) {
        dispatch({
          type: SIGN_IN_FAIL,
          payload: error,
        });
      });
  };

  return (
    <authContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        isSubscribed: state.isSubscribed,
        subject: state.subject,
        messageTemplates: state.messageTemplates,
        defaultMessageTemplate: state.defaultMessageTemplate,
        loading: state.loading,
        user: state.user,
        error: state.error,
        auth_modal_visible: state.auth_modal_visible,
        isTemplateModalVisible: state.isTemplateModalVisible,
        role: state.role,
        subscription_start_time: state.subscription_start_time,
        subscription_end_time: state.subscription_end_time,
        loadUser,
        signinGoogle,
        signinFb,
        logout,
        show_modal,
        closeModal,
        showAddTemplateModal,
        closeAddTemplateModal,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};

export default AuthState;
