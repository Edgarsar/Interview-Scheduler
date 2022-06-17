# Interview Scheduler

Interview Scheduler is a single-page application (SPA) that allows users to book technical interviews between students and mentors. Appointments can be between the hours of 12 PM and 5 PM, Monday to Friday. Each appointment has one student and one interviewer. When creating a new appointment, the user can enter any student name while the interviewer is chosen from a predefined list. The user can save the appointment and view the entire schedule of appointments on any day of the week. Appointments can also be edited or deleted. The front end of this project is built with React and makes requests to an API to fetch and store appointment data from a database.


## Final Product

### Landing page

!["screenshot of main page"](https://github.com/Edgarsar/Interview-Scheduler/blob/master/docs/main_page.png?raw=true)

### Creating a new appointment

!["screenshot of create a new appoinment"](https://github.com/Edgarsar/Interview-Scheduler/blob/master/docs/appoinment-book.png?raw=true)

### Deleting an appointment

!["screenshot of create listing page"](https://github.com/Edgarsar/Interview-Scheduler/blob/master/docs/appoinment_delete.png?raw=true)

### Error handling

!["screenshot of error handling"](https://github.com/Edgarsar/Interview-Scheduler/blob/master/docs/error-handling.png?raw=true)

### Mobile view

!["screenshot of mobile view](https://github.com/Edgarsar/Interview-Scheduler/blob/master/docs/mobile-view.png?raw=true)

### Storybook Component Tests

!["screenshot of StoryBook"](https://github.com/Edgarsar/Interview-Scheduler/blob/master/docs/storybook.png?raw=true)

### Cypress E2E Tests

!["screenshot of Cypress E2E test"](https://github.com/Edgarsar/Interview-Scheduler/blob/master/docs/cypress-e2e-test.png?raw=true)

### Jest Unit and Integration Tests

!["screenshot of search page"]()


## Dependencies

- axios
- classnames
- normalize.css
- react
- react-dom
- react-scripts


## Dev Dependencies

  - "@babel/core": "^7.4.3",
  - "@storybook/addon-actions": "^5.0.10",
  - "@storybook/addon-backgrounds": "^5.0.10",
  - "@storybook/addon-links": "^5.0.10",
  - "@storybook/addons": "^5.0.10",
  - "@storybook/react": "^5.0.10",
  - "@testing-library/jest-dom": "^4.0.0",
  - "@testing-library/react": "^8.0.7",
  - "@testing-library/react-hooks": "^3.2.1",
  - "babel-loader": "^8.0.5",
  - "node-sass": "^4.11.0"



## Getting Started
- Clone the Project from <https://github.com/Edgarsar/Interview-Scheduler>
- Install all dependencies (using the `npm install` command).
- Run the Webpack Development Server with `npm start`
- Clone the development web server from <https://github.com/Edgarsar/scheduler-api> and follow the ReadMe to run the server
