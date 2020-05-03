import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import SubscribeContext from './subscribeContext';
import subscribeReducer from './subscribeReducer';
import {
  CREATE_SUBSCRIPTION_PLAN,
  EDIT_SUBSCRIPTION_PLAN,
  DELETE_SUBSCRIPTION_PLAN,
  CLEAR_CURRENT_SUBSCRIPTION_PLAN,
  SET_CURRENT_SUBSCRIPTION_PLAN,
} from '../types';

const SubscribeState = (props) => {
  const initialState = {
    plans: [
      {
        id: 1,
        name: 'Platinum',
        duration: 'Month',
        about: 'Suspendisse quis est Suspendisse kafjlk',
        description:
          'Suspendisse quis est dignissim, Suspendisse quis, Suspendisse quis suscipit, Suspendisse quis est',
        amount: 50,
      },
      {
        id: 2,
        name: 'Silver',
        duration: '4 Months',
        about: 'Suspendisse quis est Suspendisse',
        description:
          'Suspendisse,Suspendisse quis est,Suspendisse quis est dignissim,Suspendisse dignissim',
        amount: 15,
      },
      {
        id: 3,
        name: 'Gold',
        duration: 'Year',
        about: 'quis est Suspendisse quis est Suspendisse',
        description:
          'Suspendisse quis est dignissim, Suspendisse quis, Suspendisse est dignissim, Suspendisse dignissim',
        amount: 25,
      },
    ],
    isLoading: false,
    current: null,
  };

  const [state, dispatch] = useReducer(subscribeReducer, initialState);

  const createSubscriptionPlan = (subscription) => {
    subscription.id = uuidv4();
    dispatch({ type: CREATE_SUBSCRIPTION_PLAN, payload: subscription });
  };

  const deleteSubscriptionPlan = (id) => {
    dispatch({ type: DELETE_SUBSCRIPTION_PLAN, payload: id });
  };

  const editSubscriptionPlan = (subscription) => {
    dispatch({ type: EDIT_SUBSCRIPTION_PLAN, payload: subscription });
  };

  const setCurrent = (subscription) => {
    dispatch({ type: SET_CURRENT_SUBSCRIPTION_PLAN, payload: subscription });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_SUBSCRIPTION_PLAN });
  };

  return (
    <SubscribeContext.Provider
      value={{
        plans: state.plans,
        isLoading: state.isLoading,
        current: state.current,
        createSubscriptionPlan,
        deleteSubscriptionPlan,
        editSubscriptionPlan,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </SubscribeContext.Provider>
  );
};

export default SubscribeState;
