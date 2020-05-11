import React, { Component, Fragment } from 'react';
import 'antd/dist/antd.css';
import './style.css';
import Event_details from './event_details';
import Navbar from '../layout/Navbar';
import Confirmation from './confirm';
import Event_basic_details from './event_basic_details';
import { Steps, message } from 'antd';
import BreadcrumbHead from '../layout/BreadcrumbHead';
import FooterSection from '../layout/FooterSection';
import Background from '../../static/gradient_bg.jpg';

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

export class form extends Component {
  state = {
    step: 0,
    step_one_fields: {
      eventName: '',
      start_date: '',
      start_date_moment: null,
      end_date: '',
      end_date_moment: null,
      street: '',
      city: '',
      state: '',
      country: '',
      postalcode: '',
    },
    step_two_fields: { about: '', tags: [], email: '', phone: '', website: '' },
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

  handleChangeDate = (input) => (dates, dateString) => {
    const step_one_fields = { ...this.state.step_one_fields };
    if (input === 'start_date') {
      step_one_fields.start_date_moment = dates;
      step_one_fields.start_date = dateString;
      this.setState({
        step_one_fields,
      });
    } else {
      step_one_fields.end_date_moment = dates;
      step_one_fields.end_date = dateString;
      this.setState({
        step_one_fields,
      });
    }
  };

  handleChangeTag = (input) => (new_tags) => {
    const step_two_fields = { ...this.state.step_two_fields };
    step_two_fields[input] = new_tags;
    this.setState({
      step_two_fields,
    });
  };

  submit = () => {
    message.success('Processing complete!');
  };

  render() {
    const { step, step_one_fields, step_two_fields } = this.state;
    const values3 = Object.assign(step_one_fields, step_two_fields);
    return (
      <Fragment>
        <Navbar heading={'Add Event'} />
        <BreadcrumbHead heading={['Add Event']} />
        <div style={bg}>
          <div id='container' style={{ padding: '1.5% 25%' }}>
            <Steps current={step} style={{ margin: '1% 0' }}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>

            <div className='steps-content'>
              {step === 0 && (
                <Event_basic_details
                  handleChange={this.handleChange1}
                  handleChangeDate={this.handleChangeDate}
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
                <Confirmation
                  values={values3}
                  prevStep={this.prevStep}
                  submit={this.submit}
                />
              )}
            </div>
          </div>
          <FooterSection />
        </div>
      </Fragment>
    );
  }
}

export default form;
