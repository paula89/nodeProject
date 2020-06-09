const express = require('express');
const { routes } = require('./routes');

const routesv1 = require('./routes/v1/index');


const app = express();

routesv1(app);
//routes(app);

app.listen(4200, () => {
  console.log('running in 4200...');
});
