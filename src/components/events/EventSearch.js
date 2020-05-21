import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';

const { Search } = Input;

const EventSearch = () => {
  return (
    <Search
      size='default'
      placeholder='Search'
      onSearch={(value) => console.log(value)}
      style={{ boxShadow: '0 0 10px 1px #E8E9EC', borderRadius: '12px' }}
    />
  );
};

export default EventSearch;
