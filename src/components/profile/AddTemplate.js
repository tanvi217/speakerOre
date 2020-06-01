import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Modal } from 'antd';

import AuthContext from '../context/auth/authContext';

const AddTemplate = () => {
  const authContext = useContext(AuthContext);

  const { isTemplateModalVisible, closeAddTemplateModal } = authContext;

  const [form] = Form.useForm();

  const onOk = () => {
    form.submit();
  };

  return (
    <Modal
      title='Create a template'
      visible={isTemplateModalVisible}
      onOk={onOk}
      onCancel={closeAddTemplateModal}
    >
      <Form form={form} layout='vertical' name='addTemplate'>
        <Form.Item
          name='subject'
          label='Subject'
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
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

export default AddTemplate;
