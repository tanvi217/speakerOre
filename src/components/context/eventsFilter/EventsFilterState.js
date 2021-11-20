import React, { useReducer } from 'react';

import axiosInstance from '../../utils/axiosInstance';
import eventsFilterReducer from '../eventsFilter/eventsFilterReducer';
import eventsFilterContext from '../eventsFilter/eventsFilterContext';

import {
  SHOW_FILTER_DRAWER,
  CLOSE_FILTER_DRAWER,
  FILTER_EVENTS,
} from '../types';

const EventsFilterState = (props) => {
  const initialState = {
    categories: ['Food', 'Health', 'Film', 'Self-help'],
    locations: ['Chennai', 'Kolkata', 'Delhi', 'Mumbai'],
    filteredEvents: '',
    filtered_category: [],
    filtered_location: [],
    filterStartDate: '',
    filterEndDate: '',
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

  const getEventsByFilter = async (startDate, endDate) => {
    try {
      const res = await axiosInstance.get(
        `/api/events/all?end_date=${endDate}`
      );
      dispatch({ type: FILTER_EVENTS, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <eventsFilterContext.Provider
        value={{
          categories: state.categories,
          locations: state.locations,
          filterStartDate: state.filterStartDate,
          filterEndDate: state.filterEndDate,
          isDrawerVisible: state.isDrawerVisible,
          isMember: state.isMember,
          filteredEvents: state.filteredEvents,
          show_drawer,
          close_drawer,
          getEventsByFilter,
        }}
      >
        {props.children}
      </eventsFilterContext.Provider>
    </div>
  );
};

export default EventsFilterState;
