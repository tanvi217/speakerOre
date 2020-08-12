import React, { Component, Fragment, useContext } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import Event_details from './event_details';
import Navbar from '../layout/Navbar';
import Confirmation from './Confirmation';
import Event_basic_details from './event_basic_details';
import { Steps, message } from 'antd';
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
// var date =
//   today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
// var time =
//   today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
// var dateTime = date + ' ' + time;
export class form extends Component {
  state = {
    step: 0,
    step_one_fields: {
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
    },
    step_two_fields: {
      about: '',
      categories: [],
      email: '',
      phone: '',
      website: '',
      description: '',
    },
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleChange1 = (input) => (e) => {
    const step_one_fields = { ...this.state.step_one_fields };
    step_one_fields[input] = e.target.value;
    this.setState({
      step_one_fields,
    });
  };

  handleChange2 = (input) => (e) => {
    const step_two_fields = { ...this.state.step_two_fields };
    step_two_fields[input] = e.target.value;
    this.setState({
      step_two_fields,
    });
  };

  handleChangeTime = (input) => (time, timeString) => {
    const step_one_fields = { ...this.state.step_one_fields };
    if (time[0]) {
      step_one_fields.start_time = timeString[0];
    }
    if (time[1]) {
      step_one_fields.end_time = timeString[1];
    }
    this.setState({
      step_one_fields,
    });
  };

  onSelectTime = (time) => {
    const step_one_fields = { ...this.state.step_one_fields };
    if (time[0]) {
      step_one_fields.start_time = time[0].toISOString();
    }
    if (time[1]) {
      step_one_fields.end_time = time[1].toISOString();
    }
    this.setState({
      step_one_fields,
    });
  };

  handleChangeTag = (input) => (new_tags) => {
    const step_two_fields = { ...this.state.step_two_fields };
    step_two_fields[input] = new_tags;
    this.setState({
      step_two_fields,
    });
  };

  render() {
    const { step, step_one_fields, step_two_fields } = this.state;
    const values3 = Object.assign(step_one_fields, step_two_fields);
    return (
      <Fragment>
        <Navbar heading={'Add Event'} />
        <BreadcrumbHead heading={['Add Event']} />
        <div style={bg}>
          <div className='form-container'>
            <div className='steps'>
              <Steps current={step}>
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>
            </div>

            <div className='steps-content'>
              {step === 0 && (
                <Event_basic_details
                  handleChange={this.handleChange1}
                  handleChangeTime={this.handleChangeTime}
                  onSelectTime={this.onSelectTime}
                  handleChangeTag={this.handleChangeTag}
                  nextStep={this.nextStep}
                  values={step_one_fields}
                />
              )}
              {step === 1 && (
                <Event_details
                  handleChange={this.handleChange2}
                  handleChangeTag={this.handleChangeTag}
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  values={step_two_fields}
                />
              )}
              {step === 2 && (
                <Confirmation values={values3} prevStep={this.prevStep} />
              )}
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default form;
