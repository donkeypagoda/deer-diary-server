'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/deerdiary_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/deerdiary_dev'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
