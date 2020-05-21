import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Drawer, Layout } from 'antd';

import EventsFilterContext from '../context/eventsFilter/eventsFilterContext';
import Filter from './Filter';

const { Sider } = Layout;

const EventFilter = () => {
  const eventsFilterContext = useContext(EventsFilterContext);

  const { isDrawerVisible, show_drawer, close_drawer } = eventsFilterContext;

  return (
    <Sider
      className='site-layout-background'
      theme='light'
      breakpoint='sm'
      collapsedWidth='0'
      onBreakpoint={(broken) => {
        broken ? show_drawer() : close_drawer();
        console.log('broken', broken);
      }}
      onCollapse={(collapsed, type) => {
        !collapsed ? show_drawer() : close_drawer();
        console.log('here', collapsed, type);
      }}
      className='filter'
    >
      <Filter />
    </Sider>
  );
};

export default EventFilter;
