import React, { Fragment, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Button, Skeleton, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import {
  CalendarOutlined,
  EnvironmentOutlined,
  BookOutlined,
  BookFilled,
} from '@ant-design/icons';

import EventContext from '../context/events/eventContext';

const heading = { fontWeight: '540' };

const cardHead = {
  color: 'white',
  textDecorationColor: '#d39e00',
};

const EventItem = ({ event, isLoading }) => {
  const eventContext = useContext(EventContext);

  const { postBookmarkEvent, deleteBookmarkEvent } = eventContext;

  const [isLiked, setIsLiked] = useState(false);

  const {
    id,
    name,
    about,
    street,
    city,
    country,
    start_time,
    end_time,
    categories,
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
    start_time.toString(),
    ' - ',
    end_time.toString(),
  ];

  return (
    <Card
      hoverable
      bordered
      loading={isLoading}
      style={{
        boxShadow: '0 0 10px 1px #E8E9EC',
        borderRadius: '15px',
        borderTop: '5px solid #328fce',
      }}
      // bodyStyle={{ textAlign: 'center' }}
    >
      <Skeleton loading={isLoading} active>
        <div style={heading}>
          <h3>
            <span style={{ float: 'left', paddingLeft: '7px' }}>
              {name.toUpperCase()}
            </span>
            {isLiked ? (
              <span style={{ float: 'right', paddingRight: '7px' }}>
                <BookFilled
                  style={{
                    color: '#328fce',
                    fontSize: '20px',
                  }}
                  onClick={() => {
                    deleteBookmarkEvent(id);
                    setIsLiked(!isLiked);
                  }}
                />
              </span>
            ) : (
              <span style={{ float: 'right', paddingRight: '7px' }}>
                <BookOutlined
                  style={{
                    color: '#328fce',
                    fontSize: '20px',
                  }}
                  onClick={() => {
                    postBookmarkEvent(id);
                    setIsLiked(!isLiked);
                  }}
                />
              </span>
            )}
          </h3>
        </div>
        <br />
        <br />
        <br />

        <div style={{ textAlign: 'center' }}>
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
          {categories && (
            <Meta
              description={categories.map((tag, index) => (
                <Tag
                  // color='#f5cc23'
                  key={index}
                  style={{
                    borderRadius: '32px',
                    display: 'inline-block',
                    padding: '3px 12px',
                    backgroundColor: '#ececec',
                    border: 'none',
                  }}
                >
                  {tag.toUpperCase()}
                </Tag>
              ))}
            ></Meta>
          )}
          <br />
          <br />
          <Button type='primary' shape='round'>
            <Link
              to={`/events/${id}`}
              target='_blank'
              rel='noopener noreferrer'
              style={cardHead}
            >
              Details
            </Link>
          </Button>
        </div>
      </Skeleton>
    </Card>
  );
};

export default EventItem;
