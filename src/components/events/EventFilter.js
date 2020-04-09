import React, { useContext, useState } from 'react';
import 'antd/dist/antd.css';
import {
  Radio,
  Layout,
  DatePicker,
  Select,
  Collapse,
  Checkbox,
  Button,
} from 'antd';
import EventsFilterContext from '../context/eventsFilter/eventsFilterContext';
import moment from 'moment';
import { CaretRightOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { Option } = Select;
const { Panel } = Collapse;

const EventFilter = () => {
  const [filter, setFilter] = useState('');
  const [filter_date, setFilter_date] = useState('');
  const [filter_categories, setFilter_categories] = useState([]);
  const [filter_locations, setFilter_locations] = useState([]);

  const eventsFilterContext = useContext(EventsFilterContext);

  const { categories, locations, isMember } = eventsFilterContext;

  const children = [];
  for (let i = 0; i < categories.length; i++) {
    children.push(<Option key={categories[i]}>{categories[i]}</Option>);
  }

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    marginLeft: '40px',
    float: 'none',
  };

  const checkStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    marginLeft: '40px',
    width: '100%',
  };

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
    <Sider
      className='site-layout-background'
      width={300}
      style={{ height: '300px' }}
      theme='light'
    >
      <Collapse
        bordered={false}
        defaultActiveKey={['1', '2', '3', '4']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className='site-collapse-custom-collapse'
        style={{ width: '300px' }}
      >
        <Panel header='CATEGORY' key='1' className='site-collapse-custom-panel'>
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
        <Panel header='LOCATION' key='2' className='site-collapse-custom-panel'>
          <Checkbox.Group
            options={locations}
            onChange={onChangeLocation}
          ></Checkbox.Group>
        </Panel>
        <Panel header='DATE' key='3' className='site-collapse-custom-panel'>
          <h5>Start Date</h5>
          <DatePicker
            size='small'
            style={{ width: '100%', padding: '5px 5px' }}
            disabledDate={disabledDate}
            onChange={onChangeDate}
          />
          <br />
          <br />
          <h5>End Date</h5>
          <DatePicker
            size='small'
            style={{ width: '100%', padding: '5px 5px' }}
            disabledDate={disabledDate}
            onChange={onChangeDate}
          />
        </Panel>
        <Panel
          header='OTHER FILTERS'
          key='4'
          className='site-collapse-custom-panel'
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
    </Sider>
  );
};

export default EventFilter;
