// grab our db client connection to use with our adapters
const client = require('../client');

module.exports = {
  // add your database adapter fns here
  getUserById,
};



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
