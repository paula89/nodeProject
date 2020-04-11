const { countries, languages } = require('countries-list');
const { info, error } = require('../modules/mylog');

const routes = (app) => {
  app.get('/', (request, response) => {
    response.json('hola!');
  });

  app.get('/info', (request, response) => {
    info('hola info!');
    response.json('hola info!');
  });

  app.get('/countries', (request, response) => {
    console.log(`hola country! ${request.query.code}`);
    response.json(countries[request.query.code]);
  });

  app.get('/languages/:lang', (request, response) => {
    console.log(`hola lenguage! ${request.params.lang}`);
    const lang = languages[request.params.lang];
    if (lang) {
      response.json({
        status: 'OK',
        data: lang
      });
    } else {
      response.status(400)
        .json({
          status: 'NOT FOUND',
          message: `Language ${request.params.lang} not found`
        });
    }
  });

  app.get('*', (request, response) => {
    error('NOT FOUND!');
    response.status(400)
      .json('NOT FOUND!');
  });

};

module.exports.routes = routes;
