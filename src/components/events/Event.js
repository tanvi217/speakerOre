import React, { useContext, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import EventContext from '../context/events/eventContext';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';
import Change from './Change';
import Background from '../../static/background.png';

import { Card, Button, Tag, Space } from 'antd';
import {
  HeartTwoTone,
  GlobalOutlined,
  MailOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import './style.css';

const bg = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  boxShadow: 'inset 5px 10px 30px #e2e2e2',
};

const grid_style = {
  padding: '1.5% 5%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-evenly',
  alignItems: 'stretch',
  flexWrap: 'wrap',
};

const details_section = {
  flex: '0 0 65%',
  margin: '1.5% 1%',
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

  const {
    params: { event_id },
  } = match;

  const {
    events,
    isLoading,
    isVisible,
    showChangeModal,
    closeChangeModal,
  } = eventContext;

  const {
    id,
    name,
    about,
    street,
    city,
    state,
    country,
    postalcode,
    start_date,
    end_date,
    categories,
    tags,
    description,
    phone,
    email,
    website,
  } = events[0];

  const loc =
    street + ', ' + city + ', ' + state + ', ' + country + '\n' + postalcode;

  return (
    <Fragment>
      <Navbar heading={'Event - ' + name} />
      <BreadcrumbHead heading={['Events', name]} />
      <div>
        <div style={grid_style}>
          <div style={details_section}>
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
                <div style={dates}>
                  <div style={heading}>Start Date</div>
                  {start_date.toString()}
                </div>
                <div style={dates}>
                  <div style={heading}>End Date</div>
                  {end_date.toString()}
                </div>
              </div>
              <div style={side_heading}>EVENT DETAILS</div>
              <div style={information}>
                <p style={text_style}>{description}</p>
              </div>
              <div style={side_heading}>EVENT LOCATION</div>
              <div style={information}>
                <p style={text_style}>{loc}</p>
              </div>
              <div style={information}>
                {tags.map((tag, index) => (
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
                <div>
                  <MailOutlined style={{ color: '#328fce' }} /> {email}
                </div>
                <div>
                  <GlobalOutlined style={{ color: '#328fce' }} />
                  <a href={website}>{website}</a>
                </div>
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
                <Button type='primary'>Set reminder for this event</Button>
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
                <Button type='primary'>E-mail organizer</Button>
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
