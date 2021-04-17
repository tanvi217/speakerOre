import React, { useContext, Fragment, useEffect, useState } from 'react';
import EventContext from '../context/events/eventContext';
import AuthContext from '../context/auth/authContext';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';
import Change from './Change';
import Background from '../../static/background.png';

import { Card, Button, Tag, Space, Spin } from 'antd';
import {
  GlobalOutlined,
  MailOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import './style.css';

// var DISCOVERY_DOCS = [
//   'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest',
// ];
// const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// var SCOPES = 'https://www.googleapis.com/auth/calendar';

const bg = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  boxShadow: 'inset 5px 10px 30px #e2e2e2',
};

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
  // backgroundColor: '#E8E9EC',
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

  const {
    event,
    getSpecificEvent,
    isLoading,
    showChangeModal,
    postBookmarkEvent,
    deleteBookmarkEvent,
  } = eventContext;

  const {
    event_id,
    name,
    about,
    street,
    city,
    state,
    country,
    postalcode,
    start_time,
    end_time,
    categories,
    description,
    phone,
    email,
    website,
  } = event;

  const { defaultMessageTemplate } = authContext;
  const { subject, body } = defaultMessageTemplate;

  const [isLiked, setIsLiked] = useState(event.isLiked);

  useEffect(() => {
    getSpecificEvent(match.params.event_id);
  }, []);

  if (isLoading) return <Spin tip='loading...'></Spin>;

  const loc =
    street + ', ' + city + ', ' + state + ', ' + country + '\n' + postalcode;

  // const getEvents = () => {
  //   async function start() {
  //     await window.gapi.client.init({
  //       apiKey: GOOGLE_API_KEY,
  //       clientId: process.env.REACT_APP_CLIENT_ID,
  //       discoveryDocs: DISCOVERY_DOCS,
  //       scope: SCOPES,
  //     });
  //     console.log(window.gapi);
  //     window.gapi.auth2.getAuthInstance().signIn();
  //     window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
  //   }
  //   window.gapi.load('client:auth2', start);
  // };

  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://apis.google.com/js/api.js';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);
  //   getEvents();
  // }, []);

  const addEventToCalender = () => {
    window.gapi.client.calendar.events.insert({
      calendarId: 'primary',
      resource: event,
    });
  };

  // const updateSigninStatus = async () => {
  //   await insertEvent();
  //   window.gapi.auth2.getAuthInstance().signOut();
  // };

  // const insertEvent = async () => {
  //   try {
  //     await window.gapi.client.calendar.events.insert({
  //       calendarId: 'primary',
  //       sendUpdates: 'all',
  //       start: {
  //         dateTime: hoursFromNow(2),
  //         timezone: 'Asia/Kolkata',
  //       },
  //       end: {
  //         dateTime: hoursFromNow(3),
  //         timezone: 'Asia/Kolkata',
  //       },
  //       summary: 'kal chutti',
  //       description: 'Tomorrow is holiday',
  //     });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const hoursFromNow = (n) =>
  //   new Date(Date.now() + n * 1000 * 60 * 60).toISOString();

  return (
    <Fragment>
      <Navbar heading={'Event - ' + name} />
      <BreadcrumbHead heading={['Events', name]} />
      <div>
        <div className='grid-style'>
          <div className='details-section'>
            <Card
              loading={isLoading}
              style={{
                boxShadow: '0 0 10px 1px #E8E9EC',
              }}
            >
              <div style={side_heading}>{name}</div>
              <div style={information}>
                <p style={text_style}>{about}</p>
              </div>
              <div style={side_heading}>EVENT TIMELINE</div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                {start_time && (
                  <div style={dates}>
                    <div style={heading}>Start Date</div>
                    {start_time.toString()}
                  </div>
                )}
                {end_time && (
                  <div style={dates}>
                    <div style={heading}>End Date</div>
                    {end_time.toString()}
                  </div>
                )}
              </div>
              <div style={side_heading}>EVENT DETAILS</div>
              <div style={information}>
                <p style={text_style}>{description}</p>
              </div>
              <div style={side_heading}>EVENT LOCATION</div>
              <div style={information}>
                <p style={text_style}>{loc}</p>
              </div>
              {categories && (
                <div style={information}>
                  {categories.map((tag, index) => (
                    <Tag
                      // color='#f5cc23'
                      key={index}
                      style={{
                        borderRadius: '32px',
                        display: 'inline-block',
                        padding: '3px 12px',
                        boxShadow: '0 0 10px 1px #E8E9EC',
                      }}
                    >
                      {tag.toUpperCase()}
                    </Tag>
                  ))}
                </div>
              )}
            </Card>
          </div>
          <div style={contact_section}>
            <Card
              bordered
              loading={isLoading}
              style={{
                textAlign: 'center',
                boxShadow: '0 0 10px 1px #E8E9EC',
              }}
            >
              <Space direction='vertical'>
                <h3 style={heading}>Contact Details</h3>

                <div>
                  <ContactsOutlined style={{ color: '#328fce' }} /> {phone}
                </div>
                {email && (
                  <div>
                    <MailOutlined style={{ color: '#328fce' }} /> {email}
                  </div>
                )}
                {website && (
                  <div>
                    <GlobalOutlined style={{ color: '#328fce' }} />
                    <a href={website}>{website}</a>
                  </div>
                )}
              </Space>
            </Card>
            <Change />
            <Card
              loading={isLoading}
              bordered='true'
              style={{
                margin: '5% 0 0 0',
                textAlign: 'center',
                boxShadow: '0 0 10px 1px #E8E9EC',
              }}
            >
              <Space direction='vertical'>
                <h3 style={heading}>Event Reminder</h3>
                <Button type='primary' onClick={addEventToCalender}>
                  Set reminder for this event
                </Button>
              </Space>
            </Card>
            <Card
              loading={isLoading}
              bordered
              style={{
                margin: '5% 0 0 0',
                textAlign: 'center',
                boxShadow: '0 0 10px 1px #E8E9EC',
              }}
            >
              <Space direction='vertical'>
                <Button
                  type='primary'
                  onClick={() => {
                    showChangeModal();
                  }}
                >
                  Suggest change for this event
                </Button>
                <Button
                  href={`mailto:${email}?subject=${subject}&body=${body}`}
                >
                  E-mail organizer
                </Button>
                {localStorage.getItem('role').toString() != 'MODERATOR' &&
                isLiked ? (
                  <Button
                    onClick={() => {
                      deleteBookmarkEvent(event_id);
                      setIsLiked(!isLiked);
                    }}
                  >
                    Remove Bookmark
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      postBookmarkEvent(event_id);
                      setIsLiked(!isLiked);
                    }}
                  >
                    Bookmark
                  </Button>
                )}
              </Space>
            </Card>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Event;
