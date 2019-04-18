// const express = require('express');

// const routes = require('./routes')
// const app = express();

// //middlewares

// app.get('api/v1/provision-check', routes.handleProvCheck)

// app.listen


// const string = "abc"
// function yep() {
//     /\d/.test(myString);
// }


// function > check portability (takes in a list of numbers strings[]) 
// API - will have numbers posted to IDBTransaction. This is the endpoint. We will need to validate those numbers. 
// If it's invalid
// check port, then translate into slack then return it

var request = require("request");

var options = { method: 'POST',
  url: 'https://api.flowroute.com/v2/portorders/portability',
  headers: 
   { 'cache-control': 'no-cache,no-cache',
     'Postman-Token': 'e918c4ff-ed6d-432d-9ecb-70d498ccfa73,15c9f8ed-5971-479a-9d2d-c0865af78298',
     'Content-Type': 'application/json',
     Authorization: 'Basic OTU4MTEzMjc6S1ZWV2VaUGY5WWticlBjcDE1Z3V0Wm1BTTlKRDBkMG8=' },
  body: { numbers: [ '+12065013456', '+18002546788', '+18002255277' ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

