import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Modal } from 'antd';

import EventContext from '../context/events/eventContext';

const Change = () => {
  const eventContext = useContext(EventContext);

  const { isVisible, closeChangeModal } = eventContext;

  const [form] = Form.useForm();

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title='Suggestions for the event'
      visible={isVisible}
      onOk={onOk}
      onCancel={closeChangeModal}
    >
      <Form form={form} layout='vertical' name='suggestionsForm'>
        <Form.Item
          name='message'
          label='Message'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Change;
