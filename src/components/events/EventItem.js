import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Button, Skeleton, Tag, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { CalendarOutlined, EnvironmentOutlined } from '@ant-design/icons';

const heading = { fontWeight: '540' };

const cardHead = { color: 'white', textDecorationColor: '#d39e00' };

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
    tags,
  } = event;
  const location = street + ', ' + city + ', ' + country;
  const loc_arr = [
    <EnvironmentOutlined style={{ color: '#328fce', fontSize: '20px' }} />,
    '  ',
    location,
  ];
  const date_arr = [
    <CalendarOutlined style={{ color: '#328fce', fontSize: '20px' }} />,
    '  ',
    start_date.toString(),
    ' - ',
    end_date.toString(),
  ];

  return (
    <Card
      hoverable
      bordered
      loading={isLoading}
      style={{ boxShadow: '0 0 10px 1px #E8E9EC', borderRadius: '15px' }}
      bodyStyle={{ textAlign: 'center' }}
    >
      <Skeleton loading={isLoading} active>
        <div style={heading}>
          <h3>{name.toUpperCase()}</h3>
        </div>
        <br />

        <div>{about}</div>
        <br />
        <Meta
          description={loc_arr.map((el) => (
            <Fragment key={el}>{el}</Fragment>
          ))}
        ></Meta>
        <br />
        <Meta
          description={date_arr.map((el, index) => (
            <Fragment key={index}>{el}</Fragment>
          ))}
        ></Meta>
        <br />
        <Meta
          description={tags.map((tag, index) => (
            <Tag
              // color='#f5cc23'
              key={index}
              style={{
                borderRadius: '32px',
                display: 'inline-block',
                // color: 'white',
                padding: '3px 12px',
                // background: '-webkit-linear-gradient(#f5cc23, #f39213)',
                boxShadow: '0 0 10px 1px #E8E9EC',
              }}
            >
              {tag.toUpperCase()}
            </Tag>
          ))}
        ></Meta>
        <br />
        <br />
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
      </Skeleton>
    </Card>
  );
};

export default EventItem;
