const {
  client,
  products,
  custom,
  users
} = require('./');

const { cups, initialUsers, customRequests, portfolio } = require('./seedData');

async function buildTables() {
  try {
    client.connect();

    console.log('dropping tables...');

    await client.query(`
      DROP TABLE IF EXISTS products;
      DROP TABLE IF EXISTS portfolio;
      DROP TABLE IF EXISTS customOrders;
      DROP TABLE IF EXISTS users;
    `)

    console.log('building tables...');

    await client.query(`
      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT NOT NULL,
        price FLOAT NOT NULL,
        img TEXT
      );
    `);

    await client.query(`
        CREATE TABLE portfolio (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255),
          description TEXT,
          img TEXT
        )
    `);

    await client.query(`
      CREATE TABLE customOrders (
        id SERIAL PRIMARY KEY,
        date VARCHAR(255),
        pid VARCHAR(255),
        color VARCHAR(255),
        usertext TEXT,
        font TEXT,
        comments TEXT,
        name TEXT,
        phone TEXT,
        email TEXT,
        complete BOOLEAN
      );
    `);

    await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        is_admin BOOLEAN DEFAULT false
      );
    `);

  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    console.log('Creating products...')
    for (const cup of cups) {
      await products.createProduct(cup)
    }
    console.log('Creating custom requests...')
    for (const req of customRequests) {
      await custom.createCustomRequest(req)
    }
    console.log('Creating portfolio...')
    for (const item of portfolio) {
      await products.addPortfolioItem(item)
    }
    console.log('Creating initial users...')
    for (const user of initialUsers) {
      await users.createUser(user)
    }
    console.log('db rebuilt')
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());
