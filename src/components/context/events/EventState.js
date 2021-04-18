import React, { useReducer } from 'react';
import EventContext from './eventContext';
import eventReducer from './eventReducer';
import moment from 'moment';
import axiosInstance from '../../utils/axiosInstance';

import {
  CREATE_EVENT,
  SET_CURRENT_EVENT,
  CLEAR_CURRENT_EVENT,
  SHOW_CHANGE_MODAL,
  CLOSE_CHANGE_MODAL,
  GET_ALL_EVENTS,
  GET_EVENTS_BY_PAGE,
  GET_MY_EVENTS,
  GET_BOOKMARKED_EVENTS,
  SET_LOADING,
  GET_SPECIFIC_EVENT,
  EVENT_SEARCH,
  GET_ALL_CATEGORIES,
  GET_ALL_MOD_EVENTS,
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
    curCategories: [],
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
    const response = await axiosInstance.get('api/events/all', config);
    console.log(response);
    dispatch({ type: GET_ALL_EVENTS, payload: response.data });
  };

  const getCategories = async () => {
    const response = await axiosInstance.get('api/events/category');
    console.log(response.data);
    dispatch({ type: GET_ALL_CATEGORIES, payload: response.data });
  };

  const getEventsByPage = async (pageNum) => {
    setLoading();
    try {
      const response = await axiosInstance.get(
        `api/events/all?page=${pageNum}`,
        config
      );
      dispatch({ type: GET_EVENTS_BY_PAGE, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const getMyEvents = async () => {
    setLoading();
    const response = await axiosInstance.get('api/events', config);
    dispatch({ type: GET_MY_EVENTS, payload: response.data });
  };

  const getSearchEvents = async (pageNum, query) => {
    setLoading();
    const response = await axiosInstance.get(
      `api/events?page=${pageNum}&search=${query}`,
      config
    );
    dispatch({ type: EVENT_SEARCH, payload: response.data });
  };

  const getBookmarkedEvents = async () => {
    setLoading();
    const response = await axiosInstance.get('api/events/bookmark', config);
    dispatch({ type: GET_BOOKMARKED_EVENTS, payload: response.data });
  };

  const postBookmarkEvent = async (id) => {
    try {
      await axiosInstance.post(`/api/events/bookmark/${id}`, config);
    } catch (err) {
      console.log(err);
    }
  };

  const getSpecificEvent = async (id) => {
    try {
      setLoading();
      const response = await axiosInstance.get(`/api/events/${id}`, config);
      dispatch({ type: GET_SPECIFIC_EVENT, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

  const setCurrent = async (id) => {
    try {
      const response = await axiosInstance.get(`/api/events/${id}`, config);
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
      await axiosInstance.delete(`/api/events/bookmark/${id}`, config);
    } catch (err) {
      console.log(err);
    }
  };

  const createEvent = async (formData) => {
    try {
      const res = await axiosInstance.post('/api/events', formData, config);

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
      const res = await axiosInstance.delete(`/api/events/${id}`, config);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const editEvent = async (id, formData) => {
    try {
      const res = await axiosInstance.put(
        `/api/events/${id}`,
        formData,
        config
      );
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

  // MODERATOR APIs
  const updateEventStatus = async (formData) => {
    try {
      const res = await axiosInstance.put(
        '/api/events/moderator',
        formData,
        config
      );
    } catch (err) {
      console.log(err);
    }
  };

  const getAllEventsMod = async () => {
    setLoading();
    const response = await axiosInstance.get('api/events/mod/all');
    dispatch({ type: GET_ALL_MOD_EVENTS, payload: response.data });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        curCategories: state.curCategories,
        event: state.event,
        myEvents: state.myEvents,
        bookmarkedEvents: state.bookmarkedEvents,
        current: state.current,
        archives: state.archives,
        isLoading: state.isLoading,
        isVisible: state.isVisible,
        currentEventId: state.currentEventId,
        createEvent,
        getCategories,
        editEvent,
        deleteEvent,
        clearCurrent,
        setCurrent,
        showChangeModal,
        closeChangeModal,
        getEvents,
        getEventsByPage,
        getMyEvents,
        getBookmarkedEvents,
        postBookmarkEvent,
        deleteBookmarkEvent,
        getSpecificEvent,
        getSearchEvents,
        updateEventStatus,
        getAllEventsMod,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
