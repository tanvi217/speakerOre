import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { Card, Row, Col, Button } from 'antd';
import { Layout } from 'antd';
import PaperPlane from '../../static/paper-plane.svg';
import Plane from '../../static/plane.svg';
import Rocket from '../../static/rocket.svg';
import BreadcrumbHead from '../layout/BreadcrumbHead';

import FooterSection from '../layout/FooterSection';
import './style.css';
const { Content } = Layout;

const layoutStyle = {
  padding: '35px 45px',
  display: 'flex',
  flexFlow: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

const cardHeading = {
  fontWeight: '600',
};

const cardStyle = {
  padding: '25px',
  flex: '1',
  margin: '0 25px 0 25px',
  borderRadius: '25px',
  textAlign: 'center',
  // background: '#f5cc23',
};

const buttonStyle = {
  borderColor: '#f5cc23',
};

const imgStyle = {
  height: '50px',
  width: '50px',
  textAlign: 'center',
  alignItems: 'center',
};

const About = () => {
  return (
    <Fragment>
      <Navbar heading={'Subscribe'} />
      <BreadcrumbHead heading={['Subscribe']} />

      <Content className='site-layout' style={{ padding: '0 100px' }}>
        <Layout className='site-layout-background' style={layoutStyle}>
          <Card className='site-layout-background' style={cardStyle} hoverable>
            <img src={PaperPlane} style={imgStyle}></img>
            <br />
            <br />
            <span style={cardHeading}>MONTHLY</span>
            <br />
            <br />
            <Button type='default' shape='round' style={buttonStyle}>
              Get this!
            </Button>
          </Card>
          <Card className='site-layout-background' style={cardStyle} hoverable>
            <img src={Plane} style={imgStyle}></img>
            <br />
            <br />
            <span style={cardHeading}>QUATERLY</span>
            <br />
            <br />
            <Button type='ghost' shape='round' style={buttonStyle}>
              Get this!
            </Button>
          </Card>
          <Card className='site-layout-background' style={cardStyle} hoverable>
            <img src={Rocket} style={imgStyle}></img>
            <br />
            <br />
            <span style={cardHeading}>YEARLY</span>
            <br />
            <br />
            <Button type='ghost' shape='round' style={buttonStyle}>
              Get this!
            </Button>
          </Card>
        </Layout>
      </Content>
      <FooterSection />
    </Fragment>
  );
};

export default About;
