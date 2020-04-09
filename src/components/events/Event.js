import React, { useContext, Fragment } from 'react';
import EventContext from '../context/events/eventContext';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import FooterSection from '../layout/FooterSection';

import {
  Breadcrumb,
  PageHeader,
  Card,
  Button,
  Tag,
  Layout,
  Row,
  Descriptions,
} from 'antd';
import { HeartTwoTone } from '@ant-design/icons';
import Paragraph from 'antd/lib/skeleton/Paragraph';

import './style.css';
import DescriptionsItem from 'antd/lib/descriptions/Item';
import Meta from 'antd/lib/card/Meta';

const { Content } = Layout;

const Event = ({ match }) => {
  const eventContext = useContext(EventContext);

  const {
    params: { event_id },
  } = match;

  const { events } = eventContext;

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
      <Content
        className='site-layout'
        style={{
          padding: '0 100px',
          display: 'flex',
          alignItems: 'flex-start',
        }}
      >
        <Card
          className='site-layout-background'
          style={{
            padding: '15px',
            flex: '2',
            margin: '0 5px 0 0',
          }}
        >
          <h1>{name}</h1>
          <Meta title='Start Date' description={start_date}></Meta>
          <br />
          <Meta title='End Date' description={end_date}></Meta>
          <br />
          <Meta title='About' description={description}></Meta>
          <br />
          <Meta title='Location' description={loc}></Meta>
          <br />
          <div>
            {tags.map((tag, index) => (
              <Tag color='#d39e00' key={index}>
                {tag.toUpperCase()}
              </Tag>
            ))}
          </div>
          <br /> <br /> <br />
          <br />
          <div display='inline-block' padding='10px 10px'>
            <Button>
              <a
                href={
                  'mailto:' +
                  { email } +
                  '?subject=Testing out mailto!&body=This is only a test!'
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                Email Organiser
              </a>
            </Button>
            <Button>Add to calendar</Button>
            <Button type='primary'>Suggest Changes</Button>
          </div>
        </Card>
        <Card
          className='site-layout-background'
          title={'Contact'}
          style={{
            padding: '5px',
            flex: '1',
            margin: '0px 0 0 10px',
          }}
        >
          <Meta title='Website' description={website} />
          <br />
          <Meta title='Email' description={email} />
          <br />
          <Meta title='Phone' description={phone} />
        </Card>
      </Content>
      <FooterSection />
    </Fragment>
  );
};

export default Event;
