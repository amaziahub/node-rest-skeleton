# we-transfer
we transfer - Book a Room - Technical Assessment

# Requirements
- node v22.2.0

# Installation
- clone project (git clone cmd)
- run `npm install` to install dependencies
- run `npm run build` to build the dist files
- run `npm run start` and open your browser to http://localhost:3000 in order to interact with the server

# API's
- GET /api/rooms - should return all rooms in the system
- GET /api/booking/available - should return all rooms that are available for booking
- POST /api/booking/book - should enable to book a room given the request is valid

# Testing the app
- Via rest API - pls use call the relevant apis pointed above
- Via test suites - run `npm run test` in order to test the api specs

# Solution approach
- approach to this solution is to get the green path working and then improve over time.
- created a skeleton with all parts needed for the backend: controllers, routes, and test files
- because of time constraint I didn't add a database layer and data saved in memory map, if I had more time I would add sqlite since scale is not the issue here
