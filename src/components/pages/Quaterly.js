import React from 'react';
import { Card, Button } from 'antd';
import Plane from '../../static/plane.svg';

import { CheckOutlined } from '@ant-design/icons';

const cardHeading = {
  fontWeight: '600',
};

const cardStyle = {
  padding: '25px',
  flex: '1',
  margin: '0 25px 0 25px',
  borderRadius: '25px',
  textAlign: 'center',
  // background: '#f5cc23',
};

const buttonStyle = {
  borderColor: '#f5cc23',
};

const imgStyle = {
  height: '50px',
  width: '50px',
  textAlign: 'center',
  alignItems: 'center',
};

const Quaterly = () => {
  return (
    <Card className='site-layout-background' style={cardStyle} hoverable>
      <img src={Plane} style={imgStyle}></img>
      <br />
      <br />
      <span style={cardHeading}>QUATERLY</span>
      <br />
      <br />
      <Button type='default' shape='round' style={buttonStyle}>
        Get this!
      </Button>
      <br />
      <br />
      <hr />
      <br />
      <ul style={{ listStyleType: 'none' }}>
        <li>
          <CheckOutlined style={{ fontSize: '16px', color: '#328fce' }} />{' '}
          Suspendisse quis est dignissim, feugiat risus vitae
        </li>
        <li>
          <CheckOutlined style={{ fontSize: '16px', color: '#328fce' }} /> Donec
          at nulla id nisl imperdiet ullamcorper.
        </li>
        <li>
          <CheckOutlined style={{ fontSize: '16px', color: '#328fce' }} /> Nulla
          id quam ornare, dictum urna sit amet, suscipit lectus.
        </li>
        <li>
          <CheckOutlined style={{ fontSize: '16px', color: '#328fce' }} />{' '}
          Phasellus in ligula id ipsum rhoncus vulputate.
        </li>
      </ul>
    </Card>
  );
};

export default Quaterly;
