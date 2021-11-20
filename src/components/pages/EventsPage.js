import React, { Fragment, useContext, useState, useEffect } from 'react';
import Events from '../events/Events';
import Archives from '../events/Archives';
import Bookmark from '../events/Bookmark';
import MyEvents from '../events/MyEvents';
import EventSearch from '../events/EventSearch';
import EventFilter from '../events/EventFilter';
import AuthContext from '../context/auth/authContext';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import 'antd/dist/antd.css';
import './style.css';
import { Layout, Button, Radio } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';

const { Content } = Layout;

const buttonStyle = {
  background: '#f5cc23',
  borderColor: '#f5cc23',
  color: '#ffffff',
  position: 'relative',
};

const EventsPage = () => {
  const authContext = useContext(AuthContext);
  const { isSubscribed, role, show_modal, isAuthenticated } = authContext;

  const [option, setOption] = useState('all');
  const [isUserSubscribed, setIsUserSubscribed] = useState(isSubscribed);

  const onChange = (e) => {
    setOption(e.target.value);
  };

  useEffect(() => {
    if (
      isSubscribed === true ||
      isSubscribed === 'true' ||
      role === 'MODERATOR' ||
      role === 'RDTEAM'
    ) {
      setIsUserSubscribed(true);
    } else {
      setIsUserSubscribed(false);
    }
  }, [isSubscribed, role]);

  return (
    <Fragment>
      <Navbar heading={'Events'} />
      <BreadcrumbHead heading={['Events']} />
      <div>
        <Content
          className={isUserSubscribed === true ? 'subscribed' : 'unsubscribed'}
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
                style={{
                  // boxShadow: '0 0 10px 1px #E8E9EC',
                  borderRadius: '15px',
                  padding: '5px 5px',
                }}
              >
                <Radio.Button value='all'>All</Radio.Button>
                {role !== 'MODERATOR' && (
                  <Radio.Button value='bookmarks'>Bookmarks</Radio.Button>
                )}
                <Radio.Button value='my_events'>My Events</Radio.Button>
                {(role === 'MODERATOR' || role === 'RDTEAM') && (
                  <Radio.Button value='archive'>Archive</Radio.Button>
                )}
              </Radio.Group>
              <br />
              <br />
              {option === 'all' && isUserSubscribed && <Events />}
              {localStorage.getItem('role') !== 'MODERATOR' &&
                option === 'bookmarks' &&
                isUserSubscribed && <Bookmark />}
              {option === 'my_events' && isUserSubscribed && <MyEvents />}
              {(role === 'MODERATOR' || role === 'RDTEAM') &&
                option === 'archive' && <Archives />}
            </Content>
          </Layout>
        </Content>
        <Footer />
      </div>
      {(!isSubscribed ||
        isSubscribed === false ||
        isSubscribed === 'false') && (
        <div className='bg-text'>
          <Button href='/subscribe' style={buttonStyle}>
            {'Subscribe to check out events'}
          </Button>
          <br />
          <br />
          {!isAuthenticated && (
            <a onClick={() => show_modal()} style={{ color: '#328fce' }}>
              Already Subscribed? Log in here
            </a>
          )}
        </div>
      )}
    </Fragment>
  );
};

export default EventsPage;
