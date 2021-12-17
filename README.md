# Interview Scheduler

## Description

Scheduler is an interviewer scheduler application for students to appointments with mentors. This is a single page application built using React and data is maintained by an API server using a PostgreSQL database. Users can view available and unavailable appointments slots for each day of the week, as well as the number of available slots remaining for each day. Users are also able to create, edit or delete appointments. Jest tests are used for integration and unit testing of the application. Cypress is used for end-to-end testing of the main application functionalities.

## Final Product

!["Screenshot of Interview Scheduler"](https://github.com/a25osman/scheduler/blob/master/docs/Interview%20Scheduler%20Home%20Page.png?raw=true)

!["screenshot of Appointment Deletion Confirmation"](https://github.com/a25osman/scheduler/blob/master/docs/Interview%20Scheduler%20Appointment%20Deletion%20Confirmation.png?raw=true)

!["screenshot of Appointment Creation"](https://github.com/a25osman/scheduler/blob/master/docs/Interview%20Scheduler%20Appointment%20Creation.png?raw=true)

!["screenshot of Cypress Testing"](https://github.com/a25osman/scheduler/blob/master/docs/Interview%20Scheduler%20Cypress%20Testing.png?raw=true)

!["screenshot of Coverage Report"](https://github.com/a25osman/scheduler/blob/master/docs/Interview%20Scheduler%20Test%20Coverage.png?raw=true)


## Setup

1. Install dependencies with `npm install`.
2. Set up and run the API by following the instructions at: `https://github.com/lighthouse-labs/scheduler-api`
3. Visit `http://localhost:8000/` in your browser to view the app!

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Cypress Test Framework

```sh
npm run cypress
```
