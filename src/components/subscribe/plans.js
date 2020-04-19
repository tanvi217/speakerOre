import React, { useContext } from 'react';
import PlanItem from './planItem';
import SubscribeContext from '../context/subscribe/subscribeContext';

const Plans = () => {
  const subscribeContext = useContext(SubscribeContext);

  const { plans, isLoading } = subscribeContext;

  if (plans.length === 0) {
    return <h4>No subscription plans.</h4>;
  }

  return (
    <div className='cards'>
      {plans.map((plan) => (
        <PlanItem key={plan.id} plan={plan} isLoading={isLoading}></PlanItem>
      ))}
    </div>
  );
};
export default Plans;
