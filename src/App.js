import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from '../src/components/pages/Profile';
import Home from '../src/components/pages/Home';
import About from '../src/components/pages/About';
import EventsPage from './components/pages/EventsPage';
import Subscribe from './components/pages/Subscribe';
import NotFound from './components/pages/NotFound';
import EventForm from './components/event_form/EventForm';
import EditEventForm from './components/event_form/EditEventForm';
import Event from './components/events/Event';
import Dashboard from './components/pages/Dashboard';
import SubscriptionDetail from './components/pages/SubscriptionDetail';

import PrivateRoute from '../src/components/routing/PrivateRoute';
import PrivateRouteDashboard from './components/routing/PrivateRouteDashboard';
// import PrivateRouteEvent from '../src/components/routing/PrivateRouteEvent';

import EventState from './components/context/events/EventState';
import AuthState from './components/context/auth/AuthState';
import EventsFilterState from './components/context/eventsFilter/EventsFilterState';
// import setAuthToken from '../src/components/utils/setAuthToken';
import SubscribeState from './components/context/subscribe/SubscribeState';
import CouponState from './components/context/coupon/CouponState';
import PaymentState from './components/context/payment/PaymentState';

// import AuthContext from './components/context/auth/authContext';

import 'antd/dist/antd.css';
import './App.css';

// if (localStorage.token) {
//   console.log('there');
//   setAuthToken(localStorage.token);
// }

const App = () => {
  return (
    <AuthState>
      <EventState>
        <SubscribeState>
          <CouponState>
            <EventsFilterState>
              <PaymentState>
                <Router>
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/subscribe' component={Subscribe} />
                    <Route
                      exact
                      path='/subscribe/:subscription_id'
                      component={SubscriptionDetail}
                    />
                    <Route exact path='/events' component={EventsPage} />
                    <Route exact path='/events/:event_id' component={Event} />
                    <Route exact path='/add_event' component={EventForm} />
                    <Route
                      exact
                      path='/edit-event/:eventId'
                      component={EditEventForm}
                    />
                    <PrivateRoute exact path='/profile' component={Profile} />
                    <PrivateRouteDashboard
                      exact
                      path='/dashboard'
                      component={Dashboard}
                    />
                    <Route component={NotFound}></Route>
                  </Switch>
                </Router>
              </PaymentState>
            </EventsFilterState>
          </CouponState>
        </SubscribeState>
      </EventState>
    </AuthState>
  );
};

export default App;
