<img src="https://user-images.githubusercontent.com/68995469/140025718-126bb88d-4f23-4ab5-98d4-4e7522dbbff6.png">
<br>

<br>

<br>

# Getting Started

This is a basic ToDo App that I developed for [**Modanisa**](https://www.modanisa.com/) Tech's Technologist Challenge. Mainly built with [React.js]() for frontend, [Express.js]() for backend. 

The application only performs the add todo item.

_This repo contains only frontend codes._

<img src="https://user-images.githubusercontent.com/68995469/140023960-a0626249-323d-4ba9-b1b0-a0299174c657.gif" height="350" >

## Installation

Use the package manager [npm](https://www.npmjs.com/) and [Node.js](https://nodejs.org/) to install.

Install the dependencies and devDependencies and start the server.


```bash
gh repo clone mbakin/modanisa-frontend
cd modanisa-frontend
npm install
```
**Aviable test scripts:**

```
"test" : "npm run test:unit && npm run test:integration ",
"test:unit": "react-scripts test __tests__/unit/*.js",
"test:integration": "react-scripts test __tests__/integration/*.js",
```

`npm run test` & `npm run test:unit` & `npm run test:integration` 

<img src="https://user-images.githubusercontent.com/68995469/140024401-3aaca7d5-2641-45c0-9bd2-c39ae971b7d7.gif" height="350">

**You can start [localhost:3000](localhost:3000)**

`npm start`

**CDC test scripts:**
If you want to test CDC, you must go to this file directory

```bash
cd modanisa-frontend
cd modanisa-frontend/cdc-test/
npm install
```
Aviable scripts for CDC:
```
"scripts": {
"test:consumer": "mocha consumer.js --timeout 20000",
"test:provider" :"node provider.tests.js"
},
```
You can run `npm run test:consumer` & `npm run test:provider`











