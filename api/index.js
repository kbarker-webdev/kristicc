const apiRouter = require('express').Router();
const { JWT_SECRET } = process.env;
const jwt = require('jsonwebtoken');
const { users } = require('../db')


apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

// apiRouter.use((req, res, next) => {
//   console.log(req.body);
//   next();
// })

apiRouter.use(async (req, res, next) => {
  const prefix = 'Bearer ';
  const auth = req.header('Authorization');
  if (!auth) {
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);

    try {
      const user = jwt.verify(token, JWT_SECRET);
      
      if (user.id) {
        req.user = await users.getUserById(user.id);
        next();
      }
    } catch ({name, message}) {
      next({name, message})
    }
  } else {
    next({
      name: 'AuthorizationHeaderError',
      message: `Authorization token must start with ${ prefix }`
    });
  }
})

const productsRouter = require('./products');
apiRouter.use('/products', productsRouter);

const customRouter = require('./custom');
apiRouter.use('/custom', customRouter);

const userRouter = require('./users');
apiRouter.use('/users', userRouter);

module.exports = apiRouter;
