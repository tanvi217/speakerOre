import React, { Fragment } from 'react';
import GetPlans from './GetPlans';
import SubscriptionForm from './SubscriptionForm';

const Subscription = () => {
  return (
    <Fragment>
      <GetPlans />
      <SubscriptionForm />
    </Fragment>
  );
};

export default Subscription;
