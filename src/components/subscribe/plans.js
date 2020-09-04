import React, { useContext, useEffect } from 'react';
import { Skeleton } from 'antd';

import PlanItem from './PlanItem';
import SubscribeContext from '../context/subscribe/subscribeContext';

const Plans = () => {
  const subscribeContext = useContext(SubscribeContext);
  const { plans, isLoading, getSubscriptionPlans } = subscribeContext;

  useEffect(() => {
    getSubscriptionPlans();
  }, []);

  return (
    <div>
      <Skeleton loading={isLoading} active>
        {plans.length === 0 ? (
          <h4>No subscription plans.</h4>
        ) : (
          <div className='cards'>
            {plans.map((plan) => (
              <PlanItem
                key={plan.id}
                plan={plan}
                isLoading={isLoading}
              ></PlanItem>
            ))}
          </div>
        )}
      </Skeleton>
    </div>
  );
};
export default Plans;
