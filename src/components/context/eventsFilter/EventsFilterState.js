import React, { useReducer } from 'react';
import eventsFilterReducer from '../eventsFilter/eventsFilterReducer';
import eventsFilterContext from '../eventsFilter/eventsFilterContext';

import { SHOW_FILTER_DRAWER, CLOSE_FILTER_DRAWER } from '../types';

const EventsFilterState = (props) => {
  const initialState = {
    categories: ['Food', 'Health', 'Film', 'Self-help'],
    locations: ['Chennai', 'Kolkata', 'Delhi', 'Mumbai'],
    filtered_category: [],
    filtered_location: [],
    filtered_state_date: '',
    filtered_end_date: '',
    isDrawerVisible: false,
    isMember: true,
  };

  const [state, dispatch] = useReducer(eventsFilterReducer, initialState);

  const show_drawer = () => {
    dispatch({ type: SHOW_FILTER_DRAWER });
  };

  const close_drawer = () => {
    dispatch({ type: CLOSE_FILTER_DRAWER });
  };

  return (
    <div>
      <eventsFilterContext.Provider
        value={{
          categories: state.categories,
          locations: state.locations,
          isDrawerVisible: state.isDrawerVisible,
          isMember: state.isMember,
          show_drawer,
          close_drawer,
        }}
      >
        {props.children}
      </eventsFilterContext.Provider>
    </div>
  );
};

export default EventsFilterState;
