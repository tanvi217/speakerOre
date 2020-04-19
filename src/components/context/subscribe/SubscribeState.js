import React, { useReducer } from 'react';
import SubscribeContext from './subscribeContext';
import subscribeReducer from './subscribeReducer';

const SubscribeState = (props) => {
  const initialState = {
    plans: [
      {
        id: 1,
        name: 'Platinum',
        duration: 'Month',
        about: 'Suspendisse quis est Suspendisse kafjlk',
        description: [
          'Suspendisse quis est dignissim',
          'Suspendisse quis ',
          'Suspendisse quis suscipit ',
          'Suspendisse quis est ',
        ],
        amount: 50,
      },
      {
        id: 2,
        name: 'Silver',
        duration: '4 Months',
        about: 'Suspendisse quis est Suspendisse',
        description: [
          'Suspendisse',
          'Suspendisse quis est ',
          'Suspendisse quis est dignissim',
          'Suspendisse dignissim',
        ],
        amount: 15,
      },
      {
        id: 3,
        name: 'Gold',
        duration: 'Year',
        about: 'quis est Suspendisse quis est Suspendisse',
        description: [
          'Suspendisse quis est dignissim',
          'Suspendisse quis ',
          'Suspendisse est dignissim',
          'Suspendisse dignissim',
        ],
        amount: 25,
      },
    ],
    isLoading: false,
  };

  const [state] = useReducer(subscribeReducer, initialState);

  return (
    <SubscribeContext.Provider
      value={{
        plans: state.plans,
        isLoading: state.isLoading,
      }}
    >
      {props.children}
    </SubscribeContext.Provider>
  );
};

export default SubscribeState;
