import React, { Fragment, useState } from 'react';
import Navbar from '../layout/Navbar';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';

import Users from '../dashboard/Users';
import Accepted from '../dashboard/Accepted';
import Declined from '../dashboard/Declined';
import Pending from '../dashboard/Pending';
import CouponForm from '../dashboard/CouponForm';
import Subscription from '../dashboard/Subscription';
import Coupon from '../dashboard/Coupon';
import SocialMedia from '../dashboard/SocialMediaForm';

import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  DollarOutlined,
  NotificationOutlined,
  CheckOutlined,
  CalendarOutlined,
  IssuesCloseOutlined,
  CloseOutlined,
  CreditCardOutlined,
  MoneyCollectOutlined,
  FolderAddOutlined,
} from '@ant-design/icons';

import './style.css';

const { Content, Sider } = Layout;

const Dashboard = () => {
  const [display, setDisplay] = useState(<Users />);

  return (
    <Fragment>
      <Navbar heading={'Dashboard'} />
      <BreadcrumbHead heading={['Dashboard']} />
      <Content className='dashboard'>
        <Layout style={{ padding: '2% 3%' }}>
          <Sider
            breakpoint='lg'
            theme='light'
            collapsedWidth='0'
            onBreakpoint={(broken) => {
              // console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              // console.log(collapsed, type);
            }}
            // style={{ position: 'relative' }}
          >
            <Menu
              mode='inline'
              defaultSelectedKeys={['1']}
              // breakpoint='lg'
              // style={{ position: 'absolute', width: '100%', height: '100%' }}
            >
              <Menu.Item key='users' disabled>
                Users
              </Menu.Item>
              <Menu.Item key='1' onClick={() => setDisplay(<Users />)}>
                <UserOutlined style={{ color: '#328fce' }} />
                Users
              </Menu.Item>
              <Menu.Divider></Menu.Divider>

              <Menu.Item key='events' disabled>
                Events
              </Menu.Item>
              <Menu.Item key='2' onClick={() => setDisplay(<Pending />)}>
                <IssuesCloseOutlined style={{ color: '#328fce' }} />
                Pending
              </Menu.Item>
              <Menu.Item key='3' onClick={() => setDisplay(<Accepted />)}>
                <CheckOutlined style={{ color: '#328fce' }} />
                Accepted
              </Menu.Item>
              <Menu.Item key='4' onClick={() => setDisplay(<Declined />)}>
                <CloseOutlined style={{ color: '#328fce' }} />
                Declined
              </Menu.Item>
              <Menu.Item key='5'>
                <CalendarOutlined style={{ color: '#328fce' }} />
                Archived
              </Menu.Item>
              <Menu.Divider></Menu.Divider>

              <Menu.Item key='coupons' disabled>
                Coupons
              </Menu.Item>
              <Menu.Item key='7' onClick={() => setDisplay(<Coupon />)}>
                <CreditCardOutlined style={{ color: '#328fce' }} />
                Discount Coupon
              </Menu.Item>
              <Menu.Divider></Menu.Divider>

              <Menu.Item key='subscribe' disabled>
                SUBSCRIPTION
              </Menu.Item>
              <Menu.Item key='8' onClick={() => setDisplay(<Subscription />)}>
                <MoneyCollectOutlined style={{ color: '#328fce' }} />
                Subscription Plan
              </Menu.Item>
              <Menu.Divider></Menu.Divider>

              <Menu.Item key='extras' disabled>
                Extras
              </Menu.Item>
              <Menu.Item key='9' onClick={() => setDisplay(<SocialMedia />)}>
                <NotificationOutlined style={{ color: '#328fce' }} />
                Social Media
              </Menu.Item>
              <Menu.Item key='10'>
                <FolderAddOutlined style={{ color: '#328fce' }} />
                Add Categories
              </Menu.Item>
              <Menu.Divider></Menu.Divider>

              <Menu.Item key='transactions' disabled>
                TRANSATIONS
              </Menu.Item>
              <Menu.Item key='11'>
                <DollarOutlined style={{ color: '#328fce' }} />
                Transactions
              </Menu.Item>
              <Menu.Divider></Menu.Divider>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: '0 0 0 3%',
              minHeight: 800,
              float: 'right',
            }}
          >
            {display}
          </Content>
        </Layout>
      </Content>
      <Footer />
    </Fragment>
  );
};

export default Dashboard;
