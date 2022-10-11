# Node JS API demo

## Prerequisites

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

### Install nodemon

```bash
npm install -g nodemon
```
Refer to https://nodemon.io for more details

### Install forever

```bash
npm install forever -g
```
## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command

```bash
npm run start:local
```

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

It will restart the application. when you make changes.

### `npm start`
Runs the app in the production environment.\
It uses forever simple a CLI tool for ensuring that a given script runs continuously (i.e. forever). 

### `npm run test`
Runs all of your unit test cases.

## Adding Environment Variables

#`config/env/local.env:` for local environment

#`config/env/development.env:` for development environment

#`config/env/staging.env:` for staging environment

#`config/env/test.env:` for testing environment

#`config/env/production.env:` for production environment