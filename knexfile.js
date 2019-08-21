module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './database/auth.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },
   production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'users',
    },
    seeds: { directory: './database/seeds' },
    
  migrations: {
      directory: './database/migrations',
      tableName: 'users'
    },
  },
    testing: {
      client: 'postgresql',
      connection: {
        host: process.env.DB_HOST,
        port: 5431,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
      },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'users',
    },
    seeds: { directory: './database/seeds' },
  },
};