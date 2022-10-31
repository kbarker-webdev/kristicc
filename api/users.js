const express = require('express');
const usersRouter = express.Router();
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');

usersRouter.post('/login', async (req, res, next) => {
	const { username, password } = req.body;

	if (!username || !password) {
		next({
			name: 'MissingCredentialsError',
			message: 'Please provide a username and password',
		});
	}
	try {
		const user = await getUser({ username, password });
		if (user) {
			const token = jwt.sign(user, process.env.JWT_SECRET, {
				expiresIn: '1w',
			});
			res.send({
				message: 'You are logged in.',
				token,
				user,
			});
		} else {
			next({
				name: 'IncorrectCredentialsError',
				message: 'Username or password is incorrect',
			});
		}
	} catch (error) {
		next(error);
	}
});

module.exports = usersRouter;