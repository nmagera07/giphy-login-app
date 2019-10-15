const pgSettings = {
  database: "df3d8p5ig4mmbn",
  host: "ec2-23-21-148-223.compute-1.amazonaws.com",
  port: 5432,
  user: "qdjrzmgcwagywz",
  password: "12b9a0b35ff73ff29c54757cd235a6bd3959cb1571889e9d84de50e7e513693e",

}

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
    client: 'pg',
    connection: pgSettings,
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
      client: 'pg',
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