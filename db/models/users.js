// grab our db client connection to use with our adapters
const client = require('../client');
const bcrypt = require('bcrypt');

module.exports = {
  createUser,
  getUserById,
  getUser
};


async function createUser({username, password, email, admin }) {

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const { rows: [user] } = await client.query(`
      INSERT INTO users (username, password, email, is_admin)
      VALUES($1, $2, $3, $4)
      ON CONFLICT DO NOTHING
      RETURNING id, username, email, is_admin;
    `, [username, hashedPassword, email, admin]);
    
    return user;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const {rows: [user] } = await client.query(`
    SELECT id, username, email, is_admin
    FROM users
    WHERE id=${userId}
    `);
    if (!user) {
      throw {
        name: "UserNotFoundError",
        message: "A user with that id does not exist"
      }
    }
    
    return user;
  } catch (error) {
    throw error;
  }
} 

async function getUser({ username, password }) {
  try {
    const { rows: [user] } = await client.query(`
      SELECT *
      FROM users
      WHERE username=$1;
    `, [username]);

    if (user) {
      const verify = await bcrypt.compare(password, user.password);
      delete user.password;
      if (verify) {
        return user;
      }
    } else {
      return 'invalid credentials'
    }
  } catch (error) {
    throw error;
  }
}
