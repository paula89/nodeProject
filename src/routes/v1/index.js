const productRoutes = require('./product-routes');
const userRoutes = require('./users-routes');

module.exports = (app) => {
  app.use('v1/users', userRoutes);
};
module.exports = (app) => {
  app.use('v1/products', productRoutes);
};
