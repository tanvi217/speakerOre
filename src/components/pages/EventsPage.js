import React, { Fragment, useContext, useState } from 'react';
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
import Background from '../../static/background.png';

const { Content } = Layout;

const bg = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  boxShadow: 'inset 5px 10px 30px #E8E9EC',
};

const buttonStyle = {
  background: '#f5cc23',
  borderColor: '#f5cc23',
  color: '#ffffff',
  marginLeft: '10px',
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
        <Content className={isSubscribed ? 'subscribed' : 'unsubscribed'}>
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
                size='small'
                style={{
                  boxShadow: '0 0 10px 1px #E8E9EC',
                  borderRadius: '15px',
                  padding: '5px 5px',
                }}
              >
                <Radio.Button value='all'>All</Radio.Button>
                <Radio.Button value='bookmarks'>Bookmarks</Radio.Button>
                <Radio.Button value='my_events'>My Events</Radio.Button>
                {(role === 'moderator' || role === 'RDTEAM') && (
                  <Radio.Button value='archive'>Archive</Radio.Button>
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
        <Footer />
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
