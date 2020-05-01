import React, { useContext, useState } from 'react';
import 'antd/dist/antd.css';
import { Radio, Layout, DatePicker, Select, Collapse, Checkbox } from 'antd';
import EventsFilterContext from '../context/eventsFilter/eventsFilterContext';
import moment from 'moment';
import { CaretRightOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Option } = Select;
const { Panel } = Collapse;

const radioStyle = {
  display: 'block',
  // height: '30px',
  lineHeight: '30px',
  marginLeft: '1.5%',
  float: 'none',
};

const checkStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
  marginLeft: '1.5%',
  width: '100%',
};

const filterStyle = {
  textAlign: 'center',
  fontWeight: 600,
  padding: '6%',
};

const sideHeadings = {
  fontWeight: 500,
  color: '#bbbbbb',
};

const EventFilter = () => {
  const [filter, setFilter] = useState('');
  //   const [filter_date, setFilter_date] = useState('');
  const [filter_categories, setFilter_categories] = useState([]);
  const [filter_locations, setFilter_locations] = useState([]);

  const eventsFilterContext = useContext(EventsFilterContext);

  const {
    categories,
    locations,
    isDrawerVisible,
    show_drawer,
    close_drawer,
  } = eventsFilterContext;

  const children = [];
  for (let i = 0; i < categories.length; i++) {
    children.push(<Option key={categories[i]}>{categories[i]}</Option>);
  }

  const options = ['Latest', 'Bookmarked', 'Upcoming Events'];

  const onChangeRadio = (e) => {
    console.log('radio checked', e.target.value);
    setFilter(e.target.value);
  };

  const onChangeCategory = (checkedValues) => {
    console.log('Categories = ', checkedValues);
    setFilter_categories(checkedValues);
  };

  const onChangeLocation = (checkedValues) => {
    console.log('Location = ', checkedValues);
    setFilter_locations(checkedValues);
  };

  const onChangeDate = (dates, dateStrings) => {
    console.log('From: ', dates);
    console.log('From: ', dateStrings);
  };

  const disabledDate = (current) => {
    return current && current < moment().endOf('day');
  };

  return (
    <div>
      <div style={filterStyle}>FILTERS</div>
      <Collapse
        bordered={false}
        defaultActiveKey={['1', '2', '3', '4']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined
            rotate={isActive ? 90 : 0}
            style={{ color: '#328fce' }}
          />
        )}
        className='site-collapse-custom-collapse'
        style={{ position: 'absolute', width: '100%' }}
      >
        <Panel
          header='CATEGORY'
          key='1'
          className='site-collapse-custom-panel'
          style={sideHeadings}
        >
          <Select
            size='default'
            mode='multiple'
            style={{ width: '100%', padding: '5px 5px' }}
            placeholder='Select categories'
            onChange={onChangeCategory}
          >
            {children}
          </Select>
        </Panel>
        <Panel
          header='LOCATION'
          key='2'
          className='site-collapse-custom-panel'
          style={sideHeadings}
        >
          <Checkbox.Group
            options={locations}
            style={{ width: '100%', marginLeft: '1.5%' }}
            onChange={onChangeLocation}
          ></Checkbox.Group>
        </Panel>
        <Panel
          header='DATE'
          key='3'
          className='site-collapse-custom-panel'
          style={sideHeadings}
        >
          <h5>Start Date</h5>
          <DatePicker
            // size='small'
            style={{ width: '100%', marginLeft: '1.5%' }}
            disabledDate={disabledDate}
            onChange={onChangeDate}
          />
          <br />
          <br />
          <h5>End Date</h5>
          <DatePicker
            // size='small'
            style={{ width: '100%', marginLeft: '1.5%' }}
            disabledDate={disabledDate}
            onChange={onChangeDate}
          />
        </Panel>
        <Panel
          header='OTHER FILTERS'
          key='4'
          className='site-collapse-custom-panel'
          style={sideHeadings}
        >
          <Radio.Group value={filter} onChange={onChangeRadio}>
            {options.map((option) => (
              <Radio style={radioStyle} value={option} key={option}>
                {option}
              </Radio>
            ))}
          </Radio.Group>
        </Panel>
      </Collapse>
    </div>
  );
};

export default EventFilter;
