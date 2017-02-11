/*
 Main file used in development scenarios. Express does NOT serve any static 
 files in this case. That is handled by the server started by the Angular Cli, as it has the 
 ability to handle compiling the TypeScript on the fly whenever changes are made.

 However, requests made by the frontend are proxied to here, so backend code can still be tested.
 (See here for more info https://github.com/angular/angular-cli#proxy-to-backend)
*/
let express = require('express'),
    config = require('./server/config'),
    morgan = require('morgan'),
    http = require('http'),
    app = express();

// Logs all requests to STDOUT
app.use(morgan('combined'));

// Add routes for the app to listen on
require( './server/routes' ).init( app, config );

// Start server
http.createServer(app).listen(config.PORT);
