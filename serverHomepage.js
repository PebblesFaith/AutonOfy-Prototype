// Create a constant ('express') in order to export an Express module
// application that connect with HTTP and middleware modules in Node.js
// back-end server for accepting HTTP requests and responses.
const express = require('express');

// Create a constant ('autonOfyApplication') object for calling the return
// ('express') object to create an Express module application.
const   autonOfyApplication = express();

// Create a constant ('path') object in order to export the Path module that provides
// utilities for working with file and directory paths.
const path = require('path');

// Create a constant ('path') object for calling the back-end server to listen to 
// clients or users messages.
const port = 3000;

// The below script requires from Node.js dependency Express Module to initializes the
// 'autonOfyApplication' object and set the 'autonOfyApplication' object to listen
// onto local port 3000.
autonOfyApplication.listen(port, function() {
    console.log('Express is listening to indexHomepage.html on port ' + port);
});

// The autonofyApplication object serve, as a static file(s) such as, css, html, images and JavaScript language
// using the 'use' middleware function in the below specified response path is executed when a
// clients or users' HTTP Request Methods route path matches the reponse path. 
autonOfyApplication.use(express.static('public'));

//
autonOfyApplication.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/indexHomepage.html'));
});

autonOfyApplication.get('/indexHomepage.html', function(request, response) {
    response.sendFile(path.join(__dirname + '/indexHomepage.html'));
});


autonOfyApplication.get('/indexAbout.html', function(request, response) {
    response.sendFile(path.join(__dirname + '/indexAbout.html'));
});

autonOfyApplication.get('/WhatWeDo.html', function(request, response) {
    response.sendFile(path.join(__dirname + '/WhatWeDo.html'));    
});

autonOfyApplication.get('/ContactUs.html', function(request, response) {
    response.sendFile(path.join(__dirname + '/ContactUs.html'));    
});




