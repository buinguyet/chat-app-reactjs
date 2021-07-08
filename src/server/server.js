
 require('dotenv').config();
 const express = require('express');
 const bodyParser= require('body-parser');
 
 const app = express(); // create express app
 
 app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
     extended: true,
 }));
 app.use(bodyParser.json()); // to support JSON-encoded bodies
 
 // start express server on port 5000
 const port = process.env.PORT || 5500;
 app.listen(port, () => {
     console.log(`server started on port ${port}`);
 });
 
 app.use((req, res, next) => {
     const err = new Error('Not Found');
     err.status = 404;
     next(err);
 });
 