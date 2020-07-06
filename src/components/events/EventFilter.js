import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import { Layout } from 'antd';

import EventsFilterContext from '../context/eventsFilter/eventsFilterContext';
import Filter from './Filter';

const { Sider } = Layout;

const EventFilter = () => {
  const { width, _ } = useWindowSize();
  const eventsFilterContext = useContext(EventsFilterContext);

  const { show_drawer, close_drawer } = eventsFilterContext;

  return (
    <Sider
      className='site-layout-background'
      width={width > 574 ? '20%' : '80%'}
      theme='light'
      breakpoint='sm'
      collapsedWidth='0'
      onBreakpoint={(broken) => {
        broken ? show_drawer() : close_drawer();
      }}
      onCollapse={(collapsed, _) => {
        !collapsed ? show_drawer() : close_drawer();
      }}
      className='filter'
      style={{ boxShadow: '0 0 10px 1px #E8E9EC' }}
    >
      <Filter />
    </Sider>
  );
};

export default EventFilter;
