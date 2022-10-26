const apiRouter = require('express').Router();


apiRouter.get('/', (req, res, next) => {
  res.send({
    message: 'API is under construction!',
  });
});

const productsRouter = require('./products');
apiRouter.use('/products', productsRouter);

const customRouter = require('./custom');
apiRouter.use('/custom', customRouter);

module.exports = apiRouter;
