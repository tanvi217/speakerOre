import React, { Fragment, useContext, useState } from 'react';
import Events from '../events/Events';
import Archives from '../events/Archives';
import Bookmark from '../events/Bookmark';
import MyEvents from '../events/MyEvents';
import EventSearch from '../events/EventSearch';
import EventFilter from '../events/EventFilter';
import AuthContext from '../context/auth/authContext';
import Navbar from '../layout/Navbar';
import FooterSection from '../layout/FooterSection';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Button, Radio } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Background from '../../static/blur_bg.jpg';

const { Content } = Layout;

const bg = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  boxShadow: 'inset 5px 10px 30px #e2e2e2',
};

const buttonStyle = {
  background: '#f5cc23',
  borderColor: '#f5cc23',
  color: '#ffffff',
  marginLeft: '10px',
};

const radioStyle = {
  // borderColor: '#328fce',
};

const unsubscribed = {
  padding: '1.5% 5%',
  filter: 'blur(8px)',
  WebkitFilter: 'blur(8px)',
};

const subscribed = {
  padding: '1.5% 5%',
};

const EventsPage = () => {
  const authContext = useContext(AuthContext);
  const { isSubscribed, role, show_modal } = authContext;

  const [option, setOption] = useState('all');

  const onChange = (e) => {
    setOption(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Fragment>
      <Navbar heading={'Events'} />
      <BreadcrumbHead heading={['Events']} />
      <div style={bg}>
        <Content
          className='site-layout'
          style={isSubscribed ? subscribed : unsubscribed}
        >
          <Layout
            className='site-layout-background'
            style={{ padding: '2% 3%', position: 'relative' }}
          >
            <EventFilter />

            <Content
              style={{
                padding: '0 0 0 3%',
                minHeight: 780,
                float: 'right',
              }}
            >
              <Radio.Group
                defaultValue='all'
                onChange={onChange}
                buttonStyle='solid'
              >
                <Radio.Button value='all' style={radioStyle}>
                  All
                </Radio.Button>
                <Radio.Button value='bookmarks' style={radioStyle}>
                  Bookmarks
                </Radio.Button>
                <Radio.Button value='my_events' style={radioStyle}>
                  My Events
                </Radio.Button>
                {(role === 'moderator' || role === 'RDTEAM') && (
                  <Radio.Button value='archive' style={radioStyle}>
                    Archive
                  </Radio.Button>
                )}
              </Radio.Group>
              <br />
              <br />
              <EventSearch />
              <br />
              <br />
              {option === 'all' && <Events />}
              {option === 'bookmarks' && <Bookmark />}
              {option === 'my_events' && <MyEvents />}
              {(role === 'moderator' || role === 'RDTEAM') &&
                option === 'archive' && <Archives />}
            </Content>
          </Layout>
        </Content>
        <FooterSection />
      </div>

      {!isSubscribed && (
        <div className='bg-text'>
          <Button size='large' href='/subscribe' style={buttonStyle}>
            {'Subscribe to check out events'}
          </Button>
          <br />
          <br />
          <a onClick={() => show_modal()} style={{ color: '#328fce' }}>
            Already Subscribed? Log in here
          </a>
        </div>
      )}
    </Fragment>
  );
};

export default EventsPage;
