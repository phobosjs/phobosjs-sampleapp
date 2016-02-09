'use strict';

if (!process.env.PORT) require('dotenv').load();

// Load in the library and instantiate it
var Phobos = require('phobosjs');
var phobos = new Phobos({
  port: process.env.PORT || 5000,
  dbUri: process.env.MONGO_URI,
  bearerTokenSignature: process.env.BEARER_SIGNATURE
});

// Let's add our schema and scope files
phobos.addSchema(require('./config/schema'));
phobos.addScopes(require('./config/scopes'));

phobos.initDb();

/*
  We're building a task management app here, so it makes sense to
  create two resources, which we create controllers for
*/
phobos.addController(require('./controllers/tasks'));
phobos.addController(require('./controllers/users'));

// Use the regular Express.js route API like so
phobos.server.get('/', function(req, res, next) {
  res.send({
    api: 'Phobos.js Test API',
    framework: require('phobosjs/package.json').version,
    version: require('./package.json').version
  });
});

// Let's start up our server!
phobos.start();
