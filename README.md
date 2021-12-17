# Interview Scheduler

## Description

Scheduler is an interviewer scheduler application for students to appointments with mentors. This is a single page application built using React and data is maintained by an API server using a PostgreSQL database. Users can view available and unavailable appointments slots for each day of the week, as well as the number of available slots remaining for each day. Users are also able to create, edit or delete appointments. Jest tests are used for integration and unit testing of the application. Cypress is used for end-to-end testing of the main application functionalities.

## Final Product

!["Screenshot of Interview Scheduler"]()

!["screenshot of Appointment Deletion Confirmation"]()

!["screenshot of Appointment Deletion Transition"]()

!["screenshot of Appointment Creation"]()

!["screenshot of Cypress Testing"]()

!["screenshot of Coverage Report"]()


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
