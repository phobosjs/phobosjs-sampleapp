'use strict';

// This is the controller pattern - takes the DS argument which is the datastore and Mutation which is the CRUD component

module.exports = function(DS) {
  return {

    // _mountedAt tells Phobos.js where to mount your resource - should be a plural word
    _mountedAt: 'users',

    // _expose tells Phobos.js which methods to open up to the world for this resource (each corresponds to an object name)
    _expose: ['index', 'show', 'new', 'update', 'delete']

  };
};
