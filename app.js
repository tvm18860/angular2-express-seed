/*
 Main Express entrypoint to be used in production
*/
let express = require('express'),
    compression = require('compression'),
    path = require('path'),
    morgan = require('morgan'),
    config = require('./server/config'),
    http = require('http'),
    app = express();

// Gzip compression for performance boost
app.use(compression());

// Logs all requests to STDOUT
app.use(morgan('combined'));

// Add routes for the app to listen on
require( './server/routes' ).init( app, config );

// Serve static files
app.use( express.static(path.join( __dirname, 'public/dist' )));

// Start server
http.createServer(app).listen(config.PORT);
