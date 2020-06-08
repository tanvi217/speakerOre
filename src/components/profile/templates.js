import React, { useContext, useState } from 'react';
import AuthContext from '../context/auth/authContext';
import AddTemplate from './AddTemplate';
import { Card, Skeleton, Button } from 'antd';
import {
  EditOutlined,
  StarOutlined,
  DeleteOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';

import './style.css';

const { Meta } = Card;

const Templates = () => {
  const authContext = useContext(AuthContext);

  const { messageTemplates, loading, showAddTemplateModal } = authContext;

  return (
    <div className='message-container'>
      <div className='message-grid'>
        {messageTemplates.map((messageTemplate, i) => {
          return (
            <div className='message' key={i}>
              <Skeleton loading={loading}>
                <Card
                  hoverable
                  actions={[
                    <EditOutlined key='edit' />,
                    <DeleteOutlined key='delete' />,
                    <StarOutlined key='set'>Set as default</StarOutlined>,
                  ]}
                >
                  <Meta
                    title={'Subject'}
                    description={messageTemplate.subject}
                  />
                  <br />
                  <Meta title={'Message'} description={messageTemplate.body} />
                </Card>
              </Skeleton>
            </div>
          );
        })}
      </div>
      <div>
        <PlusCircleFilled className='add-button' />
        <AddTemplate />
      </div>
    </div>
  );
};

export default Templates;
