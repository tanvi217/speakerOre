import React, { useReducer } from 'react';
import EventContext from './eventContext';
import eventReducer from './eventReducer';
import moment from 'moment';
import axios from 'axios';

import {
  CREATE_EVENT,
  SET_CURRENT_EVENT,
  CLEAR_CURRENT_EVENT,
  SHOW_CHANGE_MODAL,
  CLOSE_CHANGE_MODAL,
  GET_ALL_EVENTS,
  GET_MY_EVENTS,
  GET_BOOKMARKED_EVENTS,
  SET_LOADING,
  GET_SPECIFIC_EVENT,
  EVENT_SEARCH,
} from '../types';

const config = {
  headers: {
    'Content-type': 'application/json',
  },
};

const EventState = (props) => {
  const initialState = {
    events: [],
    myEvents: [],
    bookmarkedEvents: [],
    archives: [
      {
        id: 1,
        name: 'Holi Party',
        about:
          'Tomorrowland takes place at recreation area "De Schorre" in Boom, Belgium. The town of Boom is situated between Antwerp & Brussels.  ',
        street: '4/2 Kilpauk',
        city: 'Chennai',
        country: 'India',
        website: 'www.tomorrowland.com',
        email: 'yolo@gmail.com',
        phone: '91-1234567890',
        description:
          "Tomorrowland is a Belgian electronic dance music festival held in Boom, Belgium. Tomorrowland was first held in 2005 and has since become one of the world's largest and most notable music festivals.[2] It now stretches over 2 weekends and it usually sells out in minutes.",

        is_visible: 'true',
        categories: ['music', 'festival'],
        tags: ['concert', 'fun'],
        start_date: moment('2018-05-18T04:00:00.000Z'),
        end_date: moment('2018-05-18T04:00:00.000Z'),
        status: 'pending',
      },
      {
        id: 2,
        name: 'Tomorrowland',
        about:
          'Tomorrowland takes place at recreation area "De Schorre" in Boom, Belgium. The town of Boom is situated between Antwerp & Brussels.  ',
        street: '4/2 Kilpauk',
        city: 'Chennai',
        country: 'India',
        website: 'tomorrowland.com',
        email: 'yolo@gmail.com',
        phone: '91-1234567890',
        description:
          "Tomorrowland is a Belgian electronic dance music festival held in Boom, Belgium. Tomorrowland was first held in 2005 and has since become one of the world's largest and most notable music festivals.[2] It now stretches over 2 weekends and it usually sells out in minutes.",

        is_visible: 'true',
        categories: ['music', 'festival'],
        tags: ['concert', 'belgium'],
        start_date: moment('2018-05-18T04:00:00.000Z'),
        end_date: moment('2018-05-18T04:00:00.000Z'),
        status: 'declined',
      },
    ],
    event: {},
    current: null,
    currentEventId: null,
    searchText: null,
    isLoading: true,
    isVisible: false,
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  const getEvents = async () => {
    setLoading();
    const response = await axios.get('api/events/all', config);
    console.log(response);
    dispatch({ type: GET_ALL_EVENTS, payload: response.data });
  };

  const get10Events = async () => {
    setLoading();
    const response = await axios.get('api/events/all', config);
    dispatch({ type: GET_ALL_EVENTS, payload: response.data });
  };

  const getMyEvents = async () => {
    setLoading();
    const response = await axios.get('api/events', config);
    dispatch({ type: GET_MY_EVENTS, payload: response.data });
  };

  const getSearchEvents = async (query) => {
    setLoading();
    const response = await axios.get(
      `api/events/search?$search=${query}`,
      config
    );
    console.log(response.data);
    dispatch({ type: EVENT_SEARCH, payload: response.data });
  };

  const getBookmarkedEvents = async () => {
    setLoading();
    const response = await axios.get('api/events/bookmark', config);
    dispatch({ type: GET_BOOKMARKED_EVENTS, payload: response.data });
  };

  const postBookmarkEvent = async (id) => {
    try {
      await axios.post(`/api/events/bookmark/${id}`, config);
    } catch (err) {
      console.log(err);
    }
  };

  const getSpecificEvent = async (id) => {
    try {
      setLoading();
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + localStorage.getItem('token');
      const response = await axios.get(`/api/events/${id}`, config);
      dispatch({ type: GET_SPECIFIC_EVENT, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const setCurrent = async (id) => {
    try {
      axios.defaults.headers.common['Authorization'] =
        'Bearer ' + localStorage.getItem('token');
      const response = await axios.get(`/api/events/${id}`, config);
      console.log(response.data);
      dispatch({
        type: SET_CURRENT_EVENT,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteBookmarkEvent = async (id) => {
    try {
      await axios.delete(`/api/events/bookmark/${id}`, config);
    } catch (err) {
      console.log(err);
    }
  };

  const createEvent = async (formData) => {
    try {
      const res = await axios.post('/api/events', formData, config);

      console.log(res);

      dispatch({
        type: CREATE_EVENT,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEvent = async (id) => {
    try {
      const res = await axios.delete(`/api/events/${id}`, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const editEvent = async (id, formData) => {
    try {
      const res = await axios.put(`/api/events/${id}`, formData, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_EVENT });
  };

  const showChangeModal = () => {
    dispatch({ type: SHOW_CHANGE_MODAL });
  };

  const closeChangeModal = () => {
    dispatch({ type: CLOSE_CHANGE_MODAL });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        event: state.event,
        myEvents: state.myEvents,
        bookmarkedEvents: state.bookmarkedEvents,
        current: state.current,
        archives: state.archives,
        isLoading: state.isLoading,
        isVisible: state.isVisible,
        currentEventId: state.currentEventId,
        createEvent,
        editEvent,
        deleteEvent,
        clearCurrent,
        setCurrent,
        showChangeModal,
        closeChangeModal,
        getEvents,
        getMyEvents,
        getBookmarkedEvents,
        postBookmarkEvent,
        deleteBookmarkEvent,
        getSpecificEvent,
        getSearchEvents,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
