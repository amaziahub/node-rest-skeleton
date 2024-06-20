# Requirements
- node v22.2.0

# Installation
- clone project (git clone cmd)
- run `npm install` to install dependencies
- run `npm run build` to build the dist files
- run `npm run start` and open your browser to http://localhost:3000 in order to interact with the server

# API's
- GET /api/rooms - should return all rooms in the system
- GET /api/bookings/available - should return all rooms that are available for booking for specific date
- POST /api/bookings/book - should enable to book a room given the request is valid
- GET /api/bookings/reset - reset bookings

### Examples
- http://localhost:3000/api/rooms
- http://localhost:3000/api/bookings/available?date=2024-06-11
- http://localhost:3000/api/bookings/book
    ```json
    {
        "roomId" : 2,
        "bookedBy" : "amazia",
        "date" : "2024-06-11"
    }
    ```
- http://localhost:3000/api/bookings/reset

# Testing the app
- Via rest API - pls use call the relevant apis pointed above
- Via test suites - run `npm run test` in order to test the api specs
