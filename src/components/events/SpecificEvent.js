import React, { useContext, Fragment, useEffect } from 'react';
import EventContext from '../context/events/eventContext';
import AuthContext from '../context/auth/authContext';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';
import Change from './Change';
import EventDetails from './EventDetails';
import { Card, Button, Tag, Space, Spin } from 'antd';
import {
  GlobalOutlined,
  MailOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import './style.css';
const contact_section = {
  flex: '0 0 30%',
};

const heading = {
  textDecoration: 'underline',
  textUnderlinePosition: 'under',
  color: '#606060',
  fontWeight: '550',
};

const side_heading = {
  color: '#606060',
  fontWeight: '550',
  backgroundColor: '#E8E9EC',
  padding: '1% 1%',
};

const dates = {
  color: '#606060',
  padding: '2% 2%',
  flexGrow: '1',
  margin: '1% 1%',
};

const information = {
  margin: '1% 1%',
  padding: '1% 1%',
};

const text_style = {
  fontSize: '17px',
};

const Event = ({ match }) => {
  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);

  const { event, getSpecificEvent, isLoading, showChangeModal } = eventContext;

  const { defaultMessageTemplate } = authContext;
  const { subject, body } = defaultMessageTemplate;

  useEffect(() => {
    getSpecificEvent(match.params.event_id);
  }, []);

  return (
    <Fragment>
      <Navbar heading={'Event - ' + name} />
      <BreadcrumbHead heading={['Events', name]} />
      {event ? <div>No such event</div> : <EventDetails event={event} />}
    </Fragment>
  );
};

export default Event;
