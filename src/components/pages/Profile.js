import React, { Fragment, useContext } from 'react';
import Navbar from '../layout/Navbar';
import { Card, Layout, Tabs, Timeline, Row, Col } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';

import Footer from '../layout/Footer';
import AuthContext from '../context/auth/authContext';
import Background from '../../static/background.png';

const { Meta } = Card;
const { Content } = Layout;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

const bg = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  boxShadow: 'inset 5px 10px 30px #e2e2e2',
};

const layoutStyle = {
  padding: '2% 3%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
};

const layout = {
  padding: '1.5% 5%',
};

const imgStyle = {
  flex: 1,
};

const bgStyle = {
  padding: '1% 1%',
};

const tabStyle = {
  flex: 4,
  margin: '0 2%',
  padding: '2%',
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
      <div>
        <Content className='site-layout' style={layout}>
          <Layout className='site-layout-background' style={layoutStyle}>
            <div style={imgStyle}>
              <Card
                // style={{ width: 240 }}
                cover={<img alt={displayName} src={photoURL} />}
              >
                <Meta title={displayName} description={email} />
              </Card>
            </div>
            <div style={tabStyle}>
              <Tabs defaultActiveKey='1' onChange={callback}>
                <TabPane tab='Subscription' key='1'>
                  <div style={bgStyle}>
                    <Row>
                      <Col span={24}>
                        <Card title='Current Plan'></Card>
                      </Col>
                    </Row>
                    <Row style={{ paddingTop: '2%' }}>
                      <Col span={24}>
                        <Card title='Transaction history'>
                          <Timeline>
                            <Timeline.Item>
                              Create a services site 2015-09-01
                            </Timeline.Item>
                            <Timeline.Item>
                              Solve initial network problems 2015-09-01
                            </Timeline.Item>
                            <Timeline.Item>
                              Technical testing 2015-09-01
                            </Timeline.Item>
                            <Timeline.Item>
                              Network problems being solved 2015-09-01
                            </Timeline.Item>
                          </Timeline>
                        </Card>
                      </Col>
                    </Row>
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
        <Footer />
      </div>
    </Fragment>
  );
};

export default Profile;
