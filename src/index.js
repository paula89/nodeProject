const express = require('express');
const { routes } = require('./routes');

const app = express();

routes(app);

app.listen(4200, () => {
  console.log('running in 4200...');
});
