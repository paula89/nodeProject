var { info, error } = require('./modules/mylog');
var countries = require('countries-list');
const express = require('express');

const app = express();

app.get('/', function (request, response) {
  response.json('hola!');
});

app.get('/info', function (request, response) {
  info('hola info!');
  response.json('hola info!');
});

app.get('*', function (request, response) {
  response.status(400)
    .json('NOT FOUND!');
});
/* var server = http.createServer(function (request, response){

  var parsed = url.parse(request.url);
  console.log(parsed)
  var pathname = parsed.pathname;
  var query = queryString.parse(parsed.query);
  console.log("query", query);

   if(pathname === '/'){
     response.writeHead(200, {"Content-Type": "text/html"});
     response.write('<html><body><p>HOME<p><body><html>');
     response.end();
   } else if(pathname === '/exit'){
     response.writeHead(200, {"Content-Type": "text/html"});
     response.write('<html><body><p>BYE<p><body><html>');
     response.end();
   } else if(pathname === '/info'){
     var result = info(pathname);
     response.writeHead(200, {"Content-Type": "text/html"});
     response.write(result);
     response.end();
   } else if(pathname === '/countries'){
     response.writeHead(200, {"Content-Type": "application/json"});
     console.log(countries.countries[query.code]);
     response.write(JSON.stringify(countries.countries[query['code']]));
     response.end();
  } else if(pathname === '/error'){
     var result = error(pathname);
     response.writeHead(404, {"Content-Type": "text/html"});
     response.write(result);
     response.end();
   } else {
     var result = error(pathname);
     response.writeHead(404, {"Content-Type": "text/html"});
     response.write('<html><body><p>NOT FOUND<p><body><html>');
     response.end();
   }

});*/

app.listen(4200, function () {
  console.log('running in 4200...');
});
