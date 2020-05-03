import React, { Fragment } from 'react';
import GetCoupons from './GetCoupons';
import CouponForm from './CouponForm';

const Coupon = () => {
  return (
    <Fragment>
      <GetCoupons />
      <CouponForm />
    </Fragment>
  );
};

export default Coupon;
