import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Tag, Button, Divider, Skeleton } from 'antd';
import Meta from 'antd/lib/card/Meta';
import {
  LikeOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

const cardHead = { color: 'white', textDecorationColor: '#d39e00' };

const detailStyle = { background: '#ececec' };

const EventItem = ({ event, isLoading }) => {
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
  const loc_arr = [
    <EnvironmentOutlined style={{ color: '#328fce' }} />,
    '  ',
    location,
  ];
  const date_arr = [
    <CalendarOutlined style={{ color: '#328fce' }} />,
    '  ',
    start_date.toString(),
    ' - ',
    end_date,
  ];

  return (
    <Card
      hoverable
      loading={isLoading}
      actions={[
        !isLoading && (
          <Button type='primary' shape='round'>
            <Link
              to={`/event/${id}`}
              target='_blank'
              rel='noopener noreferrer'
              style={cardHead}
            >
              Details
            </Link>
          </Button>
        ),
      ]}
    >
      <Skeleton loading={isLoading} active>
        {name.toUpperCase()}
        <br />
        <br />
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
      </Skeleton>
    </Card>
  );
};

export default EventItem;
