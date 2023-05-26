# Pathzero Technical Challenge
This project is currently a Node based express API with a SQLITE database.
What it becomes is up to you - edit this README as you see fit.

Please do not spend more than a few hours on this project - you don't need to provide a complete application, we want a starting point to talk about your choices and what you know.

## Getting started
You will need node 18 with npm 9 installed

In a terminal
```sh
$ npm i # install node modules
$ npm run start # start the web server
```

In a browser

- Go to `localhost:3000/projects` to retrieve a list of projects

## Your task
We want to sell green energy projects to potential users

### Minimum acceptance criteria
- Add a UI to display the list of projects
- Let a user select a project to purchase at what quantity, and add it to their cart
- Let a user view their cart, and persist the cart on page refresh

### What we're looking for
- Some testing (unit, integration or otherwise)
- An extension of the API
- A UI with some state management

### Optional extension criteria
DO NOT IMPLEMENT ALL THESE EXTENSIONS

Please choose one or two that you feel would best exemplify your skills, or extend it in any other way you choose.
- Let a user 'purchase' their chosen projects (you do not need to provide an actual payment gateway) and view their purchased projects and quantities
- Authorize users - provide a login page, prevent unauthorized access to endpoints
- Add end to end (E2E) testing
- Extend the database to include relational data for some purpose

## Guidelines
There are no limitations on changing any of the existing code, it is meant just as a starting point. Feel free to edit the database schema, package.json, any files you want.
