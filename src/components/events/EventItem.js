import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import {
  LikeOutlined,
  CalendarFilled,
  EnvironmentFilled,
} from '@ant-design/icons';

const cardHead = { color: '#328fce', textDecorationColor: '#d39e00' };

const EventItem = ({ event }) => {
  const {
    id,
    name,
    about,
    street,
    city,
    country,
    start_date,
    end_date,
    categories,
    tags,
  } = event;
  const location = street + ', ' + city + ', ' + country;
  const isLoading = false;
  const loc_arr = [<EnvironmentFilled />, '  ', location];
  const date_arr = [<CalendarFilled />, '  ', start_date, ' - ', end_date];

  return (
    <Card
      title={
        <Link
          to={`/event/${id}`}
          target='_blank'
          rel='noopener noreferrer'
          style={cardHead}
        >
          {name}
        </Link>
      }
      extra={<LikeOutlined />}
      hoverable
      loading={isLoading}
    >
      <Meta description={about}></Meta>
      <br />
      <Meta
        description={loc_arr.map((el) => (
          <Fragment key={el}>{el}</Fragment>
        ))}
      ></Meta>
      <br />
      <Meta
        description={date_arr.map((el) => (
          <Fragment key={el}>{el}</Fragment>
        ))}
      ></Meta>
      <br />
      <Meta
        description={categories.map((el) => (
          <Fragment key={el}>{el + ' | '}</Fragment>
        ))}
      ></Meta>
      <br />
      <div>
        {tags.map((tag, index) => (
          <Tag color='#328fce' key={index}>
            {tag.toUpperCase()}
          </Tag>
        ))}
      </div>
    </Card>
  );
};

export default EventItem;
