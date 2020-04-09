import React, { Fragment, useContext } from 'react';
import Navbar from '../layout/Navbar';
import { PageHeader } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';

import FooterSection from '../layout/FooterSection';
import AuthContext from '../context/auth/authContext';

const Profile = () => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  const { photoURL, displayName, email, phoneNumber } = user;

  return (
    <Fragment>
      <Navbar heading={'Profile'} />
      <BreadcrumbHead heading={['Profile']} />
      <PageHeader
        title={displayName}
        className='site-page-header'
        subTitle={email}
        avatar={{ src: photoURL }}
        style={{ margin: '16px 0', padding: '10px 100px' }}
      ></PageHeader>
      <FooterSection />
    </Fragment>
  );
};

export default Profile;
