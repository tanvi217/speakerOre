## General Info

SpeakerOre is a web application that provides event leads to speakers.
User needs to have an active membership to access event leads.
Any user can inform of events, these events need Moderator approval for making it to the web app.

## Technologies

Project is created with:

- React JS library (React Hooks for state management)
- Antd (For UI components)
- Firebase (For Authentication)

## Setup

To run this project:

```
git clone https://github.com/tanvi217/speakerOre.git
cd speakerore
npm install
npm run start
```

- For backend, please follow the instructions in [speaker-ore-api](https://github.com/BrijeshBumrela/speaker-ore-api/blob/master/README.md)
- For Authentication:
  - Please follow the first 3 steps in [Google Signin using Firebase](https://www.freakyjolly.com/reactjs-sign-in-form-using-firebase-google-authentication/)
  - Copy apiKey and authDomain from firebaseConfig in step 3 to .env.sample and move it to an .env file(REACT_APP_FIREBASE_API_KEY, REACT_APP_CLIENT_ID).
  - Follow the section ["Enable Google Authentication in Firebase"](https://www.freakyjolly.com/reactjs-sign-in-form-using-firebase-google-authentication/#:~:text=Enable%20Google%20Authentication%20in%20Firebase)

## Project Structure

```
├───components
│   ├───context             // Modules for managing global state
│   │   ├───auth
│   │   ├───coupon
│   │   ├───events
│   │   ├───eventsFilter
│   │   ├───mailing
│   │   ├───payment
│   │   └───subscribe
│   ├───dashboard           // Components for Moderator Dashboard (Route: '/dashboard')
│   ├───events              // Components for Displaying events (Route: '/events')
│   ├───event_form          // Components for Event Creation form (Route: '/add_event')
│   ├───home_sections       // Components for Landing page (Route: '/')
│   ├───layout              // Components common to all pages - Navigation Bar, Footer..
│   ├───pages               // Pages in the web-app
│   ├───profile             // Components for user profile (Route: '/profile')
│   ├───routing
│   ├───subscribe           // Components for subscription plans (Route: '/subscribe')
│   └───utils
└───static
App.js                      // Defines routes
```

## Issues, ToDo

- Home Page - Has to be made dynamic. Number of events, categories etc are static.
- Auth - Fix log in with Facebook functionality
- Events Page:
  - Fix infinite scroll
  - Fix search and call relevant APIs for filtering events
  - Check other tabs and fix as neccessary
- Event Detail Page:
  - Implement functionality to add event to calendar (Google Calendar API maybe?)
- Subscription Page - Test Razorpay flow
- Profile Page
  - Link with APIs for fetching user's current subscription plan, payment history
  - Section for Events created by user (user events needs to be displayed here as
    unsubscribed user doesn't have access to all events page)
- Moderator Dashboard
  - Link with APIs
- Event Creation Page
  - Appropriate Alert for sucessful/failed form submission
  - Redirect to User submitted events page
  - Create field for uploading images
- All pages -
  - Layout needs improvement
  - Test all possible flows, handle exceptions
  - Need to be all screen sizes compatible (Done for most pages)
  - Need to be updated with relevant website content
- _PS: This list is non-exhaustive_
