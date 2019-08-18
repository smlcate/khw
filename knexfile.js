// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'khw'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'khw',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
