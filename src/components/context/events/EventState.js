import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import EventContext from './eventContext';
import eventReducer from './eventReducer';

import {
  CREATE_EVENT,
  EDIT_EVENT,
  DELETE_EVENT,
  SET_CURRENT_EVENT,
  CLEAR_CURRENT_EVENT,
} from '../types';

const EventState = (props) => {
  const initialState = {
    events: [
      {
        id: 1,
        name: 'Tomorrowland',
        about:
          'Tomorrowland takes place at recreation area "De Schorre" in Boom, Belgium. The town of Boom is situated between Antwerp & Brussels.  ',
        street: '4/2 Kilpauk',
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        postalcode: '600010',
        website: 'tomorrowland.com',
        email: 'yolo@gmail.com',
        phone: '91-1234567890',
        description:
          "Tomorrowland is a Belgian electronic dance music festival held in Boom, Belgium. Tomorrowland was first held in 2005 and has since become one of the world's largest and most notable music festivals.[2] It now stretches over 2 weekends and it usually sells out in minutes.",
        status: 'published',
        is_visible: 'true',
        categories: ['music', 'festival'],
        tags: ['concert', 'belgium'],
        start_date: '10/03/2020',
        end_date: '12/03/2020',
      },
      {
        id: 2,
        name: 'Holi Party',
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
        status: 'published',
        is_visible: 'true',
        categories: ['music', 'festival'],
        tags: ['concert', 'fun'],
        start_date: '10/03/2020',
        end_date: '12/03/2020',
      },
    ],
    archives: [
      {
        id: 1,
        name: 'Holi Party',
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
        tags: ['concert', 'fun'],
        start_date: '10/03/2020',
        end_date: '12/03/2020',
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
        start_date: '10/03/2020',
        end_date: '12/03/2020',
        status: 'declined',
      },
      {
        id: 3,
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
        start_date: '10/03/2020',
        end_date: '12/03/2020',
        status: 'accepted',
      },
      {
        id: 4,
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
        start_date: '10/03/2020',
        end_date: '12/03/2020',
        status: 'pending',
      },
    ],
    current: null,
    isLoading: false,
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  const createEvent = (event) => {
    event.id = uuidv4();
    dispatch({ type: CREATE_EVENT, payload: event });
  };

  const deleteEvent = (id) => {
    dispatch({ type: DELETE_EVENT, payload: id });
  };

  const editEvent = (event) => {
    dispatch({ type: EDIT_EVENT, payload: event });
  };

  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT_EVENT });
  };

  const setCurrent = (event) => {
    dispatch({ type: SET_CURRENT_EVENT, payload: event });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        current: state.current,
        archives: state.archives,
        isLoading: state.isLoading,
        createEvent,
        editEvent,
        deleteEvent,
        clearCurrent,
        setCurrent,
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
