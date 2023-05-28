# Pathzero Technical Challenge

This is a repo for the Pathzero technical coding task. The original README content can  be found at the bottom.

## Getting up and running

You will need node 18 with npm 9 installed

In a terminal
```sh
$ npm i # install node modules
$ npm run start # start the server
$ npm run dev # start the client
```

These are my initial rough plans for building the app. At time of writing, due to time constraints and challenges with set up configs and build tools I've only managed to complete the relevant components and screen to display a list of projects fetched from the API.

## Tech stack and libraries
- Typescript
- React
- Vite
- Mustard UI
- useSWR
- Jest
- React Testing Library
- Express
- SQLite

## Client

### Components
- Project Panel: Display project info, cost per unit and call to action to select product and add to cart.
- Cart Row: Display project info, quantity and total for each item in cart.
- Cart Summary: Display whole cart total and call to action to place order.
- Page Header: Display page  title, call to action to view cart and order.

### Views
- Projects: Display all available projects in project panels.
- Cart: Display all items in cart rows with a cart summary at the bottom/on the right hand side of the rows.

### Context and utils
- Projects Context: Load projects, set shopping cart.
- Fetch all projects from the API.
- Display cents value as a dollar string.


## Server
- API with a SQLite database.


__________

## Original README content

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
