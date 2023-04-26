const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');

app.get('/hello', (request, response) => {
  response.render('hello');
});

// const path = require('path');

// app.route('/*')
//   // eslint-disable-next-line prefer-arrow-callback, func-names
//   .get(function (request, response) {
//     // eslint-disable-next-line prefer-template
//     response.sendFile(path.resolve(app.get() + '/login/login.ejs'));
//   });

app.get('/login', (req, res) => {
  // eslint-disable-next-line no-path-concat, prefer-template
  res.sendFile(__dirname + '/views/login/login.ejs');
});

app.post('/login', urlencodedParser, (request, response) => {
  console.info('User:', request.body);
  response.render('login/login.ejs');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.debug(`Executando na porta ${PORT}`);
});
