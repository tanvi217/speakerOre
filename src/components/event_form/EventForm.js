import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Steps } from 'antd';
import 'antd/dist/antd.css';

import './style.css';
import StepTwo from './StepTwo';
import Navbar from '../layout/Navbar';
import Confirmation from './Confirmation';
import StepOne from './StepOne';
import EventContext from '../context/events/eventContext';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import Footer from '../layout/Footer';
import Background from '../../static/background.png';

const { Step } = Steps;

const bg = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
  boxShadow: 'inset 5px 10px 30px #e2e2e2',
};

const steps = [
  {
    title: 'Event Preliminary Details',
    content: 'First-content',
  },
  {
    title: 'Event Details',
    content: 'Second-content',
  },
  {
    title: 'Confirmation',
    content: 'Last-content',
  },
];

var today = new Date();

const EventForm = () => {
  const eventContext = useContext(EventContext);

  const { current } = eventContext;

  const [step, setStep] = useState(0);

  useEffect(() => {
    if (current !== null) {
      console.log(current);
      const stepOneValues = (({
        name,
        start_time,
        end_time,
        street,
        city,
        state,
        country,
        postalCode,
        latitude,
        longitude,
      }) => ({
        name,
        start_time,
        end_time,
        street,
        city,
        state,
        country,
        postalCode,
        latitude,
        longitude,
      }))(current);

      const stepTwoValues = (({
        about,
        categories,
        email,
        phone,
        website,
        description,
      }) => ({ about, categories, email, phone, website, description }))(
        current
      );
      setStepOneFields(stepOneValues);
      setStepTwoFields(stepTwoValues);
    } else {
      setStepOneFields({
        name: '',
        start_time: today.toISOString(),
        end_time: today.toISOString(),
        street: '',
        city: '',
        state: '',
        country: '',
        postalCode: '',
        latitude: null,
        longitude: null,
      });

      setStepTwoFields({
        about: '',
        categories: [],
        email: '',
        phone: '',
        website: '',
        description: '',
      });
    }
  }, [current, eventContext]);

  const [stepOneFields, setStepOneFields] = useState({
    start_time: today.toISOString(),
    end_time: today.toISOString(),
    street: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
    latitude: null,
    longitude: null,
  });

  const [stepTwoFields, setStepTwoFields] = useState({
    about: '',
    categories: [],
    email: '',
    phone: '',
    website: '',
    description: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const stepOneFieldsHandleChange = (input) => (e) => {
    setStepOneFields({ ...stepOneFields, [input]: e.target.value });
    console.log(stepOneFields);
  };

  const stepTwoFieldsHandleChange = (input) => (e) => {
    setStepTwoFields({ ...stepTwoFields, [input]: e.target.value });
  };

  const handleTimeChange = (input) => (time, timeString) => {
    if (time[0]) {
      setStepOneFields({ ...stepOneFields, start_time: timeString[0] });
    }
    if (time[1]) {
      setStepOneFields({ ...stepOneFields, end_time: timeString[1] });
    }
  };

  const onSelectTime = (time) => {
    if (time[0]) {
      setStepOneFields({ ...stepOneFields, start_time: time[0].toISOString() });
    }
    if (time[1]) {
      setStepOneFields({ ...stepOneFields, end_time: time[1].toISOString() });
    }
  };

  const handleChangeCategories = (input) => (selectedCategories) => {
    console.log(selectedCategories);
    setStepTwoFields({ ...stepTwoFields, categories: selectedCategories });
  };

  const fields = Object.assign(stepOneFields, stepTwoFields);

  return (
    <Fragment>
      {current ? (
        <Navbar heading='Edit Event' />
      ) : (
        <Navbar heading='Create Event' />
      )}

      {current ? (
        <BreadcrumbHead heading={['Edit Event']} />
      ) : (
        <BreadcrumbHead heading={['Create Event']} />
      )}
      <div style={bg}>
        <div className='form-container'>
          <div className='steps'>
            <Steps current={step}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </div>
        </div>
        <div className='steps-content'>
          {step === 0 && (
            <StepOne
              handleChange={stepOneFieldsHandleChange}
              handleChangeTime={handleTimeChange}
              onSelectTime={onSelectTime}
              nextStep={nextStep}
              values={stepOneFields}
            />
          )}
          {step === 1 && (
            <StepTwo
              handleChange={stepTwoFieldsHandleChange}
              handleChangeTag={handleChangeCategories}
              nextStep={nextStep}
              prevStep={prevStep}
              values={stepTwoFields}
            />
          )}
          {step === 2 && <Confirmation values={fields} prevStep={prevStep} />}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default EventForm;
