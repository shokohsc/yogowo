/**
 * Coach.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  schema: true,

  attributes: {

    name: {
      type: 'string',
      required: 'true'
    },

    email: {
      type: 'email',
      required: 'true',
      unique: true // Yes unique one
    },

    users: {
      collection: 'user',
      via: 'coaches'
    },

    latitude: {
      type: 'float',
      required: 'true'
    },

    longitude: {
      type: 'float',
      required: 'true'
    }

  }
};
