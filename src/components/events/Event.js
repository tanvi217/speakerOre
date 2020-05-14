import React, { useContext, Fragment } from 'react';
import EventContext from '../context/events/eventContext';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import FooterSection from '../layout/FooterSection';

import Background from '../../static/blueBackground.png';

import { Card, Button, Tag, Layout, Space } from 'antd';
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
};

const details_section = {
  padding: '0 2% 0 0',
  flex: '0 0 70%',
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
  backgroundColor: '#e2e2e2',
  padding: '1% 1%',
};

const dates = {
  color: '#606060',
  backgroundColor: '#E8E8E8',
  padding: '1% 1%',
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

  const { events, isLoading } = eventContext;

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
      <div style={bg}>
        <div style={grid_style}>
          <div style={details_section}>
            <Card
              loading={isLoading}
              style={{
                boxShadow: '1px 1px 1px 1px #ccc',
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
                      color: 'white',
                      padding: '3px 12px',
                      background: '-webkit-linear-gradient(#f5cc23, #f39213)',
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
                boxShadow: '1px 1px 1px 1px #ccc',
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
                  <GlobalOutlined style={{ color: '#328fce' }} /> {website}
                </div>
              </Space>
            </Card>

            <Card
              loading={isLoading}
              bordered='true'
              style={{
                margin: '5% 0 0 0',
                textAlign: 'center',
                boxShadow: '1px 1px 1px 1px #ccc',
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
                boxShadow: '1px 1px 1px 1px #ccc',
              }}
            >
              <Space direction='vertical'>
                <Button type='primary'>Suggest change for this event</Button>
                <Button type='primary'>E-mail organizer</Button>
              </Space>
            </Card>
          </div>
        </div>
        <FooterSection />
      </div>
    </Fragment>
  );
};

export default Event;
