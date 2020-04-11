import React, { Fragment, useContext } from 'react';
import Navbar from '../layout/Navbar';
import { Card, Layout, Tabs, Timeline } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';

import FooterSection from '../layout/FooterSection';
import AuthContext from '../context/auth/authContext';

const { Meta } = Card;
const { Content } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const layoutStyle = {
  padding: '35px 48px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const layout = {
  padding: '0 100px',
};

const imgStyle = {
  flex: 1,
};

const bgStyle = {
  padding: '10px 10px',
};

const tabStyle = {
  flex: 4,
  margin: '0 25px 0 25px',
  padding: '25px',
  background: 'white',
};

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const { photoURL, displayName, email, phoneNumber } = user;

  return (
    <Fragment>
      <Navbar heading={'Profile'} />
      <BreadcrumbHead heading={['Profile']} />
      <Content className='site-layout' style={layout}>
        <Layout className='site-layout-background' style={layoutStyle}>
          <div style={imgStyle}>
            <Card
              hoverable
              // style={{ width: 240 }}
              cover={<img alt='example' src={photoURL} />}
            >
              <Meta title={displayName} description={email} />
            </Card>
          </div>
          <div style={tabStyle}>
            <Tabs defaultActiveKey='1' onChange={callback}>
              <TabPane tab='Subscription' key='1'>
                <div style={bgStyle}>
                  <h4>Current Plan</h4>
                  <h4>Transaction history</h4>
                  <Timeline>
                    <Timeline.Item>
                      Create a services site 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>
                      Solve initial network problems 2015-09-01
                    </Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>
                      Network problems being solved 2015-09-01
                    </Timeline.Item>
                  </Timeline>
                </div>
              </TabPane>
              <TabPane tab='Template' key='2'>
                Create your templates
              </TabPane>
              <TabPane tab='Calendar' key='3'>
                Calendar events
              </TabPane>
            </Tabs>
          </div>
        </Layout>
      </Content>
      <FooterSection />
    </Fragment>
  );
};

export default Profile;
