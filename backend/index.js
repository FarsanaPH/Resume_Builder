// 1. import json server library  [require keyword in backend is like import in frontend]
const jsonServer = require("json-server")

// 2. create server instance
const RBServer = jsonServer.create() //returns a Express server

// 3. set port number for the server
const PORT = 4000 || process.env.PORT    //if 4000 not available said to switch to available port environment

//middleware is a function which have the ability to break the request response cycle.(used to parse json data, handle static files, logging, CORS etc.)
// 5.middleware to parse json format
const middleware = jsonServer.defaults()   //default is a pre-defined middleware

// 6.set path to JSON data file (acts as mock DB to store data) ie,Connects the server to the JSON file that acts like a fake database.
const router = jsonServer.router("db.json")

// 7.use middleware and router
RBServer.use(middleware)
RBServer.use(router)

// 4. make server listen to the request from the frontend to resolve the request
RBServer.listen(PORT, ()=>{
    console.log(`Server running successfully at ${PORT}`);
    
}) 
